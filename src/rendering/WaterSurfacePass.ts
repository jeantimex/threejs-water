import * as THREE from 'three'
import type { Water } from '../Water'
import waterAboveVert from '../shaders/waterAbove.vert'
import waterAboveFrag from '../shaders/waterAbove.frag'
import roundedBoxWaterAboveFrag from '../shaders/roundedbox_waterAbove.frag'
import waterBelowVert from '../shaders/waterBelow.vert'
import waterBelowFrag from '../shaders/waterBelow.frag'
import roundedBoxWaterBelowFrag from '../shaders/roundedbox_waterBelow.frag'
import type { WaterOpticsState } from './WaterOpticsState'

export interface ObjectTextureMatrices {
  viewProjectionMatrix: THREE.Matrix4
  reflectionViewProjectionMatrix: THREE.Matrix4
}

export class WaterSurfacePass {
  readonly aboveMesh: THREE.Mesh
  readonly belowMesh: THREE.Mesh
  private readonly aboveMaterial: THREE.ShaderMaterial
  private readonly belowMaterial: THREE.ShaderMaterial
  private roundedBoxAboveMaterial: THREE.ShaderMaterial | null = null
  private roundedBoxBelowMaterial: THREE.ShaderMaterial | null = null

  constructor(
    private readonly tileTexture: THREE.Texture,
    private readonly cubemap: THREE.CubeTexture,
    private readonly causticTexture: THREE.Texture,
    private readonly objectReflectionTexture: THREE.Texture,
    private readonly objectClippedReflectionTexture: THREE.Texture,
    private readonly objectRefractionTexture: THREE.Texture,
    private readonly state: WaterOpticsState
  ) {
    this.aboveMaterial = this.createMaterial(
      waterAboveVert,
      waterAboveFrag,
      THREE.BackSide,
      tileTexture,
      cubemap,
      causticTexture,
      objectReflectionTexture,
      objectClippedReflectionTexture,
      objectRefractionTexture
    )
    this.belowMaterial = this.createMaterial(
      waterBelowVert,
      waterBelowFrag,
      THREE.FrontSide,
      tileTexture,
      cubemap,
      causticTexture,
      objectReflectionTexture,
      objectClippedReflectionTexture,
      objectRefractionTexture
    )

    const geometry = new THREE.PlaneGeometry(2, 2, 200, 200)
    this.aboveMesh = new THREE.Mesh(geometry, this.aboveMaterial)
    this.belowMesh = new THREE.Mesh(geometry.clone(), this.belowMaterial)
    this.aboveMesh.frustumCulled = false
    this.belowMesh.frustumCulled = false
  }

  setPoolShape(shape: string, cornerRadius: number) {
    if (shape === 'Box') {
      this.aboveMesh.material = this.aboveMaterial
      this.belowMesh.material = this.belowMaterial
    } else {
      if (!this.roundedBoxAboveMaterial) {
        this.roundedBoxAboveMaterial = this.createMaterial(
          waterAboveVert,
          roundedBoxWaterAboveFrag,
          THREE.BackSide,
          this.tileTexture,
          this.cubemap,
          this.causticTexture,
          this.objectReflectionTexture,
          this.objectClippedReflectionTexture,
          this.objectRefractionTexture
        )
        this.roundedBoxAboveMaterial.uniforms.cornerRadius = { value: cornerRadius }

        this.roundedBoxBelowMaterial = this.createMaterial(
          waterBelowVert,
          roundedBoxWaterBelowFrag,
          THREE.FrontSide,
          this.tileTexture,
          this.cubemap,
          this.causticTexture,
          this.objectReflectionTexture,
          this.objectClippedReflectionTexture,
          this.objectRefractionTexture
        )
        this.roundedBoxBelowMaterial.uniforms.cornerRadius = { value: cornerRadius }
      } else {
        this.roundedBoxAboveMaterial.uniforms.cornerRadius.value = cornerRadius
        this.roundedBoxBelowMaterial!.uniforms.cornerRadius.value = cornerRadius
      }

      this.aboveMesh.material = this.roundedBoxAboveMaterial
      this.belowMesh.material = this.roundedBoxBelowMaterial!
    }
  }

  prepare(water: Water, camera: THREE.Camera, objectMatrices: ObjectTextureMatrices) {
    const eye = new THREE.Vector3()
    camera.getWorldPosition(eye)
    this.prepareMaterial(this.aboveMesh.material as THREE.ShaderMaterial, water, eye, objectMatrices)
    this.prepareMaterial(this.belowMesh.material as THREE.ShaderMaterial, water, eye, objectMatrices)
  }

  private createMaterial(
    vertexShader: string,
    fragmentShader: string,
    side: THREE.Side,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture,
    causticTexture: THREE.Texture,
    objectReflectionTexture: THREE.Texture,
    objectClippedReflectionTexture: THREE.Texture,
    objectRefractionTexture: THREE.Texture
  ) {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        light: { value: this.state.lightDirection.clone() },
        ...this.state.createUniforms(),
        tiles: { value: tileTexture },
        causticTex: { value: causticTexture },
        objectReflectionTex: { value: objectReflectionTexture },
        objectClippedReflectionTex: { value: objectClippedReflectionTexture },
        objectRefractionTex: { value: objectRefractionTexture },
        viewProjectionMatrix: { value: new THREE.Matrix4() },
        reflectionViewProjectionMatrix: { value: new THREE.Matrix4() },
        water: { value: null },
        sky: { value: cubemap },
        eye: { value: new THREE.Vector3() },
      },
      side,
      depthTest: true,
      depthWrite: true,
    })
  }

  private prepareMaterial(
    material: THREE.ShaderMaterial,
    water: Water,
    eye: THREE.Vector3,
    objectMatrices: ObjectTextureMatrices
  ) {
    material.uniforms.water.value = water.textureA.texture
    material.uniforms.eye.value.copy(eye)
    material.uniforms.light.value.copy(this.state.lightDirection)
    material.uniforms.viewProjectionMatrix.value.copy(objectMatrices.viewProjectionMatrix)
    material.uniforms.reflectionViewProjectionMatrix.value.copy(
      objectMatrices.reflectionViewProjectionMatrix
    )
    this.state.syncUniforms(material)
    material.uniformsNeedUpdate = true
  }
}

