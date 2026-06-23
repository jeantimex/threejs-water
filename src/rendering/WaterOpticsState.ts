import * as THREE from 'three'
import type { WaterOpticsDescriptor } from '../water/WaterOptics'
import { DEFAULT_ROUNDED_BOX_RADIUS, type PoolShape } from './MorphedPoolShape'

export class WaterOpticsState {
  readonly lightDirection = new THREE.Vector3(2, 2, -1).normalize()
  poolShapeName: PoolShape = 'Box'
  poolShape = 0 // 0 = Box, 1 = Cylinder, 2 = Morphed, 3 = Rounded Box
  roundedBoxRadius = DEFAULT_ROUNDED_BOX_RADIUS
  readonly sphereCenter = new THREE.Vector3()
  sphereRadius = 0.25
  sphereEnabled = false
  readonly cubeCenter = new THREE.Vector3()
  readonly cubeHalfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  cubeEnabled = false
  readonly torusKnotCenter = new THREE.Vector3()
  torusKnotEnabled = false
  readonly meshCenter = new THREE.Vector3()
  meshBoundingRadius = 0.25
  meshEnabled = false

  apply(optics: WaterOpticsDescriptor) {
    this.sphereEnabled = false
    this.cubeEnabled = false
    this.torusKnotEnabled = false
    this.meshEnabled = false

    if (optics.kind === 'sphere') {
      this.sphereCenter.copy(optics.center)
      this.sphereRadius = optics.radius
      this.sphereEnabled = true
    } else if (optics.kind === 'box') {
      this.cubeCenter.copy(optics.center)
      this.cubeHalfSize.copy(optics.halfSize)
      this.cubeEnabled = true
    } else if (optics.kind === 'torusknot') {
      this.torusKnotCenter.copy(optics.center)
      this.torusKnotEnabled = true
    } else if (optics.kind === 'mesh') {
      this.meshCenter.copy(optics.center)
      this.meshBoundingRadius = optics.boundingRadius
      this.meshEnabled = true
    }
  }

  createUniforms() {
    return {
      poolShape: { value: this.poolShape },
      roundedBoxRadius: { value: this.roundedBoxRadius },
      sphereCenter: { value: this.sphereCenter.clone() },
      sphereRadius: { value: this.sphereRadius },
      sphereEnabled: { value: this.sphereEnabled },
      cubeCenter: { value: this.cubeCenter.clone() },
      cubeHalfSize: { value: this.cubeHalfSize.clone() },
      cubeEnabled: { value: this.cubeEnabled },
      torusKnotCenter: { value: this.torusKnotCenter.clone() },
      torusKnotEnabled: { value: this.torusKnotEnabled },
      meshCenter: { value: this.meshCenter.clone() },
      meshBoundingRadius: { value: this.meshBoundingRadius },
      meshEnabled: { value: this.meshEnabled },
    }
  }

  syncUniforms(material: THREE.ShaderMaterial) {
    if (material.uniforms.poolShape) {
      material.uniforms.poolShape.value = this.poolShape
    }
    if (material.uniforms.roundedBoxRadius) {
      material.uniforms.roundedBoxRadius.value = this.roundedBoxRadius
    }
    material.uniforms.sphereCenter.value.copy(this.sphereCenter)
    material.uniforms.sphereRadius.value = this.sphereRadius
    material.uniforms.sphereEnabled.value = this.sphereEnabled
    material.uniforms.cubeCenter.value.copy(this.cubeCenter)
    material.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize)
    material.uniforms.cubeEnabled.value = this.cubeEnabled
    if (material.uniforms.torusKnotCenter) {
      material.uniforms.torusKnotCenter.value.copy(this.torusKnotCenter)
    }
    if (material.uniforms.torusKnotEnabled) {
      material.uniforms.torusKnotEnabled.value = this.torusKnotEnabled
    }
    if (material.uniforms.meshCenter) {
      material.uniforms.meshCenter.value.copy(this.meshCenter)
    }
    if (material.uniforms.meshBoundingRadius) {
      material.uniforms.meshBoundingRadius.value = this.meshBoundingRadius
    }
    if (material.uniforms.meshEnabled) {
      material.uniforms.meshEnabled.value = this.meshEnabled
    }
  }
}
