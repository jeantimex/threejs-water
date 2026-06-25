import * as THREE from 'three';
import waterRippleVert from './shaders/WaterRipple.vert';
import waterRippleFrag from './shaders/WaterRipple.frag';
import waveSimulationVert from './shaders/WaveSimulation.vert';
import waveSimulationFrag from './shaders/WaveSimulation.frag';
import waterNormalVert from './shaders/WaterNormal.vert';
import waterNormalFrag from './shaders/WaterNormal.frag';
import sphereDisplacementVert from './shaders/Sphere.vert';
import sphereDisplacementFrag from './shaders/Sphere.frag';
import boxDisplacementFrag from './shaders/BoxDisplacement.frag';

/**
 * Manages the interactive 2D heightmap-based water wave simulation.
 * Uses a double-buffered (ping-pong) WebGLRenderTarget setup where
 * texture A and texture B swap roles between read and write on every step.
 *
 * Core Shaders and Physics:
 * 1. stepSimulation (Discrete Wave Equation):
 *    Calculates propagation of ripples over time. The GPU executes:
 *      height(t+1) = (2 * height(t) - height(t-1)) * damping + speed * Laplacian(height(t))
 *    Where Laplacian is the average of the 4 neighbors minus the current height.
 *
 * 2. updateNormals (Sobel/Height Derivative):
 *    Computes the X and Z partial derivatives of the water height.
 *    Stores normal components in the Blue and Alpha channels to be read by pool
 *    and water surface shaders for refracting/reflecting light rays.
 *
 * 3. addDrop / moveSphere / moveCube (Water Displacements):
 *    Executes local height adjustments when obstacles enter or translate.
 */
export class Water {
  // Double buffers containing simulation state.
  // Channel layout:
  // - R: Current water height
  // - G: Previous water height (used to calculate momentum)
  // - B: X component of the surface normal
  // - A: Z component of the surface normal
  textureA: THREE.WebGLRenderTarget;
  textureB: THREE.WebGLRenderTarget;

  private renderer: THREE.WebGLRenderer;
  private plane: THREE.Mesh;
  private camera: THREE.OrthographicCamera;
  private scene: THREE.Scene;

  private dropMaterial: THREE.ShaderMaterial;
  private updateMaterial: THREE.ShaderMaterial;
  private normalMaterial: THREE.ShaderMaterial;
  private sphereMaterial: THREE.ShaderMaterial;
  private moveCubeMaterial: THREE.ShaderMaterial;

