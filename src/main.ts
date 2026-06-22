import * as THREE from 'three'
import GUI, { type Controller } from 'lil-gui'
import { Water } from './Water'
import { Renderer } from './Renderer'

let water: Water
let renderer: Renderer
let threeRenderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera

let angleX = -25
let angleY = -200.5

let useSpherePhysics = false
let center: THREE.Vector3
let oldCenter: THREE.Vector3
let velocity: THREE.Vector3
let gravity: THREE.Vector3
let radius = 0.25
let paused = false
let sphereEnabled = true

type SimulationObject = 'None' | 'Sphere'

const guiState: {
  object: SimulationObject
  gravity: boolean
  paused: boolean
} = {
  object: 'Sphere',
  gravity: false,
  paused: false,
}

let gui: GUI
let gravityController: Controller
let pausedController: Controller

const MODE_NONE = -1
const MODE_ADD_DROPS = 0
const MODE_MOVE_SPHERE = 1
const MODE_ORBIT_CAMERA = 2

let mode = MODE_NONE
let oldX = 0
let oldY = 0
let prevHit: THREE.Vector3 | null = null
let planeNormal: THREE.Vector3 | null = null
let activePointerId: number | null = null

const keys: { [key: string]: boolean } = {}

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
  // Match the original Cubemap upload path exactly. LightGL flips every face,
  // samples the encoded JPEG values directly, and uses linear filtering
  // without mipmaps.
  cubemap.flipY = true
  cubemap.colorSpace = THREE.NoColorSpace
  cubemap.minFilter = THREE.LinearFilter
  cubemap.magFilter = THREE.LinearFilter
  cubemap.generateMipmaps = false

  water = new Water(threeRenderer)
  renderer = new Renderer(threeRenderer, tileTexture, cubemap)

  scene.add(renderer.getCubeMesh())
  scene.add(renderer.getWaterMesh())
  scene.add(renderer.getWaterMeshBack())
  scene.add(renderer.getSphereMesh())

  center = new THREE.Vector3(-0.4, -0.75, 0.2)
  oldCenter = center.clone()
  velocity = new THREE.Vector3()
  gravity = new THREE.Vector3(0, -4, 0)

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

  if (sphereEnabled) {
    if (mode === MODE_MOVE_SPHERE) {
      velocity.set(0, 0, 0)
    } else if (useSpherePhysics) {
      const percentUnderWater = Math.max(0, Math.min(1, (radius - center.y) / (2 * radius)))
      velocity.add(
        gravity.clone().multiplyScalar(seconds - 1.1 * seconds * percentUnderWater)
      )
      const drag = velocity.clone().normalize().multiplyScalar(
        percentUnderWater * seconds * velocity.dot(velocity)
      )
      velocity.sub(drag)
      center.add(velocity.clone().multiplyScalar(seconds))

      if (center.y < radius - 1) {
        center.y = radius - 1
        velocity.y = Math.abs(velocity.y) * 0.7
      }
    }

    water.moveSphere(oldCenter, center, radius)
  }

  oldCenter.copy(center)

  water.stepSimulation()
  water.stepSimulation()
  water.updateNormals()
  renderer.updateCaustics(water)
}

function draw() {
  if (keys['l'] || keys['L']) {
    const yRad = (90 - angleY) * Math.PI / 180
    const xRad = -angleX * Math.PI / 180
    renderer.lightDir.set(
      Math.cos(yRad) * Math.cos(xRad),
      Math.sin(xRad),
      Math.sin(yRad) * Math.cos(xRad)
    ).normalize()
    if (paused) renderer.updateCaustics(water)
  }

  const target = new THREE.Vector3(0, -0.5, 0)

  const offset = new THREE.Vector3(0, 0, 4)
  offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), angleX * Math.PI / 180)
  offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angleY * Math.PI / 180)

  camera.position.copy(target).add(offset)
  camera.up.set(0, 1, 0)
  camera.lookAt(target)

  renderer.sphereCenter.copy(center)
  renderer.sphereRadius = radius
  renderer.sphereEnabled = sphereEnabled

  renderer.renderCube(water)
  renderer.renderWater(water, camera)
  renderer.renderSphere(water)

  threeRenderer.render(scene, camera)
}

function getRay(x: number, y: number): { origin: THREE.Vector3; direction: THREE.Vector3 } {
  const rect = threeRenderer.domElement.getBoundingClientRect()
  const mouse = new THREE.Vector2(
    ((x - rect.left) / rect.width) * 2 - 1,
    -((y - rect.top) / rect.height) * 2 + 1
  )

  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(mouse, camera)

  return {
    origin: raycaster.ray.origin.clone(),
    direction: raycaster.ray.direction.clone(),
  }
}

function hitTestSphere(
  origin: THREE.Vector3,
  direction: THREE.Vector3,
  sphereCenter: THREE.Vector3,
  sphereRadius: number
): { hit: THREE.Vector3 } | null {
  const oc = origin.clone().sub(sphereCenter)
  const a = direction.dot(direction)
  const b = 2 * oc.dot(direction)
  const c = oc.dot(oc) - sphereRadius * sphereRadius
  const discriminant = b * b - 4 * a * c

  if (discriminant > 0) {
    const t = (-b - Math.sqrt(discriminant)) / (2 * a)
    if (t > 0) {
      return { hit: origin.clone().add(direction.clone().multiplyScalar(t)) }
    }
  }
  return null
}

