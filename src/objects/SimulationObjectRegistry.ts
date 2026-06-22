import * as THREE from 'three'
import {
  NO_OBJECT_RENDER_STATE,
  type SimulationObjectRenderState,
} from '../rendering/SimulationObjectRendering'
import type { Water } from '../Water'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export const NO_OBJECT = 'None'

export class SimulationObjectRegistry {
  private readonly objects = new Map<string, SimulationObject>()
  private activeObject: SimulationObject | null = null
  private readonly sharedPosition = new THREE.Vector3()

  constructor(private readonly scene: THREE.Scene) {}

  register(object: SimulationObject, active = false) {
    if (this.objects.has(object.name)) {
      throw new Error(`Simulation object "${object.name}" is already registered`)
    }
    this.objects.set(object.name, object)
    this.scene.add(object.mesh)
    if (active) {
      this.activeObject = object
      this.sharedPosition.copy(object.position)
    }
    return this
  }

  get options(): string[] {
    return [NO_OBJECT, ...this.objects.keys()]
  }

  get active(): SimulationObject | null {
    return this.activeObject
  }

  get renderState(): SimulationObjectRenderState {
    return this.activeObject?.renderState ?? NO_OBJECT_RENDER_STATE
  }

  select(name: string, water: Water) {
    const nextObject = name === NO_OBJECT ? null : this.objects.get(name)
    if (name !== NO_OBJECT && !nextObject) {
      throw new Error(`Unknown simulation object "${name}"`)
    }
    if (nextObject === this.activeObject) return

    if (this.activeObject) {
      this.sharedPosition.copy(this.activeObject.position)
      this.activeObject.setEnabled(false, water)
    }
    this.activeObject = nextObject ?? null
    if (this.activeObject) {
      this.activeObject.position.copy(this.sharedPosition)
      this.activeObject.setEnabled(true, water)
    }
  }

  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    this.activeObject?.update(seconds, context, water)
  }

  prepareRender(water: Water) {
    this.activeObject?.prepareRender(water)
  }
}
