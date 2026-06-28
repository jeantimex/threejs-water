import GUI, { type Controller } from 'lil-gui';

const MIN_STRAIGHT_POOL_EDGE = 0.0;

export interface SimulationControlCallbacks {
  onObjectChange(name: string): void;
  onPausedChange(paused: boolean): void;
  onLightFollowsCameraChange?(): void;
  onPoolShapeChange?(shape: string): void;
  onCornerRadiusChange?(radius: number): void;
  onPoolWidthChange?(width: number): void;
  onPoolHeightChange?(height: number): void;
  onPoolLengthChange?(length: number): void;
  onUpdateLightDirection?(): void;
  onInstanceCountChange?(count: number): void;
}

/**
 * Manages the dat.GUI / lil-gui control panel.
 * Defines the settings state for physical density, pool shapes, sizes, play/pause,
 * and tracks references to controllers to dynamically disable/enable or show/hide them.
 */
export class SimulationControls {
  // Public variables queried by the simulation update loop
  paused = false;
  physicsEnabled = false;
  densityEnabled = false;
  density = 0.9;
  lightFollowsCamera = false;
  poolShape = 'Box';
  cornerRadius = 0.1;
  poolWidth = 1.0;
  poolHeight = 1.0;
  poolLength = 1.0;
  instanceCount = 1;

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
    instanceCount: 1,
    updateLightDirection: () => {
      this.callbacks.onUpdateLightDirection?.();
    },
  };

  private readonly gravityController: Controller;
  private readonly densityEnabledController: Controller;
  private readonly densityController: Controller;
  private readonly pausedController: Controller;
  private readonly cornerRadiusController: Controller;
  private readonly poolWidthController: Controller;
  private readonly poolHeightController: Controller;
  private readonly poolLengthController: Controller;
  private readonly updateLightDirectionController: Controller;
  private physicsAvailable = true;

  constructor(
    objectOptions: string[],
    private readonly callbacks: SimulationControlCallbacks
  ) {
    // Instantiate lil-gui container (closed by default)
    const gui = new GUI({ title: 'Settings' });
    gui.close();
    gui.domElement.style.left = '0';
    gui.domElement.style.right = 'auto';

    // --- Scene Controls Group ---
    const sceneFolder = gui.addFolder('Scene');
    sceneFolder.close();

    this.pausedController = sceneFolder
      .add(this.state, 'paused')
      .name('Paused')
      .onChange((paused: boolean) => {
        this.paused = paused;
        callbacks.onPausedChange(paused);
      });

    // --- Object Controls Group ---
    const objectFolder = gui.addFolder('Object');
    objectFolder.close();

    // Selector for different obstacles (None, Sphere, Cube, Duck, TorusKnot)
    objectFolder
      .add(this.state, 'object', objectOptions)
      .name('Object')
      .onChange((name: string) => callbacks.onObjectChange(name));

    // Toggle gravity updates
    this.gravityController = objectFolder
      .add(this.state, 'gravity')
      .name('Toggle Gravity')
      .onChange((enabled: boolean) => {
        this.physicsEnabled = enabled;
      });

    // Toggle custom density calculations
    this.densityEnabledController = objectFolder
      .add(this.state, 'densityEnabled')
      .name('Enable Density')
      .onChange((enabled: boolean) => {
        this.densityEnabled = enabled;
        this.updateDensityController();
      });

    // Slider for liquid density adjustments (buoyancy multiplier)
    this.densityController = objectFolder
      .add(this.state, 'density', 0.2, 2.0, 0.01)
      .name('Density')
      .onChange((density: number) => {
        this.density = density;
      });

    // Stepper for controlling instance count (0 to 5)
    const controller = objectFolder
      .add(this.state, 'instanceCount')
      .name('Instance Count')
      .onChange((count: number) => {
        // Clamp and sanitize input
        const sanitized = Math.max(0, Math.min(5, Math.round(count)));
        this.state.instanceCount = sanitized;
        this.instanceCount = sanitized;
        controller.updateDisplay();
        callbacks.onInstanceCountChange?.(sanitized);
      });

    // Inject stepper buttons into the lil-gui widget element
    const widget = controller.domElement.querySelector('.lil-widget, .widget');
    if (widget) {
      const input = widget.querySelector('input') as HTMLInputElement;
      if (input) {
        input.style.textAlign = 'center';
        input.style.width = '32px';
        input.style.flex = 'none';
        input.style.padding = '0';
        input.style.margin = '0';
        input.style.borderRadius = '0';

        // Decrement button
        const decBtn = document.createElement('button');
        decBtn.textContent = '−';
        decBtn.style.width = '20px';
        decBtn.style.height = '20px';
        decBtn.style.border = 'none';
        decBtn.style.background = '#444';
        decBtn.style.color = '#fff';
        decBtn.style.fontSize = '12px';
        decBtn.style.fontWeight = 'bold';
        decBtn.style.cursor = 'pointer';
        decBtn.style.borderRadius = '3px 0 0 3px';
        decBtn.style.marginRight = '1px';
        decBtn.style.display = 'flex';
        decBtn.style.alignItems = 'center';
        decBtn.style.justifyContent = 'center';
        decBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const val = Math.max(0, this.state.instanceCount - 1);
          controller.setValue(val);
        });

        // Increment button
        const incBtn = document.createElement('button');
        incBtn.textContent = '+';
        incBtn.style.width = '20px';
        incBtn.style.height = '20px';
        incBtn.style.border = 'none';
        incBtn.style.background = '#444';
        incBtn.style.color = '#fff';
        incBtn.style.fontSize = '12px';
        incBtn.style.fontWeight = 'bold';
        incBtn.style.cursor = 'pointer';
        incBtn.style.borderRadius = '0 3px 3px 0';
        incBtn.style.marginLeft = '1px';
        incBtn.style.display = 'flex';
        incBtn.style.alignItems = 'center';
        incBtn.style.justifyContent = 'center';
        incBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const val = Math.min(5, this.state.instanceCount + 1);
          controller.setValue(val);
        });

        widget.insertBefore(decBtn, input);
        widget.appendChild(incBtn);

        // Align widget children nicely
        (widget as HTMLElement).style.display = 'flex';
        (widget as HTMLElement).style.alignItems = 'center';
        (widget as HTMLElement).style.justifyContent = 'flex-end';
      }
    }

    // --- Pool Shape Controls Group ---
    const poolFolder = gui.addFolder('Pool');
    poolFolder.close();

    // Pool Shape dropdown selector ('Box' or 'Rounded Box')
    poolFolder
      .add(this.state, 'poolShape', ['Box', 'Rounded Box'])
      .name('Pool Shape')
      .onChange((shape: string) => {
        this.poolShape = shape;
        this.updatePoolShapeControllers();
        callbacks.onPoolShapeChange?.(shape);
      });

    // Corner Radius slider (only used for Rounded Box)
    this.cornerRadiusController = poolFolder
      .add(this.state, 'cornerRadius', 0.0, 1.0, 0.01)
      .name('Corner Radius')
      .onChange((radius: number) => {
        const cornerRadius = this.clampCornerRadius(radius);
        this.cornerRadius = cornerRadius;
        this.state.cornerRadius = cornerRadius;
        this.cornerRadiusController.updateDisplay();
        callbacks.onCornerRadiusChange?.(cornerRadius);
      });

    // Pool Width slider
    this.poolWidthController = poolFolder
      .add(this.state, 'poolWidth', 0.5, 3.0, 0.05)
      .name('Pool Width')
      .onChange((width: number) => {
        this.poolWidth = width;
        this.updateCornerRadiusLimit();
        callbacks.onPoolWidthChange?.(width);
      });

    // Pool Depth slider
    this.poolHeightController = poolFolder
      .add(this.state, 'poolHeight', 0.3, 2.0, 0.05)
      .name('Pool Depth')
      .onChange((height: number) => {
        this.poolHeight = height;
        callbacks.onPoolHeightChange?.(height);
      });

    // Pool Length slider
    this.poolLengthController = poolFolder
      .add(this.state, 'poolLength', 0.5, 3.0, 0.05)
      .name('Pool Length')
      .onChange((length: number) => {
        this.poolLength = length;
        this.updateCornerRadiusLimit();
        callbacks.onPoolLengthChange?.(length);
      });

    // --- Light Controls Group ---
    const lightsFolder = gui.addFolder('Light');
    lightsFolder.close();

    // Toggle whether the sunlight direction tracks camera movement
    lightsFolder
      .add(this.state, 'lightFollowsCamera')
      .name('Follow Camera')
      .onChange((enabled: boolean) => {
        this.lightFollowsCamera = enabled;
        this.updateLightDirectionButton();
        callbacks.onLightFollowsCameraChange?.();
      });

    // Button to manually update the light direction
    this.updateLightDirectionController = lightsFolder
      .add(this.state, 'updateLightDirection')
      .name('Update Light Direction');

    // Sync initial controller visibility configurations
    this.updateCornerRadiusLimit();
    this.updateDensityController();
    this.updatePoolShapeControllers();
    this.updateLightDirectionButton();
  }

  /**
   * Action trigger to manually toggle play/pause via space key binding.
   */
  togglePaused() {
    this.paused = !this.paused;
    this.state.paused = this.paused;
    this.pausedController.updateDisplay();
    this.callbacks.onPausedChange(this.paused);
  }

  /**
   * Action trigger to manually toggle gravity via G key binding.
   */
  togglePhysics() {
    this.physicsEnabled = !this.physicsEnabled;
    this.state.gravity = this.physicsEnabled;
    this.gravityController.updateDisplay();
  }

  /**
   * Disables gravity controls if no object is currently selected ('None').
   */
  setPhysicsAvailable(available: boolean) {
    this.physicsAvailable = available;
    this.gravityController.disable(!available);
    this.densityEnabledController.disable(!available);
    this.updateDensityController();
  }

  /**
   * Shows the density slider only when density controls are available and enabled.
   */
  private updateDensityController() {
    this.densityController.show(this.physicsAvailable && this.densityEnabled);
  }

  private updateCornerRadiusLimit() {
    const cornerRadius = this.clampCornerRadius(this.cornerRadius);
    this.cornerRadiusController.max(this.maxCornerRadius);

    if (cornerRadius !== this.cornerRadius) {
      this.cornerRadius = cornerRadius;
      this.state.cornerRadius = cornerRadius;
      this.cornerRadiusController.updateDisplay();
      this.callbacks.onCornerRadiusChange?.(cornerRadius);
    }
  }

  private clampCornerRadius(radius: number) {
    return Math.min(radius, this.maxCornerRadius);
  }

  private get maxCornerRadius() {
    return Math.max(0, Math.min(this.poolWidth, this.poolLength) - MIN_STRAIGHT_POOL_EDGE);
  }

  /**
   * Shows pool boundary controllers (Radius, Width, Depth, Length) for Rounded Box shape,
   * hides them for standard flat Box shape.
   */
  private updatePoolShapeControllers() {
    if (this.state.poolShape === 'Rounded Box') {
      this.cornerRadiusController.show();
      this.poolWidthController.show();
      this.poolHeightController.show();
      this.poolLengthController.show();
    } else {
      this.cornerRadiusController.hide();
      this.poolWidthController.hide();
      this.poolHeightController.hide();
      this.poolLengthController.hide();
    }
  }

  private updateLightDirectionButton() {
    this.updateLightDirectionController.disable(this.lightFollowsCamera);
  }
}
