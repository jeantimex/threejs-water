import * as THREE from 'three'
import type { Water } from '../Water'
import waterAboveVert from '../shaders/waterAbove.vert'
import waterAboveFrag from '../shaders/waterAbove.frag'
import waterBelowVert from '../shaders/waterBelow.vert'
import waterBelowFrag from '../shaders/waterBelow.frag'
import type { ObjectRenderState } from './ObjectRenderState'

export class WaterSurfacePass {
  readonly aboveMesh: THREE.Mesh
  readonly belowMesh: THREE.Mesh
  private readonly aboveMaterial: THREE.ShaderMaterial
  private readonly belowMaterial: THREE.ShaderMaterial

  constructor(
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture,
    causticTexture: THREE.Texture,
    private readonly state: ObjectRenderState
  ) {
    this.aboveMaterial = this.createMaterial(
      waterAboveVert,
      waterAboveFrag,
      THREE.BackSide,
      tileTexture,
      cubemap,
      causticTexture
    )
    this.belowMaterial = this.createMaterial(
      waterBelowVert,
      waterBelowFrag,
      THREE.FrontSide,
      tileTexture,
      cubemap,
      causticTexture
    )

    const geometry = new THREE.PlaneGeometry(2, 2, 200, 200)
    this.aboveMesh = new THREE.Mesh(geometry, this.aboveMaterial)
    this.belowMesh = new THREE.Mesh(geometry.clone(), this.belowMaterial)
    this.aboveMesh.frustumCulled = false
    this.belowMesh.frustumCulled = false
  }

  prepare(water: Water, camera: THREE.Camera) {
    const eye = new THREE.Vector3()
    camera.getWorldPosition(eye)
    this.prepareMaterial(this.aboveMaterial, water, eye)
    this.prepareMaterial(this.belowMaterial, water, eye)
  }

  private createMaterial(
    vertexShader: string,
    fragmentShader: string,
    side: THREE.Side,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture,
    causticTexture: THREE.Texture
  ) {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        light: { value: this.state.lightDirection.clone() },
        ...this.state.createUniforms(),
        tiles: { value: tileTexture },
        causticTex: { value: causticTexture },
        water: { value: null },
        sky: { value: cubemap },
        eye: { value: new THREE.Vector3() },
      },
      side,
      depthTest: true,
      depthWrite: true,
    })
  }

  private prepareMaterial(material: THREE.ShaderMaterial, water: Water, eye: THREE.Vector3) {
    material.uniforms.water.value = water.textureA.texture
    material.uniforms.eye.value.copy(eye)
    material.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(material)
    material.uniformsNeedUpdate = true
  }
}
