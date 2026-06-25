import * as THREE from 'three'
import type { Water } from '../Water'

export interface WaterDisplacementStrategy {
  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolLength?: number): void
}

export class SphereWaterDisplacement implements WaterDisplacementStrategy {
  constructor(readonly radius: number) {}

  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolLength = 1.0) {
    water.moveSphere(previousPosition, position, this.radius, 1.0, poolLength)
  }
}

export class BoxWaterDisplacement implements WaterDisplacementStrategy {
  constructor(readonly halfSize: THREE.Vector3) {}

  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolLength = 1.0) {
    water.moveCube(previousPosition, position, this.halfSize, poolLength)
  }
}

export interface DisplacementSphere {
  offset: THREE.Vector3
  radius: number
}

export class CompoundSphereWaterDisplacement implements WaterDisplacementStrategy {
  private readonly previousCenter = new THREE.Vector3()
  private readonly center = new THREE.Vector3()

  constructor(
    readonly spheres: readonly DisplacementSphere[],
    readonly displacementScale: number = 1.0
  ) {}

  move(water: Water, previousPosition: THREE.Vector3, position: THREE.Vector3, poolLength = 1.0) {
    for (const sphere of this.spheres) {
      this.previousCenter.copy(previousPosition).add(sphere.offset)
      this.center.copy(position).add(sphere.offset)
      water.moveSphere(this.previousCenter, this.center, sphere.radius, this.displacementScale, poolLength)
    }
  }
}
