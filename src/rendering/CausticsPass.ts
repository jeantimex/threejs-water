import * as THREE from 'three'
import type { Water } from '../Water'
import causticsVert from '../shaders/caustics.vert'
import causticsFrag from '../shaders/caustics.frag'
import roundedBoxCausticsVert from '../shaders/roundedbox_caustics.vert'
import roundedBoxCausticsFrag from '../shaders/roundedbox_caustics.frag'
import type { WaterOpticsState } from './WaterOpticsState'

export class CausticsPass {
  readonly texture: THREE.Texture

  private readonly target: THREE.WebGLRenderTarget
  private readonly scene = new THREE.Scene()
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private readonly mesh: THREE.Mesh
  private readonly boxMaterial: THREE.ShaderMaterial
  private roundedBoxMaterial: THREE.ShaderMaterial | null = null

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    private readonly state: WaterOpticsState,
    private readonly objectShadowTexture: THREE.Texture
  ) {
    this.target = new THREE.WebGLRenderTarget(1024, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    })
    this.texture = this.target.texture

    this.boxMaterial = new THREE.ShaderMaterial({
      vertexShader: causticsVert,
      fragmentShader: causticsFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        water: { value: null },
        objectShadowTex: { value: objectShadowTexture },
        ...state.createUniforms(),
      },
      blending: THREE.NoBlending,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    })

    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 200, 200), this.boxMaterial)
    this.mesh.frustumCulled = false
    this.scene.add(this.mesh)
  }

  setPoolShape(shape: string, cornerRadius: number, poolLength: number) {
    if (shape === 'Box') {
      this.camera.top = 1
      this.camera.bottom = -1
      this.camera.updateProjectionMatrix()
      this.mesh.material = this.boxMaterial
    } else {
      this.camera.top = poolLength
      this.camera.bottom = -poolLength
      this.camera.updateProjectionMatrix()

      if (!this.roundedBoxMaterial) {
        this.roundedBoxMaterial = new THREE.ShaderMaterial({
          vertexShader: roundedBoxCausticsVert,
          fragmentShader: roundedBoxCausticsFrag,
          uniforms: {
            light: { value: this.state.lightDirection.clone() },
            water: { value: null },
            objectShadowTex: { value: this.objectShadowTexture },
            ...this.state.createUniforms(),
            cornerRadius: { value: cornerRadius },
            poolLength: { value: poolLength },
          },
          blending: THREE.NoBlending,
          side: THREE.DoubleSide,
          depthTest: false,
          depthWrite: false,
        })
      } else {
        this.roundedBoxMaterial.uniforms.cornerRadius.value = cornerRadius
        this.roundedBoxMaterial.uniforms.poolLength.value = poolLength
      }
      this.mesh.material = this.roundedBoxMaterial
    }
  }

  update(water: Water) {
    const activeMaterial = this.mesh.material as THREE.ShaderMaterial
    activeMaterial.uniforms.water.value = water.textureA.texture
    activeMaterial.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(activeMaterial)
    activeMaterial.uniformsNeedUpdate = true

    this.renderer.setRenderTarget(this.target)
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)
  }
}

