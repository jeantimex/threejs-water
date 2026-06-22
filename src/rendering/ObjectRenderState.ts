import * as THREE from 'three'

export class ObjectRenderState {
  readonly lightDirection = new THREE.Vector3(2, 2, -1).normalize()
  readonly sphereCenter = new THREE.Vector3()
  sphereRadius = 0.25
  sphereEnabled = true
  readonly cubeCenter = new THREE.Vector3()
  readonly cubeHalfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  cubeEnabled = false

  createUniforms() {
    return {
      sphereCenter: { value: this.sphereCenter.clone() },
      sphereRadius: { value: this.sphereRadius },
      sphereEnabled: { value: this.sphereEnabled },
      cubeCenter: { value: this.cubeCenter.clone() },
      cubeHalfSize: { value: this.cubeHalfSize.clone() },
      cubeEnabled: { value: this.cubeEnabled },
    }
  }

  syncUniforms(material: THREE.ShaderMaterial) {
    material.uniforms.sphereCenter.value.copy(this.sphereCenter)
    material.uniforms.sphereRadius.value = this.sphereRadius
    material.uniforms.sphereEnabled.value = this.sphereEnabled
    material.uniforms.cubeCenter.value.copy(this.cubeCenter)
    material.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize)
    material.uniforms.cubeEnabled.value = this.cubeEnabled
  }
}
