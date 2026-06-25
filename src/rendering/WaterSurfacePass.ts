/**
 * @file WaterSurfacePass.ts
 * @description Manages rendering the water surface itself. Supports viewing the surface from
 * both above (aboveMesh, back-face culled) and below (belowMesh, front-face culled).
 * Handles reflection, refraction, and optical distortion of the sky and submerged objects.
 */

import * as THREE from 'three'
import type { Water } from '../Water'
import waterAboveVert from '../shaders/WaterAbove.vert'
import waterAboveFrag from '../shaders/WaterAbove.frag'
import roundedBoxWaterAboveFrag from '../shaders/RoundedBoxWaterAbove.frag'
import waterBelowVert from '../shaders/WaterBelow.vert'
import waterBelowFrag from '../shaders/WaterBelow.frag'
import roundedBoxWaterBelowFrag from '../shaders/RoundedBoxWaterBelow.frag'
import roundedBoxWaterVert from '../shaders/RoundedBoxWater.vert'
import type { WaterOpticsState } from './WaterOpticsState'

/**
 * Interface representing computed projection matrices for scene objects,
 * used by shaders to align reflections and refractions with the screen layout.
 */
export interface ObjectTextureMatrices {
  /** Map from world space to default camera viewport coordinate space. */
  viewProjectionMatrix: THREE.Matrix4
  /** Map from world space to reflected camera viewport coordinate space. */
  reflectionViewProjectionMatrix: THREE.Matrix4
}

/**
 * Handles the rendering meshes, materials, and updates for the water surface.
 * Computes different shading algorithms depending on whether the camera is above or below the surface.
 */
export class WaterSurfacePass {
  /** Mesh rendered when viewing the water surface from above. */
  readonly aboveMesh: THREE.Mesh
  /** Mesh rendered when viewing the water surface from below. */
  readonly belowMesh: THREE.Mesh
  /** Shader material for viewing the water from above in a box pool. */
  private readonly aboveMaterial: THREE.ShaderMaterial
  /** Shader material for viewing the water from below in a box pool. */
  private readonly belowMaterial: THREE.ShaderMaterial
  /** Shader material for viewing the water from above in a rounded box pool. Lazily created. */
  private roundedBoxAboveMaterial: THREE.ShaderMaterial | null = null
  /** Shader material for viewing the water from below in a rounded box pool. Lazily created. */
  private roundedBoxBelowMaterial: THREE.ShaderMaterial | null = null

  /**
   * Constructs the WaterSurfacePass.
   *
   * @param tileTexture Tile texture mapping the pool walls/floor.
   * @param cubemap Cube texture of the surrounding sky.
   * @param causticTexture Dynamic caustic light intensity texture.
   * @param objectReflectionTexture Reflection texture of objects inside the pool.
   * @param objectClippedReflectionTexture Clipped reflection texture of objects.
   * @param objectRefractionTexture Refraction texture of objects.
   * @param state The state tracking objects inside the water.
   */
  constructor(
    private readonly tileTexture: THREE.Texture,
    private readonly cubemap: THREE.CubeTexture,
    private readonly causticTexture: THREE.Texture,
    private readonly objectReflectionTexture: THREE.Texture,
    private readonly objectClippedReflectionTexture: THREE.Texture,
    private readonly objectRefractionTexture: THREE.Texture,
    private readonly state: WaterOpticsState
  ) {
    this.aboveMaterial = this.createMaterial(
      waterAboveVert,
      waterAboveFrag,
      THREE.BackSide,
      tileTexture,
      cubemap,
      causticTexture,
      objectReflectionTexture,
      objectClippedReflectionTexture,
      objectRefractionTexture
    )
    this.belowMaterial = this.createMaterial(
      waterBelowVert,
      waterBelowFrag,
      THREE.FrontSide,
      tileTexture,
      cubemap,
      causticTexture,
      objectReflectionTexture,
      objectClippedReflectionTexture,
      objectRefractionTexture
    )

    const geometry = new THREE.PlaneGeometry(2, 2, 200, 200)
    this.aboveMesh = new THREE.Mesh(geometry, this.aboveMaterial)
    this.belowMesh = new THREE.Mesh(geometry.clone(), this.belowMaterial)
    this.aboveMesh.frustumCulled = false
    this.belowMesh.frustumCulled = false
  }

