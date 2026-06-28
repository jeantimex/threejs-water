import * as THREE from 'three';
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering';
import torusKnotRenderVert from '../shaders/TorusKnotRender.vert';
import torusKnotRenderFrag from '../shaders/TorusKnotRender.frag';
import type { Water } from '../Water';
import { CompoundSphereWaterDisplacement } from '../water/WaterDisplacement';
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject';
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils';

/**
 * Represents multiple instanced Torus Knot obstacles in the water simulation.
 * Implements SimulationObject. Approximates geometry using an array of 24 overlapping spheres
 * per instance to compute water height displacements.
 */
export class TorusKnotObject implements SimulationObject {
  readonly name = 'TorusKnot';
  // Bounding radius of the knot structure (used for optics ray intersections)
  readonly boundingRadius = 0.31;
  // Height clearance threshold to sit properly on the bottom
  readonly floorClearance = 0.13;
  // Default position of the primary torus knot
  readonly position = new THREE.Vector3(-0.4, this.floorClearance - 1, 0.2);
  readonly velocity = new THREE.Vector3();

  // Number of torus knots to render and simulate
  readonly numTorusKnots = 5;

  // Arrays holding physical properties for all instanced torus knots
  readonly positions: THREE.Vector3[];
  readonly velocities: THREE.Vector3[];
  private readonly previousPositions: THREE.Vector3[];

  private draggedInstanceIndex: number | null = null;

  /**
   * Returns the minimum Y center coordinate when the knot rests on the pool floor.
   */
  floorY(poolHeight: number) {
    return this.floorClearance - poolHeight;
  }

  // Displacement strategy mapping multiple overlapping spheres to water heightmap adjustments
  readonly displacement: CompoundSphereWaterDisplacement;
  
  // Optics description for raytracing reflections/refractions in the water shader
  get optics() {
    return {
      kind: 'torusknot' as const,
      center: this.position,
      centers: this.positions,
      count: this.numTorusKnots,
    };
  }

  readonly mesh: THREE.InstancedMesh;
  enabled = false;

  private readonly material: THREE.ShaderMaterial;
  private readonly raycaster = new THREE.Raycaster();

