import * as THREE from 'three';
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering';
import cubeRenderVert from '../shaders/ObjectCubeRender.vert';
import cubeRenderFrag from '../shaders/ObjectCubeRender.frag';
import type { Water } from '../Water';
import { BoxWaterDisplacement } from '../water/WaterDisplacement';
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject';
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils';

/**
 * Represents multiple instanced cube (or rectangular cuboid) shape obstacles in the water simulation.
 * Implements SimulationObject. Extends a standard bounding box to support custom
 * physical properties, displacements, and interactions.
 */
export class CubeObject implements SimulationObject {
  readonly name = 'Cube';
  // Bounding half dimensions of each box (0.25 on each side, representing a 0.5x0.5x0.5 cube)
  readonly halfSize = new THREE.Vector3(0.25, 0.25, 0.25);
  // Spawn position of the primary cube
  readonly position = new THREE.Vector3(-0.4, this.halfSize.y - 1, 0.2);
  readonly velocity = new THREE.Vector3();

  // Number of active instances to render and simulate
  instanceCount = 1;
  // Maximum number of instances allocated in InstancedMesh
  readonly maxCubes = 5;

  // Arrays holding physical properties for all instanced cubes
  readonly positions: THREE.Vector3[];
  readonly velocities: THREE.Vector3[];
  private readonly previousPositions: THREE.Vector3[];

  private draggedInstanceIndex: number | null = null;

  /**
   * Returns the minimum Y center coordinate when a cube rests on the pool floor.
   */
  floorY(poolHeight: number) {
    return this.halfSize.y - poolHeight;
  }

  // Displacement strategy representing how moving box boundaries alter water heights
  readonly displacement = new BoxWaterDisplacement(this.halfSize);
  
  // Optics description for raytracing reflections/refractions in the water shader
  get optics() {
    return {
      kind: 'box' as const,
      center: this.position,
      halfSize: this.halfSize,
      centers: this.positions,
      halfSizes: Array(this.maxCubes).fill(this.halfSize),
      count: this.instanceCount,
    };
  }

  readonly mesh: THREE.InstancedMesh;
  enabled = false;

  private readonly bounds = new THREE.Box3();
  private readonly material: THREE.ShaderMaterial;

  constructor(private readonly resources: SimulationObjectRenderResources) {
    // Initialize arrays; first element references this.position and this.velocity directly
    this.positions = Array.from({ length: this.maxCubes }, (_, i) =>
      i === 0 ? this.position : this.position.clone()
    );
    this.velocities = Array.from({ length: this.maxCubes }, (_, i) =>
      i === 0 ? this.velocity : this.velocity.clone()
    );
    this.previousPositions = this.positions.map((p) => p.clone());

    // Custom shader material mapping sunlight directions and caustics map
    this.material = new THREE.ShaderMaterial({
      vertexShader: cubeRenderVert,
      fragmentShader: cubeRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        cubeCenter: { value: this.position.clone() },
        cubeHalfSize: { value: this.halfSize.clone() },
        poolWidth: { value: 1.0 },
        poolHeight: { value: 1.0 },
        poolLength: { value: 1.0 },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
      },
      depthTest: true,
      depthWrite: true,
    });

    // Create instanced box mesh (1x1x1 unit geometry scaled via instance matrices)
    this.mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), this.material, this.maxCubes);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    this.mesh.count = this.instanceCount;
  }

  /**
   * Toggles the active state of the cubes, triggering splash displacements.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (!enabled) {
      if (this.enabled) {
        for (let i = 0; i < this.maxCubes; i++) {
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

    for (let i = 0; i < this.maxCubes; i++) {
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
   * Resets position history to prevent displacement spikes.
   */
  syncPreviousPosition() {
    for (let i = 0; i < this.maxCubes; i++) {
      this.previousPositions[i].copy(this.positions[i]);
    }
  }

  /**
   * Main update tick to execute buoyancy/gravity physics and write wave height displacements.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return;

    for (let i = 0; i < this.instanceCount; i++) {
      const isDragged = (i === this.draggedInstanceIndex && context.dragging);
      const cubeContext = {
        ...context,
        dragging: isDragged
      };

      updatePhysics(seconds, this.positions[i], this.velocities[i], cubeContext, this.halfSize.y, this.halfSize.y);

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
   * Computes ray-box intersection for mouse drags against all cubes.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null;

    let nearestDistance = 1.0e6;
    let hitPoint: THREE.Vector3 | null = null;
    this.draggedInstanceIndex = null;

    const ray = new THREE.Ray(origin, direction);
    const tempHit = new THREE.Vector3();

    for (let i = 0; i < this.instanceCount; i++) {
      this.bounds.set(
        this.positions[i].clone().sub(this.halfSize),
        this.positions[i].clone().add(this.halfSize)
      );

      const hit = ray.intersectBox(this.bounds, tempHit);
      if (hit) {
        const distance = origin.distanceTo(hit);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          hitPoint = hit.clone();
          this.draggedInstanceIndex = i;
        }
      }
    }

    return hitPoint;
  }

  /**
   * Translates the box position and clamps it within the pool boundaries.
   */
  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    if (this.draggedInstanceIndex !== null) {
      clampAndMoveObject(
        this.positions[this.draggedInstanceIndex],
        delta,
        poolWidth,
        poolHeight,
        poolLength,
        this.halfSize.x,
        this.halfSize.z,
        this.halfSize.y
      );
    } else {
      // Fallback/Update bounds for all cubes simultaneously (e.g. pool resizing)
      for (let i = 0; i < this.instanceCount; i++) {
        clampAndMoveObject(
          this.positions[i],
          delta,
          poolWidth,
          poolHeight,
          poolLength,
          this.halfSize.x,
          this.halfSize.z,
          this.halfSize.y
        );
      }
    }
  }

  /**
   * Pre-renders uniform values and updates instance matrices.
   */
  prepareRender(water: Water, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    this.material.uniforms.water.value = water.textureA.texture;
    this.material.uniforms.light.value.copy(this.resources.lightDirection);
    this.material.uniforms.cubeCenter.value.copy(this.position);
    this.material.uniforms.cubeHalfSize.value.copy(this.halfSize);
    this.material.uniforms.poolWidth.value = poolWidth;
    this.material.uniforms.poolHeight.value = poolHeight;
    this.material.uniforms.poolLength.value = poolLength;
    this.material.uniformsNeedUpdate = true;

    // Compose instance matrices (translation, rotation, scaling)
    const tempMatrix = new THREE.Matrix4();
    const tempScale = new THREE.Vector3(this.halfSize.x * 2.0, this.halfSize.y * 2.0, this.halfSize.z * 2.0);
    const tempRotation = new THREE.Quaternion();

    for (let i = 0; i < this.instanceCount; i++) {
      tempMatrix.compose(this.positions[i], tempRotation, tempScale);
      this.mesh.setMatrixAt(i, tempMatrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Returns a coordinate high in the sky where the object stays when inactive.
   */
  private getInactivePosition(index: number) {
    return new THREE.Vector3(this.positions[index].x, 10.0 + index * 2.0, this.positions[index].z);
  }
}
