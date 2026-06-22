import * as THREE from 'three'
import type { Renderer } from '../Renderer'
import type { Water } from '../Water'

export interface ObjectUpdateContext {
  dragging: boolean
  physicsEnabled: boolean
  gravity: THREE.Vector3
}

export interface SimulationObject {
  readonly name: string
  readonly mesh: THREE.Object3D
  enabled: boolean

  setEnabled(enabled: boolean, water: Water, renderer: Renderer): void
  update(seconds: number, context: ObjectUpdateContext, water: Water): void
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null
  moveBy(delta: THREE.Vector3): void
  syncRenderer(renderer: Renderer): void
  prepareRender(renderer: Renderer, water: Water): void
}
