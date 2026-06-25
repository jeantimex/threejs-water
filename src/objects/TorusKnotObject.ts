import * as THREE from 'three'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import torusKnotRenderVert from '../shaders/torusKnotRender.vert'
import torusKnotRenderFrag from '../shaders/torusKnotRender.frag'
import type { Water } from '../Water'
import { CompoundSphereWaterDisplacement } from '../water/WaterDisplacement'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export class TorusKnotObject implements SimulationObject {
  readonly name = 'TorusKnot'
  readonly boundingRadius = 0.31
  readonly floorClearance = 0.13
  readonly position = new THREE.Vector3(-0.4, this.floorClearance - 1, 0.2)
  readonly velocity = new THREE.Vector3()
  floorY(poolHeight: number) {
    return this.floorClearance - poolHeight
  }
  readonly displacement: CompoundSphereWaterDisplacement
  readonly optics = {
    kind: 'mesh' as const,
    center: this.position,
    boundingRadius: this.boundingRadius,
    shadowRadius: 0.13,
  }
  readonly mesh: THREE.Mesh
  enabled = false

  private readonly previousPosition = this.position.clone()
  private readonly material: THREE.ShaderMaterial
  private readonly raycaster = new THREE.Raycaster()

  constructor(private readonly resources: SimulationObjectRenderResources) {
    this.material = new THREE.ShaderMaterial({
      vertexShader: torusKnotRenderVert,
      fragmentShader: torusKnotRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        torusKnotCenter: { value: this.position.clone() },
        poolWidth: { value: 1.0 },
        poolHeight: { value: 1.0 },
        poolLength: { value: 1.0 },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
        texturePassMode: { value: 0 },
      },
      depthTest: true,
      depthWrite: true,
    })

    // Create TorusKnot mesh
    const geometry = new THREE.TorusKnotGeometry(0.17, 0.045, 64, 8)
    geometry.rotateX(Math.PI / 2)
    this.mesh = new THREE.Mesh(geometry, this.material)
    this.mesh.frustumCulled = false
    this.mesh.visible = false

    // Generate compound spheres for water displacement
    const spheres = []
    const segments = 24
    const radius = 0.17
    const tube = 0.045
    const p = 2
    const q = 3
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2
      const radialRadius = radius * (2 + Math.cos(q * theta)) * 0.5
      const x = radialRadius * Math.cos(p * theta)
      const z = radialRadius * Math.sin(p * theta)
      const y = -radius * Math.sin(q * theta) * 0.5
      spheres.push({
        offset: new THREE.Vector3(x, y, z),
        radius: tube * 2.0, // slightly larger to prevent gaps with fewer segments
      })
    }
    this.displacement = new CompoundSphereWaterDisplacement(spheres, 0.15)
  }

  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return

    const inactivePosition = this.getInactivePosition()
    if (enabled) {
      if (this.position.y <= this.boundingRadius - 1) {
        this.position.y = this.floorClearance - 1
      }
      this.displacement.move(water, inactivePosition, this.position)
      this.mesh.position.copy(this.position)
    } else {
      this.displacement.move(water, this.position, inactivePosition)
      this.mesh.position.copy(inactivePosition)
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
      const radius = this.boundingRadius
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

      const floor = this.floorClearance - context.poolHeight
      if (this.position.y < floor) {
        this.position.y = floor
        this.velocity.y = Math.abs(this.velocity.y) * 0.7
      }
    }

    this.displacement.move(water, this.previousPosition, this.position, context.poolWidth, context.poolLength)
    this.previousPosition.copy(this.position)
    this.mesh.position.copy(this.position)
  }

  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null
    this.mesh.position.copy(this.position)
    this.mesh.updateMatrixWorld(true)
    this.raycaster.set(origin, direction)
    const intersects = this.raycaster.intersectObject(this.mesh)
    if (intersects.length > 0) {
      return intersects[0].point
    }
    return null
  }

  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    const radius = this.boundingRadius
    const limitX = poolWidth - radius
    const limitZ = poolLength - radius
    this.position.add(delta)
    this.position.x = THREE.MathUtils.clamp(this.position.x, -limitX, limitX)
    this.position.y = THREE.MathUtils.clamp(this.position.y, this.floorClearance - poolHeight, 10)
    this.position.z = THREE.MathUtils.clamp(this.position.z, -limitZ, limitZ)
    this.mesh.position.copy(this.position)
  }

  prepareRender(water: Water, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.resources.lightDirection)
    this.material.uniforms.torusKnotCenter.value.copy(this.position)
    this.material.uniforms.poolWidth.value = poolWidth
    this.material.uniforms.poolHeight.value = poolHeight
    this.material.uniforms.poolLength.value = poolLength
    this.material.uniformsNeedUpdate = true
  }

  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
