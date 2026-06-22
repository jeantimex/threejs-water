import * as THREE from 'three'
import { Water } from './Water'

import causticsVert from './shaders/caustics.vert'
import causticsFrag from './shaders/caustics.frag'
import cubeVert from './shaders/cube.vert'
import cubeFrag from './shaders/cube.frag'
import sphereRenderVert from './shaders/sphereRender.vert'
import sphereRenderFrag from './shaders/sphereRender.frag'
import waterAboveVert from './shaders/waterAbove.vert'
import waterAboveFrag from './shaders/waterAbove.frag'
import waterBelowVert from './shaders/waterBelow.vert'
import waterBelowFrag from './shaders/waterBelow.frag'

export class Renderer {
  lightDir: THREE.Vector3
  private sphereCenter: THREE.Vector3
  private sphereRadius: number
  private sphereEnabled: boolean

  private renderer: THREE.WebGLRenderer
  private causticTex: THREE.WebGLRenderTarget
  private tileTexture: THREE.Texture
  private cubemap: THREE.CubeTexture

  private waterMesh: THREE.Mesh
  private waterMeshBack: THREE.Mesh
  private sphereMesh: THREE.Mesh
  private cubeMesh: THREE.Mesh

  private causticsScene: THREE.Scene
  private causticsCamera: THREE.OrthographicCamera
  private causticsMesh: THREE.Mesh
  private causticsMaterial: THREE.ShaderMaterial

  private waterAboveMaterial: THREE.ShaderMaterial
  private waterBelowMaterial: THREE.ShaderMaterial
  private sphereMaterial: THREE.ShaderMaterial
  private cubeMaterial: THREE.ShaderMaterial

  constructor(
    renderer: THREE.WebGLRenderer,
    tileTexture: THREE.Texture,
    cubemap: THREE.CubeTexture
  ) {
    this.renderer = renderer
    this.tileTexture = tileTexture
    this.cubemap = cubemap

    this.lightDir = new THREE.Vector3(2.0, 2.0, -1.0).normalize()
    this.sphereCenter = new THREE.Vector3()
    this.sphereRadius = 0.25
    this.sphereEnabled = true

    this.causticTex = new THREE.WebGLRenderTarget(1024, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    })

    this.causticsCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.causticsScene = new THREE.Scene()

    this.causticsMaterial = new THREE.ShaderMaterial({
      vertexShader: causticsVert,
      fragmentShader: causticsFrag,
      uniforms: {
        light: { value: new THREE.Vector3().copy(this.lightDir) },
        water: { value: null },
        sphereCenter: { value: new THREE.Vector3().copy(this.sphereCenter) },
        sphereRadius: { value: this.sphereRadius },
        sphereEnabled: { value: this.sphereEnabled },
      },
      // The shader stores caustic intensity and shadow data in RGB while
      // intentionally writing alpha = 0. The original pass renders without
      // blending; additive blending would multiply RGB by that zero alpha.
      blending: THREE.NoBlending,
      // LightGL leaves culling disabled for this pass. Refractive projection
      // can reverse focused triangles, and those triangles must still write
      // their caustic intensity.
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    })

    const waterGeometry = new THREE.PlaneGeometry(2, 2, 200, 200)
    this.causticsMesh = new THREE.Mesh(waterGeometry, this.causticsMaterial)
    this.causticsMesh.frustumCulled = false
    this.causticsScene.add(this.causticsMesh)

    this.waterAboveMaterial = new THREE.ShaderMaterial({
      vertexShader: waterAboveVert,
      fragmentShader: waterAboveFrag,
      uniforms: {
        light: { value: new THREE.Vector3().copy(this.lightDir) },
        sphereCenter: { value: new THREE.Vector3().copy(this.sphereCenter) },
        sphereRadius: { value: this.sphereRadius },
        sphereEnabled: { value: this.sphereEnabled },
        tiles: { value: this.tileTexture },
        causticTex: { value: this.causticTex.texture },
        water: { value: null },
        sky: { value: this.cubemap },
        eye: { value: new THREE.Vector3() },
      },
      // PlaneGeometry faces +Z, but the vertex shader swizzles XY to XZ,
      // reversing the winding so the surface points down. From above we see
      // the back face, matching the original gl.cullFace(gl.FRONT) pass.
      side: THREE.BackSide,
      depthTest: true,
      depthWrite: true,
    })

