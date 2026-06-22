import * as THREE from 'three'

const shadowVertexShader = `
precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;

void main() {
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 refractedLight = refract(-normalize(light), vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec2 projected = 0.75 * (worldPosition.xz - worldPosition.y * refractedLight.xz / refractedLight.y);
  gl_Position = vec4(projected.x, -projected.y, 0.0, 1.0);
}
`

const shadowFragmentShader = `
precision highp float;

void main() {
  gl_FragColor = vec4(1.0);
}
`

export class ObjectTexturePass {
  readonly reflectionTarget: THREE.WebGLRenderTarget
  readonly refractionTarget: THREE.WebGLRenderTarget
  readonly shadowTarget: THREE.WebGLRenderTarget
  readonly reflectionViewProjectionMatrix = new THREE.Matrix4()
  readonly viewProjectionMatrix = new THREE.Matrix4()

  private readonly reflectionCamera = new THREE.PerspectiveCamera()
  private readonly shadowCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private readonly shadowMaterial: THREE.ShaderMaterial
  private readonly clearColor = new THREE.Color()
  private readonly previousClearColor = new THREE.Color()

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    private readonly lightDirection: THREE.Vector3
  ) {
    const options: THREE.RenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      depthBuffer: true,
      stencilBuffer: false,
    }

    this.reflectionTarget = new THREE.WebGLRenderTarget(512, 512, options)
    this.refractionTarget = new THREE.WebGLRenderTarget(512, 512, options)
    this.shadowTarget = new THREE.WebGLRenderTarget(1024, 1024, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      depthBuffer: false,
      stencilBuffer: false,
    })

    this.shadowMaterial = new THREE.ShaderMaterial({
      vertexShader: shadowVertexShader,
      fragmentShader: shadowFragmentShader,
      uniforms: {
        light: { value: lightDirection.clone() },
      },
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
  }

  setSize(width: number, height: number) {
    const scale = Math.min(1, 1024 / Math.max(width, height))
    this.reflectionTarget.setSize(
      Math.max(1, Math.floor(width * scale)),
      Math.max(1, Math.floor(height * scale))
    )
    this.refractionTarget.setSize(
      Math.max(1, Math.floor(width * scale)),
      Math.max(1, Math.floor(height * scale))
    )
  }

  update(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderableObject: THREE.Object3D | null) {
    this.updateViewProjection(camera)

    if (!renderableObject) {
      this.withTransparentClear(() => {
        this.clearTarget(this.reflectionTarget)
        this.clearTarget(this.refractionTarget)
        this.clearTarget(this.shadowTarget)
      })
      return
    }

    const material = (renderableObject as THREE.Mesh).material as THREE.ShaderMaterial
    const hasIsTexturePass = material.uniforms && material.uniforms.isTexturePass
    if (hasIsTexturePass) {
      material.uniforms.isTexturePass.value = true
    }

    this.withHiddenWaterMeshes(scene, () => {
      this.withTransparentClear(() => {
        this.renderRefraction(scene, camera)
        this.renderReflection(scene, camera)
        this.renderShadow(scene)
      })
    })

    if (hasIsTexturePass) {
      material.uniforms.isTexturePass.value = false
    }
  }

  private updateViewProjection(camera: THREE.PerspectiveCamera) {
    camera.updateMatrixWorld()
    this.viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
  }

  private renderRefraction(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer.setRenderTarget(this.refractionTarget)
    this.renderer.clear()
    this.renderer.render(scene, camera)
  }

  private renderReflection(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    const position = new THREE.Vector3()
    const direction = new THREE.Vector3()
    const target = new THREE.Vector3()

    camera.getWorldPosition(position)
    camera.getWorldDirection(direction)
    target.copy(position).add(direction)

    this.reflectionCamera.copy(camera)
    this.reflectionCamera.position.set(position.x, -position.y, position.z)
    this.reflectionCamera.up.set(camera.up.x, -camera.up.y, camera.up.z)
    this.reflectionCamera.lookAt(target.x, -target.y, target.z)
    this.reflectionCamera.updateMatrixWorld()
    this.reflectionViewProjectionMatrix.multiplyMatrices(
      this.reflectionCamera.projectionMatrix,
      this.reflectionCamera.matrixWorldInverse
    )

    this.renderer.setRenderTarget(this.reflectionTarget)
    this.renderer.clear()
    this.renderer.render(scene, this.reflectionCamera)
  }

  private renderShadow(scene: THREE.Scene) {
    this.shadowMaterial.uniforms.light.value.copy(this.lightDirection)
    this.shadowMaterial.uniformsNeedUpdate = true

    const previousOverrideMaterial = scene.overrideMaterial
    scene.overrideMaterial = this.shadowMaterial
    this.renderer.setRenderTarget(this.shadowTarget)
    this.renderer.clear()
    this.renderer.render(scene, this.shadowCamera)
    scene.overrideMaterial = previousOverrideMaterial
  }

  private clearTarget(target: THREE.WebGLRenderTarget) {
    this.renderer.setRenderTarget(target)
    this.renderer.clear()
  }

  private withTransparentClear(render: () => void) {
    const previousTarget = this.renderer.getRenderTarget()
    this.renderer.getClearColor(this.previousClearColor)
    const previousClearAlpha = this.renderer.getClearAlpha()

    this.renderer.setClearColor(this.clearColor, 0)
    render()
    this.renderer.setRenderTarget(previousTarget)
    this.renderer.setClearColor(this.previousClearColor, previousClearAlpha)
  }

  private withHiddenWaterMeshes(scene: THREE.Scene, render: () => void) {
    const changed: Array<[THREE.Object3D, boolean]> = []

    scene.traverse((object) => {
      if (object.userData.waterOpticsHidden) {
        changed.push([object, object.visible])
        object.visible = false
      }
    })

    render()

    for (const [object, visible] of changed) {
      object.visible = visible
    }
  }
}
