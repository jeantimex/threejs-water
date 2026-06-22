import * as THREE from 'three'
import type { Water } from '../Water'
import sphereRenderVert from '../shaders/sphereRender.vert'
import sphereRenderFrag from '../shaders/sphereRender.frag'
import cubeRenderVert from '../shaders/objectCubeRender.vert'
import cubeRenderFrag from '../shaders/objectCubeRender.frag'
import type { ObjectRenderState } from './ObjectRenderState'

export class SimulationObjectPass {
  readonly sphereMesh: THREE.Mesh
  readonly cubeMesh: THREE.Mesh
  private readonly sphereMaterial: THREE.ShaderMaterial
  private readonly cubeMaterial: THREE.ShaderMaterial

  constructor(
    causticTexture: THREE.Texture,
    private readonly state: ObjectRenderState
  ) {
    this.sphereMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereRenderVert,
      fragmentShader: sphereRenderFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        sphereCenter: { value: state.sphereCenter.clone() },
        sphereRadius: { value: state.sphereRadius },
        water: { value: null },
        causticTex: { value: causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    })
    this.sphereMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      this.sphereMaterial
    )
    this.sphereMesh.frustumCulled = false

    this.cubeMaterial = new THREE.ShaderMaterial({
      vertexShader: cubeRenderVert,
      fragmentShader: cubeRenderFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        cubeCenter: { value: state.cubeCenter.clone() },
        cubeHalfSize: { value: state.cubeHalfSize.clone() },
        water: { value: null },
        causticTex: { value: causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    })
    this.cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), this.cubeMaterial)
    this.cubeMesh.frustumCulled = false
    this.cubeMesh.visible = false
  }

  setSphere(center: THREE.Vector3, radius: number, enabled: boolean) {
    this.state.sphereCenter.copy(center)
    this.state.sphereRadius = radius
    this.state.sphereEnabled = enabled
    this.sphereMesh.visible = enabled
  }

  setCube(center: THREE.Vector3, halfSize: THREE.Vector3, enabled: boolean) {
    this.state.cubeCenter.copy(center)
    this.state.cubeHalfSize.copy(halfSize)
    this.state.cubeEnabled = enabled
    this.cubeMesh.visible = enabled
  }

  prepareSphere(water: Water) {
    this.sphereMaterial.uniforms.water.value = water.textureA.texture
    this.sphereMaterial.uniforms.light.value.copy(this.state.lightDirection)
    this.sphereMaterial.uniforms.sphereCenter.value.copy(this.state.sphereCenter)
    this.sphereMaterial.uniforms.sphereRadius.value = this.state.sphereRadius
    this.sphereMaterial.uniformsNeedUpdate = true
  }

  prepareCube(water: Water) {
    this.cubeMaterial.uniforms.water.value = water.textureA.texture
    this.cubeMaterial.uniforms.light.value.copy(this.state.lightDirection)
    this.cubeMaterial.uniforms.cubeCenter.value.copy(this.state.cubeCenter)
    this.cubeMaterial.uniforms.cubeHalfSize.value.copy(this.state.cubeHalfSize)
    this.cubeMaterial.uniformsNeedUpdate = true
  }
}
