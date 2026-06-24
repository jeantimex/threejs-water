import * as THREE from 'three'
import type { Water } from '../Water'
import waterAboveVert from '../shaders/waterAbove.vert'
import waterAboveFrag from '../shaders/waterAbove.frag'
import waterBelowVert from '../shaders/waterBelow.vert'
import waterBelowFrag from '../shaders/waterBelow.frag'
import type { WaterOpticsState } from './WaterOpticsState'
import { CausticsShapeGeometry } from './CausticsShape'
import type { PoolShape } from './MorphedPoolShape'

export interface ObjectTextureMatrices {
  viewProjectionMatrix: THREE.Matrix4
  reflectionViewProjectionMatrix: THREE.Matrix4
}

export class WaterSurfacePass {
  readonly aboveMesh: THREE.Mesh
  readonly belowMesh: THREE.Mesh
  private readonly aboveMaterial: THREE.ShaderMaterial
  private readonly belowMaterial: THREE.ShaderMaterial

  constructor(
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture,
    causticTexture: THREE.Texture,
    objectReflectionTexture: THREE.Texture,
    objectClippedReflectionTexture: THREE.Texture,
    objectRefractionTexture: THREE.Texture,
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

    const geometryAbove = CausticsShapeGeometry.create('Box', state.roundedBoxRadius)
    const geometryBelow = CausticsShapeGeometry.create('Box', state.roundedBoxRadius)
    this.aboveMesh = new THREE.Mesh(geometryAbove, this.aboveMaterial)
    this.belowMesh = new THREE.Mesh(geometryBelow, this.belowMaterial)
    this.aboveMesh.frustumCulled = false
    this.belowMesh.frustumCulled = false
  }

  setShape(shape: PoolShape) {
    this.aboveMesh.geometry.dispose()
    this.aboveMesh.geometry = CausticsShapeGeometry.create(shape, this.state.roundedBoxRadius)
    this.belowMesh.geometry.dispose()
    this.belowMesh.geometry = CausticsShapeGeometry.create(shape, this.state.roundedBoxRadius)
  }

  setRoundedBoxRadius() {
    if (this.state.poolShapeName !== 'Rounded Box') return
    this.aboveMesh.geometry.dispose()
    this.aboveMesh.geometry = CausticsShapeGeometry.create(this.state.poolShapeName, this.state.roundedBoxRadius)
    this.belowMesh.geometry.dispose()
    this.belowMesh.geometry = CausticsShapeGeometry.create(this.state.poolShapeName, this.state.roundedBoxRadius)
  }

  prepare(water: Water, camera: THREE.Camera, objectMatrices: ObjectTextureMatrices) {
    const eye = new THREE.Vector3()
    camera.getWorldPosition(eye)
    this.prepareMaterial(this.aboveMaterial, water, eye, objectMatrices)
    this.prepareMaterial(this.belowMaterial, water, eye, objectMatrices)
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
