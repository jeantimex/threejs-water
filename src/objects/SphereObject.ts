import * as THREE from 'three';
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering';
import sphereRenderVert from '../shaders/SphereRender.vert';
import sphereRenderFrag from '../shaders/SphereRender.frag';
import type { Water } from '../Water';
import { SphereWaterDisplacement } from '../water/WaterDisplacement';
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject';
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils';

/**
 * Represents a sphere shape obstacle in the water simulation.
 * Implements SimulationObject to support custom shaders, physics, water displacements,
 * and user mouse hit testing.
 */
export class SphereObject implements SimulationObject {
  readonly name = 'Sphere';
  // Default spawning position
  readonly position = new THREE.Vector3(-0.4, -0.75, 0.2);
  readonly velocity = new THREE.Vector3();
  // Collision/Interaction radius of the sphere
  readonly interactionRadius = 0.25;

  /**
   * Returns the minimum Y position (center Y) of the sphere when it rests on the pool bottom.
   */
  floorY(poolHeight: number) {
    return this.interactionRadius - poolHeight;
  }

  // Displacement strategy mapping coordinates to heightmap texture changes
  readonly displacement = new SphereWaterDisplacement(this.interactionRadius);
  // Optics description for raytraced reflections/refractions in the water shader
  readonly optics = {
    kind: 'sphere' as const,
    center: this.position,
    radius: this.interactionRadius,
  };

  readonly mesh: THREE.Mesh;
  enabled = true;

  private readonly previousPosition = this.position.clone();
  private readonly material: THREE.ShaderMaterial;

  constructor(private readonly resources: SimulationObjectRenderResources) {
    // Standard ThreeJS shader material binding uniform positions/lights and water textures
    this.material = new THREE.ShaderMaterial({
      vertexShader: sphereRenderVert,
      fragmentShader: sphereRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        sphereCenter: { value: this.position.clone() },
        sphereRadius: { value: this.interactionRadius },
        poolWidth: { value: 1.0 },
        poolHeight: { value: 1.0 },
        poolLength: { value: 1.0 },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    });

    // Create unit sphere (radius 1). Scaling/Translation are done dynamically in the vertex shader.
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), this.material);
    this.mesh.frustumCulled = false;
  }

  /**
   * Toggles the visibility/state of the sphere.
   * If enabled, moves the object from the sky (Y=10) to its active position, generating a splash.
   * If disabled, moves the object to the sky, pulling the water column upwards.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return;

    const inactivePosition = this.getInactivePosition();
    if (enabled) {
      this.displacement.move(water, inactivePosition, this.position);
    } else {
      this.displacement.move(water, this.position, inactivePosition);
      this.velocity.set(0, 0, 0);
    }

    this.enabled = enabled;
    this.mesh.visible = enabled;
    this.previousPosition.copy(this.position);
  }

  /**
   * Synchronizes the previous coordinates to avoid creating splash deltas on layout changes.
   */
  syncPreviousPosition() {
    this.previousPosition.copy(this.position);
  }

  /**
   * Updates the sphere's position/velocity and writes displacement heightmap differences.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return;

    // Run the physical simulation tick
    updatePhysics(
      seconds,
      this.position,
      this.velocity,
      context,
      this.interactionRadius,
      this.interactionRadius
    );

    // Displace water based on positional delta between ticks
    this.displacement.move(
      water,
      this.previousPosition,
      this.position,
      context.poolWidth,
      context.poolLength
    );
    this.previousPosition.copy(this.position);
  }

  /**
   * Performs analytical ray-sphere intersection for mouse hit testing.
   * Returns intersection contact point, or null if missed.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null;

    const toOrigin = origin.clone().sub(this.position);
    const a = direction.lengthSq();
    const b = 2 * toOrigin.dot(direction);
    const c = toOrigin.lengthSq() - this.interactionRadius * this.interactionRadius;
    const discriminant = b * b - 4 * a * c;

    if (discriminant <= 0) return null;
    const distance = (-b - Math.sqrt(discriminant)) / (2 * a);
    return distance > 0 ? origin.clone().addScaledVector(direction, distance) : null;
  }

  /**
   * Repositions the sphere based on user drag interactions.
   */
  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    clampAndMoveObject(
      this.position,
      delta,
      poolWidth,
      poolHeight,
      poolLength,
      this.interactionRadius,
      this.interactionRadius,
      this.interactionRadius
    );
  }

  /**
   * Updates shader uniforms immediately prior to rendering.
   */
  prepareRender(water: Water, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    this.material.uniforms.water.value = water.textureA.texture;
    this.material.uniforms.light.value.copy(this.resources.lightDirection);
    this.material.uniforms.sphereCenter.value.copy(this.position);
    this.material.uniforms.sphereRadius.value = this.interactionRadius;
    this.material.uniforms.poolWidth.value = poolWidth;
    this.material.uniforms.poolHeight.value = poolHeight;
    this.material.uniforms.poolLength.value = poolLength;
    this.material.uniformsNeedUpdate = true;
  }

  /**
   * Returns a coordinate high in the sky (Y=10.0) where the object stays when inactive.
   */
  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z);
  }
}
