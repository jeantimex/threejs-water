import GUI, { type Controller } from 'lil-gui'

export interface SimulationControlCallbacks {
  onObjectChange(name: string): void
  onPausedChange(paused: boolean): void
  onPoolShapeChange(shape: 'Box' | 'Cylinder' | 'Morphed'): void
}

export class SimulationControls {
  paused = false
  physicsEnabled = false
  densityEnabled = false
  density = 0.9

  private readonly state = {
    object: 'Sphere',
    gravity: false,
    densityEnabled: false,
    density: 0.9,
    paused: false,
    poolShape: 'Box',
  }
  private readonly gravityController: Controller
  private readonly densityEnabledController: Controller
  private readonly densityController: Controller
  private readonly pausedController: Controller
  private physicsAvailable = true

  constructor(
    objectOptions: string[],
    private readonly callbacks: SimulationControlCallbacks
  ) {
    const gui = new GUI({ title: 'Settings' })
    gui.domElement.style.left = '0'
    gui.domElement.style.right = 'auto'

    const objectFolder = gui.addFolder('Object')
    objectFolder.open()

    objectFolder.add(this.state, 'object', objectOptions)
      .name('Object')
      .onChange((name: string) => callbacks.onObjectChange(name))

    this.gravityController = objectFolder.add(this.state, 'gravity')
      .name('Toggle Gravity')
      .onChange((enabled: boolean) => {
        this.physicsEnabled = enabled
      })

    this.densityEnabledController = objectFolder.add(this.state, 'densityEnabled')
      .name('Enable Density')
      .onChange((enabled: boolean) => {
        this.densityEnabled = enabled
        this.updateDensityController()
      })

    this.densityController = objectFolder.add(this.state, 'density', 0.2, 2.0, 0.01)
      .name('Density')
      .onChange((density: number) => {
        this.density = density
      })

    const sceneFolder = gui.addFolder('Scene')
    sceneFolder.open()

    sceneFolder.add(this.state, 'poolShape', ['Box', 'Cylinder', 'Morphed'])
      .name('Pool Shape')
      .onChange((shape: 'Box' | 'Cylinder' | 'Morphed') => {
        callbacks.onPoolShapeChange(shape)
      })

    this.pausedController = sceneFolder.add(this.state, 'paused')
      .name('Paused')
      .onChange((paused: boolean) => {
        this.paused = paused
        callbacks.onPausedChange(paused)
      })

    this.updateDensityController()
  }

  togglePaused() {
    this.paused = !this.paused
    this.state.paused = this.paused
    this.pausedController.updateDisplay()
    this.callbacks.onPausedChange(this.paused)
  }

  togglePhysics() {
    this.physicsEnabled = !this.physicsEnabled
    this.state.gravity = this.physicsEnabled
    this.gravityController.updateDisplay()
  }

  setPhysicsAvailable(available: boolean) {
    this.physicsAvailable = available
    this.gravityController.disable(!available)
    this.densityEnabledController.disable(!available)
    this.updateDensityController()
  }

  private updateDensityController() {
    this.densityController.disable(!this.physicsAvailable || !this.densityEnabled)
  }
}
