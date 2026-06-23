import type * as THREE from 'three'
import type { WaterOpticsState } from './WaterOpticsState'

export interface SimulationObjectRenderResources {
  lightDirection: THREE.Vector3
  causticTexture: THREE.Texture
  opticsState: WaterOpticsState
}