  /**
   * Configures materials for the water mesh based on the selected pool shape (Box or Rounded).
   *
   * @param shape The shape description ('Box' or otherwise).
   * @param cornerRadius Corner radius of rounded pools.
   * @param poolWidth Half-width of the pool.
   * @param poolHeight Depth of the pool.
   * @param poolLength Half-length of the pool.
   */
  setPoolShape(
    shape: string,
    cornerRadius: number,
    poolWidth: number,
    poolHeight: number,
    poolLength: number
  ) {
    if (shape === 'Box') {
      this.aboveMesh.material = this.aboveMaterial
      this.belowMesh.material = this.belowMaterial
    } else {
      if (!this.roundedBoxAboveMaterial) {
        this.roundedBoxAboveMaterial = this.createMaterial(
          roundedBoxWaterVert,
          roundedBoxWaterAboveFrag,
          THREE.BackSide,
          this.tileTexture,
          this.cubemap,
          this.causticTexture,
          this.objectReflectionTexture,
          this.objectClippedReflectionTexture,
          this.objectRefractionTexture
        )
        this.roundedBoxAboveMaterial.uniforms.cornerRadius = { value: cornerRadius }
        this.roundedBoxAboveMaterial.uniforms.poolWidth = { value: poolWidth }
        this.roundedBoxAboveMaterial.uniforms.poolHeight = { value: poolHeight }
        this.roundedBoxAboveMaterial.uniforms.poolLength = { value: poolLength }

        this.roundedBoxBelowMaterial = this.createMaterial(
          roundedBoxWaterVert,
          roundedBoxWaterBelowFrag,
          THREE.FrontSide,
          this.tileTexture,
          this.cubemap,
          this.causticTexture,
          this.objectReflectionTexture,
          this.objectClippedReflectionTexture,
          this.objectRefractionTexture
        )
        this.roundedBoxBelowMaterial.uniforms.cornerRadius = { value: cornerRadius }
        this.roundedBoxBelowMaterial.uniforms.poolWidth = { value: poolWidth }
        this.roundedBoxBelowMaterial.uniforms.poolHeight = { value: poolHeight }
        this.roundedBoxBelowMaterial.uniforms.poolLength = { value: poolLength }
      } else {
        this.roundedBoxAboveMaterial.uniforms.cornerRadius.value = cornerRadius
        this.roundedBoxAboveMaterial.uniforms.poolWidth.value = poolWidth
        this.roundedBoxAboveMaterial.uniforms.poolHeight.value = poolHeight
        this.roundedBoxAboveMaterial.uniforms.poolLength.value = poolLength
        this.roundedBoxBelowMaterial!.uniforms.cornerRadius.value = cornerRadius
        this.roundedBoxBelowMaterial!.uniforms.poolWidth.value = poolWidth
        this.roundedBoxBelowMaterial!.uniforms.poolHeight.value = poolHeight
        this.roundedBoxBelowMaterial!.uniforms.poolLength.value = poolLength
      }

      this.aboveMesh.material = this.roundedBoxAboveMaterial
      this.belowMesh.material = this.roundedBoxBelowMaterial!
    }
  }

  /**
   * Prepares the above and below water surface materials by copying camera positions,
   * heightmap textures, light directions, and projection matrices.
   *
   * @param water The Water simulation instance.
   * @param camera The active viewing camera.
   * @param objectMatrices Projection matrices for reflections/refractions.
   */
  prepare(water: Water, camera: THREE.Camera, objectMatrices: ObjectTextureMatrices) {
    const eye = new THREE.Vector3()
    camera.getWorldPosition(eye)
    this.prepareMaterial(
      this.aboveMesh.material as THREE.ShaderMaterial,
      water,
      eye,
      objectMatrices
    )
    this.prepareMaterial(
      this.belowMesh.material as THREE.ShaderMaterial,
      water,
      eye,
      objectMatrices
    )
  }

  /**
   * Helper to instantiate a customized THREE.ShaderMaterial for the water surface.
   */
  private createMaterial(
    vertexShader: string,
    fragmentShader: string,
    side: THREE.Side,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture,
    causticTexture: THREE.Texture,
    objectReflectionTexture: THREE.Texture,
    objectClippedReflectionTexture: THREE.Texture,
    objectRefractionTexture: THREE.Texture
  ) {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        light: { value: this.state.lightDirection.clone() },
        ...this.state.createUniforms(),
        tiles: { value: tileTexture },
        causticTex: { value: causticTexture },
        objectReflectionTex: { value: objectReflectionTexture },
        objectClippedReflectionTex: { value: objectClippedReflectionTexture },
        objectRefractionTex: { value: objectRefractionTexture },
        viewProjectionMatrix: { value: new THREE.Matrix4() },
        reflectionViewProjectionMatrix: { value: new THREE.Matrix4() },
        water: { value: null },
        sky: { value: cubemap },
        eye: { value: new THREE.Vector3() },
      },
      side,
      depthTest: true,
      depthWrite: true,
    })
  }

  /**
   * Helper to bind current state variables and textures to the material uniforms prior to rendering.
   */
  private prepareMaterial(
    material: THREE.ShaderMaterial,
    water: Water,
    eye: THREE.Vector3,
    objectMatrices: ObjectTextureMatrices
  ) {
    material.uniforms.water.value = water.textureA.texture
    material.uniforms.eye.value.copy(eye)
    material.uniforms.light.value.copy(this.state.lightDirection)
    material.uniforms.viewProjectionMatrix.value.copy(objectMatrices.viewProjectionMatrix)
    material.uniforms.reflectionViewProjectionMatrix.value.copy(
      objectMatrices.reflectionViewProjectionMatrix
    )
    this.state.syncUniforms(material)
    material.uniformsNeedUpdate = true
  }
}
