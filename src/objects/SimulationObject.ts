import * as THREE from 'three'
import type { Water } from '../Water'
import type { WaterDisplacementStrategy } from '../water/WaterDisplacement'
import type { WaterOpticsDescriptor } from '../water/WaterOptics'

/**
 * Context holding the physical properties and interaction states passed to the object update loop.
 */
export interface ObjectUpdateContext {
  /** True if the user is currently holding/dragging the object in the viewport. */
  dragging: boolean
  /** True if physical updates like gravity and buoyancy should be applied. */
  physicsEnabled: boolean
  /** True if the water simulation should take the object's relative density into account. */
  densityEnabled: boolean
  /** Density multiplier for the object relative to water (1.0). */
  density: number
  /** Gravity direction and magnitude vector (usually vec3(0, -9.8, 0)). */
  gravity: THREE.Vector3
  /** Current horizontal X boundary of the pool (extending from -width to +width). */
  poolWidth: number
  /** Current vertical Y boundary of the pool (extending down to -poolHeight). */
  poolHeight: number
  /** Current horizontal Z boundary of the pool (extending from -length to +length). */
  poolLength: number
}

/**
 * Interface that all interactive simulation obstacles (Sphere, Cube, TorusKnot, Duck) must implement.
 * Manages physical properties, bounds containment, ray-intersection tests, water displacement,
 * and rendering state updates.
 */
export interface SimulationObject {
  /** The unique name identifying the shape (e.g. 'Sphere', 'Cube', etc.). */
  readonly name: string
  /** The Three.js Object3D visual representation added to the scene. */
  readonly mesh: THREE.Object3D
  /** The current spatial position of the object in 3D space. */
  readonly position: THREE.Vector3
  /** The current linear velocity of the object (units/sec). */
  readonly velocity: THREE.Vector3
  /** Calculates the lowest Y position the object can reach based on the pool height. */
  floorY(poolHeight: number): number
  /** Optical descriptor detailing the shape geometry and boundaries for refraction shaders. */
  readonly optics: WaterOpticsDescriptor
  /** Strategy detailing how the shape pushes water aside to create waves. */
  readonly displacement: WaterDisplacementStrategy
  /** Whether the object is active in the current scene. */
  enabled: boolean

  /**
   * Toggles the object's active state.
   * If enabled, starts drawing the mesh and dispatches entrance waves to the water grid.
   */
  setEnabled(enabled: boolean, water: Water): void
  
  /**
   * Force syncs the tracking of previous position coordinates.
   * Prevents large instant velocity calculations when resetting or moving layouts.
   */
  syncPreviousPosition(): void
  
  /**
   * Runs physical integration (gravity, buoyancy, floor collisions) and clamps positions to pool bounds.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water): void
  
  /**
   * Performs a ray-cast intersection test against the object's geometry.
   * Used for user cursor drag interactions.
   *
   * @returns The hit coordinate point in 3D space, or null if no intersection occurs.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null
  
  /**
   * Translates the object by a spatial offset vector and keeps it strictly inside pool boundaries.
   */
  moveBy(delta: THREE.Vector3, poolWidth?: number, poolHeight?: number, poolLength?: number): void
  
  /**
   * Binds uniforms (light vectors, caustic textures) to the object's material ahead of the render pass.
   */
  prepareRender(water: Water, poolWidth?: number, poolHeight?: number, poolLength?: number): void
}
