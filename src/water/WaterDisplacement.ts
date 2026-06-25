/**
 * @file WaterDisplacement.ts
 * @description Defines strategies and classes for calculating water surface displacement
 * when objects move through the water. This simulates interactive ripples and waves caused
 * by spheres, boxes, or composite shapes.
 */

import * as THREE from 'three'
import type { Water } from '../Water'

/**
 * Interface representing a strategy for displacing water surface heights
 * based on an object's movement from a previous position to a new position.
 */
export interface WaterDisplacementStrategy {
  /**
   * Displaces the water surface based on the movement of the object.
   * 
   * @param water The water simulation instance to apply the displacement to.
   * @param previousPosition The position of the object in the previous frame.
   * @param position The position of the object in the current frame.
   * @param poolWidth The half-width of the pool.
   * @param poolLength The half-length of the pool.
   */
  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolWidth?: number, poolLength?: number): void
}

/**
 * Strategy that simulates water displacement using a single sphere.
 */
export class SphereWaterDisplacement implements WaterDisplacementStrategy {
  /**
   * Creates a new SphereWaterDisplacement strategy.
   * @param radius The radius of the displacing sphere.
   */
  constructor(readonly radius: number) {}

  /**
   * Displaces water using a sphere.
   */
  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolWidth = 1.0, poolLength = 1.0) {
    water.moveSphere(previousPosition, position, this.radius, 1.0, poolWidth, poolLength)
  }
}

/**
 * Strategy that simulates water displacement using a box.
 */
export class BoxWaterDisplacement implements WaterDisplacementStrategy {
  /**
   * Creates a new BoxWaterDisplacement strategy.
   * @param halfSize The half-extents of the displacing box.
   */
  constructor(readonly halfSize: THREE.Vector3) {}

  /**
   * Displaces water using a box.
   */
  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolWidth = 1.0, poolLength = 1.0) {
    water.moveCube(previousPosition, position, this.halfSize, poolWidth, poolLength)
  }
}

/**
 * Represents a single sphere component in a compound/composite shape displacement strategy.
 */
export interface DisplacementSphere {
  /** The offset of the sphere's center relative to the root object's position. */
  offset: THREE.Vector3
  /** The radius of the sphere component. */
  radius: number
}

/**
 * Strategy that simulates water displacement using a compound group of spheres.
 * Useful for approximating complex or non-spherical shapes with multiple spheres.
 */
export class CompoundSphereWaterDisplacement implements WaterDisplacementStrategy {
  private readonly previousCenter = new THREE.Vector3()
  private readonly center = new THREE.Vector3()

  /**
   * Creates a new CompoundSphereWaterDisplacement strategy.
   * @param spheres The list of child displacement spheres that compose the shape.
   * @param displacementScale Scalar factor applied to the strength of the displacement.
   */
  constructor(
    readonly spheres: readonly DisplacementSphere[],
    readonly displacementScale: number = 1.0
  ) {}

  /**
   * Displaces water by iterating over all child spheres and accumulating their displacements.
   */
  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolWidth = 1.0, poolLength = 1.0) {
    for (const sphere of this.spheres) {
      this.previousCenter.copy(previousPosition).add(sphere.offset)
      this.center.copy(position).add(sphere.offset)
      water.moveSphere(this.previousCenter, this.center, sphere.radius, this.displacementScale, poolWidth, poolLength)
    }
  }
}

