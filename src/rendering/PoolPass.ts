import * as THREE from 'three'
import type { Water } from '../Water'
import poolVert from '../shaders/cube.vert'
import poolFrag from '../shaders/cube.frag'
import type { WaterOpticsState } from './WaterOpticsState'

export class PoolPass {
  readonly mesh: THREE.Mesh
  private readonly material: THREE.ShaderMaterial

  constructor(
    tileTexture: THREE.Texture,
    causticTexture: THREE.Texture,
    private readonly state: WaterOpticsState
  ) {
    this.material = new THREE.ShaderMaterial({
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

    this.mesh = new THREE.Mesh(this.createGeometry(), this.material)
    this.mesh.frustumCulled = false
  }

  prepare(water: Water) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(this.material)
    this.material.uniformsNeedUpdate = true
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
