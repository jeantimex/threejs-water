import * as THREE from 'three';
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering';
import torusKnotRenderVert from '../shaders/TorusKnotRender.vert';
import torusKnotRenderFrag from '../shaders/TorusKnotRender.frag';
import type { Water } from '../Water';
import { CompoundSphereWaterDisplacement } from '../water/WaterDisplacement';
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject';
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils';

/**
 * Represents a Torus Knot obstacle in the water simulation.
 * Implements SimulationObject. Unlike simple spheres or cubes, the Torus Knot has
 * complex, curved geometry, which is approximated using an array of 24 overlapping spheres
 * to compute water height displacements.
 */
export class TorusKnotObject implements SimulationObject {
  readonly name = 'TorusKnot';
  // Bounding radius of the knot structure (used for optics ray intersections)
  readonly boundingRadius = 0.31;
  // Height clearance threshold to sit properly on the bottom
  readonly floorClearance = 0.13;
  // Default position
  readonly position = new THREE.Vector3(-0.4, this.floorClearance - 1, 0.2);
  readonly velocity = new THREE.Vector3();

  /**
   * Returns the minimum Y center coordinate when the knot rests on the pool floor.
   */
  floorY(poolHeight: number) {
    return this.floorClearance - poolHeight;
  }

  // Displacement strategy mapping multiple overlapping spheres to water heightmap adjustments
  readonly displacement: CompoundSphereWaterDisplacement;
  // Optics description for raytracing reflections/refractions in the water shader
  readonly optics = {
    kind: 'mesh' as const,
    center: this.position,
    boundingRadius: this.boundingRadius,
    shadowRadius: 0.13,
  };

  readonly mesh: THREE.Mesh;
  enabled = false;

  private readonly previousPosition = this.position.clone();
  private readonly material: THREE.ShaderMaterial;
  private readonly raycaster = new THREE.Raycaster();

  constructor(private readonly resources: SimulationObjectRenderResources) {
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
    this.mesh = new THREE.Mesh(geometry, this.material);
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
   * Toggles the active state of the knot, mirroring mesh coordinates to spawn positions.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return;

    const inactivePosition = this.getInactivePosition();
    if (enabled) {
      if (this.position.y <= this.boundingRadius - 1) {
        this.position.y = this.floorClearance - 1;
      }
      this.displacement.move(water, inactivePosition, this.position);
      this.mesh.position.copy(this.position);
    } else {
      this.displacement.move(water, this.position, inactivePosition);
      this.mesh.position.copy(inactivePosition);
      this.velocity.set(0, 0, 0);
    }

    this.enabled = enabled;
    this.mesh.visible = enabled;
    this.previousPosition.copy(this.position);
  }

  /**
   * Resets position history to prevent displacement spikes.
   */
  syncPreviousPosition() {
    this.previousPosition.copy(this.position);
    this.mesh.position.copy(this.position);
  }

  /**
   * Main update tick to execute buoyancy/gravity physics and write wave height displacements.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return;

    updatePhysics(
      seconds,
      this.position,
      this.velocity,
      context,
      this.boundingRadius,
      this.floorClearance
    );

    this.displacement.move(
      water,
      this.previousPosition,
      this.position,
      context.poolWidth,
      context.poolLength
    );
    this.previousPosition.copy(this.position);
    this.mesh.position.copy(this.position);
  }

  /**
   * Performs raycaster intersection testing against the 3D TorusKnot geometry.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled) return null;
    this.mesh.position.copy(this.position);
    this.mesh.updateMatrixWorld(true);
    this.raycaster.set(origin, direction);
    const intersects = this.raycaster.intersectObject(this.mesh);
    if (intersects.length > 0) {
      return intersects[0].point;
    }
    return null;
  }

  /**
   * Translates the knot position and clamps it within the pool boundaries.
   */
  moveBy(delta: THREE.Vector3, poolWidth = 1.0, poolHeight = 1.0, poolLength = 1.0) {
    clampAndMoveObject(
      this.position,
      delta,
      poolWidth,
      poolHeight,
      poolLength,
      this.boundingRadius,
      this.boundingRadius,
      this.floorClearance
    );
    this.mesh.position.copy(this.position);
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
  }

  /**
   * Returns a coordinate high in the sky (Y=10.0) where the object stays when inactive.
   */
  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z);
  }
}
