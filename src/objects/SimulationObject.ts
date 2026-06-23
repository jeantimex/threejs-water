import * as THREE from 'three'
import type { Water } from '../Water'
import type { WaterDisplacementStrategy } from '../water/WaterDisplacement'
import type { WaterOpticsDescriptor } from '../water/WaterOptics'

export interface ObjectUpdateContext {
  dragging: boolean
  physicsEnabled: boolean
  densityEnabled: boolean
  density: number
  gravity: THREE.Vector3
}

export interface SimulationObject {
  readonly name: string
  readonly mesh: THREE.Object3D
  readonly position: THREE.Vector3
  readonly optics: WaterOpticsDescriptor
  readonly displacement: WaterDisplacementStrategy
  enabled: boolean

  setEnabled(enabled: boolean, water: Water): void
  update(seconds: number, context: ObjectUpdateContext, water: Water): void
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null
  moveBy(delta: THREE.Vector3): void
  prepareRender(water: Water): void
}
