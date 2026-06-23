import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import duckRenderVert from '../shaders/duckRender.vert'
import duckRenderFrag from '../shaders/duckRender.frag'
import type { Water } from '../Water'
import { CompoundSphereWaterDisplacement, type DisplacementSphere } from '../water/WaterDisplacement'
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject'

export class DuckObject implements SimulationObject {
  readonly name = 'Rubber Duck'
  readonly boundingRadius = 0.25
  readonly floorClearance = 0.265
  readonly position = new THREE.Vector3(0.4, this.floorClearance - 1, -0.2)
  readonly velocity = new THREE.Vector3()
  readonly floorY = this.floorClearance - 1
  readonly displacement: CompoundSphereWaterDisplacement
  readonly optics = {
    kind: 'mesh' as const,
    center: this.position,
    boundingRadius: this.boundingRadius,
  }
  readonly mesh: THREE.Group
  enabled = false

  private readonly previousPosition = this.position.clone()
  private material: THREE.ShaderMaterial | null = null
  private loaded = false

  constructor(private readonly resources: SimulationObjectRenderResources) {
    this.mesh = new THREE.Group()
    this.mesh.frustumCulled = false
    this.mesh.visible = false

    this.displacement = new CompoundSphereWaterDisplacement(
      this.generateDisplacementSpheres(),
      0.15
    )

    this.loadModel()
  }

  private generateDisplacementSpheres(): DisplacementSphere[] {
    const spheres: DisplacementSphere[] = []
    spheres.push({ offset: new THREE.Vector3(0, 0, 0), radius: 0.15 })
    spheres.push({ offset: new THREE.Vector3(0, 0.1, 0.1), radius: 0.08 })
    spheres.push({ offset: new THREE.Vector3(0, -0.08, -0.05), radius: 0.1 })
    return spheres
  }

  private async loadModel() {
    const loader = new GLTFLoader()
    try {
      const gltf = await loader.loadAsync('/models/duck/Duck.gltf')
      const duckScene = gltf.scene

      const textureLoader = new THREE.TextureLoader()
      const texture = await textureLoader.loadAsync('/models/duck/DuckCM.png')
      texture.flipY = false

      this.material = new THREE.ShaderMaterial({
        vertexShader: duckRenderVert,
        fragmentShader: duckRenderFrag,
        uniforms: {
          light: { value: this.resources.lightDirection.clone() },
          water: { value: null },
          causticTex: { value: this.resources.causticTexture },
          modelTexture: { value: texture },
          texturePassMode: { value: 0 },
        },
        depthTest: true,
        depthWrite: true,
      })

      duckScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = this.material!
          child.frustumCulled = false
        }
      })

      const box = new THREE.Box3().setFromObject(duckScene)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      const maxDim = Math.max(size.x, size.y, size.z)
      const targetSize = this.boundingRadius * 2
      const scale = targetSize / maxDim

      duckScene.scale.setScalar(scale)
      duckScene.position.sub(center.multiplyScalar(scale))
      duckScene.position.y -= box.min.y * scale

      this.mesh.add(duckScene)
      this.loaded = true
    } catch (error) {
      console.error('Failed to load duck model:', error)
    }
  }

  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return

    const inactivePosition = this.getInactivePosition()
    if (enabled) {
      if (this.position.y <= this.floorClearance - 1) {
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
    this.mesh.visible = enabled && this.loaded
    this.previousPosition.copy(this.position)
  }

  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return

    if (!this.mesh.visible && this.loaded) {
      this.mesh.visible = true
    }

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

      const floor = this.floorClearance - 1
      if (this.position.y < floor) {
        this.position.y = floor
        this.velocity.y = Math.abs(this.velocity.y) * 0.7
      }
    }

    this.displacement.move(water, this.previousPosition, this.position)
    this.previousPosition.copy(this.position)
    this.mesh.position.copy(this.position)
  }

  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled || !this.loaded) return null

    const toOrigin = origin.clone().sub(this.position)
    const a = direction.lengthSq()
    const b = 2 * toOrigin.dot(direction)
    const c = toOrigin.lengthSq() - this.boundingRadius * this.boundingRadius
    const discriminant = b * b - 4 * a * c

    if (discriminant <= 0) return null
    const distance = (-b - Math.sqrt(discriminant)) / (2 * a)
    return distance > 0
      ? origin.clone().addScaledVector(direction, distance)
      : null
  }

  moveBy(delta: THREE.Vector3) {
    const radius = this.boundingRadius
    this.position.add(delta)
    this.position.x = THREE.MathUtils.clamp(this.position.x, radius - 1, 1 - radius)
    this.position.y = THREE.MathUtils.clamp(this.position.y, this.floorClearance - 1, 10)
    this.position.z = THREE.MathUtils.clamp(this.position.z, radius - 1, 1 - radius)
    this.mesh.position.copy(this.position)
  }

  prepareRender(water: Water) {
    if (!this.material) return
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.resources.lightDirection)
    this.material.uniformsNeedUpdate = true
  }

  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z)
  }
}
