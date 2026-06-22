import type * as THREE from 'three'

export type WaterOpticsDescriptor =
  | { kind: 'none' }
  | { kind: 'sphere'; center: THREE.Vector3; radius: number }
  | { kind: 'box'; center: THREE.Vector3; halfSize: THREE.Vector3 }
  | { kind: 'torusknot'; center: THREE.Vector3 }

export const NO_WATER_OPTICS: WaterOpticsDescriptor = { kind: 'none' }
