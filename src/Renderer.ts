import * as THREE from 'three'
import type { Water } from './Water'
import { CausticsPass } from './rendering/CausticsPass'
import { ObjectTexturePass } from './rendering/ObjectTexturePass'
import { PoolPass } from './rendering/PoolPass'
import type {
  SimulationObjectRenderResources,
} from './rendering/SimulationObjectRendering'
import { WaterSurfacePass } from './rendering/WaterSurfacePass'
import { WaterOpticsState } from './rendering/WaterOpticsState'
import type { PoolShape } from './rendering/MorphedPoolShape'
import type { WaterOpticsDescriptor } from './water/WaterOptics'

export class Renderer {
  readonly lightDir: THREE.Vector3
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
    this.objectTextures = new ObjectTexturePass(renderer, this.lightDir)
    this.caustics = new CausticsPass(renderer, this.opticsState, this.objectTextures.shadowTarget.texture)
    this.objectRenderResources = {
      lightDirection: this.lightDir,
      causticTexture: this.caustics.texture,
      opticsState: this.opticsState,
    }
    this.pool = new PoolPass(tileTexture, this.caustics.texture, this.opticsState)
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

  setSize(width: number, height: number) {
    this.objectTextures.setSize(width, height)
  }

  updateCaustics(water: Water) {
    this.caustics.update(water)
  }

  updateObjectTextures(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderableObject: THREE.Object3D | null
  ) {
    const needsObjectTextures = this.opticsState.torusKnotEnabled || this.opticsState.meshEnabled
    this.objectTextures.update(
      scene,
      camera,
      needsObjectTextures ? renderableObject : null
    )
  }

  renderPool(water: Water) {
    this.pool.prepare(water)
  }

  renderWater(water: Water, camera: THREE.Camera) {
    this.waterSurface.prepare(water, camera, {
      viewProjectionMatrix: this.objectTextures.viewProjectionMatrix,
      reflectionViewProjectionMatrix: this.objectTextures.reflectionViewProjectionMatrix,
    })
  }

  setPoolShape(shape: PoolShape) {
    this.opticsState.poolShapeName = shape
    this.opticsState.poolShape = shape === 'Rounded Box'
      ? 3
      : (shape === 'Morphed' ? 2 : (shape === 'Cylinder' ? 1 : 0))
    this.pool.setShape(shape)
    this.caustics.setShape(shape)
  }

  setRoundedBoxRadius(radius: number) {
    this.opticsState.roundedBoxRadius = radius
    this.pool.setRoundedBoxRadius()
    this.caustics.setRoundedBoxRadius()
  }

  setWaterOptics(optics: WaterOpticsDescriptor) {
    this.opticsState.apply(optics)
  }

  getPoolMesh() {
    return this.pool.mesh
  }

  getWaterMesh() {
    return this.waterSurface.aboveMesh
  }

  getWaterMeshBack() {
    return this.waterSurface.belowMesh
  }

  markWaterOpticsHidden() {
    this.pool.mesh.userData.waterOpticsHidden = true
    this.waterSurface.aboveMesh.userData.waterOpticsHidden = true
    this.waterSurface.belowMesh.userData.waterOpticsHidden = true
  }
}
