import * as THREE from 'three'
import GUI, { type Controller } from 'lil-gui'
import { CameraController } from './camera/CameraController'
import { Renderer } from './Renderer'
import { NO_OBJECT, SimulationObjectRegistry } from './objects/SimulationObjectRegistry'
import { createSimulationObjects } from './objects/createSimulationObjects'
import { Water } from './Water'

let water: Water
let renderer: Renderer
let threeRenderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let objects: SimulationObjectRegistry

const cameraController = new CameraController()
const gravity = new THREE.Vector3(0, -4, 0)
let useObjectPhysics = false
let paused = false

const guiState: { object: string; gravity: boolean; paused: boolean } = {
  object: 'Sphere',
  gravity: false,
  paused: false,
}

let gui: GUI
let gravityController: Controller
let pausedController: Controller

const MODE_NONE = -1
const MODE_ADD_DROPS = 0
const MODE_MOVE_OBJECT = 1
const MODE_ORBIT_CAMERA = 2

let mode = MODE_NONE
let prevHit: THREE.Vector3 | null = null
let planeNormal: THREE.Vector3 | null = null
let activePointerId: number | null = null
const touchPointers = new Map<number, THREE.Vector2>()
let pinchDistance: number | null = null
let pinching = false

const keys: Record<string, boolean> = {}

async function init() {
  const container = document.getElementById('app')!
  const loading = document.getElementById('loading')!

  threeRenderer = new THREE.WebGLRenderer({ antialias: true })
  threeRenderer.setPixelRatio(window.devicePixelRatio)
  threeRenderer.setClearColor(0x000000)
  container.appendChild(threeRenderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)

  const textureLoader = new THREE.TextureLoader()
  const cubeTextureLoader = new THREE.CubeTextureLoader()
  const tileTexture = await textureLoader.loadAsync('/tiles.jpg')
  tileTexture.wrapS = THREE.RepeatWrapping
  tileTexture.wrapT = THREE.RepeatWrapping
  tileTexture.minFilter = THREE.LinearMipmapLinearFilter
  tileTexture.generateMipmaps = true

  const cubemap = await cubeTextureLoader.loadAsync([
    '/xpos.jpg',
    '/xneg.jpg',
    '/ypos.jpg',
    '/ypos.jpg',
    '/zpos.jpg',
    '/zneg.jpg',
  ])
  cubemap.flipY = true
  cubemap.colorSpace = THREE.NoColorSpace
  cubemap.minFilter = THREE.LinearFilter
  cubemap.magFilter = THREE.LinearFilter
  cubemap.generateMipmaps = false

  water = new Water(threeRenderer)
  renderer = new Renderer(threeRenderer, tileTexture, cubemap)
  scene.add(renderer.getPoolMesh(), renderer.getWaterMesh(), renderer.getWaterMeshBack())

  objects = createSimulationObjects(scene, renderer)
  objects.syncRenderer(renderer)

  setupGUI()

  for (let i = 0; i < 20; i++) {
    water.addDrop(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      0.03,
      i % 2 === 0 ? -0.01 : 0.01
    )
  }

  loading.innerHTML = ''
  onResize()
  window.addEventListener('resize', onResize)

  threeRenderer.domElement.style.touchAction = 'none'
  threeRenderer.domElement.addEventListener('pointerdown', onPointerDown)
  threeRenderer.domElement.addEventListener('pointermove', onPointerMove)
  threeRenderer.domElement.addEventListener('pointerup', onPointerEnd)
  threeRenderer.domElement.addEventListener('pointercancel', onPointerEnd)
  threeRenderer.domElement.addEventListener('lostpointercapture', onLostPointerCapture)
  threeRenderer.domElement.addEventListener('wheel', onWheel, { passive: false })
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)

  let prevTime = performance.now()
  function animate() {
    const nextTime = performance.now()
    if (!paused) {
      update((nextTime - prevTime) / 1000)
      draw()
    }
    prevTime = nextTime
    requestAnimationFrame(animate)
  }
  requestAnimationFrame(animate)
}

