import * as THREE from 'three'
import type { Water } from '../Water'
import causticsVert from '../shaders/caustics.vert'
import causticsFrag from '../shaders/caustics.frag'
import type { WaterOpticsState } from './WaterOpticsState'

export class CausticsPass {
  readonly texture: THREE.Texture

  private readonly target: THREE.WebGLRenderTarget
  private readonly scene = new THREE.Scene()
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private readonly material: THREE.ShaderMaterial

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    private readonly state: WaterOpticsState
  ) {
    this.target = new THREE.WebGLRenderTarget(1024, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    })
    this.texture = this.target.texture

    this.material = new THREE.ShaderMaterial({
      vertexShader: causticsVert,
      fragmentShader: causticsFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        water: { value: null },
        ...state.createUniforms(),
      },
      blending: THREE.NoBlending,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 200, 200), this.material)
    mesh.frustumCulled = false
    this.scene.add(mesh)
  }

  update(water: Water) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(this.material)
    this.material.uniformsNeedUpdate = true

    this.renderer.setRenderTarget(this.target)
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)
  }
}
