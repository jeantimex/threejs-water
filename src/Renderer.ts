import * as THREE from 'three'
import type { Water } from './Water'
import { CausticsPass } from './rendering/CausticsPass'
import { ObjectRenderState } from './rendering/ObjectRenderState'
import { PoolPass } from './rendering/PoolPass'
import { SimulationObjectPass } from './rendering/SimulationObjectPass'
import { WaterSurfacePass } from './rendering/WaterSurfacePass'

export class Renderer {
  readonly lightDir: THREE.Vector3

  private readonly caustics: CausticsPass
  private readonly pool: PoolPass
  private readonly waterSurface: WaterSurfacePass
  private readonly simulationObjects: SimulationObjectPass

  constructor(
    renderer: THREE.WebGLRenderer,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture
  ) {
    const state = new ObjectRenderState()
    this.lightDir = state.lightDirection
    this.caustics = new CausticsPass(renderer, state)
    this.pool = new PoolPass(tileTexture, this.caustics.texture, state)
    this.waterSurface = new WaterSurfacePass(
      tileTexture,
      cubemap,
      this.caustics.texture,
      state
    )
    this.simulationObjects = new SimulationObjectPass(this.caustics.texture, state)
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

  renderSphere(water: Water) {
    this.simulationObjects.prepareSphere(water)
  }

  renderObjectCube(water: Water) {
    this.simulationObjects.prepareCube(water)
  }

  setSphereState(center: THREE.Vector3, radius: number, enabled: boolean) {
    this.simulationObjects.setSphere(center, radius, enabled)
  }

  setObjectCubeState(center: THREE.Vector3, halfSize: THREE.Vector3, enabled: boolean) {
    this.simulationObjects.setCube(center, halfSize, enabled)
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

  getSphereMesh() {
    return this.simulationObjects.sphereMesh
  }

  getObjectCubeMesh() {
    return this.simulationObjects.cubeMesh
  }
}
