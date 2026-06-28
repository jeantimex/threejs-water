/**
 * @file WaterOpticsState.ts
 * @description Manages the shared global state and configurations for optical shapes in the pool.
 * This class tracks positions, dimensions, and toggle states of shape obstacles (spheres, cubes, torus knots, meshes)
 * and formats them for WebGL shader uniforms.
 */

import * as THREE from 'three';
import type { WaterOpticsDescriptor } from '../water/WaterOptics';

/**
 * Tracks the state of the active objects interacting with the water light rays
 * and synchronized as uniforms across all relevant ShaderMaterials.
 */
export class WaterOpticsState {
  /** The normalized directional vector of the light source. */
  readonly lightDirection = new THREE.Vector3(2, 2, -1).normalize();

  /** The center coordinate of the sphere obstacle (fallback). */
  readonly sphereCenter = new THREE.Vector3();
  /** The radius of the sphere obstacle (fallback). */
  sphereRadius = 0.25;
  /** The centers of the instanced spheres. */
  readonly sphereCenters: THREE.Vector3[] = Array.from({ length: 10 }, () => new THREE.Vector3());
  /** The radii of the instanced spheres. */
  readonly sphereRadii: number[] = Array(10).fill(0.25);
  /** The number of active spheres. */
  sphereCount = 0;
  /** Whether the sphere obstacle is currently enabled. */
  sphereEnabled = false;

  /** The center coordinate of the cube/box obstacle (fallback). */
  readonly cubeCenter = new THREE.Vector3();
  /** The half-extents of the cube/box obstacle (fallback). */
  readonly cubeHalfSize = new THREE.Vector3(0.25, 0.25, 0.25);
  /** The centers of the instanced cubes. */
  readonly cubeCenters: THREE.Vector3[] = Array.from({ length: 10 }, () => new THREE.Vector3());
  /** The halfSizes of the instanced cubes. */
  readonly cubeHalfSizes: THREE.Vector3[] = Array.from({ length: 10 }, () => new THREE.Vector3(0.25, 0.25, 0.25));
  /** The number of active cubes. */
  cubeCount = 0;
  /** Whether the cube/box obstacle is currently enabled. */
  cubeEnabled = false;

  /** The center coordinate of the torus knot obstacle (fallback). */
  readonly torusKnotCenter = new THREE.Vector3();
  /** The centers of the instanced torus knots. */
  readonly torusKnotCenters: THREE.Vector3[] = Array.from({ length: 10 }, () => new THREE.Vector3());
  /** The number of active torus knots. */
  torusKnotCount = 0;
  /** Whether the torus knot obstacle is currently enabled. */
  torusKnotEnabled = false;

  /** The center coordinate of the custom mesh obstacle. */
  readonly meshCenter = new THREE.Vector3();
  /** Bounding radius of the mesh for physics or intersection approximation. */
  meshBoundingRadius = 0.25;
  /** Radius of the mesh used for shadow calculations. */
  meshShadowRadius = 0.25;
  /** Whether the custom mesh obstacle is currently enabled. */
  meshEnabled = false;

