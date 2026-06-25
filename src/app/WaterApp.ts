import * as THREE from 'three'
import { CameraController } from '../camera/CameraController'
import { Renderer } from '../Renderer'
import { NO_OBJECT, type SimulationObjectRegistry } from '../objects/SimulationObjectRegistry'
import { createSimulationObjects } from '../objects/createSimulationObjects'
import { Water } from '../Water'
import { InteractionController } from './InteractionController'
import { loadSceneAssets } from './loadSceneAssets'
import { SimulationControls } from './SimulationControls'

export class WaterApp {
  private readonly gravity = new THREE.Vector3(0, -4, 0)
  private readonly cameraController = new CameraController()
  private readonly scene = new THREE.Scene()
  private readonly camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)

  private webglRenderer!: THREE.WebGLRenderer
  private renderer!: Renderer
  private water!: Water
  private objects!: SimulationObjectRegistry
  private controls!: SimulationControls
  private interaction!: InteractionController
  private previousTime = performance.now()

  async init() {
    const container = document.getElementById('app')!
    const loading = document.getElementById('loading')!

    this.webglRenderer = new THREE.WebGLRenderer({ antialias: true })
    this.webglRenderer.setPixelRatio(window.devicePixelRatio)
    this.webglRenderer.setClearColor(0x000000)
    container.appendChild(this.webglRenderer.domElement)

    const { tileTexture, cubemap } = await loadSceneAssets()
    this.water = new Water(this.webglRenderer)
    this.renderer = new Renderer(this.webglRenderer, tileTexture, cubemap)
    this.scene.add(
      this.renderer.getPoolMesh(),
      this.renderer.getWaterMesh(),
      this.renderer.getWaterMeshBack()
    )
    this.renderer.markWaterOpticsHidden()

    this.objects = createSimulationObjects(this.scene, this.renderer.objectRenderResources)
    this.renderer.setWaterOptics(this.objects.optics)
    this.controls = new SimulationControls(this.objects.options, {
      onObjectChange: this.selectSimulationObject,
      onPausedChange: (paused) => {
        if (paused) this.draw()
      },
      onLightFollowsCameraChange: () => {
        if (this.controls.paused) this.draw()
      },
      onPoolShapeChange: (shape) => {
        const poolWidth = shape === 'Box' ? 1.0 : this.controls.poolWidth
        const poolHeight = shape === 'Box' ? 1.0 : this.controls.poolHeight
        const poolLength = shape === 'Box' ? 1.0 : this.controls.poolLength
        this.renderer.setPoolShape(shape, this.controls.cornerRadius, poolWidth, poolHeight, poolLength)
        if (this.objects.active) {
          const floor = this.objects.active.floorY(poolHeight)
          if (this.objects.active.position.y < floor) {
            this.objects.active.position.y = floor
            this.objects.active.velocity.y = 0
          }
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, poolHeight, poolLength)
          this.objects.active.syncPreviousPosition()
        }
        if (this.controls.paused) this.draw()
      },
      onCornerRadiusChange: (radius) => {
        this.renderer.setPoolShape(this.controls.poolShape, radius, this.controls.poolWidth, this.controls.poolHeight, this.controls.poolLength)
        if (this.controls.paused) this.draw()
      },
      onPoolWidthChange: (width) => {
        const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight
        const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength
        this.renderer.setPoolShape(this.controls.poolShape, this.controls.cornerRadius, width, poolHeight, poolLength)
        if (this.objects.active) {
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), width, poolHeight, poolLength)
          this.objects.active.syncPreviousPosition()
        }
        if (this.controls.paused) this.draw()
      },
      onPoolHeightChange: (height) => {
        const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth
        const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength
        this.renderer.setPoolShape(this.controls.poolShape, this.controls.cornerRadius, poolWidth, height, poolLength)
        if (this.objects.active) {
          const floor = this.objects.active.floorY(height)
          if (this.objects.active.position.y < floor) {
            this.objects.active.position.y = floor
            this.objects.active.velocity.y = 0
          }
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, height, poolLength)
          this.objects.active.syncPreviousPosition()
        }
        if (this.controls.paused) this.draw()
      },
      onPoolLengthChange: (length) => {
        const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth
        const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight
        this.renderer.setPoolShape(this.controls.poolShape, this.controls.cornerRadius, poolWidth, poolHeight, length)
        if (this.objects.active) {
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, poolHeight, length)
          this.objects.active.syncPreviousPosition()
        }
        if (this.controls.paused) this.draw()
      },
    })
    this.interaction = new InteractionController({
      canvas: this.webglRenderer.domElement,
      camera: this.camera,
      cameraController: this.cameraController,
      water: this.water,
      renderer: this.renderer,
      objects: this.objects,
      controls: this.controls,
      draw: this.draw,
    })
    this.interaction.connect()

    this.seedWater()
    loading.innerHTML = ''
    this.resize()
    window.addEventListener('resize', this.resize)
    this.previousTime = performance.now()
    requestAnimationFrame(this.animate)
  }

  private seedWater() {
    for (let i = 0; i < 20; i++) {
      this.water.addDrop(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        0.03,
        i % 2 === 0 ? -0.01 : 0.01
      )
    }
  }

  private animate = (time: number) => {
    if (!this.controls.paused) {
      this.update((time - this.previousTime) / 1000)
      this.draw()
    }
    this.previousTime = time
    requestAnimationFrame(this.animate)
  }

  private update(seconds: number) {
    if (seconds > 1) return

    this.interaction.update(seconds)
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth
    const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength
    this.objects.update(seconds, {
      dragging: this.interaction.draggingObject,
      physicsEnabled: this.controls.physicsEnabled,
      densityEnabled: this.controls.densityEnabled,
      density: this.controls.density,
      gravity: this.gravity,
      poolWidth,
      poolHeight,
      poolLength,
    }, this.water)

    this.water.stepSimulation()
    this.water.stepSimulation()
    this.water.updateNormals()
    this.renderer.setWaterOptics(this.objects.optics)
  }

  private draw = () => {
    this.interaction.preparePausedDraw()
    this.cameraController.apply(this.camera)
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth
    const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength
    this.objects.prepareRender(this.water, poolWidth, poolHeight, poolLength)
    this.renderer.updateObjectTextures(this.scene, this.camera, this.objects.active?.mesh ?? null)
    this.renderer.updateCaustics(this.water)
    this.renderer.renderPool(this.water)
    this.renderer.renderWater(this.water, this.camera)
    this.webglRenderer.render(this.scene, this.camera)
  }

  private resize = () => {
    const help = document.getElementById('help')!
    const width = window.innerWidth - help.clientWidth - 20
    const height = window.innerHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.webglRenderer.setSize(width, height)
    this.renderer.setSize(width, height)
    this.draw()
  }

  private selectSimulationObject = (name: string) => {
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth
    const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength
    this.objects.select(name, this.water, poolWidth, poolHeight, poolLength)
    this.renderer.setWaterOptics(this.objects.optics)
    this.interaction.cancelDrag()
    this.controls.setPhysicsAvailable(name !== NO_OBJECT)
    this.water.updateNormals()
    this.renderer.updateCaustics(this.water)
    this.draw()
  }
}