  constructor(renderer: THREE.WebGLRenderer) {
    this.renderer = renderer;

    const size = 256; // Resolution of the wave height simulation grid
    const textureType = this.getSimulationTextureType();
    const options: THREE.RenderTargetOptions = {
      type: textureType,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      stencilBuffer: false,
      depthBuffer: false,
    };

    this.textureA = new THREE.WebGLRenderTarget(size, size, options);
    this.textureB = new THREE.WebGLRenderTarget(size, size, options);

    // Setup dummy orthographic camera covering a 2x2 clip space square
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new THREE.Scene();

    const geometry = new THREE.PlaneGeometry(2, 2);

    // Initializer materials for each WebGL rendering pass
    this.dropMaterial = new THREE.ShaderMaterial({
      vertexShader: waterRippleVert,
      fragmentShader: waterRippleFrag,
      uniforms: {
        tInput: { value: null },
        center: { value: new THREE.Vector2() },
        radius: { value: 0 },
        strength: { value: 0 },
      },
    });

    this.updateMaterial = new THREE.ShaderMaterial({
      vertexShader: waveSimulationVert,
      fragmentShader: waveSimulationFrag,
      uniforms: {
        tInput: { value: null },
        delta: { value: new THREE.Vector2(1 / size, 1 / size) },
      },
    });

    this.normalMaterial = new THREE.ShaderMaterial({
      vertexShader: waterNormalVert,
      fragmentShader: waterNormalFrag,
      uniforms: {
        tInput: { value: null },
        delta: { value: new THREE.Vector2(1 / size, 1 / size) },
      },
    });

    this.sphereMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereDisplacementVert,
      fragmentShader: sphereDisplacementFrag,
      uniforms: {
        tInput: { value: null },
        oldCenter: { value: new THREE.Vector3() },
        newCenter: { value: new THREE.Vector3() },
        radius: { value: 0 },
        displacementScale: { value: 1.0 },
      },
    });

    this.moveCubeMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereDisplacementVert,
      fragmentShader: boxDisplacementFrag,
      uniforms: {
        tInput: { value: null },
        oldCenter: { value: new THREE.Vector3() },
        newCenter: { value: new THREE.Vector3() },
        halfSize: { value: new THREE.Vector3() },
      },
    });

    // Create full screen quad mesh
    this.plane = new THREE.Mesh(geometry, this.dropMaterial);
    this.scene.add(this.plane);
    this.clearTextures();
  }

  private getSimulationTextureType() {
    const supportsFloatRenderTarget =
      this.renderer.capabilities.isWebGL2 &&
      this.renderer.extensions.has('EXT_color_buffer_float') &&
      this.renderer.extensions.has('OES_texture_float_linear');

    return supportsFloatRenderTarget ? THREE.FloatType : THREE.HalfFloatType;
  }

  private clearTextures() {
    const previousTarget = this.renderer.getRenderTarget();
    const previousClearColor = new THREE.Color();
    this.renderer.getClearColor(previousClearColor);
    const previousClearAlpha = this.renderer.getClearAlpha();

    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setRenderTarget(this.textureA);
    this.renderer.clear();
    this.renderer.setRenderTarget(this.textureB);
    this.renderer.clear();
    this.renderer.setRenderTarget(previousTarget);
    this.renderer.setClearColor(previousClearColor, previousClearAlpha);
  }

  /**
   * Ping-pong helper. Swaps target textures so the previous output
   * becomes the input for the next frame simulation step.
   */
  private swapTextures() {
    const temp = this.textureA;
    this.textureA = this.textureB;
    this.textureB = temp;
  }

  /**
   * Adds an interactive drop (creates a ripple at coordinates [x, y]).
   */
  addDrop(x: number, y: number, radius: number, strength: number) {
    this.plane.material = this.dropMaterial;
    this.dropMaterial.uniforms.tInput.value = this.textureA.texture;
    this.dropMaterial.uniforms.center.value.set(x, y);
    this.dropMaterial.uniforms.radius.value = radius;
    this.dropMaterial.uniforms.strength.value = strength;

    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    this.swapTextures();
  }

  /**
   * Displaces water height when a sphere moves.
   * Calculates volume differences between the old and new coordinates and adjusts height values.
   */
  moveSphere(
    oldCenter: THREE.Vector3,
    newCenter: THREE.Vector3,
    radius: number,
    displacementScale = 1.0,
    poolWidth = 1.0,
    poolLength = 1.0
  ) {
    this.plane.material = this.sphereMaterial;
    this.sphereMaterial.uniforms.tInput.value = this.textureA.texture;

    // Scale coordinate vectors relative to the dynamic width/length bounds of the pool
    this.sphereMaterial.uniforms.oldCenter.value.copy(oldCenter);
    this.sphereMaterial.uniforms.oldCenter.value.x /= poolWidth;
    this.sphereMaterial.uniforms.oldCenter.value.z /= poolLength;

    this.sphereMaterial.uniforms.newCenter.value.copy(newCenter);
    this.sphereMaterial.uniforms.newCenter.value.x /= poolWidth;
    this.sphereMaterial.uniforms.newCenter.value.z /= poolLength;

    this.sphereMaterial.uniforms.radius.value = radius / poolLength;
    this.sphereMaterial.uniforms.displacementScale.value = displacementScale;

    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    this.swapTextures();
  }

  /**
   * Displaces water height when a cube/box moves.
   */
  moveCube(
    oldCenter: THREE.Vector3,
    newCenter: THREE.Vector3,
    halfSize: THREE.Vector3,
    poolWidth = 1.0,
    poolLength = 1.0
  ) {
    this.plane.material = this.moveCubeMaterial;
    this.moveCubeMaterial.uniforms.tInput.value = this.textureA.texture;

    // Scale coordinate vectors relative to the dynamic width/length bounds of the pool
    this.moveCubeMaterial.uniforms.oldCenter.value.copy(oldCenter);
    this.moveCubeMaterial.uniforms.oldCenter.value.x /= poolWidth;
    this.moveCubeMaterial.uniforms.oldCenter.value.z /= poolLength;

    this.moveCubeMaterial.uniforms.newCenter.value.copy(newCenter);
    this.moveCubeMaterial.uniforms.newCenter.value.x /= poolWidth;
    this.moveCubeMaterial.uniforms.newCenter.value.z /= poolLength;

    this.moveCubeMaterial.uniforms.halfSize.value.copy(halfSize);
    this.moveCubeMaterial.uniforms.halfSize.value.x /= poolWidth;
    this.moveCubeMaterial.uniforms.halfSize.value.z /= poolLength;

    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    this.swapTextures();
  }

  /**
   * Solves the discrete wave propagation equation.
   * Executes in a separate pass mapping texture heights to the write target.
   */
  stepSimulation() {
    this.plane.material = this.updateMaterial;
    this.updateMaterial.uniforms.tInput.value = this.textureA.texture;

    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    this.swapTextures();
  }

  /**
   * Recomputes normal derivatives mapping surface tangent angles for optical refractions.
   */
  updateNormals() {
    this.plane.material = this.normalMaterial;
    this.normalMaterial.uniforms.tInput.value = this.textureA.texture;

    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    this.swapTextures();
  }
}
