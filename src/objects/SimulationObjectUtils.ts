import * as THREE from 'three'
import type { ObjectUpdateContext } from './SimulationObject'

/**
 * Updates the physics state (buoyancy, gravity, drag/friction, and pool floor collision)
 * for a simulation object.
 */
export function updatePhysics(
  seconds: number,
  position: THREE.Vector3,
  velocity: THREE.Vector3,
  context: ObjectUpdateContext,
  buoyancyRadius: number,
  floorClearance: number
) {
  if (context.dragging) {
    velocity.set(0, 0, 0)
    return
  }

  if (!context.physicsEnabled) return

  const buoyancyScale = context.densityEnabled ? 1 / context.density : 1.1
  const percentUnderWater = THREE.MathUtils.clamp((buoyancyRadius - position.y) / (2 * buoyancyRadius), 0, 1)

  velocity.addScaledVector(
    context.gravity,
    seconds - buoyancyScale * seconds * percentUnderWater
  )

  const speedSq = velocity.lengthSq()
  if (speedSq > 0) {
    velocity.addScaledVector(
      velocity.clone().normalize(),
      -percentUnderWater * seconds * speedSq
    )
  }

  position.addScaledVector(velocity, seconds)

  const floor = floorClearance - context.poolHeight
  if (position.y < floor) {
    position.y = floor
    velocity.y = Math.abs(velocity.y) * 0.7
  }
}

/**
 * Moves the object by delta and clamps its position inside the pool boundaries.
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
  position.add(delta)
  position.x = THREE.MathUtils.clamp(position.x, -limitX, limitX)
  position.y = THREE.MathUtils.clamp(position.y, floorClearance - poolHeight, 10)
  position.z = THREE.MathUtils.clamp(position.z, -limitZ, limitZ)
}