function startDrag(x: number, y: number) {
  oldX = x
  oldY = y

  const { origin, direction } = getRay(x, y)

  const t = -origin.y / direction.y
  const pointOnPlane = origin.clone().add(direction.clone().multiplyScalar(t))

  const sphereHit = sphereEnabled
    ? hitTestSphere(origin, direction, center, radius)
    : null

  if (sphereHit) {
    mode = MODE_MOVE_SPHERE
    prevHit = sphereHit.hit

    const lookDir = new THREE.Vector3(0, 0, -1)
    lookDir.applyQuaternion(camera.quaternion)
    planeNormal = lookDir.negate()
  } else if (Math.abs(pointOnPlane.x) < 1 && Math.abs(pointOnPlane.z) < 1) {
    mode = MODE_ADD_DROPS
    duringDrag(x, y)
  } else {
    mode = MODE_ORBIT_CAMERA
  }
}

function duringDrag(x: number, y: number) {
  switch (mode) {
    case MODE_ADD_DROPS: {
      const { origin, direction } = getRay(x, y)
      const t = -origin.y / direction.y
      const pointOnPlane = origin.clone().add(direction.clone().multiplyScalar(t))
      water.addDrop(pointOnPlane.x, pointOnPlane.z, 0.03, 0.01)
      if (paused) {
        water.updateNormals()
        renderer.updateCaustics(water)
      }
      break
    }
    case MODE_MOVE_SPHERE: {
      if (!prevHit || !planeNormal) break
      const { origin, direction } = getRay(x, y)
      const t = -planeNormal.dot(origin.clone().sub(prevHit)) / planeNormal.dot(direction)
      const nextHit = origin.clone().add(direction.clone().multiplyScalar(t))
      center.add(nextHit.clone().sub(prevHit))
      center.x = Math.max(radius - 1, Math.min(1 - radius, center.x))
      center.y = Math.max(radius - 1, Math.min(10, center.y))
      center.z = Math.max(radius - 1, Math.min(1 - radius, center.z))
      prevHit = nextHit
      if (paused) renderer.updateCaustics(water)
      break
    }
    case MODE_ORBIT_CAMERA: {
      angleY -= x - oldX
      angleX -= y - oldY
      angleX = Math.max(-89.999, Math.min(89.999, angleX))
      break
    }
  }
  oldX = x
  oldY = y
  if (paused) draw()
}

function stopDrag() {
  mode = MODE_NONE
}

function onPointerDown(e: PointerEvent) {
  if (activePointerId !== null || !e.isPrimary) return
  if (e.pointerType === 'mouse' && e.button !== 0) return

  e.preventDefault()
  activePointerId = e.pointerId
  threeRenderer.domElement.setPointerCapture(e.pointerId)
  startDrag(e.clientX, e.clientY)
}

function onPointerMove(e: PointerEvent) {
  if (e.pointerId !== activePointerId) return

  e.preventDefault()
  duringDrag(e.clientX, e.clientY)
}

function onPointerEnd(e: PointerEvent) {
  if (e.pointerId !== activePointerId) return

  activePointerId = null
  stopDrag()
  if (threeRenderer.domElement.hasPointerCapture(e.pointerId)) {
    threeRenderer.domElement.releasePointerCapture(e.pointerId)
  }
}

function onLostPointerCapture(e: PointerEvent) {
  if (e.pointerId !== activePointerId) return

  activePointerId = null
  stopDrag()
}

function onKeyDown(e: KeyboardEvent) {
  keys[e.key] = true
  if (e.key === ' ') {
    paused = !paused
    guiState.paused = paused
    pausedController.updateDisplay()
  } else if (e.key === 'g' || e.key === 'G') {
    useSpherePhysics = !useSpherePhysics
    guiState.gravity = useSpherePhysics
    gravityController.updateDisplay()
  } else if ((e.key === 'l' || e.key === 'L') && paused) draw()
}

function onKeyUp(e: KeyboardEvent) {
  keys[e.key] = false
}

function getDisabledSphereCenter(): THREE.Vector3 {
  return new THREE.Vector3(center.x, 10, center.z)
}

function setSimulationObject(object: SimulationObject) {
  const enableSphere = object === 'Sphere'
  if (enableSphere === sphereEnabled) return

  const disabledCenter = getDisabledSphereCenter()
  if (enableSphere) {
    water.moveSphere(disabledCenter, center, radius)
  } else {
    water.moveSphere(center, disabledCenter, radius)
    velocity.set(0, 0, 0)
    mode = MODE_NONE
  }

  sphereEnabled = enableSphere
  renderer.getSphereMesh().visible = sphereEnabled
  renderer.sphereCenter.copy(center)
  renderer.sphereEnabled = sphereEnabled
  gravityController.disable(!sphereEnabled)
  oldCenter.copy(center)

  water.updateNormals()
  renderer.updateCaustics(water)
  draw()
}

function setupGUI() {
  gui = new GUI({ title: 'Simulation' })
  gui.domElement.style.left = '0'
  gui.domElement.style.right = 'auto'

  gui.add(guiState, 'object', ['None', 'Sphere'])
    .name('Object')
    .onChange((object: SimulationObject) => setSimulationObject(object))

  gravityController = gui.add(guiState, 'gravity')
    .name('Gravity')
    .onChange((enabled: boolean) => {
      useSpherePhysics = enabled
    })

  pausedController = gui.add(guiState, 'paused')
    .name('Paused')
    .onChange((enabled: boolean) => {
      paused = enabled
      if (paused) draw()
    })
}

init()
