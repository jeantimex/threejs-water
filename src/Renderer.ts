import * as THREE from 'three'
import type { Water } from './Water'
import { CausticsPass } from './rendering/CausticsPass'
import { PoolPass } from './rendering/PoolPass'
import type {
  SimulationObjectRenderResources,
} from './rendering/SimulationObjectRendering'
import { WaterSurfacePass } from './rendering/WaterSurfacePass'
import { WaterOpticsState } from './rendering/WaterOpticsState'
import type { WaterOpticsDescriptor } from './water/WaterOptics'

export class Renderer {
  readonly lightDir: THREE.Vector3
  readonly objectRenderResources: SimulationObjectRenderResources

  private readonly opticsState: WaterOpticsState
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
    this.caustics = new CausticsPass(renderer, this.opticsState)
    this.objectRenderResources = {
      lightDirection: this.lightDir,
      causticTexture: this.caustics.texture,
    }
    this.pool = new PoolPass(tileTexture, this.caustics.texture, this.opticsState)
    this.waterSurface = new WaterSurfacePass(
      tileTexture,
      cubemap,
      this.caustics.texture,
      this.opticsState
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
}