  /**
   * Applies a WaterOpticsDescriptor to transition this state to represent the selected shape.
   * Disables all other shapes and updates the geometric variables for the active shape.
   *
   * @param optics The shape descriptor to apply.
   */
  apply(optics: WaterOpticsDescriptor) {
    this.sphereEnabled = false;
    this.cubeEnabled = false;
    this.torusKnotEnabled = false;
    this.meshEnabled = false;

    if (optics.kind === 'sphere') {
      this.sphereCount = optics.count;
      for (let i = 0; i < optics.count; i++) {
        this.sphereCenters[i].copy(optics.centers[i]);
        this.sphereRadii[i] = optics.radii[i];
      }
      if (optics.count > 0) {
        this.sphereCenter.copy(optics.centers[0]);
        this.sphereRadius = optics.radii[0];
      }
      this.sphereEnabled = true;
    } else if (optics.kind === 'box') {
      this.cubeCount = optics.count;
      for (let i = 0; i < optics.count; i++) {
        this.cubeCenters[i].copy(optics.centers[i]);
        this.cubeHalfSizes[i].copy(optics.halfSizes[i]);
      }
      if (optics.count > 0) {
        this.cubeCenter.copy(optics.centers[0]);
        this.cubeHalfSize.copy(optics.halfSizes[0]);
      }
      this.cubeEnabled = true;
    } else if (optics.kind === 'torusknot') {
      this.torusKnotCount = optics.count;
      for (let i = 0; i < optics.count; i++) {
        this.torusKnotCenters[i].copy(optics.centers[i]);
      }
      if (optics.count > 0) {
        this.torusKnotCenter.copy(optics.centers[0]);
      }
      this.torusKnotEnabled = true;
    } else if (optics.kind === 'mesh') {
      this.meshCenter.copy(optics.center);
      this.meshBoundingRadius = optics.boundingRadius;
      this.meshShadowRadius = optics.shadowRadius ?? optics.boundingRadius;
      this.meshEnabled = true;
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
      sphereCenters: { value: this.sphereCenters.map(c => c.clone()) },
      sphereRadii: { value: [...this.sphereRadii] },
      sphereCount: { value: this.sphereCount },
      sphereEnabled: { value: this.sphereEnabled },
      cubeCenter: { value: this.cubeCenter.clone() },
      cubeHalfSize: { value: this.cubeHalfSize.clone() },
      cubeCenters: { value: this.cubeCenters.map(c => c.clone()) },
      cubeHalfSizes: { value: this.cubeHalfSizes.map(h => h.clone()) },
      cubeCount: { value: this.cubeCount },
      cubeEnabled: { value: this.cubeEnabled },
      torusKnotCenter: { value: this.torusKnotCenter.clone() },
      torusKnotCenters: { value: this.torusKnotCenters.map(c => c.clone()) },
      torusKnotCount: { value: this.torusKnotCount },
      torusKnotEnabled: { value: this.torusKnotEnabled },
      meshCenter: { value: this.meshCenter.clone() },
      meshBoundingRadius: { value: this.meshBoundingRadius },
      meshShadowRadius: { value: this.meshShadowRadius },
      meshEnabled: { value: this.meshEnabled },
    };
  }

  /**
   * Synchronizes the current properties directly to an active ShaderMaterial's uniform values.
   * Only attempts to write fields if they exist in the target material.
   *
   * @param material The ShaderMaterial to sync state to.
   */
  syncUniforms(material: THREE.ShaderMaterial) {
    if (material.uniforms.sphereCenter) {
      material.uniforms.sphereCenter.value.copy(this.sphereCenter);
    }
    if (material.uniforms.sphereRadius) {
      material.uniforms.sphereRadius.value = this.sphereRadius;
    }
    if (material.uniforms.sphereCenters) {
      for (let i = 0; i < this.sphereCount; i++) {
        material.uniforms.sphereCenters.value[i].copy(this.sphereCenters[i]);
      }
      material.uniforms.sphereRadii.value = [...this.sphereRadii];
      material.uniforms.sphereCount.value = this.sphereCount;
    }
    if (material.uniforms.sphereEnabled) {
      material.uniforms.sphereEnabled.value = this.sphereEnabled;
    }
    if (material.uniforms.cubeCenter) {
      material.uniforms.cubeCenter.value.copy(this.cubeCenter);
    }
    if (material.uniforms.cubeHalfSize) {
      material.uniforms.cubeHalfSize.value.copy(this.cubeHalfSize);
    }
    if (material.uniforms.cubeCenters) {
      for (let i = 0; i < this.cubeCount; i++) {
        material.uniforms.cubeCenters.value[i].copy(this.cubeCenters[i]);
        material.uniforms.cubeHalfSizes.value[i].copy(this.cubeHalfSizes[i]);
      }
      material.uniforms.cubeCount.value = this.cubeCount;
    }
    if (material.uniforms.cubeEnabled) {
      material.uniforms.cubeEnabled.value = this.cubeEnabled;
    }
    if (material.uniforms.torusKnotCenter) {
      material.uniforms.torusKnotCenter.value.copy(this.torusKnotCenter);
    }
    if (material.uniforms.torusKnotCenters) {
      for (let i = 0; i < this.torusKnotCount; i++) {
        material.uniforms.torusKnotCenters.value[i].copy(this.torusKnotCenters[i]);
      }
      material.uniforms.torusKnotCount.value = this.torusKnotCount;
    }
    if (material.uniforms.torusKnotEnabled) {
      material.uniforms.torusKnotEnabled.value = this.torusKnotEnabled;
    }
    if (material.uniforms.meshCenter) {
      material.uniforms.meshCenter.value.copy(this.meshCenter);
    }
    if (material.uniforms.meshBoundingRadius) {
      material.uniforms.meshBoundingRadius.value = this.meshBoundingRadius;
    }
    if (material.uniforms.meshShadowRadius) {
      material.uniforms.meshShadowRadius.value = this.meshShadowRadius;
    }
    if (material.uniforms.meshEnabled) {
      material.uniforms.meshEnabled.value = this.meshEnabled;
    }
  }
}
