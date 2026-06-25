import * as THREE from 'three'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import cubeRenderVert from '../shaders/ObjectCubeRender.vert'
import cubeRenderFrag from '../shaders/ObjectCubeRender.frag'
import type { Water } from '../Water'
import { BoxWaterDisplacement } from '../water/WaterDisplacement'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils'

/**
 * Represents a cube (or rectangular cuboid) shape obstacle in the water simulation.
 * Implements SimulationObject. Extends a standard bounding box to support custom
 * physical properties, displacements, and interactions.
 */
export class CubeObject implements SimulationObject {
  readonly name = 'Cube'
  // Bounding half dimensions of the box (0.25 on each side, representing a 0.5x0.5x0.5 cube)
  readonly halfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  // Spawn position
  readonly position = new THREE.Vector3(-0.4, this.halfSize.y - 1, 0.2)
  readonly velocity = new THREE.Vector3()

  /**
   * Returns the minimum Y center coordinate when the cube rests on the pool floor.
   */
  floorY(poolHeight: number) {
    return this.halfSize.y - poolHeight
  }

  // Displacement strategy representing how moving box boundaries alter water heights
  readonly displacement = new BoxWaterDisplacement(this.halfSize)
  // Optics description for raytracing reflections/refractions in the water shader
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
    // Custom shader material mapping sunlight directions and caustics map
    this.material = new THREE.ShaderMaterial({
      vertexShader: cubeRenderVert,
      fragmentShader: cubeRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        cubeCenter: { value: this.position.clone() },
        cubeHalfSize: { value: this.halfSize.clone() },
        poolWidth: { value: 1.0 },
        poolHeight: { value: 1.0 },
        poolLength: { value: 1.0 },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    })

    // Create a 1x1x1 unit box mesh. Scaling/translation are computed dynamically on the GPU.
    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), this.material)
    this.mesh.frustumCulled = false
    this.mesh.visible = false
  }

  /**
   * Toggles the active state of the cube, triggering splash displacements.
   */
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

  /**
   * Resets position history to prevent displacement spikes.
   */
  syncPreviousPosition() {
    this.previousPosition.copy(this.position)
  }

  /**
   * Main update tick to execute buoyancy/gravity physics and write wave height displacements.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return

    updatePhysics(seconds, this.position, this.velocity, context, this.halfSize.y, this.halfSize.y)

    this.displacement.move(
      water,
      this.previousPosition,
      this.position,
      context.poolWidth,
      context.poolLength
    )
    this.previousPosition.copy(this.position)
  }

  /**
   * Computes ray-box intersection for mouse drags.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null

    this.bounds.set(
      this.position.clone().sub(this.halfSize),
      this.position.clone().add(this.halfSize)
    )
    return new THREE.Ray(origin, direction).intersectBox(this.bounds, new THREE.Vector3())
  }

  /**
   * Translates the box position and clamps it within the pool boundaries.
   */
  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    clampAndMoveObject(
      this.position,
      delta,
      poolWidth,
      poolHeight,
      poolLength,
      this.halfSize.x,
      this.halfSize.z,
      this.halfSize.y
    )
  }

  /**
   * Pre-renders uniform values for light direction and dimensions.
   */
  prepareRender(water: Water, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.resources.lightDirection)
    this.material.uniforms.cubeCenter.value.copy(this.position)
    this.material.uniforms.cubeHalfSize.value.copy(this.halfSize)
    this.material.uniforms.poolWidth.value = poolWidth
    this.material.uniforms.poolHeight.value = poolHeight
    this.material.uniforms.poolLength.value = poolLength
    this.material.uniformsNeedUpdate = true
  }

  /**
   * Returns a coordinate high in the sky (Y=10.0) where the object stays when inactive.
   */
  private getInactivePosition() {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
