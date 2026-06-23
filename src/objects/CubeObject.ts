import * as THREE from 'three'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import cubeRenderVert from '../shaders/objectCubeRender.vert'
import cubeRenderFrag from '../shaders/objectCubeRender.frag'
import type { Water } from '../Water'
import { BoxWaterDisplacement } from '../water/WaterDisplacement'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export class CubeObject implements SimulationObject {
  readonly name = 'Cube'
  readonly halfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  readonly position = new THREE.Vector3(-0.4, this.halfSize.y - 1, 0.2)
  readonly velocity = new THREE.Vector3()
  readonly floorY = this.halfSize.y - 1
  readonly displacement = new BoxWaterDisplacement(this.halfSize)
  readonly optics = {
    kind: 'box' as const,
    center: this.position,
    halfSize: this.halfSize,
  }
  readonly mesh: THREE.Mesh
  enabled = false

  private readonly previousPosition = this.position.clone()
  private readonly bounds = new THREE.Box3()
  private readonly material: THREE.ShaderMaterial

  constructor(private readonly resources: SimulationObjectRenderResources) {
    this.material = new THREE.ShaderMaterial({
      vertexShader: cubeRenderVert,
      fragmentShader: cubeRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        cubeCenter: { value: this.position.clone() },
        cubeHalfSize: { value: this.halfSize.clone() },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    })
    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), this.material)
    this.mesh.frustumCulled = false
    this.mesh.visible = false
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
      const buoyancyScale = context.densityEnabled ? 1 / context.density : 1.1
      const percentUnderWater = THREE.MathUtils.clamp(
        (this.halfSize.y - this.position.y) / (2 * this.halfSize.y),
        0,
        1
      )
      this.velocity.addScaledVector(
        context.gravity,
        seconds - buoyancyScale * seconds * percentUnderWater
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

    this.displacement.move(water, this.previousPosition, this.position)
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

  prepareRender(water: Water) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.resources.lightDirection)
    this.material.uniforms.cubeCenter.value.copy(this.position)
    this.material.uniforms.cubeHalfSize.value.copy(this.halfSize)
    this.material.uniformsNeedUpdate = true
  }

  private getInactivePosition() {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
