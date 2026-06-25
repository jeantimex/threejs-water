import * as THREE from 'three'
import {
  NO_WATER_OPTICS,
  type WaterOpticsDescriptor,
} from '../water/WaterOptics'
import type { Water } from '../Water'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

// Special token representing that no object is selected in the simulation
export const NO_OBJECT = 'None'

/**
 * Manages the collection of simulation objects (Sphere, Cube, Duck, TorusKnot).
 * Handles registering new objects, adding their meshes to the ThreeJS scene,
 * selecting the active object, persisting position coordinates when switching objects,
 * and forwarding update/render commands to the active object.
 */
export class SimulationObjectRegistry {
  // Map of registered objects keyed by their name
  private readonly objects = new Map<string, SimulationObject>()
  // The currently active object in the simulation
  private activeObject: SimulationObject | null = null
  // Holds the coordinate position shared across objects, so when you switch
  // from Sphere to Cube, the Cube spawns where the Sphere was.
  private readonly sharedPosition = new THREE.Vector3()

  constructor(private readonly scene: THREE.Scene) {}

  /**
   * Registers a new simulation object. Adds its visual mesh to the ThreeJS scene.
   * If marked active, sets it as the default active object.
   */
  register(object: SimulationObject, active = false) {
    if (this.objects.has(object.name)) {
      throw new Error(`Simulation object "${object.name}" is already registered`)
    }
    this.objects.set(object.name, object)
    
    // Add the 3D mesh of the object to the scene so it can be rendered
    this.scene.add(object.mesh)
    
    if (active) {
      this.activeObject = object
      this.sharedPosition.copy(object.position)
    }
    return this
  }

  /**
   * Returns a list of all selectable options in the GUI (including 'None').
   */
  get options(): string[] {
    return [NO_OBJECT, ...this.objects.keys()]
  }

  /**
   * Returns the currently active simulation object, or null if 'None' is active.
   */
  get active(): SimulationObject | null {
    return this.activeObject
  }

  /**
   * Returns the optics description (kind, center, boundaries) of the active object
   * to be used by the water refraction/reflection shaders.
   */
  get optics(): WaterOpticsDescriptor {
    return this.activeObject?.optics ?? NO_WATER_OPTICS
  }

  /**
   * Switches the active simulation object.
   * Saves the position of the currently active object, disables it, activates the new object,
   * restores the shared position coordinates, clamps it to the pool bounds to prevent clipping,
   * and triggers the entrance displacement waves.
   */
  select(name: string, water: Water, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    const nextObject = name === NO_OBJECT ? null : this.objects.get(name)
    if (name !== NO_OBJECT && !nextObject) {
      throw new Error(`Unknown simulation object "${name}"`)
    }
    if (nextObject === this.activeObject) return

    // 1. Deactivate old object and save its position
    if (this.activeObject) {
      this.sharedPosition.copy(this.activeObject.position)
      this.activeObject.setEnabled(false, water)
    }
    
    // 2. Activate new object
    this.activeObject = nextObject ?? null
    if (this.activeObject) {
      // Restore coordinates
      this.activeObject.position.copy(this.sharedPosition)
      // Clamping: Ensure the new object is not below the pool base
      this.activeObject.position.y = Math.max(this.activeObject.position.y, this.activeObject.floorY(poolHeight))
      // Clamp within current pool dimensions
      this.activeObject.moveBy(new THREE.Vector3(0, 0, 0), poolWidth, poolHeight, poolLength)
      // Enable object, triggering splash displacement
      this.activeObject.setEnabled(true, water)
    }
  }

  /**
   * Runs the physical updates (buoyancy, gravity, bounds-clamping) for the active object.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    this.activeObject?.update(seconds, context, water)
  }

  /**
   * Binds uniforms (light directions, dimensions, water height textures) to the active object's material before rendering.
   */
  prepareRender(water: Water, poolWidth?: number, poolHeight?: number, poolLength?: number) {
    this.activeObject?.prepareRender(water, poolWidth, poolHeight, poolLength)
  }
}
