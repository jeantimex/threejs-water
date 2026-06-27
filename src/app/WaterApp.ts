import * as THREE from 'three';
import { CameraController } from '../camera/CameraController';
import { Renderer } from '../Renderer';
import { NO_OBJECT, type SimulationObjectRegistry } from '../objects/SimulationObjectRegistry';
import { createSimulationObjects } from '../objects/CreateSimulationObjects';
import { Water } from '../Water';
import { InteractionController } from './InteractionController';
import { loadSceneAssets } from './LoadSceneAssets';
import { SimulationControls } from './SimulationControls';

/**
 * Main application coordinator class.
 * Establishes the ThreeJS Canvas context, boots up the simulation loops,
 * sets up the interactive GUI control callbacks, and orchestrates the
 * sequential execution of updates and rendering passes on every frame.
 */
export class WaterApp {
  // Constants representing gravity pull vector
  private readonly gravity = new THREE.Vector3(0, -4, 0);
  private readonly cameraController = new CameraController();
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);

  private webglRenderer!: THREE.WebGLRenderer;
  private renderer!: Renderer;
  private water!: Water;
  private objects!: SimulationObjectRegistry;
  private controls!: SimulationControls;
  private interaction!: InteractionController;
  private previousTime = performance.now();

  /**
   * Initializes the application.
   * Loads scene assets (tile textures, sky cubemaps), instantiates the simulation engine,
   * configures GUI controls, sets up event listeners, and starts the render animation loop.
   */
  async init() {
    const container = document.getElementById('app')!;
    const loading = document.getElementById('loading')!;

    // Establish WebGL Context
    this.webglRenderer = new THREE.WebGLRenderer({ antialias: true });
    this.webglRenderer.setPixelRatio(window.devicePixelRatio);
    this.webglRenderer.setClearColor(0x000000);
    container.appendChild(this.webglRenderer.domElement);

    // Load repeating tiles and sky cubemaps asynchronously
    const { tileTexture, cubemap } = await loadSceneAssets();

    // Instantiate core water simulation grid
    this.water = new Water(this.webglRenderer);
    // Instantiate graphics render passes manager
    this.renderer = new Renderer(this.webglRenderer, tileTexture, cubemap);

    // Add rendering meshes to the main ThreeJS scene
    this.scene.add(
      this.renderer.getPoolMesh(),
      this.renderer.getWaterMesh(),
      this.renderer.getWaterMeshBack()
    );
    this.renderer.markWaterOpticsHidden();

    // Instantiate simulation obstacles (Cube, Sphere, Duck, TorusKnot)
    this.objects = createSimulationObjects(this.scene, this.renderer.objectRenderResources);
    this.renderer.setWaterOptics(this.objects.optics);

    // Setup dat.GUI/lil-gui controller callbacks
    this.controls = new SimulationControls(this.objects.options, {
      onObjectChange: this.selectSimulationObject,
      onPausedChange: (paused) => {
        if (paused) this.draw();
      },
      onLightFollowsCameraChange: () => {
        if (this.controls.paused) this.draw();
      },
      onUpdateLightDirection: () => {
        this.cameraController.getLightDirection(this.renderer.lightDir);
        if (this.controls.paused) this.draw();
        else this.renderer.updateCaustics(this.water);
      },
      onPoolShapeChange: (shape) => {
        const poolWidth = shape === 'Box' ? 1.0 : this.controls.poolWidth;
        const poolHeight = shape === 'Box' ? 1.0 : this.controls.poolHeight;
        const poolLength = shape === 'Box' ? 1.0 : this.controls.poolLength;
        this.renderer.setPoolShape(
          shape,
          this.controls.cornerRadius,
          poolWidth,
          poolHeight,
          poolLength
        );
        if (this.objects.active) {
          const floor = this.objects.active.floorY(poolHeight);
          if (this.objects.active.position.y < floor) {
            this.objects.active.position.y = floor;
            this.objects.active.velocity.y = 0;
          }
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, poolHeight, poolLength);
          this.objects.active.syncPreviousPosition();
        }
        if (this.controls.paused) this.draw();
      },
      onCornerRadiusChange: (radius) => {
        this.renderer.setPoolShape(
          this.controls.poolShape,
          radius,
          this.controls.poolWidth,
          this.controls.poolHeight,
          this.controls.poolLength
        );
        if (this.controls.paused) this.draw();
      },
      onPoolWidthChange: (width) => {
        const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight;
        const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength;
        this.renderer.setPoolShape(
          this.controls.poolShape,
          this.controls.cornerRadius,
          width,
          poolHeight,
          poolLength
        );
        if (this.objects.active) {
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), width, poolHeight, poolLength);
          this.objects.active.syncPreviousPosition();
        }
        if (this.controls.paused) this.draw();
      },
      onPoolHeightChange: (height) => {
        const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth;
        const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength;
        this.renderer.setPoolShape(
          this.controls.poolShape,
          this.controls.cornerRadius,
          poolWidth,
          height,
          poolLength
        );
        if (this.objects.active) {
          const floor = this.objects.active.floorY(height);
          if (this.objects.active.position.y < floor) {
            this.objects.active.position.y = floor;
            this.objects.active.velocity.y = 0;
          }
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, height, poolLength);
          this.objects.active.syncPreviousPosition();
        }
        if (this.controls.paused) this.draw();
      },
      onPoolLengthChange: (length) => {
        const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth;
        const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight;
        this.renderer.setPoolShape(
          this.controls.poolShape,
          this.controls.cornerRadius,
          poolWidth,
          poolHeight,
          length
        );
        if (this.objects.active) {
          this.objects.active.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, poolHeight, length);
          this.objects.active.syncPreviousPosition();
        }
        if (this.controls.paused) this.draw();
      },
    });

    // Connect user mouse/touch controllers for orbiting, zooming, and dragging objects
    this.interaction = new InteractionController({
      canvas: this.webglRenderer.domElement,
      camera: this.camera,
      cameraController: this.cameraController,
      water: this.water,
      renderer: this.renderer,
      objects: this.objects,
      controls: this.controls,
      draw: this.draw,
    });
    this.interaction.connect();

    // Generate initial drops to create ambient starting waves
    this.seedWater();
    loading.innerHTML = '';

    // Setup responsive help panel toggle
    const help = document.getElementById('help')!;
    const helpToggle = document.getElementById('help-toggle')!;
    helpToggle.addEventListener('click', () => {
      help.classList.toggle('collapsed');
      helpToggle.textContent = help.classList.contains('collapsed') ? 'menu' : 'chevron_right';
    });

    // Collapse help panel when clicking outside of it (mobile only)
    window.addEventListener('pointerdown', (e) => {
      const isMobile = window.matchMedia('(max-width: 600px)').matches;
      if (isMobile && !help.classList.contains('collapsed')) {
        const target = e.target as HTMLElement;
        if (!help.contains(target) && !helpToggle.contains(target)) {
          help.classList.add('collapsed');
          helpToggle.textContent = 'menu';
        }
      }
    });

    this.resize();
    window.addEventListener('resize', this.resize);

    this.previousTime = performance.now();
    requestAnimationFrame(this.animate);
  }

  /**
   * Spawns 20 random initial ripples in the pool to seed the simulation.
   */
  private seedWater() {
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth;
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength;
    for (let i = 0; i < 20; i++) {
      this.water.addDrop(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        0.03,
        i % 2 === 0 ? -0.01 : 0.01,
        poolWidth,
        poolLength
      );
    }
  }

  /**
   * Main requestAnimationFrame animation loop.
   * Advances simulation time and draws the updated state on screen.
   */
  private animate = (time: number) => {
    if (!this.controls.paused) {
      // Advance physics simulation
      this.update((time - this.previousTime) / 1000);
      // Execute WebGL rendering pipeline passes
      this.draw();
    }
    this.previousTime = time;
    requestAnimationFrame(this.animate);
  };

  /**
   * Updates physical coordinates, bounds, and executes wave heightmap update passes on the GPU.
   */
  private update(seconds: number) {
    if (seconds > 1) return; // Avoid physics explosion on long inactive tabs

    this.interaction.update(seconds);
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth;
    const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight;
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength;

    // 1. Update obstacle physics (buoyancy, bounds-clamping) and write displacements
    this.objects.update(
      seconds,
      {
        dragging: this.interaction.draggingObject,
        physicsEnabled: this.controls.physicsEnabled,
        densityEnabled: this.controls.densityEnabled,
        density: this.controls.density,
        gravity: this.gravity,
        poolWidth,
        poolHeight,
        poolLength,
      },
      this.water
    );

    // 2. Solve wave equations (we run it twice per tick to speed up wave propagation velocities)
    this.water.stepSimulation(poolWidth, poolLength);
    this.water.stepSimulation(poolWidth, poolLength);

    // 3. Recompute wave normals from height derivatives
    this.water.updateNormals(poolWidth, poolLength);

    // 4. Update optics settings (refraction indices / positions)
    this.renderer.setWaterOptics(this.objects.optics);
  }

  /**
   * Renders the scene from the camera's current perspective.
   * Runs sequentially through all WebGL passes (Refraction maps, Caustics maps, Pool walls, Water boundaries).
   */
  private draw = () => {
    this.interaction.preparePausedDraw();
    this.cameraController.apply(this.camera);
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth;
    const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight;
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength;

    // Bind object heightmap uniforms
    this.objects.prepareRender(this.water, poolWidth, poolHeight, poolLength);
    // 1. Render object shadow & reflection/refraction maps
    this.renderer.updateObjectTextures(this.scene, this.camera, this.objects.active?.mesh ?? null);
    // 2. Render dynamic caustics texture
    this.renderer.updateCaustics(this.water);
    // 3. Render pool walls and floor mesh
    this.renderer.renderPool(this.water);
    // 4. Render water surface meshes
    this.renderer.renderWater(this.water, this.camera);
    // 5. Draw final composited scene on screen
    this.webglRenderer.render(this.scene, this.camera);
  };

  /**
   * Window resize handler. Recomputes camera aspect ratio projection and resizes render targets.
   * Desktop: canvas and info panel side by side. Mobile: info panel floats on top.
   */
  private resize = () => {
    const help = document.getElementById('help')!;
    const isMobile = window.matchMedia('(max-width: 600px)').matches;

    // Mobile uses full width, desktop subtracts help panel width
    const width = isMobile ? window.innerWidth : window.innerWidth - help.clientWidth - 20;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.webglRenderer.setSize(width, height);
    this.renderer.setSize(width, height);
    this.draw();
  };

  /**
   * Switch the active simulation object.
   */
  private selectSimulationObject = (name: string) => {
    const poolWidth = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolWidth;
    const poolHeight = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolHeight;
    const poolLength = this.controls.poolShape === 'Box' ? 1.0 : this.controls.poolLength;

    // Switch object in registry and clamp its position
    this.objects.select(name, this.water, poolWidth, poolHeight, poolLength);
    this.renderer.setWaterOptics(this.objects.optics);

    this.interaction.cancelDrag();
    this.controls.setPhysicsAvailable(name !== NO_OBJECT);
    this.water.updateNormals(poolWidth, poolLength);
    this.renderer.updateCaustics(this.water);
    this.draw();
  };
}
