/**
 * @file WaterOpticsState.ts
 * @description Manages the shared global state and configurations for optical shapes in the pool.
 * This class tracks positions, dimensions, and toggle states of shape obstacles (spheres, cubes, torus knots, meshes)
 * and formats them for WebGL shader uniforms.
 */

import * as THREE from 'three'
import type { WaterOpticsDescriptor } from '../water/WaterOptics'

/**
 * Tracks the state of the active objects interacting with the water light rays
 * and synchronized as uniforms across all relevant ShaderMaterials.
 */
export class WaterOpticsState {
  /** The normalized directional vector of the light source. */
  readonly lightDirection = new THREE.Vector3(2, 2, -1).normalize()

  /** The center coordinate of the sphere obstacle. */
  readonly sphereCenter = new THREE.Vector3()
  /** The radius of the sphere obstacle. */
  sphereRadius = 0.25
  /** Whether the sphere obstacle is currently enabled. */
  sphereEnabled = false

  /** The center coordinate of the cube/box obstacle. */
  readonly cubeCenter = new THREE.Vector3()
  /** The half-extents of the cube/box obstacle. */
  readonly cubeHalfSize = new THREE.Vector3(0.25, 0.25, 0.25)
  /** Whether the cube/box obstacle is currently enabled. */
  cubeEnabled = false

  /** The center coordinate of the torus knot obstacle. */
  readonly torusKnotCenter = new THREE.Vector3()
  /** Whether the torus knot obstacle is currently enabled. */
  torusKnotEnabled = false

  /** The center coordinate of the custom mesh obstacle. */
  readonly meshCenter = new THREE.Vector3()
  /** Bounding radius of the mesh for physics or intersection approximation. */
  meshBoundingRadius = 0.25
  /** Radius of the mesh used for shadow calculations. */
  meshShadowRadius = 0.25
  /** Whether the custom mesh obstacle is currently enabled. */
  meshEnabled = false

  /**
   * Applies a WaterOpticsDescriptor to transition this state to represent the selected shape.
   * Disables all other shapes and updates the geometric variables for the active shape.
   *
   * @param optics The shape descriptor to apply.
   */
  apply(optics: WaterOpticsDescriptor) {
    this.sphereEnabled = false
    this.cubeEnabled = false
    this.torusKnotEnabled = false
    this.meshEnabled = false

    if (optics.kind === 'sphere') {
      this.sphereCenter.copy(optics.center)
      this.sphereRadius = optics.radius
      this.sphereEnabled = true
    } else if (optics.kind === 'box') {
      this.cubeCenter.copy(optics.center)
      this.cubeHalfSize.copy(optics.halfSize)
      this.cubeEnabled = true
    } else if (optics.kind === 'torusknot') {
      this.torusKnotCenter.copy(optics.center)
      this.torusKnotEnabled = true
    } else if (optics.kind === 'mesh') {
      this.meshCenter.copy(optics.center)
      this.meshBoundingRadius = optics.boundingRadius
      this.meshShadowRadius = optics.shadowRadius ?? optics.boundingRadius
      this.meshEnabled = true
    }
  }

  /**
   * Creates an initial uniforms object structure with cloned values
   * to be passed during shader initialization.
   *
   * @returns An object containing WebGL-compatible uniform formats.
   */
  createUniforms() {
    return {
      sphereCenter: { value: this.sphereCenter.clone() },
      sphereRadius: { value: this.sphereRadius },
      sphereEnabled: { value: this.sphereEnabled },
      cubeCenter: { value: this.cubeCenter.clone() },
      cubeHalfSize: { value: this.cubeHalfSize.clone() },
      cubeEnabled: { value: this.cubeEnabled },
      torusKnotCenter: { value: this.torusKnotCenter.clone() },
      torusKnotEnabled: { value: this.torusKnotEnabled },
      meshCenter: { value: this.meshCenter.clone() },
      meshBoundingRadius: { value: this.meshBoundingRadius },
      meshShadowRadius: { value: this.meshShadowRadius },
      meshEnabled: { value: this.meshEnabled },
    }
  }

  /**
   * Synchronizes the current properties directly to an active ShaderMaterial's uniform values.
   * Only attempts to write fields if they exist in the target material.
   *
   * @param material The ShaderMaterial to sync state to.
   */
  syncUniforms(material: THREE.ShaderMaterial) {
    material.uniforms.sphereCenter.value.copy(this.sphereCenter)
    material.uniforms.sphereRadius.value = this.sphereRadius
    material.uniforms.sphereEnabled.value = this.sphereEnabled
    material.uniforms.cubeCenter.value.copy(this.cubeCenter)
    material.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize)
    material.uniforms.cubeEnabled.value = this.cubeEnabled
    if (material.uniforms.torusKnotCenter) {
      material.uniforms.torusKnotCenter.value.copy(this.torusKnotCenter)
    }
    if (material.uniforms.torusKnotEnabled) {
      material.uniforms.torusKnotEnabled.value = this.torusKnotEnabled
    }
    if (material.uniforms.meshCenter) {
      material.uniforms.meshCenter.value.copy(this.meshCenter)
    }
    if (material.uniforms.meshBoundingRadius) {
      material.uniforms.meshBoundingRadius.value = this.meshBoundingRadius
    }
    if (material.uniforms.meshShadowRadius) {
      material.uniforms.meshShadowRadius.value = this.meshShadowRadius
    }
    if (material.uniforms.meshEnabled) {
      material.uniforms.meshEnabled.value = this.meshEnabled
    }
  }
}
