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
  poolWidth: number
  poolHeight: number
  poolLength: number
}

export interface SimulationObject {
  readonly name: string
  readonly mesh: THREE.Object3D
  readonly position: THREE.Vector3
  readonly velocity: THREE.Vector3
  floorY(poolHeight: number): number
  readonly optics: WaterOpticsDescriptor
  readonly displacement: WaterDisplacementStrategy
  enabled: boolean

  setEnabled(enabled: boolean, water: Water): void
  syncPreviousPosition(): void
  update(seconds: number, context: ObjectUpdateContext, water: Water): void
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null
  moveBy(delta: THREE.Vector3, poolWidth?: number, poolHeight?: number, poolLength?: number): void
  prepareRender(water: Water, poolWidth?: number, poolHeight?: number, poolLength?: number): void
}