function onResize() {
  const help = document.getElementById('help')!
  const width = window.innerWidth - help.clientWidth - 20
  const height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  threeRenderer.setSize(width, height)
  draw()
}

function update(seconds: number) {
  if (seconds > 1) return

  cameraController.update(seconds)
  objects.update(seconds, {
    dragging: mode === MODE_MOVE_OBJECT,
    physicsEnabled: useObjectPhysics,
    gravity,
  }, water)

  water.stepSimulation()
  water.stepSimulation()
  water.updateNormals()
  objects.syncRenderer(renderer)
  renderer.updateCaustics(water)
}

function draw() {
  if (keys.l || keys.L) {
    cameraController.getLightDirection(renderer.lightDir)
    if (paused) renderer.updateCaustics(water)
  }

  cameraController.apply(camera)
  renderer.renderPool(water)
  renderer.renderWater(water, camera)
  objects.prepareRender(renderer, water)
  threeRenderer.render(scene, camera)
}

function getRay(x: number, y: number) {
  const rect = threeRenderer.domElement.getBoundingClientRect()
  const pointer = new THREE.Vector2(
    ((x - rect.left) / rect.width) * 2 - 1,
    -((y - rect.top) / rect.height) * 2 + 1
  )
  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(pointer, camera)
  return {
    origin: raycaster.ray.origin.clone(),
    direction: raycaster.ray.direction.clone(),
  }
}

function startDrag(x: number, y: number, time: number) {
  cameraController.stopInertia()
  const { origin, direction } = getRay(x, y)
  const t = -origin.y / direction.y
  const pointOnPlane = origin.clone().addScaledVector(direction, t)
  const objectHit = objects.active?.hitTest(origin, direction) ?? null

  if (objectHit) {
    mode = MODE_MOVE_OBJECT
    prevHit = objectHit
    planeNormal = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).negate()
  } else if (Math.abs(pointOnPlane.x) < 1 && Math.abs(pointOnPlane.z) < 1) {
    mode = MODE_ADD_DROPS
    duringDrag(x, y, time)
  } else {
    mode = MODE_ORBIT_CAMERA
    cameraController.beginOrbit(x, y, time)
  }
}

function duringDrag(x: number, y: number, time: number) {
  switch (mode) {
    case MODE_ADD_DROPS: {
      const { origin, direction } = getRay(x, y)
      const pointOnPlane = origin.clone().addScaledVector(direction, -origin.y / direction.y)
      water.addDrop(pointOnPlane.x, pointOnPlane.z, 0.03, 0.01)
      if (paused) {
        water.updateNormals()
        renderer.updateCaustics(water)
      }
      break
    }
    case MODE_MOVE_OBJECT: {
      if (!prevHit || !planeNormal || !objects.active) break
      const { origin, direction } = getRay(x, y)
      const distance = -planeNormal.dot(origin.clone().sub(prevHit)) / planeNormal.dot(direction)
      const nextHit = origin.clone().addScaledVector(direction, distance)
      objects.active.moveBy(nextHit.clone().sub(prevHit))
      objects.syncRenderer(renderer)
      prevHit = nextHit
      if (paused) renderer.updateCaustics(water)
      break
    }
    case MODE_ORBIT_CAMERA:
      cameraController.orbitTo(x, y, time)
      break
  }
  if (paused) draw()
}

function stopDrag() {
  mode = MODE_NONE
  prevHit = null
  planeNormal = null
}

