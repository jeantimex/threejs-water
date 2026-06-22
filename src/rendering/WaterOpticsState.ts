import * as THREE from 'three'
import type { WaterOpticsDescriptor } from '../water/WaterOptics'

export class WaterOpticsState {
  readonly lightDirection = new THREE.Vector3(2, 2, -1).normalize()
  readonly sphereCenter = new THREE.Vector3()
  sphereRadius = 0.25
  sphereEnabled = false
  readonly cubeCenter = new THREE.Vector3()
  readonly cubeHalfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  cubeEnabled = false
  readonly torusKnotCenter = new THREE.Vector3()
  torusKnotEnabled = false

  apply(optics: WaterOpticsDescriptor) {
    this.sphereEnabled = false
    this.cubeEnabled = false
    this.torusKnotEnabled = false

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
    }
  }

  createUniforms() {
    return {
      sphereCenter: { value: this.sphereCenter.clone() },
      sphereRadius: { value: this.sphereRadius },
      sphereEnabled: { value: this.sphereEnabled },
      cubeCenter: { value: this.cubeCenter.clone() },
      cubeHalfSize: { value: this.cubeHalfSize.clone() },
      cubeEnabled: { value: this.cubeEnabled },
      torusKnotCenter: { value: this.torusKnotCenter.clone() },
      torusKnotEnabled: { value: this.torusKnotEnabled },
    }
  }

  syncUniforms(material: THREE.ShaderMaterial) {
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
  }
}
