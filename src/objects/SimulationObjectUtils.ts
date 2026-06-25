import * as THREE from 'three'
import type { ObjectUpdateContext } from './SimulationObject'

/**
 * Updates the physics state (buoyancy, gravity, drag/friction, and pool floor collision)
 * for a simulation object.
 *
 * How the physics simulation works:
 * 1. Drag / Velocity Reset during interaction:
 *    If the object is being dragged by the cursor, its velocity is forced to 0 so it doesn't
 *    accrue kinetic energy while under manual control.
 *
 * 2. Buoyancy:
 *    We calculate the fraction of the object that is submerged in the water.
 *    The water surface is located at y = 0.
 *    For a sphere of radius R, the vertical boundaries are [y - R, y + R].
 *    - If the top of the object (y + R) is below y = 0, the object is completely submerged (percent = 1).
 *    - If the bottom of the object (y - R) is above y = 0, the object is completely out of water (percent = 0).
 *    - Otherwise, it is partially submerged, calculated as a linear interpolation:
 *      percent = clamp((R - position.y) / (2 * R), 0, 1)
 *
 *    The net acceleration vector is:
 *      acceleration = gravity * (1.0 - buoyancyScale * percentSubmerged)
 *    Where buoyancyScale is derived from the liquid density. If density is high, the buoyancy force is strong,
 *    causing lighter objects to float back to the surface.
 *
 * 3. Drag / Water Friction:
 *    Water resistance exerts a dampening force proportional to the square of the speed (drag force = -c * v^2).
 *    This force opposes the direction of movement and is scaled by the submergence percentage
 *    (objects experience no water drag when completely in the air).
 *
 * 4. Euler Integration:
 *    Position is updated using the standard forward Euler step: position += velocity * dt.
 *
 * 5. Pool Bottom Collision (Elastic Bounce):
 *    If the object's bottom boundary drops below the pool floor (floorY = clearance - poolHeight),
 *    we clamp its vertical position exactly to the pool floor and invert its vertical velocity,
 *    multiplied by a restitution coefficient (0.7) to simulate an elastic bounce.
 */
export function updatePhysics(
  seconds: number,
  position: THREE.Vector3,
  velocity: THREE.Vector3,
  context: ObjectUpdateContext,
  buoyancyRadius: number,
  floorClearance: number
) {
  // Reset velocity when manually dragging the object
  if (context.dragging) {
    velocity.set(0, 0, 0)
    return
  }

  // If physics is disabled, the object stays static (except for user drags)
  if (!context.physicsEnabled) return

  // Calculate buoyancy scale factor (relative density ratio of water vs object)
  const buoyancyScale = context.densityEnabled ? 1 / context.density : 1.1

  // Compute submerged portion: 0 = completely above water surface (y=0), 1 = completely submerged
  const percentUnderWater = THREE.MathUtils.clamp(
    (buoyancyRadius - position.y) / (2 * buoyancyRadius),
    0,
    1
  )

  // Accumulate velocity: net force = gravity (downward) - buoyancy (upward, scaled by submergence)
  velocity.addScaledVector(
    context.gravity,
    seconds - buoyancyScale * seconds * percentUnderWater
  )

  // Apply fluid drag: resistance is proportional to velocity squared and submergence percentage
  const speedSq = velocity.lengthSq()
  if (speedSq > 0) {
    velocity.addScaledVector(
      velocity.clone().normalize(),
      -percentUnderWater * seconds * speedSq
    )
  }

  // Integrate position: translate the object by its current velocity
  position.addScaledVector(velocity, seconds)

  // Floor collision resolution: bounce the object if it hits the bottom
  const floor = floorClearance - context.poolHeight
  if (position.y < floor) {
    position.y = floor
    velocity.y = Math.abs(velocity.y) * 0.7 // Invert vertical direction with energy loss (bounciness = 0.7)
  }
}

/**
 * Moves the object by delta and clamps its position inside the pool boundaries.
 *
 * Boundary rules:
 * 1. X bounds (Width): position.x is clamped between [-limitX, limitX], where limitX = poolWidth - xLimitRadius.
 * 2. Z bounds (Length): position.z is clamped between [-limitZ, limitZ], where limitZ = poolLength - zLimitRadius.
 * 3. Y bounds (Height/Depth): position.y is clamped to be at least floorClearance - poolHeight to stay above the floor,
 *    and up to an arbitrary ceiling height of 10 to keep it from flying away during drag interactions.
 */
export function clampAndMoveObject(
  position: THREE.Vector3,
  delta: THREE.Vector3,
  poolWidth: number,
  poolHeight: number,
  poolLength: number,
  xLimitRadius: number,
  zLimitRadius: number,
  floorClearance: number
) {
  const limitX = poolWidth - xLimitRadius
  const limitZ = poolLength - zLimitRadius
  
  // Apply translation offset
  position.add(delta)
  
  // Constrain coordinates within pool dimensions
  position.x = THREE.MathUtils.clamp(position.x, -limitX, limitX)
  position.y = THREE.MathUtils.clamp(position.y, floorClearance - poolHeight, 10)
  position.z = THREE.MathUtils.clamp(position.z, -limitZ, limitZ)
}
