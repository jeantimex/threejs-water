import * as THREE from 'three';
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering';
import sphereRenderVert from '../shaders/SphereRender.vert';
import sphereRenderFrag from '../shaders/SphereRender.frag';
import type { Water } from '../Water';
import { SphereWaterDisplacement } from '../water/WaterDisplacement';
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject';
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils';

/**
 * Represents multiple instanced sphere shape obstacles in the water simulation.
 * Implements SimulationObject to support custom shaders, physics, water displacements,
 * and user mouse hit testing.
 */
export class SphereObject implements SimulationObject {
  readonly name = 'Sphere';
  // Default spawning position of the primary sphere (first instance)
  readonly position = new THREE.Vector3(-0.4, -0.75, 0.2);
  readonly velocity = new THREE.Vector3();
  // Collision/Interaction radius of each sphere
  readonly interactionRadius = 0.25;

  // Number of active instances to render and simulate
  instanceCount = 1;
  // Maximum number of instances allocated in InstancedMesh
  readonly maxSpheres = 5;

  // Arrays holding physical properties for all instanced spheres
  readonly positions: THREE.Vector3[];
  readonly velocities: THREE.Vector3[];
  private readonly previousPositions: THREE.Vector3[];

  private draggedInstanceIndex: number | null = null;

  /**
   * Returns the minimum Y position (center Y) of a sphere when it rests on the pool bottom.
   */
  floorY(poolHeight: number) {
    return this.interactionRadius - poolHeight;
  }

  // Displacement strategy mapping coordinates to heightmap texture changes
  readonly displacement = new SphereWaterDisplacement(this.interactionRadius);
  
  // Optics description for raytraced reflections/refractions in the water shader
  get optics() {
    return {
      kind: 'sphere' as const,
      center: this.position,
      radius: this.interactionRadius,
      centers: this.positions,
      radii: Array(this.maxSpheres).fill(this.interactionRadius),
      count: this.instanceCount,
    };
  }

  readonly mesh: THREE.InstancedMesh;
  enabled = true;

  private readonly material: THREE.ShaderMaterial;

