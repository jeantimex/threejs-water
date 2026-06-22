import type * as THREE from 'three'
import type { Renderer } from '../Renderer'
import type { Water } from '../Water'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export const NO_OBJECT = 'None'

export class SimulationObjectRegistry {
  private readonly objects = new Map<string, SimulationObject>()
  private activeObject: SimulationObject | null = null

  constructor(private readonly scene: THREE.Scene) {}

  register(object: SimulationObject, active = false) {
    if (this.objects.has(object.name)) {
      throw new Error(`Simulation object "${object.name}" is already registered`)
    }
    this.objects.set(object.name, object)
    this.scene.add(object.mesh)
    if (active) this.activeObject = object
    return this
  }

  get options(): string[] {
    return [NO_OBJECT, ...this.objects.keys()]
  }

  get active(): SimulationObject | null {
    return this.activeObject
  }

  select(name: string, water: Water, renderer: Renderer) {
    const nextObject = name === NO_OBJECT ? null : this.objects.get(name)
    if (name !== NO_OBJECT && !nextObject) {
      throw new Error(`Unknown simulation object "${name}"`)
    }
    if (nextObject === this.activeObject) return

    this.activeObject?.setEnabled(false, water, renderer)
    this.activeObject = nextObject ?? null
    this.activeObject?.setEnabled(true, water, renderer)
  }

  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    this.activeObject?.update(seconds, context, water)
  }

  syncRenderer(renderer: Renderer) {
    this.activeObject?.syncRenderer(renderer)
  }

  prepareRender(renderer: Renderer, water: Water) {
    this.activeObject?.prepareRender(renderer, water)
  }
}
