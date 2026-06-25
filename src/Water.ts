import * as THREE from 'three'
import dropVert from './shaders/drop.vert'
import dropFrag from './shaders/drop.frag'
import updateVert from './shaders/update.vert'
import updateFrag from './shaders/update.frag'
import normalVert from './shaders/normal.vert'
import normalFrag from './shaders/normal.frag'
import sphereVert from './shaders/sphere.vert'
import sphereFrag from './shaders/sphere.frag'
import moveCubeFrag from './shaders/moveCube.frag'

export class Water {
  textureA: THREE.WebGLRenderTarget
  textureB: THREE.WebGLRenderTarget

  private renderer: THREE.WebGLRenderer
  private plane: THREE.Mesh
  private camera: THREE.OrthographicCamera
  private scene: THREE.Scene

  private dropMaterial: THREE.ShaderMaterial
  private updateMaterial: THREE.ShaderMaterial
  private normalMaterial: THREE.ShaderMaterial
  private sphereMaterial: THREE.ShaderMaterial
  private moveCubeMaterial: THREE.ShaderMaterial

  constructor(renderer: THREE.WebGLRenderer) {
    this.renderer = renderer

    const size = 256
    const options: THREE.RenderTargetOptions = {
      type: THREE.FloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      stencilBuffer: false,
      depthBuffer: false,
    }

    this.textureA = new THREE.WebGLRenderTarget(size, size, options)
    this.textureB = new THREE.WebGLRenderTarget(size, size, options)

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.scene = new THREE.Scene()

    const geometry = new THREE.PlaneGeometry(2, 2)

    this.dropMaterial = new THREE.ShaderMaterial({
      vertexShader: dropVert,
      fragmentShader: dropFrag,
      uniforms: {
        tInput: { value: null },
        center: { value: new THREE.Vector2() },
        radius: { value: 0 },
        strength: { value: 0 },
      },
    })

    this.updateMaterial = new THREE.ShaderMaterial({
      vertexShader: updateVert,
      fragmentShader: updateFrag,
      uniforms: {
        tInput: { value: null },
        delta: { value: new THREE.Vector2(1 / size, 1 / size) },
      },
    })

    this.normalMaterial = new THREE.ShaderMaterial({
      vertexShader: normalVert,
      fragmentShader: normalFrag,
      uniforms: {
        tInput: { value: null },
        delta: { value: new THREE.Vector2(1 / size, 1 / size) },
      },
    })

    this.sphereMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereVert,
      fragmentShader: sphereFrag,
      uniforms: {
        tInput: { value: null },
        oldCenter: { value: new THREE.Vector3() },
        newCenter: { value: new THREE.Vector3() },
        radius: { value: 0 },
        displacementScale: { value: 1.0 },
      },
    })

    this.moveCubeMaterial = new THREE.ShaderMaterial({
      vertexShader: sphereVert,
      fragmentShader: moveCubeFrag,
      uniforms: {
        tInput: { value: null },
        oldCenter: { value: new THREE.Vector3() },
        newCenter: { value: new THREE.Vector3() },
        halfSize: { value: new THREE.Vector3() },
      },
    })

    this.plane = new THREE.Mesh(geometry, this.dropMaterial)
    this.scene.add(this.plane)
  }

  private swapTextures() {
    const temp = this.textureA
    this.textureA = this.textureB
    this.textureB = temp
  }

  addDrop(x: number, y: number, radius: number, strength: number) {
    this.plane.material = this.dropMaterial
    this.dropMaterial.uniforms.tInput.value = this.textureA.texture
    this.dropMaterial.uniforms.center.value.set(x, y)
    this.dropMaterial.uniforms.radius.value = radius
    this.dropMaterial.uniforms.strength.value = strength

    this.renderer.setRenderTarget(this.textureB)
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)

    this.swapTextures()
  }

  moveSphere(oldCenter: THREE.Vector3, newCenter: THREE.Vector3, radius: number, displacementScale = 1.0, poolLength = 1.0) {
    this.plane.material = this.sphereMaterial
    this.sphereMaterial.uniforms.tInput.value = this.textureA.texture
    this.sphereMaterial.uniforms.oldCenter.value.copy(oldCenter)
    this.sphereMaterial.uniforms.oldCenter.value.z /= poolLength
    this.sphereMaterial.uniforms.newCenter.value.copy(newCenter)
    this.sphereMaterial.uniforms.newCenter.value.z /= poolLength
    this.sphereMaterial.uniforms.radius.value = radius / poolLength
    this.sphereMaterial.uniforms.displacementScale.value = displacementScale

    this.renderer.setRenderTarget(this.textureB)
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)

    this.swapTextures()
  }

  moveCube(oldCenter: THREE.Vector3, newCenter: THREE.Vector3, halfSize: THREE.Vector3, poolLength = 1.0) {
    this.plane.material = this.moveCubeMaterial
    this.moveCubeMaterial.uniforms.tInput.value = this.textureA.texture
    this.moveCubeMaterial.uniforms.oldCenter.value.copy(oldCenter)
    this.moveCubeMaterial.uniforms.oldCenter.value.z /= poolLength
    this.moveCubeMaterial.uniforms.newCenter.value.copy(newCenter)
    this.moveCubeMaterial.uniforms.newCenter.value.z /= poolLength
    this.moveCubeMaterial.uniforms.halfSize.value.copy(halfSize)
    this.moveCubeMaterial.uniforms.halfSize.value.z /= poolLength

    this.renderer.setRenderTarget(this.textureB)
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)

    this.swapTextures()
  }

  stepSimulation() {
    this.plane.material = this.updateMaterial
    this.updateMaterial.uniforms.tInput.value = this.textureA.texture

    this.renderer.setRenderTarget(this.textureB)
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)

    this.swapTextures()
  }

  updateNormals() {
    this.plane.material = this.normalMaterial
    this.normalMaterial.uniforms.tInput.value = this.textureA.texture

    this.renderer.setRenderTarget(this.textureB)
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)

    this.swapTextures()
  }
}
