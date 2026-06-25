/**
 * @file CausticsPass.ts
 * @description Renders a caustic map (intensity texture representing focused/refracted light)
 * by tracing light rays through the moving water surface onto the pool walls and floor.
 * Supports different pool shapes (box or rounded box).
 */

import * as THREE from 'three';
import type { Water } from '../Water';
import causticsVert from '../shaders/Caustics.vert';
import causticsFrag from '../shaders/Caustics.frag';
import roundedBoxCausticsVert from '../shaders/RoundedBoxCaustics.vert';
import roundedBoxCausticsFrag from '../shaders/RoundedBoxCaustics.frag';
import type { WaterOpticsState } from './WaterOpticsState';

/**
 * Handles the rendering pass for generating caustic light patterns.
 * This runs on the GPU using custom shaders to map the refracted rays
 * onto a 2D texture, which is later applied to the pool surfaces.
 */
export class CausticsPass {
  /** The generated caustics texture that contains intensity maps of light rays. */
  readonly texture: THREE.Texture;

  /** WebGL Render Target where the caustics are drawn. */
  private readonly target: THREE.WebGLRenderTarget;
  /** Offscreen Scene used specifically for rendering the caustics pass. */
  private readonly scene = new THREE.Scene();
  /** Orthographic camera configured to cover the pool space. */
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  /** A full-viewport plane mesh where the caustics shaders are computed. */
  private readonly mesh: THREE.Mesh;
  /** Shader material configured for flat box-like pools. */
  private readonly boxMaterial: THREE.ShaderMaterial;
  /** Shader material configured for rounded-box pools. Lazily created if needed. */
  private roundedBoxMaterial: THREE.ShaderMaterial | null = null;

  /**
   * Constructs the CausticsPass.
   *
   * @param renderer The active WebGLRenderer instance.
   * @param state The state tracking objects inside the water.
   * @param objectShadowTexture Pre-rendered shadow texture of objects in the pool.
   */
  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    private readonly state: WaterOpticsState,
    private readonly objectShadowTexture: THREE.Texture
  ) {
    this.target = new THREE.WebGLRenderTarget(1024, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });
    this.texture = this.target.texture;

    this.boxMaterial = new THREE.ShaderMaterial({
      vertexShader: causticsVert,
      fragmentShader: causticsFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        water: { value: null },
        objectShadowTex: { value: objectShadowTexture },
        ...state.createUniforms(),
      },
      blending: THREE.NoBlending,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    });

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 200, 200), this.boxMaterial);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
  }

  /**
   * Configures the pass camera dimensions and shader uniforms based on the pool's geometry shape.
   *
   * @param shape The shape description (e.g., 'Box' or otherwise).
   * @param cornerRadius The radius of the pool's rounded corners.
   * @param poolWidth The half-width of the pool.
   * @param poolHeight The depth of the pool.
   * @param poolLength The half-length of the pool.
   */
  setPoolShape(
    shape: string,
    cornerRadius: number,
    poolWidth: number,
    poolHeight: number,
    poolLength: number
  ) {
    if (shape === 'Box') {
      this.camera.left = -1;
      this.camera.right = 1;
      this.camera.top = 1;
      this.camera.bottom = -1;
      this.camera.updateProjectionMatrix();
      this.mesh.material = this.boxMaterial;
    } else {
      this.camera.left = -poolWidth;
      this.camera.right = poolWidth;
      this.camera.top = poolLength;
      this.camera.bottom = -poolLength;
      this.camera.updateProjectionMatrix();

      if (!this.roundedBoxMaterial) {
        this.roundedBoxMaterial = new THREE.ShaderMaterial({
          vertexShader: roundedBoxCausticsVert,
          fragmentShader: roundedBoxCausticsFrag,
          uniforms: {
            light: { value: this.state.lightDirection.clone() },
            water: { value: null },
            objectShadowTex: { value: this.objectShadowTexture },
            ...this.state.createUniforms(),
            cornerRadius: { value: cornerRadius },
            poolWidth: { value: poolWidth },
            poolHeight: { value: poolHeight },
            poolLength: { value: poolLength },
          },
          blending: THREE.NoBlending,
          side: THREE.DoubleSide,
          depthTest: false,
          depthWrite: false,
        });
      } else {
        this.roundedBoxMaterial.uniforms.cornerRadius.value = cornerRadius;
        this.roundedBoxMaterial.uniforms.poolWidth.value = poolWidth;
        this.roundedBoxMaterial.uniforms.poolHeight.value = poolHeight;
        this.roundedBoxMaterial.uniforms.poolLength.value = poolLength;
      }
      this.mesh.material = this.roundedBoxMaterial;
    }
  }

  /**
   * Renders the caustics texture by executing the shaders with the current water mesh state and light direction.
   *
   * @param water The Water simulation instance containing the heightmap/normal textures.
   */
  update(water: Water) {
    const activeMaterial = this.mesh.material as THREE.ShaderMaterial;
    activeMaterial.uniforms.water.value = water.textureA.texture;
    activeMaterial.uniforms.light.value.copy(this.state.lightDirection);
    this.state.syncUniforms(activeMaterial);
    activeMaterial.uniformsNeedUpdate = true;

    this.renderer.setRenderTarget(this.target);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);
  }
}
