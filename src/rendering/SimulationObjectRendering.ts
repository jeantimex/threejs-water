import type * as THREE from 'three'

export interface SimulationObjectRenderResources {
  lightDirection: THREE.Vector3
  causticTexture: THREE.Texture
}