    this.waterBelowMaterial = new THREE.ShaderMaterial({
      vertexShader: waterBelowVert,
      fragmentShader: waterBelowFrag,
      uniforms: {
        light: { value: new THREE.Vector3().copy(this.lightDir) },
        sphereCenter: { value: new THREE.Vector3().copy(this.sphereCenter) },
        sphereRadius: { value: this.sphereRadius },
        sphereEnabled: { value: this.sphereEnabled },
        tiles: { value: this.tileTexture },
        causticTex: { value: this.causticTex.texture },
        water: { value: null },
        sky: { value: this.cubemap },
        eye: { value: new THREE.Vector3() },
      },
      // Complement the above-water pass. The original underwater pass uses
      // gl.cullFace(gl.BACK), which is Three.js FrontSide.
      side: THREE.FrontSide,
      depthTest: true,
      depthWrite: true,
    })

    const waterMeshGeometry = new THREE.PlaneGeometry(2, 2, 200, 200)
    this.waterMesh = new THREE.Mesh(waterMeshGeometry, this.waterAboveMaterial)
    this.waterMesh.frustumCulled = false
    this.waterMeshBack = new THREE.Mesh(waterMeshGeometry.clone(), this.waterBelowMaterial)
    this.waterMeshBack.frustumCulled = false