function onPointerDown(e: PointerEvent) {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  if (e.pointerType !== 'touch' && (activePointerId !== null || !e.isPrimary)) return
  if (e.pointerType === 'touch' && touchPointers.size >= 2) return

  e.preventDefault()
  threeRenderer.domElement.setPointerCapture(e.pointerId)

  if (e.pointerType === 'touch') {
    touchPointers.set(e.pointerId, new THREE.Vector2(e.clientX, e.clientY))
    if (touchPointers.size === 2) {
      pinching = true
      pinchDistance = getPinchDistance()
      activePointerId = null
      cameraController.stopInertia()
      stopDrag()
      return
    }
    if (pinching || touchPointers.size > 1) return
  } else if (activePointerId !== null) {
    return
  }

  activePointerId = e.pointerId
  startDrag(e.clientX, e.clientY, e.timeStamp)
}

function onPointerMove(e: PointerEvent) {
  if (e.pointerType === 'touch' && touchPointers.has(e.pointerId)) {
    touchPointers.get(e.pointerId)!.set(e.clientX, e.clientY)
    if (pinching && pinchDistance !== null && touchPointers.size >= 2) {
      e.preventDefault()
      const nextDistance = getPinchDistance()
      if (nextDistance > 0) {
        cameraController.zoomByScale(pinchDistance / nextDistance)
        pinchDistance = nextDistance
        if (paused) draw()
      }
      return
    }
  }
  if (e.pointerId !== activePointerId) return
  e.preventDefault()
  duringDrag(e.clientX, e.clientY, e.timeStamp)
}

function onPointerEnd(e: PointerEvent) {
  finishPointer(e, true)
}

function onLostPointerCapture(e: PointerEvent) {
  finishPointer(e, false)
}

function finishPointer(e: PointerEvent, releaseCapture: boolean) {
  const wasActivePointer = e.pointerId === activePointerId
  if (e.pointerType === 'touch') {
    touchPointers.delete(e.pointerId)
    if (pinching) {
      if (touchPointers.size < 2) pinchDistance = null
      if (touchPointers.size === 0) pinching = false
    }
  }

  if (wasActivePointer) {
    if (mode === MODE_ORBIT_CAMERA) cameraController.endOrbit(e.timeStamp)
    activePointerId = null
    stopDrag()
  }
  if (releaseCapture && threeRenderer.domElement.hasPointerCapture(e.pointerId)) {
    threeRenderer.domElement.releasePointerCapture(e.pointerId)
  }
}

function onWheel(e: WheelEvent) {
  e.preventDefault()
  cameraController.zoomByWheel(e.deltaY)
  if (paused) draw()
}

function getPinchDistance() {
  const [first, second] = Array.from(touchPointers.values())
  return first.distanceTo(second)
}

function onKeyDown(e: KeyboardEvent) {
  keys[e.key] = true
  if (e.key === ' ') {
    paused = !paused
    guiState.paused = paused
    pausedController.updateDisplay()
  } else if (e.key === 'g' || e.key === 'G') {
    useObjectPhysics = !useObjectPhysics
    guiState.gravity = useObjectPhysics
    gravityController.updateDisplay()
  } else if ((e.key === 'l' || e.key === 'L') && paused) {
    draw()
  }
}

function onKeyUp(e: KeyboardEvent) {
  keys[e.key] = false
}

function setSimulationObject(name: string) {
  objects.select(name, water, renderer)
  mode = MODE_NONE
  gravityController.disable(name === NO_OBJECT)
  water.updateNormals()
  renderer.updateCaustics(water)
  draw()
}

function setupGUI() {
  gui = new GUI({ title: 'Simulation' })
  gui.domElement.style.left = '0'
  gui.domElement.style.right = 'auto'

  gui.add(guiState, 'object', objects.options)
    .name('Object')
    .onChange((name: string) => setSimulationObject(name))

  gravityController = gui.add(guiState, 'gravity')
    .name('Gravity')
    .onChange((enabled: boolean) => {
      useObjectPhysics = enabled
    })

  pausedController = gui.add(guiState, 'paused')
    .name('Paused')
    .onChange((enabled: boolean) => {
      paused = enabled
      if (paused) draw()
    })
}

init()