  constructor(private readonly resources: SimulationObjectRenderResources) {
    // Initialize arrays; first element references this.position and this.velocity directly
    this.positions = Array.from({ length: this.numTorusKnots }, (_, i) =>
      i === 0 ? this.position : this.position.clone()
    );
    this.velocities = Array.from({ length: this.numTorusKnots }, (_, i) =>
      i === 0 ? this.velocity : this.velocity.clone()
    );
    this.previousPositions = this.positions.map((p) => p.clone());

    // Custom shader material mapping sunlight directions and caustics map
    this.material = new THREE.ShaderMaterial({
      vertexShader: torusKnotRenderVert,
      fragmentShader: torusKnotRenderFrag,
      uniforms: {
        light: { value: resources.lightDirection.clone() },
        torusKnotCenter: { value: this.position.clone() },
        poolWidth: { value: 1.0 },
        poolHeight: { value: 1.0 },
        poolLength: { value: 1.0 },
        water: { value: null },
        causticTex: { value: resources.causticTexture },
        texturePassMode: { value: 0 },
      },
      depthTest: true,
      depthWrite: true,
    });

    // Construct TorusKnot geometry
    const geometry = new THREE.TorusKnotGeometry(0.17, 0.045, 64, 8);
    geometry.rotateX(Math.PI / 2); // Orient it flat with the water surface

    // InstancedMesh setup
    this.mesh = new THREE.InstancedMesh(geometry, this.material, this.numTorusKnots);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;

    // Generate compound spheres for water displacement:
    // We sample 24 points along the knot's path and place displacement spheres
    // of radius `tube * 2.0` (0.09) to approximate a continuous curved tube body.
    const spheres = [];
    const segments = 24;
    const radius = 0.17;
    const tube = 0.045;
    const p = 2;
    const q = 3;
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const radialRadius = radius * (2 + Math.cos(q * theta)) * 0.5;
      const x = radialRadius * Math.cos(p * theta);
      const z = radialRadius * Math.sin(p * theta);
      const y = -radius * Math.sin(q * theta) * 0.5;
      spheres.push({
        offset: new THREE.Vector3(x, y, z),
        radius: tube * 2.0, // slightly larger to prevent gaps between segments
      });
    }
    this.displacement = new CompoundSphereWaterDisplacement(spheres, 0.15);
  }

  /**
   * Toggles the active state of the knots, triggering splash displacements.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return;

    if (enabled) {
      // Preset offsets for spreading out the spawned torus knots around the spawn position
      const offsets = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.45, 0, 0.45),
        new THREE.Vector3(-0.45, 0, -0.45),
        new THREE.Vector3(0.45, 0, -0.45),
        new THREE.Vector3(-0.45, 0, 0.45),
      ];

      for (let i = 0; i < this.numTorusKnots; i++) {
        const inactivePosition = this.getInactivePosition(i);
        this.positions[i].copy(this.position).add(offsets[i]);

        // Clamp inside pool bounds
        this.positions[i].x = THREE.MathUtils.clamp(this.positions[i].x, -0.7, 0.7);
        this.positions[i].y = Math.max(this.positions[i].y, this.floorY(1.0));
        this.positions[i].z = THREE.MathUtils.clamp(this.positions[i].z, -0.7, 0.7);

        this.velocities[i].set(0, 0, 0);

        this.displacement.move(water, inactivePosition, this.positions[i]);
        this.previousPositions[i].copy(this.positions[i]);
      }
    } else {
      for (let i = 0; i < this.numTorusKnots; i++) {
        const inactivePosition = this.getInactivePosition(i);
        this.displacement.move(water, this.positions[i], inactivePosition);
        this.velocities[i].set(0, 0, 0);
      }
      this.draggedInstanceIndex = null;
    }

    this.enabled = enabled;
    this.mesh.visible = enabled;
    this.syncPreviousPosition();
  }

  /**
   * Resets position history to prevent displacement spikes.
   */
  syncPreviousPosition() {
    for (let i = 0; i < this.numTorusKnots; i++) {
      this.previousPositions[i].copy(this.positions[i]);
    }
  }

  /**
   * Main update tick to execute buoyancy/gravity physics and write wave height displacements.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return;

    for (let i = 0; i < this.numTorusKnots; i++) {
      const isDragged = (i === this.draggedInstanceIndex && context.dragging);
      const knotContext = {
        ...context,
        dragging: isDragged
      };

      updatePhysics(
        seconds,
        this.positions[i],
        this.velocities[i],
        knotContext,
        this.boundingRadius,
        this.floorClearance
      );

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
   * Performs raycaster intersection testing against the 3D TorusKnot geometry.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null;
    
    this.mesh.updateMatrixWorld(true);
    this.raycaster.set(origin, direction);
    const intersects = this.raycaster.intersectObject(this.mesh);
    
    if (intersects.length > 0) {
      const hit = intersects[0];
      this.draggedInstanceIndex = hit.instanceId ?? null;
      return hit.point;
    }
    
    return null;
  }

  /**
   * Translates the knot position and clamps it within the pool boundaries.
   */
  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    if (this.draggedInstanceIndex !== null) {
      clampAndMoveObject(
        this.positions[this.draggedInstanceIndex],
        delta,
        poolWidth,
        poolHeight,
        poolLength,
        this.boundingRadius,
        this.boundingRadius,
        this.floorClearance
      );
    } else {
      // Fallback/Update bounds for all torus knots simultaneously (e.g. pool resizing)
      for (let i = 0; i < this.numTorusKnots; i++) {
        clampAndMoveObject(
          this.positions[i],
          delta,
          poolWidth,
          poolHeight,
          poolLength,
          this.boundingRadius,
          this.boundingRadius,
          this.floorClearance
        );
      }
    }
  }

  /**
   * Pre-renders uniform values for light direction and dimensions.
   */
  prepareRender(water: Water, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    this.material.uniforms.water.value = water.textureA.texture;
    this.material.uniforms.light.value.copy(this.resources.lightDirection);
    this.material.uniforms.torusKnotCenter.value.copy(this.position);
    this.material.uniforms.poolWidth.value = poolWidth;
    this.material.uniforms.poolHeight.value = poolHeight;
    this.material.uniforms.poolLength.value = poolLength;
    this.material.uniformsNeedUpdate = true;

    // Compose instance matrices
    const tempMatrix = new THREE.Matrix4();
    const tempScale = new THREE.Vector3(1, 1, 1);
    const tempRotation = new THREE.Quaternion();

    for (let i = 0; i < this.numTorusKnots; i++) {
      tempMatrix.compose(this.positions[i], tempRotation, tempScale);
      this.mesh.setMatrixAt(i, tempMatrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Returns a coordinate high in the sky (Y=10.0) where the object stays when inactive.
   */
  private getInactivePosition(index: number): THREE.Vector3 {
    return new THREE.Vector3(this.positions[index].x, 10.0 + index * 2.0, this.positions[index].z);
  }
}
