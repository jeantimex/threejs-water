/**
 * @file PoolPass.ts
 * @description Manages rendering the physical pool walls and floor. Uses tile textures and
 * projects the generated caustic texture onto them. Supports either box or rounded corner pool shapes.
 */

import * as THREE from 'three'
import type { Water } from '../Water'
import poolVert from '../shaders/cube.vert'
import poolFrag from '../shaders/cube.frag'
import roundedBoxVert from '../shaders/roundedbox.vert'
import roundedBoxFrag from '../shaders/roundedbox.frag'
import type { WaterOpticsState } from './WaterOpticsState'
import { createRoundedBoxPoolGeometry } from './createRoundedBoxPoolGeometry'

/**
 * Handles the geometry and materials needed to render the pool interior surfaces
 * (walls and floor) under or above the water.
 */
export class PoolPass {
  /** The 3D Mesh representing the pool walls and floor. */
  readonly mesh: THREE.Mesh
  /** Static geometry for a standard box pool. */
  private readonly boxGeometry: THREE.BufferGeometry
  /** Material shader for a standard box pool. */
  private readonly boxMaterial: THREE.ShaderMaterial
  /** Dynamic geometry for rounded pools. Re-created if the shape parameters change. */
  private roundedBoxGeometry: THREE.BufferGeometry | null = null
  /** Material shader for rounded pools. Lazily created. */
  private roundedBoxMaterial: THREE.ShaderMaterial | null = null

  /**
   * Constructs the PoolPass.
   * 
   * @param tileTexture The base repeating texture representing pool tiles.
   * @param causticTexture The dynamic caustic map texture.
   * @param state The state tracking objects inside the water.
   */
  constructor(
    private readonly tileTexture: THREE.Texture,
    private readonly causticTexture: THREE.Texture,
    private readonly state: WaterOpticsState
  ) {
    this.boxMaterial = new THREE.ShaderMaterial({
      vertexShader: poolVert,
      fragmentShader: poolFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        ...state.createUniforms(),
        tiles: { value: tileTexture },
        causticTex: { value: causticTexture },
        water: { value: null },
      },
      side: THREE.FrontSide,
      depthTest: true,
      depthWrite: true,
    })

    this.boxGeometry = this.createGeometry()
    this.mesh = new THREE.Mesh(this.boxGeometry, this.boxMaterial)
    this.mesh.frustumCulled = false
  }

  /**
   * Adjusts the geometry and material properties to match the pool shape configuration.
   * 
   * @param shape The shape description (e.g. 'Box' or otherwise).
   * @param cornerRadius The radius of the pool's rounded corners.
   * @param poolWidth The half-width of the pool.
   * @param poolHeight The depth of the pool.
   * @param poolLength The half-length of the pool.
   */
  setPoolShape(shape: string, cornerRadius: number, poolWidth: number, poolHeight: number, poolLength: number) {
    if (shape === 'Box') {
      this.mesh.geometry = this.boxGeometry
      this.mesh.material = this.boxMaterial
    } else {
      if (this.roundedBoxGeometry) {
        this.roundedBoxGeometry.dispose()
      }
      this.roundedBoxGeometry = createRoundedBoxPoolGeometry(cornerRadius, poolWidth, poolHeight, poolLength)
      
      if (!this.roundedBoxMaterial) {
        this.roundedBoxMaterial = new THREE.ShaderMaterial({
          vertexShader: roundedBoxVert,
          fragmentShader: roundedBoxFrag,
          uniforms: {
            light: { value: this.state.lightDirection.clone() },
            ...this.state.createUniforms(),
            tiles: { value: this.tileTexture },
            causticTex: { value: this.causticTexture },
            water: { value: null },
            cornerRadius: { value: cornerRadius },
            poolWidth: { value: poolWidth },
            poolHeight: { value: poolHeight },
            poolLength: { value: poolLength },
          },
          side: THREE.FrontSide,
          depthTest: true,
          depthWrite: true,
        })
      } else {
        this.roundedBoxMaterial.uniforms.cornerRadius.value = cornerRadius
        this.roundedBoxMaterial.uniforms.poolWidth.value = poolWidth
        this.roundedBoxMaterial.uniforms.poolHeight.value = poolHeight
        this.roundedBoxMaterial.uniforms.poolLength.value = poolLength
      }

      this.mesh.geometry = this.roundedBoxGeometry
      this.mesh.material = this.roundedBoxMaterial
    }
  }

  /**
   * Prepares the active pool material uniforms prior to rendering the scene.
   * Copies current water texture, light vectors, and optical state variables.
   * 
   * @param water The Water simulation instance.
   */
  prepare(water: Water) {
    const activeMaterial = this.mesh.material as THREE.ShaderMaterial
    activeMaterial.uniforms.water.value = water.textureA.texture
    activeMaterial.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(activeMaterial)
    activeMaterial.uniformsNeedUpdate = true
  }

  /**
   * Generates a standard box geometry without the top face (since that's the water surface).
   */
  private createGeometry() {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const positions = geometry.attributes.position
    const source = geometry.index!
    const indices: number[] = []

    for (let i = 0; i < source.count; i += 3) {
      const a = source.getX(i)
      const b = source.getX(i + 1)
      const c = source.getX(i + 2)
      if (!(
        positions.getY(a) < 0
        && positions.getY(b) < 0
        && positions.getY(c) < 0
      )) {
        indices.push(a, b, c)
      }
    }

    geometry.setIndex(indices)
    return geometry
  }
}


