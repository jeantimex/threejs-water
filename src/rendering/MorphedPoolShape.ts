import * as THREE from 'three'

export type PoolShape = 'Box' | 'Cylinder' | 'Morphed'

export const MORPHED_POOL_LEFT_CENTER_X = -0.35
export const MORPHED_POOL_RIGHT_CENTER_X = 0.35
export const MORPHED_POOL_LEFT_RADIUS = 0.75
export const MORPHED_POOL_RIGHT_RADIUS = 0.65
export const MORPHED_POOL_SMOOTHING = 0.15
const MORPHED_POOL_BOUNDARY_SEGMENTS = 256

export interface PoolCollisionBounds {
  radius: number
  boxHalfSize?: THREE.Vector2
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function getMorphedPoolSdf(x: number, z: number) {
  const d1 = Math.sqrt((x - MORPHED_POOL_LEFT_CENTER_X) ** 2 + z ** 2) - MORPHED_POOL_LEFT_RADIUS
  const d2 = Math.sqrt((x - MORPHED_POOL_RIGHT_CENTER_X) ** 2 + z ** 2) - MORPHED_POOL_RIGHT_RADIUS
  const h = clamp(0.5 + 0.5 * (d2 - d1) / MORPHED_POOL_SMOOTHING, 0.0, 1.0)
  return {
    d1,
    d2,
    h,
    sdf: (d2 * (1 - h) + d1 * h) - MORPHED_POOL_SMOOTHING * h * (1 - h),
  }
}

export function getMorphedPoolRadiusAtAngle(theta: number): number {
  let low = 0.0
  let high = 2.0

  for (let iter = 0; iter < 20; iter++) {
    const mid = (low + high) * 0.5
    const x = mid * Math.cos(theta)
    const z = mid * Math.sin(theta)
    const { sdf } = getMorphedPoolSdf(x, z)

    if (sdf < 0) {
      low = mid
    } else {
      high = mid
    }
  }

  return low
}

const morphedPoolBoundary = Array.from({ length: MORPHED_POOL_BOUNDARY_SEGMENTS }, (_, i) => {
  const theta = (i / MORPHED_POOL_BOUNDARY_SEGMENTS) * Math.PI * 2
  const radius = getMorphedPoolRadiusAtAngle(theta)
  return new THREE.Vector2(radius * Math.cos(theta), radius * Math.sin(theta))
})

function closestPointOnSegment(point: THREE.Vector2, a: THREE.Vector2, b: THREE.Vector2) {
  const ab = b.clone().sub(a)
  const t = clamp(point.clone().sub(a).dot(ab) / ab.lengthSq(), 0.0, 1.0)
  return a.clone().addScaledVector(ab, t)
}

export function keepPointInsideMorphedPool(position: THREE.Vector3, clearanceRadius: number) {
  const point = new THREE.Vector2(position.x, position.z)
  const { sdf } = getMorphedPoolSdf(point.x, point.y)
  let closest = morphedPoolBoundary[0]
  let closestDistanceSq = Infinity

  for (let i = 0; i < MORPHED_POOL_BOUNDARY_SEGMENTS; i++) {
    const a = morphedPoolBoundary[i]
    const b = morphedPoolBoundary[(i + 1) % MORPHED_POOL_BOUNDARY_SEGMENTS]
    const candidate = closestPointOnSegment(point, a, b)
    const distanceSq = candidate.distanceToSquared(point)

    if (distanceSq < closestDistanceSq) {
      closest = candidate
      closestDistanceSq = distanceSq
    }
  }

  const distance = Math.sqrt(closestDistanceSq)
  if (sdf <= 0 && distance >= clearanceRadius) return

  const direction = sdf > 0
    ? closest.clone().sub(point)
    : point.clone().sub(closest)

  if (direction.lengthSq() < 1e-10) {
    direction.copy(closest).multiplyScalar(-1)
  }
  if (direction.lengthSq() < 1e-10) {
    direction.set(1, 0)
  }

  direction.normalize()
  point.copy(closest).addScaledVector(direction, clearanceRadius)
  position.x = point.x
  position.z = point.y
}

export function keepObjectInsidePool(
  position: THREE.Vector3,
  bounds: PoolCollisionBounds,
  poolShape: PoolShape
) {
  if (poolShape === 'Morphed') {
    keepPointInsideMorphedPool(position, bounds.radius)
    return
  }

  if (poolShape === 'Cylinder') {
    const limit = 1 - bounds.radius
    const dist = Math.sqrt(position.x * position.x + position.z * position.z)

    if (dist > limit) {
      const factor = limit / dist
      position.x *= factor
      position.z *= factor
    }
    return
  }

  const boxHalfSize = bounds.boxHalfSize ?? new THREE.Vector2(bounds.radius, bounds.radius)
  position.x = THREE.MathUtils.clamp(position.x, boxHalfSize.x - 1, 1 - boxHalfSize.x)
  position.z = THREE.MathUtils.clamp(position.z, boxHalfSize.y - 1, 1 - boxHalfSize.y)
}
