import * as THREE from 'three'

export const MORPHED_POOL_LEFT_CENTER_X = -0.35
export const MORPHED_POOL_RIGHT_CENTER_X = 0.35
export const MORPHED_POOL_LEFT_RADIUS = 0.75
export const MORPHED_POOL_RIGHT_RADIUS = 0.65
export const MORPHED_POOL_SMOOTHING = 0.15

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

export function keepPointInsideMorphedPool(position: THREE.Vector3, clearanceRadius: number) {
  const x = position.x
  const z = position.z
  const { h, sdf } = getMorphedPoolSdf(x, z)
  const limit = -clearanceRadius

  if (sdf <= limit) return

  const diff1 = new THREE.Vector2(x - MORPHED_POOL_LEFT_CENTER_X, z)
  const diff2 = new THREE.Vector2(x - MORPHED_POOL_RIGHT_CENTER_X, z)
  const len1 = diff1.length()
  const len2 = diff2.length()
  const n1 = len1 > 1e-5 ? diff1.normalize() : new THREE.Vector2(1, 0)
  const n2 = len2 > 1e-5 ? diff2.normalize() : new THREE.Vector2(1, 0)
  const grad = new THREE.Vector2().addScaledVector(n2, 1 - h).addScaledVector(n1, h).normalize()
  const push = sdf - limit

  position.x -= grad.x * push
  position.z -= grad.y * push
}
