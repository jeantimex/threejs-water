import * as THREE from 'three'
import type { Water } from '../Water'
import poolVert from '../shaders/cube.vert'
import poolFrag from '../shaders/cube.frag'
import roundedBoxVert from '../shaders/roundedbox.vert'
import roundedBoxFrag from '../shaders/roundedbox.frag'
import type { WaterOpticsState } from './WaterOpticsState'
import { createRoundedBoxPoolGeometry } from './createRoundedBoxPoolGeometry'

export class PoolPass {
  readonly mesh: THREE.Mesh
  private readonly boxGeometry: THREE.BufferGeometry
  private readonly boxMaterial: THREE.ShaderMaterial
  private roundedBoxGeometry: THREE.BufferGeometry | null = null
  private roundedBoxMaterial: THREE.ShaderMaterial | null = null

  constructor(
    private readonly tileTexture: THREE.Texture,
    private readonly causticTexture: THREE.Texture,
    private readonly state: WaterOpticsState
  ) {
    this.boxMaterial = new THREE.ShaderMaterial({
      vertexShader: poolVert,
      fragmentShader: poolFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        ...state.createUniforms(),
        tiles: { value: tileTexture },
        causticTex: { value: causticTexture },
        water: { value: null },
      },
      side: THREE.FrontSide,
      depthTest: true,
      depthWrite: true,
    })

    this.boxGeometry = this.createGeometry()
    this.mesh = new THREE.Mesh(this.boxGeometry, this.boxMaterial)
    this.mesh.frustumCulled = false
  }

  setPoolShape(shape: string, cornerRadius: number, poolWidth: number, poolLength: number) {
    if (shape === 'Box') {
      this.mesh.geometry = this.boxGeometry
      this.mesh.material = this.boxMaterial
    } else {
      if (this.roundedBoxGeometry) {
        this.roundedBoxGeometry.dispose()
      }
      this.roundedBoxGeometry = createRoundedBoxPoolGeometry(cornerRadius, poolWidth, poolLength)
      
      if (!this.roundedBoxMaterial) {
        this.roundedBoxMaterial = new THREE.ShaderMaterial({
          vertexShader: roundedBoxVert,
          fragmentShader: roundedBoxFrag,
          uniforms: {
            light: { value: this.state.lightDirection.clone() },
            ...this.state.createUniforms(),
            tiles: { value: this.tileTexture },
            causticTex: { value: this.causticTexture },
            water: { value: null },
            cornerRadius: { value: cornerRadius },
            poolWidth: { value: poolWidth },
            poolLength: { value: poolLength },
          },
          side: THREE.FrontSide,
          depthTest: true,
          depthWrite: true,
        })
      } else {
        this.roundedBoxMaterial.uniforms.cornerRadius.value = cornerRadius
        this.roundedBoxMaterial.uniforms.poolWidth.value = poolWidth
        this.roundedBoxMaterial.uniforms.poolLength.value = poolLength
      }

      this.mesh.geometry = this.roundedBoxGeometry
      this.mesh.material = this.roundedBoxMaterial
    }
  }

  prepare(water: Water) {
    const activeMaterial = this.mesh.material as THREE.ShaderMaterial
    activeMaterial.uniforms.water.value = water.textureA.texture
    activeMaterial.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(activeMaterial)
    activeMaterial.uniformsNeedUpdate = true
  }

  private createGeometry() {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const positions = geometry.attributes.position
    const source = geometry.index!
    const indices: number[] = []

    for (let i = 0; i < source.count; i += 3) {
      const a = source.getX(i)
      const b = source.getX(i + 1)
      const c = source.getX(i + 2)
      if (!(
        positions.getY(a) < 0
        && positions.getY(b) < 0
        && positions.getY(c) < 0
      )) {
        indices.push(a, b, c)
      }
    }

    geometry.setIndex(indices)
    return geometry
  }
}