  constructor(private readonly resources: SimulationObjectRenderResources) {
    // Initialize arrays; first element references this.position and this.velocity directly
    this.positions = Array.from({ length: this.maxSpheres }, (_, i) =>
      i === 0 ? this.position : this.position.clone()
    );
    this.velocities = Array.from({ length: this.maxSpheres }, (_, i) =>
      i === 0 ? this.velocity : this.velocity.clone()
    );
    this.previousPositions = this.positions.map((p) => p.clone());

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

    // Create instanced mesh with unit sphere (radius 1).
    this.mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 32, 32), this.material, this.maxSpheres);
    this.mesh.frustumCulled = false;
    this.mesh.count = this.instanceCount;
  }

  /**
   * Toggles the visibility/state of the spheres.
   * If enabled, moves objects from the sky (Y=10+) to active positions, generating splashes.
   * If disabled, moves objects back to the sky, pulling the water column upwards.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (!enabled) {
      if (this.enabled) {
        for (let i = 0; i < this.maxSpheres; i++) {
          const inactivePosition = this.getInactivePosition(i);
          this.displacement.move(water, this.positions[i], inactivePosition);
          this.positions[i].copy(inactivePosition);
          this.velocities[i].set(0, 0, 0);
        }
        this.draggedInstanceIndex = null;
        this.enabled = false;
        this.mesh.visible = false;
        this.syncPreviousPosition();
      }
      return;
    }

    // enabled is true:
    const offsets = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.4, 0, 0.4),
      new THREE.Vector3(-0.4, 0, -0.4),
      new THREE.Vector3(0.4, 0, -0.4),
      new THREE.Vector3(-0.4, 0, 0.4),
    ];

    for (let i = 0; i < this.maxSpheres; i++) {
      const inactivePosition = this.getInactivePosition(i);
      if (i < this.instanceCount) {
        // If the position is already active (i.e. not in the sky), keep it!
        // Otherwise, initialize it from the base position and offset.
        if (this.positions[i].y >= 5.0) {
          this.positions[i].copy(this.position).add(offsets[i]);
        }

        // Clamp inside pool bounds
        this.positions[i].x = THREE.MathUtils.clamp(this.positions[i].x, -0.7, 0.7);
        this.positions[i].y = Math.max(this.positions[i].y, this.floorY(1.0));
        this.positions[i].z = THREE.MathUtils.clamp(this.positions[i].z, -0.7, 0.7);

        this.velocities[i].set(0, 0, 0);

        this.displacement.move(water, inactivePosition, this.positions[i]);
        this.previousPositions[i].copy(this.positions[i]);
      } else {
        this.displacement.move(water, this.positions[i], inactivePosition);
        this.positions[i].copy(inactivePosition);
        this.velocities[i].set(0, 0, 0);
        this.previousPositions[i].copy(inactivePosition);
      }
    }

    this.mesh.count = this.instanceCount;
    this.mesh.visible = this.instanceCount > 0;
    this.enabled = true;
    this.syncPreviousPosition();
  }

  /**
   * Synchronizes the previous coordinates to avoid creating splash deltas on layout changes.
   */
  syncPreviousPosition() {
    for (let i = 0; i < this.maxSpheres; i++) {
      this.previousPositions[i].copy(this.positions[i]);
    }
  }

  /**
   * Updates the position/velocity of all spheres and writes displacement heightmap differences.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return;

    for (let i = 0; i < this.instanceCount; i++) {
      const isDragged = (i === this.draggedInstanceIndex && context.dragging);
      const sphereContext = {
        ...context,
        dragging: isDragged
      };

      // Run physical simulation calculations
      updatePhysics(
        seconds,
        this.positions[i],
        this.velocities[i],
        sphereContext,
        this.interactionRadius,
        this.interactionRadius
      );

      // Displace water based on positional delta between ticks
      this.displacement.move(
        water,
        this.previousPositions[i],
        this.positions[i],
        context.poolWidth,
        context.poolLength
      );
      this.previousPositions[i].copy(this.positions[i]);
    }
  }

  /**
   * Performs analytical ray-sphere intersection for mouse hit testing against all spheres.
   * Returns nearest intersection contact point, or null if missed.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null;

    let nearestDistance = 1.0e6;
    let hitPoint: THREE.Vector3 | null = null;
    this.draggedInstanceIndex = null;

    for (let i = 0; i < this.instanceCount; i++) {
      const toOrigin = origin.clone().sub(this.positions[i]);
      const a = direction.lengthSq();
      const b = 2 * toOrigin.dot(direction);
      const c = toOrigin.lengthSq() - this.interactionRadius * this.interactionRadius;
      const discriminant = b * b - 4 * a * c;

      if (discriminant > 0) {
        const distance = (-b - Math.sqrt(discriminant)) / (2 * a);
        if (distance > 0 && distance < nearestDistance) {
          nearestDistance = distance;
          hitPoint = origin.clone().addScaledVector(direction, distance);
          this.draggedInstanceIndex = i;
        }
      }
    }

    return hitPoint;
  }

  /**
   * Repositions the spheres based on user drag interactions.
   */
  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    if (this.draggedInstanceIndex !== null) {
      clampAndMoveObject(
        this.positions[this.draggedInstanceIndex],
        delta,
        poolWidth,
        poolHeight,
        poolLength,
        this.interactionRadius,
        this.interactionRadius,
        this.interactionRadius
      );
    } else {
      // Fallback/Update bounds for all spheres simultaneously (e.g. pool resizing)
      for (let i = 0; i < this.instanceCount; i++) {
        clampAndMoveObject(
          this.positions[i],
          delta,
          poolWidth,
          poolHeight,
          poolLength,
          this.interactionRadius,
          this.interactionRadius,
          this.interactionRadius
        );
      }
    }
  }

  /**
   * Updates shader uniforms and instance matrices immediately prior to rendering.
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

    // Compose instance matrices (translation, rotation, scaling)
    const tempMatrix = new THREE.Matrix4();
    const tempScale = new THREE.Vector3(this.interactionRadius, this.interactionRadius, this.interactionRadius);
    const tempRotation = new THREE.Quaternion();

    for (let i = 0; i < this.instanceCount; i++) {
      tempMatrix.compose(this.positions[i], tempRotation, tempScale);
      this.mesh.setMatrixAt(i, tempMatrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Returns a coordinate high in the sky where the object stays when inactive.
   * Offset Y to avoid overlapping spheres pulling water on the same vertical axis.
   */
  private getInactivePosition(index: number): THREE.Vector3 {
    return new THREE.Vector3(this.positions[index].x, 10.0 + index * 2.0, this.positions[index].z);
  }
}
