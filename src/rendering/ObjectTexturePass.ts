/**
 * @file ObjectTexturePass.ts
 * @description Manages rendering passes for specific objects placed inside/interacted with the pool.
 * Generates reflection, clipped reflection, refraction, and shadow maps to create realistic
 * optical effects for objects submerged or floating in the water.
 */

import * as THREE from 'three'

/** Vertex shader string for rendering object shadows. */
const shadowVertexShader = `
precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

uniform vec3 light;
uniform float poolWidth;
uniform float poolLength;

void main() {
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 refractedLight = refract(-normalize(light), vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec2 projected = 0.75 * (worldPosition.xz - worldPosition.y * refractedLight.xz / refractedLight.y);
  gl_Position = vec4(projected.x / poolWidth, projected.y / poolLength, 0.0, 1.0);
}
`

/** Fragment shader string for rendering object shadows. */
const shadowFragmentShader = `
precision highp float;

void main() {
  gl_FragColor = vec4(1.0);
}
`

/**
 * Handles generating textures (reflection, refraction, shadows) for objects that reside in the pool.
 * It coordinates multiple WebGL Render Targets to produce inputs for water surface and caustic shaders.
 */
export class ObjectTexturePass {
  /** Render target containing the reflected view of the object (mirrored across water level). */
  readonly reflectionTarget: THREE.WebGLRenderTarget
  /** Render target containing the reflected view clipped above/below the water line. */
  readonly clippedReflectionTarget: THREE.WebGLRenderTarget
  /** Render target containing the refracted view of the object (underwater lookup). */
  readonly refractionTarget: THREE.WebGLRenderTarget
  /** Render target containing the projected shadow mask of the object. */
  readonly shadowTarget: THREE.WebGLRenderTarget
  /** Computed matrix mapping reflected camera view-projection space. */
  readonly reflectionViewProjectionMatrix = new THREE.Matrix4()
  /** Computed matrix mapping original camera view-projection space. */
  readonly viewProjectionMatrix = new THREE.Matrix4()

  /** Internal camera used to render the object reflection pass. */
  private readonly reflectionCamera = new THREE.PerspectiveCamera()
  /** Internal orthographic camera used to project object shadows onto the pool floor. */
  private readonly shadowCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  /** Material used during the shadow projection pass. */
  private readonly shadowMaterial: THREE.ShaderMaterial
  /** Transparent clear color helper. */
  private readonly clearColor = new THREE.Color()
  /** Stores previous clear color to restore after transparent passes. */
  private readonly previousClearColor = new THREE.Color()

