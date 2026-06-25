import GUI, { type Controller } from 'lil-gui'

export interface SimulationControlCallbacks {
  onObjectChange(name: string): void
  onPausedChange(paused: boolean): void
  onLightFollowsCameraChange?(): void
  onPoolShapeChange?(shape: string): void
  onCornerRadiusChange?(radius: number): void
  onPoolWidthChange?(width: number): void
  onPoolHeightChange?(height: number): void
  onPoolLengthChange?(length: number): void
}

/**
 * Manages the dat.GUI / lil-gui control panel.
 * Defines the settings state for physical density, pool shapes, sizes, play/pause,
 * and tracks references to controllers to dynamically disable/enable or show/hide them.
 */
export class SimulationControls {
  // Public variables queried by the simulation update loop
  paused = false
  physicsEnabled = false
  densityEnabled = false
  density = 0.9
  lightFollowsCamera = false
  poolShape = 'Box'
  cornerRadius = 0.1
  poolWidth = 1.0
  poolHeight = 1.0
  poolLength = 1.0

  // The local state object bound directly to GUI controls
  private readonly state = {
    object: 'Sphere',
    gravity: false,
    densityEnabled: false,
    density: 0.9,
    paused: false,
    lightFollowsCamera: false,
    poolShape: 'Box',
    cornerRadius: 0.1,
    poolWidth: 1.0,
    poolHeight: 1.0,
    poolLength: 1.0,
  }

  private readonly gravityController: Controller
  private readonly densityEnabledController: Controller
  private readonly densityController: Controller
  private readonly pausedController: Controller
  private readonly cornerRadiusController: Controller
  private readonly poolWidthController: Controller
  private readonly poolHeightController: Controller
  private readonly poolLengthController: Controller
  private physicsAvailable = true

  constructor(
    objectOptions: string[],
    private readonly callbacks: SimulationControlCallbacks
  ) {
    // Instantiate lil-gui container (closed by default)
    const gui = new GUI({ title: 'Settings' })
    gui.close()
    gui.domElement.style.left = '0'
    gui.domElement.style.right = 'auto'

    // --- Object Controls Group ---
    const objectFolder = gui.addFolder('Object')
    objectFolder.open()

    // Selector for different obstacles (None, Sphere, Cube, Duck, TorusKnot)
    objectFolder
      .add(this.state, 'object', objectOptions)
      .name('Object')
      .onChange((name: string) => callbacks.onObjectChange(name))

    // Toggle gravity updates
    this.gravityController = objectFolder
      .add(this.state, 'gravity')
      .name('Toggle Gravity')
      .onChange((enabled: boolean) => {
        this.physicsEnabled = enabled
      })

    // Toggle custom density calculations
    this.densityEnabledController = objectFolder
      .add(this.state, 'densityEnabled')
      .name('Enable Density')
      .onChange((enabled: boolean) => {
        this.densityEnabled = enabled
        this.updateDensityController()
      })

    // Slider for liquid density adjustments (buoyancy multiplier)
    this.densityController = objectFolder
      .add(this.state, 'density', 0.2, 2.0, 0.01)
      .name('Density')
      .onChange((density: number) => {
        this.density = density
      })

    // --- Scene Controls Group ---
    const sceneFolder = gui.addFolder('Scene')
    sceneFolder.open()

    this.pausedController = sceneFolder
      .add(this.state, 'paused')
      .name('Paused')
      .onChange((paused: boolean) => {
        this.paused = paused
        callbacks.onPausedChange(paused)
      })

    // --- Light Controls Group ---
    const lightsFolder = gui.addFolder('Lights')
    lightsFolder.open()

    // Toggle whether the sunlight direction tracks camera movement
    lightsFolder
      .add(this.state, 'lightFollowsCamera')
      .name('Follow Camera')
      .onChange((enabled: boolean) => {
        this.lightFollowsCamera = enabled
        callbacks.onLightFollowsCameraChange?.()
      })

    // --- Pool Shape Controls Group ---
    const poolFolder = gui.addFolder('Pool Shape')
    poolFolder.open()

    // Pool Shape dropdown selector ('Box' or 'Rounded Box')
    poolFolder
      .add(this.state, 'poolShape', ['Box', 'Rounded Box'])
      .name('Pool Shape')
      .onChange((shape: string) => {
        this.poolShape = shape
        this.updatePoolShapeControllers()
        callbacks.onPoolShapeChange?.(shape)
      })

    // Corner Radius slider (only used for Rounded Box)
    this.cornerRadiusController = poolFolder
      .add(this.state, 'cornerRadius', 0.0, 1.0, 0.01)
      .name('Corner Radius')
      .onChange((radius: number) => {
        this.cornerRadius = radius
        callbacks.onCornerRadiusChange?.(radius)
      })

    // Pool Width slider
    this.poolWidthController = poolFolder
      .add(this.state, 'poolWidth', 0.5, 3.0, 0.05)
      .name('Pool Width')
      .onChange((width: number) => {
        this.poolWidth = width
        callbacks.onPoolWidthChange?.(width)
      })

    // Pool Depth slider
    this.poolHeightController = poolFolder
      .add(this.state, 'poolHeight', 0.3, 2.0, 0.05)
      .name('Pool Depth')
      .onChange((height: number) => {
        this.poolHeight = height
        callbacks.onPoolHeightChange?.(height)
      })

    // Pool Length slider
    this.poolLengthController = poolFolder
      .add(this.state, 'poolLength', 0.5, 3.0, 0.05)
      .name('Pool Length')
      .onChange((length: number) => {
        this.poolLength = length
        callbacks.onPoolLengthChange?.(length)
      })

    // Sync initial controller visibility configurations
    this.updateDensityController()
    this.updatePoolShapeControllers()
  }

  /**
   * Action trigger to manually toggle play/pause via space key binding.
   */
  togglePaused() {
    this.paused = !this.paused
    this.state.paused = this.paused
    this.pausedController.updateDisplay()
    this.callbacks.onPausedChange(this.paused)
  }

  /**
   * Action trigger to manually toggle gravity via G key binding.
   */
  togglePhysics() {
    this.physicsEnabled = !this.physicsEnabled
    this.state.gravity = this.physicsEnabled
    this.gravityController.updateDisplay()
  }

  /**
   * Disables gravity controls if no object is currently selected ('None').
   */
  setPhysicsAvailable(available: boolean) {
    this.physicsAvailable = available
    this.gravityController.disable(!available)
    this.densityEnabledController.disable(!available)
    this.updateDensityController()
  }

  /**
   * Enables or disables the density slider depending on if the density checkbox is checked.
   */
  private updateDensityController() {
    this.densityController.disable(!this.physicsAvailable || !this.densityEnabled)
  }

  /**
   * Shows pool boundary controllers (Radius, Width, Depth, Length) for Rounded Box shape,
   * hides them for standard flat Box shape.
   */
  private updatePoolShapeControllers() {
    if (this.state.poolShape === 'Rounded Box') {
      this.cornerRadiusController.show()
      this.poolWidthController.show()
      this.poolHeightController.show()
      this.poolLengthController.show()
    } else {
      this.cornerRadiusController.hide()
      this.poolWidthController.hide()
      this.poolHeightController.hide()
      this.poolLengthController.hide()
    }
  }
}
