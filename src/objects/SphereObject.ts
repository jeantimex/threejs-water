import * as THREE from 'three'
import type { Renderer } from '../Renderer'
import type { Water } from '../Water'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export class SphereObject implements SimulationObject {
  readonly name = 'Sphere'
  readonly position = new THREE.Vector3(-0.4, -0.75, 0.2)
  readonly velocity = new THREE.Vector3()
  readonly interactionRadius = 0.25
  enabled = true

  private readonly previousPosition = this.position.clone()

  constructor(readonly mesh: THREE.Object3D) {}

  setEnabled(enabled: boolean, water: Water, renderer: Renderer) {
    if (enabled === this.enabled) return

    const inactivePosition = this.getInactivePosition()
    if (enabled) {
      water.moveSphere(inactivePosition, this.position, this.interactionRadius)
    } else {
      water.moveSphere(this.position, inactivePosition, this.interactionRadius)
      this.velocity.set(0, 0, 0)
    }

    this.enabled = enabled
    this.previousPosition.copy(this.position)
    this.syncRenderer(renderer)
  }

  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return

    if (context.dragging) {
      this.velocity.set(0, 0, 0)
    } else if (context.physicsEnabled) {
      const radius = this.interactionRadius
      const percentUnderWater = THREE.MathUtils.clamp((radius - this.position.y) / (2 * radius), 0, 1)
      this.velocity.add(
        context.gravity.clone().multiplyScalar(seconds - 1.1 * seconds * percentUnderWater)
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

    water.moveSphere(this.previousPosition, this.position, this.interactionRadius)
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
    this.position.x = THREE.MathUtils.clamp(this.position.x, radius - 1, 1 - radius)
    this.position.y = THREE.MathUtils.clamp(this.position.y, radius - 1, 10)
    this.position.z = THREE.MathUtils.clamp(this.position.z, radius - 1, 1 - radius)
  }

  syncRenderer(renderer: Renderer) {
    renderer.setSphereState(this.position, this.interactionRadius, this.enabled)
  }

  prepareRender(renderer: Renderer, water: Water) {
    this.syncRenderer(renderer)
    renderer.renderSphere(water)
  }

  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