  /**
   * Constructs the ObjectTexturePass.
   *
   * @param renderer The active WebGLRenderer.
   * @param lightDirection Normalized direction pointing to the light source.
   */
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
    this.clippedReflectionTarget = new THREE.WebGLRenderTarget(512, 512, options)
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
        poolWidth: { value: 1.0 },
        poolLength: { value: 1.0 },
      },
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
  }

  /**
   * Configures the pool boundaries on the shadow shader to properly bound the projected shadows.
   *
   * @param poolWidth Half-width of the pool.
   * @param poolLength Half-length of the pool.
   */
  setPoolBounds(poolWidth: number, poolLength: number) {
    this.shadowMaterial.uniforms.poolWidth.value = poolWidth
    this.shadowMaterial.uniforms.poolLength.value = poolLength
  }

  /**
   * Updates resolution sizes of the reflection, clipped reflection, and refraction render targets.
   * Scales rendering size dynamically to fit within a 1024 max dimension.
   *
   * @param width Screen width.
   * @param height Screen height.
   */
  setSize(width: number, height: number) {
    const scale = Math.min(1, 1024 / Math.max(width, height))
    this.reflectionTarget.setSize(
      Math.max(1, Math.floor(width * scale)),
      Math.max(1, Math.floor(height * scale))
    )
    this.clippedReflectionTarget.setSize(
      Math.max(1, Math.floor(width * scale)),
      Math.max(1, Math.floor(height * scale))
    )
    this.refractionTarget.setSize(
      Math.max(1, Math.floor(width * scale)),
      Math.max(1, Math.floor(height * scale))
    )
  }

  /**
   * Main entry point to update all targets (reflection, refraction, clipped reflection, shadow)
   * for the given renderableObject inside the Scene.
   *
   * @param scene The global scene instance.
   * @param camera The user/rendering camera.
   * @param renderableObject The specific object (e.g. sphere, box) to render passes for.
   */
  update(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderableObject: THREE.Object3D | null
  ) {
    this.updateViewProjection(camera)

    if (!renderableObject) {
      this.withTransparentClear(() => {
        this.clearTarget(this.reflectionTarget)
        this.clearTarget(this.clippedReflectionTarget)
        this.clearTarget(this.refractionTarget)
        this.clearTarget(this.shadowTarget)
      })
      return
    }

    const materials = this.collectMaterials(renderableObject)
    for (const mat of materials) {
      if (mat.uniforms?.isTexturePass) {
        mat.uniforms.isTexturePass.value = true
      }
    }

    this.withOnlyObjectVisible(scene, renderableObject, () => {
      this.withTransparentClear(() => {
        this.renderRefraction(scene, camera, materials)
        this.renderReflection(scene, camera, materials)
        this.renderClippedReflection(scene, materials)
        this.renderShadow(scene)
      })
    })

    for (const mat of materials) {
      if (mat.uniforms?.isTexturePass) {
        mat.uniforms.isTexturePass.value = false
      }
      if (mat.uniforms?.texturePassMode) {
        mat.uniforms.texturePassMode.value = 0
      }
    }
  }

  /**
   * Helper to recalculate viewProjectionMatrix from the current main camera.
   *
   * @param camera The active rendering perspective camera.
   */
  private updateViewProjection(camera: THREE.PerspectiveCamera) {
    camera.updateMatrixWorld()
    this.viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
  }

  /**
   * Renders the underwater refraction texture.
   *
   * @param scene The global scene.
   * @param camera The perspective camera.
   * @param materials Collected materials of the active object.
   */
  private renderRefraction(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    materials: THREE.ShaderMaterial[]
  ) {
    this.setTexturePassMode(materials, 1)
    this.renderer.setRenderTarget(this.refractionTarget)
    this.renderer.clear()
    this.renderer.render(scene, camera)
  }

  /**
   * Renders the reflection texture by mirroring the camera below the water surface level.
   *
   * @param scene The global scene.
   * @param camera The perspective camera.
   * @param materials Collected materials of the active object.
   */
  private renderReflection(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    materials: THREE.ShaderMaterial[]
  ) {
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

    this.setTexturePassMode(materials, 1)
    this.renderer.setRenderTarget(this.reflectionTarget)
    this.renderer.clear()
    this.renderer.render(scene, this.reflectionCamera)
  }

  /**
   * Renders the reflection texture clipped at the water boundary plane.
   *
   * @param scene The global scene.
   * @param materials Collected materials of the active object.
   */
  private renderClippedReflection(scene: THREE.Scene, materials: THREE.ShaderMaterial[]) {
    this.setTexturePassMode(materials, 2)
    this.renderer.setRenderTarget(this.clippedReflectionTarget)
    this.renderer.clear()
    this.renderer.render(scene, this.reflectionCamera)
  }

  /**
   * Renders the orthographic shadows of the object.
   *
   * @param scene The global scene.
   */
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

  /**
   * Clears a single WebGLRenderTarget.
   *
   * @param target Render target to clear.
   */
  private clearTarget(target: THREE.WebGLRenderTarget) {
    this.renderer.setRenderTarget(target)
    this.renderer.clear()
  }

  /**
   * Helper function to execute rendering callbacks with a transparent black clear color,
   * restoring the original clear configuration afterwards.
   *
   * @param render Callback function containing rendering operations.
   */
  private withTransparentClear(render: () => void) {
    const previousTarget = this.renderer.getRenderTarget()
    this.renderer.getClearColor(this.previousClearColor)
    const previousClearAlpha = this.renderer.getClearAlpha()

    this.renderer.setClearColor(this.clearColor, 0)
    render()
    this.renderer.setRenderTarget(previousTarget)
    this.renderer.setClearColor(this.previousClearColor, previousClearAlpha)
  }

  /**
   * Temporarily toggles visibility of all objects in the scene off except the target object
   * to render it in isolation.
   *
   * @param scene The global scene.
   * @param renderableObject The object to keep visible.
   * @param render Callback function containing rendering operations.
   */
  private withOnlyObjectVisible(
    scene: THREE.Scene,
    renderableObject: THREE.Object3D,
    render: () => void
  ) {
    const changed: Array<[THREE.Object3D, boolean]> = []

    scene.traverse((object) => {
      if (object !== scene && !this.isObjectOrDescendant(object, renderableObject)) {
        changed.push([object, object.visible])
        object.visible = false
      }
    })

    render()

    for (const [object, visible] of changed) {
      object.visible = visible
    }
  }

  /**
   * Recursively checks if an object is or is a descendant of a specific root object.
   *
   * @param object The object to check.
   * @param root The root object to compare against.
   * @returns True if object is a descendant or is the root, false otherwise.
   */
  private isObjectOrDescendant(object: THREE.Object3D, root: THREE.Object3D) {
    for (let current: THREE.Object3D | null = object; current; current = current.parent) {
      if (current === root) return true
    }
    return false
  }

  /**
   * Helper to set uniform texturePassMode on all object materials to tell the shaders how to render them.
   *
   * @param materials The list of materials.
   * @param mode The texture pass mode code.
   */
  private setTexturePassMode(materials: THREE.ShaderMaterial[], mode: number) {
    for (const mat of materials) {
      if (mat.uniforms?.texturePassMode) {
        mat.uniforms.texturePassMode.value = mode
        mat.uniformsNeedUpdate = true
      }
    }
  }

  /**
   * Helper to collect all ShaderMaterial instances within a given Object3D's hierarchy.
   *
   * @param object The root object to traverse.
   * @returns Array of collected ShaderMaterials.
   */
  private collectMaterials(object: THREE.Object3D): THREE.ShaderMaterial[] {
    const materials: THREE.ShaderMaterial[] = []
    object.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.ShaderMaterial) {
        materials.push(child.material)
      }
    })
    return materials
  }
}
