import type * as THREE from 'three'

export interface SimulationObjectRenderResources {
  lightDirection: THREE.Vector3
  causticTexture: THREE.Texture
}

export type SimulationObjectRenderState =
  | { kind: 'none' }
  | { kind: 'sphere'; center: THREE.Vector3; radius: number }
  | { kind: 'box'; center: THREE.Vector3; halfSize: THREE.Vector3 }

export const NO_OBJECT_RENDER_STATE: SimulationObjectRenderState = { kind: 'none' }
