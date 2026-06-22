import * as THREE from 'three'
import type { SimulationObjectRenderState } from '../rendering/SimulationObjectRendering'
import type { Water } from '../Water'

export interface ObjectUpdateContext {
  dragging: boolean
  physicsEnabled: boolean
  gravity: THREE.Vector3
}

export interface SimulationObject {
  readonly name: string
  readonly mesh: THREE.Object3D
  readonly position: THREE.Vector3
  readonly renderState: SimulationObjectRenderState
  enabled: boolean

  setEnabled(enabled: boolean, water: Water): void
  update(seconds: number, context: ObjectUpdateContext, water: Water): void
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null
  moveBy(delta: THREE.Vector3): void
  prepareRender(water: Water): void
}
