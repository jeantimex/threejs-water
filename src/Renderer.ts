import * as THREE from 'three'
import type { Water } from './Water'
import { CausticsPass } from './rendering/CausticsPass'
import { ObjectTexturePass } from './rendering/ObjectTexturePass'
import { PoolPass } from './rendering/PoolPass'
import type { SimulationObjectRenderResources } from './rendering/SimulationObjectRendering'
import { WaterSurfacePass } from './rendering/WaterSurfacePass'
import { WaterOpticsState } from './rendering/WaterOpticsState'
import type { WaterOpticsDescriptor } from './water/WaterOptics'

/**
 * High-level orchestration class for the rendering pipeline.
 * Coordinates all specific rendering passes:
 * 1. ObjectTexturePass: Generates depth/shadow maps and reflection/refraction textures.
 * 2. CausticsPass: Projects light rays through moving waves to create focusing light maps.
 * 3. PoolPass: Draws pool floor and walls with repeating tile texture maps.
 * 4. WaterSurfacePass: Renders above/below water boundary planes with Fresnel reflections.
 */
export class Renderer {
  // Light ray vector pointing to the sun/light source
  readonly lightDir: THREE.Vector3
  // Shared resources (light direction, caustics texture) passed to active simulation objects
  readonly objectRenderResources: SimulationObjectRenderResources

  private readonly opticsState: WaterOpticsState
  private readonly objectTextures: ObjectTexturePass
  private readonly caustics: CausticsPass
  private readonly pool: PoolPass
  private readonly waterSurface: WaterSurfacePass

  constructor(
    renderer: THREE.WebGLRenderer,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture
  ) {
    this.opticsState = new WaterOpticsState()
    this.lightDir = this.opticsState.lightDirection

    // 1. Instantiate render targets for reflections/refractions/shadow maps
    this.objectTextures = new ObjectTexturePass(renderer, this.lightDir)

    // 2. Instantiate caustics generation pass
    this.caustics = new CausticsPass(
      renderer,
      this.opticsState,
      this.objectTextures.shadowTarget.texture
    )

    this.objectRenderResources = {
      lightDirection: this.lightDir,
      causticTexture: this.caustics.texture,
    }

    // 3. Instantiate pool interior rendering pass
    this.pool = new PoolPass(tileTexture, this.caustics.texture, this.opticsState)

    // 4. Instantiate water surface boundary mesh pass
    this.waterSurface = new WaterSurfacePass(
      tileTexture,
      cubemap,
      this.caustics.texture,
      this.objectTextures.reflectionTarget.texture,
      this.objectTextures.clippedReflectionTarget.texture,
      this.objectTextures.refractionTarget.texture,
      this.opticsState
    )
  }

  /**
   * Resizes offscreen render target buffers on viewport window resolution adjustments.
   */
  setSize(width: number, height: number) {
    this.objectTextures.setSize(width, height)
  }

  /**
   * Triggers the GPU execution pass to update the dynamic caustics light map.
   */
  updateCaustics(water: Water) {
    this.caustics.update(water)
  }

  /**
   * Generates offscreen textures of active obstacles inside/above the pool.
   * If there are no complex meshes or torus knots, cleans the targets immediately.
   */
  updateObjectTextures(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderableObject: THREE.Object3D | null
  ) {
    const needsObjectTextures = this.opticsState.torusKnotEnabled || this.opticsState.meshEnabled
    this.objectTextures.update(scene, camera, needsObjectTextures ? renderableObject : null)
  }

  /**
   * Binds heightmaps and caustics map uniforms to prepare rendering the pool walls.
   */
  renderPool(water: Water) {
    this.pool.prepare(water)
  }

  /**
   * Prepares water surface meshes and updates reflection matrices.
   */
  renderWater(water: Water, camera: THREE.Camera) {
    this.waterSurface.prepare(water, camera, {
      viewProjectionMatrix: this.objectTextures.viewProjectionMatrix,
      reflectionViewProjectionMatrix: this.objectTextures.reflectionViewProjectionMatrix,
    })
  }

  /**
   * Synchronizes active uniforms when switching simulation obstacles (e.g. Sphere -> Duck).
   */
  setWaterOptics(optics: WaterOpticsDescriptor) {
    this.opticsState.apply(optics)
  }

  /**
   * Propagates new pool geometry dimensions (width, height, length) and corner radius settings
   * to all respective rendering passes.
   */
  setPoolShape(
    shape: string,
    cornerRadius: number,
    poolWidth: number,
    poolHeight: number,
    poolLength: number
  ) {
    this.pool.setPoolShape(shape, cornerRadius, poolWidth, poolHeight, poolLength)
    this.caustics.setPoolShape(shape, cornerRadius, poolWidth, poolHeight, poolLength)
    this.waterSurface.setPoolShape(shape, cornerRadius, poolWidth, poolHeight, poolLength)
    this.objectTextures.setPoolBounds(poolWidth, poolLength)
  }

  /**
   * Returns the pool wall mesh.
   */
  getPoolMesh() {
    return this.pool.mesh
  }

  /**
   * Returns the above-water boundary surface mesh.
   */
  getWaterMesh() {
    return this.waterSurface.aboveMesh
  }

  /**
   * Returns the below-water boundary surface mesh.
   */
  getWaterMeshBack() {
    return this.waterSurface.belowMesh
  }

  /**
   * Auxiliary flag marker denoting that the water mesh doesn't render default textures.
   */
  markWaterOpticsHidden() {
    this.pool.mesh.userData.waterOpticsHidden = true
    this.waterSurface.aboveMesh.userData.waterOpticsHidden = true
    this.waterSurface.belowMesh.userData.waterOpticsHidden = true
  }
}
