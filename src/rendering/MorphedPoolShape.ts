import * as THREE from 'three'

export type PoolShape = 'Box' | 'Cylinder' | 'Morphed' | 'Rounded Box'

export const MORPHED_POOL_LEFT_CENTER_X = -0.35
export const MORPHED_POOL_RIGHT_CENTER_X = 0.35
export const MORPHED_POOL_LEFT_RADIUS = 0.75
export const MORPHED_POOL_RIGHT_RADIUS = 0.65
export const MORPHED_POOL_SMOOTHING = 0.15
export const DEFAULT_ROUNDED_BOX_RADIUS = 0.35
const MORPHED_POOL_BOUNDARY_SEGMENTS = 256
const ROUNDED_BOX_BOUNDARY_SEGMENTS = 256

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

export function getRoundedBoxSdf(x: number, z: number, radius: number) {
  const r = clamp(radius, 0.0, 1.0)
  const innerHalfSize = 1 - r
  const qx = Math.abs(x) - innerHalfSize
  const qz = Math.abs(z) - innerHalfSize
  const outsideX = Math.max(qx, 0.0)
  const outsideZ = Math.max(qz, 0.0)
  return Math.sqrt(outsideX * outsideX + outsideZ * outsideZ) + Math.min(Math.max(qx, qz), 0.0) - r
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

export function getRoundedBoxRadiusAtAngle(theta: number, radius: number): number {
  let low = 0.0
  let high = 2.0

  for (let iter = 0; iter < 20; iter++) {
    const mid = (low + high) * 0.5
    const x = mid * Math.cos(theta)
    const z = mid * Math.sin(theta)
    const sdf = getRoundedBoxSdf(x, z, radius)

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

const roundedBoxBoundaries = new Map<string, THREE.Vector2[]>()

function getRoundedBoxBoundary(radius: number) {
  const key = clamp(radius, 0.0, 1.0).toFixed(4)
  const cached = roundedBoxBoundaries.get(key)
  if (cached) return cached

  const boundary = Array.from({ length: ROUNDED_BOX_BOUNDARY_SEGMENTS }, (_, i) => {
    const theta = (i / ROUNDED_BOX_BOUNDARY_SEGMENTS) * Math.PI * 2
    const boundaryRadius = getRoundedBoxRadiusAtAngle(theta, radius)
    return new THREE.Vector2(boundaryRadius * Math.cos(theta), boundaryRadius * Math.sin(theta))
  })
  roundedBoxBoundaries.set(key, boundary)
  return boundary
}

function closestPointOnSegment(point: THREE.Vector2, a: THREE.Vector2, b: THREE.Vector2) {
  const ab = b.clone().sub(a)
  const t = clamp(point.clone().sub(a).dot(ab) / ab.lengthSq(), 0.0, 1.0)
  return a.clone().addScaledVector(ab, t)
}

function keepPointInsideBoundaryPool(
  position: THREE.Vector3,
  clearanceRadius: number,
  sdf: (x: number, z: number) => number,
  boundary: THREE.Vector2[]
) {
  const point = new THREE.Vector2(position.x, position.z)
  const distanceToEdge = sdf(point.x, point.y)
  let closest = boundary[0]
  let closestDistanceSq = Infinity

  for (let i = 0; i < boundary.length; i++) {
    const a = boundary[i]
    const b = boundary[(i + 1) % boundary.length]
    const candidate = closestPointOnSegment(point, a, b)
    const distanceSq = candidate.distanceToSquared(point)

    if (distanceSq < closestDistanceSq) {
      closest = candidate
      closestDistanceSq = distanceSq
    }
  }

  const distance = Math.sqrt(closestDistanceSq)
  if (distanceToEdge <= 0 && distance >= clearanceRadius) return

  const direction = distanceToEdge > 0
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

export function keepPointInsideMorphedPool(position: THREE.Vector3, clearanceRadius: number) {
  keepPointInsideBoundaryPool(
    position,
    clearanceRadius,
    (x, z) => getMorphedPoolSdf(x, z).sdf,
    morphedPoolBoundary
  )
}

export function keepPointInsideRoundedBoxPool(
  position: THREE.Vector3,
  clearanceRadius: number,
  roundedBoxRadius: number
) {
  keepPointInsideBoundaryPool(
    position,
    clearanceRadius,
    (x, z) => getRoundedBoxSdf(x, z, roundedBoxRadius),
    getRoundedBoxBoundary(roundedBoxRadius)
  )
}

export function keepObjectInsidePool(
  position: THREE.Vector3,
  bounds: PoolCollisionBounds,
  poolShape: PoolShape,
  roundedBoxRadius = DEFAULT_ROUNDED_BOX_RADIUS
) {
  if (poolShape === 'Morphed') {
    keepPointInsideMorphedPool(position, bounds.radius)
    return
  }

  if (poolShape === 'Rounded Box') {
    keepPointInsideRoundedBoxPool(position, bounds.radius, roundedBoxRadius)
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
