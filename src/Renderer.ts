import * as THREE from 'three'
import type { Water } from './Water'
import { CausticsPass } from './rendering/CausticsPass'
import { ObjectRenderState } from './rendering/ObjectRenderState'
import { PoolPass } from './rendering/PoolPass'
import type {
  SimulationObjectRenderResources,
  SimulationObjectRenderState,
} from './rendering/SimulationObjectRendering'
import { WaterSurfacePass } from './rendering/WaterSurfacePass'

export class Renderer {
  readonly lightDir: THREE.Vector3
  readonly objectRenderResources: SimulationObjectRenderResources

  private readonly objectState: ObjectRenderState
  private readonly caustics: CausticsPass
  private readonly pool: PoolPass
  private readonly waterSurface: WaterSurfacePass

  constructor(
    renderer: THREE.WebGLRenderer,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture
  ) {
    this.objectState = new ObjectRenderState()
    this.lightDir = this.objectState.lightDirection
    this.caustics = new CausticsPass(renderer, this.objectState)
    this.objectRenderResources = {
      lightDirection: this.lightDir,
      causticTexture: this.caustics.texture,
    }
    this.pool = new PoolPass(tileTexture, this.caustics.texture, this.objectState)
    this.waterSurface = new WaterSurfacePass(
      tileTexture,
      cubemap,
      this.caustics.texture,
      this.objectState
    )
  }

  updateCaustics(water: Water) {
    this.caustics.update(water)
  }

  renderPool(water: Water) {
    this.pool.prepare(water)
  }

  renderWater(water: Water, camera: THREE.Camera) {
    this.waterSurface.prepare(water, camera)
  }

  setSimulationObject(object: SimulationObjectRenderState) {
    this.objectState.apply(object)
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
}
