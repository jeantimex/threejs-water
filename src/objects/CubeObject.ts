import * as THREE from 'three'
import type { Renderer } from '../Renderer'
import type { Water } from '../Water'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export class CubeObject implements SimulationObject {
  readonly name = 'Cube'
  readonly halfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  readonly position = new THREE.Vector3(-0.4, this.halfSize.y - 1, 0.2)
  readonly velocity = new THREE.Vector3()
  enabled = false

  private readonly previousPosition = this.position.clone()
  private readonly bounds = new THREE.Box3()

  constructor(readonly mesh: THREE.Object3D) {
    this.mesh.visible = false
  }

  setEnabled(enabled: boolean, water: Water, renderer: Renderer) {
    if (enabled === this.enabled) return

    const inactivePosition = this.getInactivePosition()
    if (enabled) {
      water.moveCube(inactivePosition, this.position, this.halfSize)
    } else {
      water.moveCube(this.position, inactivePosition, this.halfSize)
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
      const percentUnderWater = THREE.MathUtils.clamp(
        (this.halfSize.y - this.position.y) / (2 * this.halfSize.y),
        0,
        1
      )
      this.velocity.addScaledVector(
        context.gravity,
        seconds - 1.1 * seconds * percentUnderWater
      )
      const speedSq = this.velocity.lengthSq()
      if (speedSq > 0) {
        this.velocity.addScaledVector(
          this.velocity.clone().normalize(),
          -percentUnderWater * seconds * speedSq
        )
      }
      this.position.addScaledVector(this.velocity, seconds)

      const floor = this.halfSize.y - 1
      if (this.position.y < floor) {
        this.position.y = floor
        this.velocity.y = Math.abs(this.velocity.y) * 0.7
      }
    }

    water.moveCube(this.previousPosition, this.position, this.halfSize)
    this.previousPosition.copy(this.position)
  }

  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null

    this.bounds.set(
      this.position.clone().sub(this.halfSize),
      this.position.clone().add(this.halfSize)
    )
    return new THREE.Ray(origin, direction).intersectBox(this.bounds, new THREE.Vector3())
  }

  moveBy(delta: THREE.Vector3) {
    this.position.add(delta)
    this.position.x = THREE.MathUtils.clamp(
      this.position.x,
      this.halfSize.x - 1,
      1 - this.halfSize.x
    )
    this.position.y = THREE.MathUtils.clamp(this.position.y, this.halfSize.y - 1, 10)
    this.position.z = THREE.MathUtils.clamp(
      this.position.z,
      this.halfSize.z - 1,
      1 - this.halfSize.z
    )
  }

  syncRenderer(renderer: Renderer) {
    renderer.setObjectCubeState(this.position, this.halfSize, this.enabled)
  }

  prepareRender(renderer: Renderer, water: Water) {
    this.syncRenderer(renderer)
    renderer.renderObjectCube(water)
  }

  private getInactivePosition() {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