    this.sphereMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereRenderVert,
      fragmentShader: sphereRenderFrag,
      uniforms: {
        light: { value: new THREE.Vector3().copy(this.lightDir) },
        sphereCenter: { value: new THREE.Vector3().copy(this.sphereCenter) },
        sphereRadius: { value: this.sphereRadius },
        water: { value: null },
        causticTex: { value: this.causticTex.texture },
      },
      depthTest: true,
      depthWrite: true,
    })

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    this.sphereMesh = new THREE.Mesh(sphereGeometry, this.sphereMaterial)
    this.sphereMesh.frustumCulled = false

    this.cubeMaterial = new THREE.ShaderMaterial({
      vertexShader: cubeVert,
      fragmentShader: cubeFrag,
      uniforms: {
        light: { value: new THREE.Vector3().copy(this.lightDir) },
        sphereCenter: { value: new THREE.Vector3().copy(this.sphereCenter) },
        sphereRadius: { value: this.sphereRadius },
        sphereEnabled: { value: this.sphereEnabled },
        tiles: { value: this.tileTexture },
        causticTex: { value: this.causticTex.texture },
        water: { value: null },
      },
      // Match the original renderer's default gl.cullFace(gl.BACK). The pool
      // vertex shader reverses Y and therefore reverses the final winding.
      side: THREE.FrontSide,
      depthTest: true,
      depthWrite: true,
    })

    const cubeGeometry = this.createPoolGeometry()
    this.cubeMesh = new THREE.Mesh(cubeGeometry, this.cubeMaterial)
    this.cubeMesh.frustumCulled = false
  }

  private createPoolGeometry(): THREE.BufferGeometry {
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const positions = geometry.attributes.position
    const indices: number[] = []
    const posArray = positions.array as Float32Array

    for (let i = 0; i < geometry.index!.count; i += 3) {
      const a = geometry.index!.getX(i)
      const b = geometry.index!.getX(i + 1)
      const c = geometry.index!.getX(i + 2)

      const ay = posArray[a * 3 + 1]
      const by = posArray[b * 3 + 1]
      const cy = posArray[c * 3 + 1]

      // Remove faces where all vertices have y < 0 (original bottom becomes pool rim after shader transform)
      // This opens the top of the pool so we can see into it
      if (!(ay < 0 && by < 0 && cy < 0)) {
        indices.push(a, b, c)
      }
    }

    geometry.setIndex(indices)
    return geometry
  }

  updateCaustics(water: Water) {
    this.causticsMaterial.uniforms.water.value = water.textureA.texture
    this.causticsMaterial.uniforms.light.value.copy(this.lightDir)
    this.causticsMaterial.uniforms.sphereCenter.value.copy(this.sphereCenter)
    this.causticsMaterial.uniforms.sphereRadius.value = this.sphereRadius
    this.causticsMaterial.uniforms.sphereEnabled.value = this.sphereEnabled
    this.causticsMaterial.uniformsNeedUpdate = true

    this.renderer.setRenderTarget(this.causticTex)
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.clear()
    this.renderer.render(this.causticsScene, this.causticsCamera)
    this.renderer.setRenderTarget(null)
  }

  renderWater(water: Water, camera: THREE.Camera) {
    const eye = new THREE.Vector3()
    camera.getWorldPosition(eye)

    this.waterAboveMaterial.uniforms.water.value = water.textureA.texture
    this.waterAboveMaterial.uniforms.eye.value.copy(eye)
    this.waterAboveMaterial.uniforms.light.value.copy(this.lightDir)
    this.waterAboveMaterial.uniforms.sphereCenter.value.copy(this.sphereCenter)
    this.waterAboveMaterial.uniforms.sphereRadius.value = this.sphereRadius
    this.waterAboveMaterial.uniforms.sphereEnabled.value = this.sphereEnabled
    this.waterAboveMaterial.uniforms.causticTex.value = this.causticTex.texture
    this.waterAboveMaterial.uniformsNeedUpdate = true

    this.waterBelowMaterial.uniforms.water.value = water.textureA.texture
    this.waterBelowMaterial.uniforms.eye.value.copy(eye)
    this.waterBelowMaterial.uniforms.light.value.copy(this.lightDir)
    this.waterBelowMaterial.uniforms.sphereCenter.value.copy(this.sphereCenter)
    this.waterBelowMaterial.uniforms.sphereRadius.value = this.sphereRadius
    this.waterBelowMaterial.uniforms.sphereEnabled.value = this.sphereEnabled
    this.waterBelowMaterial.uniforms.causticTex.value = this.causticTex.texture
    this.waterBelowMaterial.uniformsNeedUpdate = true
  }

  renderSphere(water: Water) {
    this.sphereMaterial.uniforms.water.value = water.textureA.texture
    this.sphereMaterial.uniforms.light.value.copy(this.lightDir)
    this.sphereMaterial.uniforms.sphereCenter.value.copy(this.sphereCenter)
    this.sphereMaterial.uniforms.sphereRadius.value = this.sphereRadius
    this.sphereMaterial.uniforms.causticTex.value = this.causticTex.texture
    this.sphereMaterial.uniformsNeedUpdate = true
  }

  setSphereState(center: THREE.Vector3, radius: number, enabled: boolean) {
    this.sphereCenter.copy(center)
    this.sphereRadius = radius
    this.sphereEnabled = enabled
    this.sphereMesh.visible = enabled
  }

  renderCube(water: Water) {
    this.cubeMaterial.uniforms.water.value = water.textureA.texture
    this.cubeMaterial.uniforms.light.value.copy(this.lightDir)
    this.cubeMaterial.uniforms.sphereCenter.value.copy(this.sphereCenter)
    this.cubeMaterial.uniforms.sphereRadius.value = this.sphereRadius
    this.cubeMaterial.uniforms.sphereEnabled.value = this.sphereEnabled
    this.cubeMaterial.uniforms.causticTex.value = this.causticTex.texture
    this.cubeMaterial.uniformsNeedUpdate = true
  }

  getWaterMesh(): THREE.Mesh {
    return this.waterMesh
  }

  getWaterMeshBack(): THREE.Mesh {
    return this.waterMeshBack
  }

  getSphereMesh(): THREE.Mesh {
    return this.sphereMesh
  }

  getCubeMesh(): THREE.Mesh {
    return this.cubeMesh
  }
}
