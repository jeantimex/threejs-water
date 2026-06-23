import * as THREE from 'three'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import sphereRenderVert from '../shaders/sphereRender.vert'
import sphereRenderFrag from '../shaders/sphereRender.frag'
import type { Water } from '../Water'
import { SphereWaterDisplacement } from '../water/WaterDisplacement'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export class SphereObject implements SimulationObject {
  readonly name = 'Sphere'
  readonly position = new THREE.Vector3(-0.4, -0.75, 0.2)
  readonly velocity = new THREE.Vector3()
  readonly interactionRadius = 0.25
  readonly floorY = this.interactionRadius - 1
  readonly displacement = new SphereWaterDisplacement(this.interactionRadius)
  readonly optics = {
    kind: 'sphere' as const,
    center: this.position,
    radius: this.interactionRadius,
  }
  readonly mesh: THREE.Mesh
  enabled = true

  private readonly previousPosition = this.position.clone()
  private readonly material: THREE.ShaderMaterial

  constructor(private readonly resources: SimulationObjectRenderResources) {
    this.material = new THREE.ShaderMaterial({
      vertexShader: sphereRenderVert,
      fragmentShader: sphereRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        sphereCenter: { value: this.position.clone() },
        sphereRadius: { value: this.interactionRadius },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    })
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), this.material)
    this.mesh.frustumCulled = false
  }

  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return

    const inactivePosition = this.getInactivePosition()
    if (enabled) {
      this.displacement.move(water, inactivePosition, this.position)
    } else {
      this.displacement.move(water, this.position, inactivePosition)
      this.velocity.set(0, 0, 0)
    }

    this.enabled = enabled
    this.mesh.visible = enabled
    this.previousPosition.copy(this.position)
  }

  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return

    if (context.dragging) {
      this.velocity.set(0, 0, 0)
    } else if (context.physicsEnabled) {
      const radius = this.interactionRadius
      const buoyancyScale = context.densityEnabled ? 1 / context.density : 1.1
      const percentUnderWater = THREE.MathUtils.clamp((radius - this.position.y) / (2 * radius), 0, 1)
      this.velocity.add(
        context.gravity.clone().multiplyScalar(seconds - buoyancyScale * seconds * percentUnderWater)
      )
      const speedSq = this.velocity.lengthSq()
      if (speedSq > 0) {
        this.velocity.addScaledVector(
          this.velocity.clone().normalize(),
          -percentUnderWater * seconds * speedSq
        )
      }
      this.position.addScaledVector(this.velocity, seconds)

      if (this.position.y < radius - 1) {
        this.position.y = radius - 1
        this.velocity.y = Math.abs(this.velocity.y) * 0.7
      }
    }

    this.displacement.move(water, this.previousPosition, this.position)
    this.previousPosition.copy(this.position)
  }

  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null

    const toOrigin = origin.clone().sub(this.position)
    const a = direction.lengthSq()
    const b = 2 * toOrigin.dot(direction)
    const c = toOrigin.lengthSq() - this.interactionRadius * this.interactionRadius
    const discriminant = b * b - 4 * a * c

    if (discriminant <= 0) return null
    const distance = (-b - Math.sqrt(discriminant)) / (2 * a)
    return distance > 0
      ? origin.clone().addScaledVector(direction, distance)
      : null
  }

  moveBy(delta: THREE.Vector3) {
    const radius = this.interactionRadius
    this.position.add(delta)
    this.position.y = THREE.MathUtils.clamp(this.position.y, radius - 1, 10)
    if (this.resources.opticsState.poolShape === 2) {
      const x = this.position.x
      const z = this.position.z
      const d1 = Math.sqrt((x - (-0.4))**2 + z**2) - 0.55
      const d2 = Math.sqrt((x - 0.4)**2 + z**2) - 0.55
      const k = 0.15
      const h = Math.min(Math.max(0.5 + 0.5 * (d2 - d1) / k, 0.0), 1.0)
      const sdf = (d2 * (1 - h) + d1 * h) - k * h * (1 - h)
      
      const limit = -radius
      if (sdf > limit) {
        const diff1 = new THREE.Vector2(x - (-0.4), z)
        const diff2 = new THREE.Vector2(x - 0.4, z)
        const len1 = diff1.length()
        const len2 = diff2.length()
        const n1 = len1 > 1e-5 ? diff1.normalize() : new THREE.Vector2(1, 0)
        const n2 = len2 > 1e-5 ? diff2.normalize() : new THREE.Vector2(1, 0)
        
        const grad = new THREE.Vector2().addScaledVector(n2, 1 - h).addScaledVector(n1, h).normalize()
        const push = sdf - limit
        this.position.x -= grad.x * push
        this.position.z -= grad.y * push
      }
    } else if (this.resources.opticsState.poolShape === 1) {
      const limit = 1 - radius
      const dist = Math.sqrt(this.position.x * this.position.x + this.position.z * this.position.z)
      if (dist > limit) {
        const factor = limit / dist
        this.position.x *= factor
        this.position.z *= factor
      }
    } else {
      this.position.x = THREE.MathUtils.clamp(this.position.x, radius - 1, 1 - radius)
      this.position.z = THREE.MathUtils.clamp(this.position.z, radius - 1, 1 - radius)
    }
  }

  prepareRender(water: Water) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.resources.lightDirection)
    this.material.uniforms.sphereCenter.value.copy(this.position)
    this.material.uniforms.sphereRadius.value = this.interactionRadius
    this.material.uniformsNeedUpdate = true
  }

  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
