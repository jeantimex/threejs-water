import GUI, { type Controller } from 'lil-gui'

export interface SimulationControlCallbacks {
  onObjectChange(name: string): void
  onPausedChange(paused: boolean): void
}

export class SimulationControls {
  paused = false
  physicsEnabled = false

  private readonly state = {
    object: 'Sphere',
    gravity: false,
    paused: false,
  }
  private readonly gravityController: Controller
  private readonly pausedController: Controller

  constructor(
    objectOptions: string[],
    private readonly callbacks: SimulationControlCallbacks
  ) {
    const gui = new GUI({ title: 'Simulation' })
    gui.domElement.style.left = '0'
    gui.domElement.style.right = 'auto'

    gui.add(this.state, 'object', objectOptions)
      .name('Object')
      .onChange((name: string) => callbacks.onObjectChange(name))

    this.gravityController = gui.add(this.state, 'gravity')
      .name('Gravity')
      .onChange((enabled: boolean) => {
        this.physicsEnabled = enabled
      })

    this.pausedController = gui.add(this.state, 'paused')
      .name('Paused')
      .onChange((paused: boolean) => {
        this.paused = paused
        callbacks.onPausedChange(paused)
      })
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
    this.gravityController.disable(!available)
  }
}
