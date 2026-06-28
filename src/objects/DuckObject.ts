import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering';
import duckRenderVert from '../shaders/DuckRender.vert';
import duckRenderFrag from '../shaders/DuckRender.frag';
import type { Water } from '../Water';
import {
  CompoundSphereWaterDisplacement,
  type DisplacementSphere,
} from '../water/WaterDisplacement';
import type { ObjectUpdateContext, SimulationObject } from './SimulationObject';
import { clampAndMoveObject, updatePhysics } from './SimulationObjectUtils';

/**
 * Represents multiple instanced Rubber Duck obstacles in the water simulation.
 * Implements SimulationObject. Loads an external glTF asset asynchronously and renders
 * multiple instances via THREE.InstancedMesh.
 */
export class DuckObject implements SimulationObject {
  readonly name = 'Rubber Duck';
  // Bounding radius of the duck model
  readonly boundingRadius = 0.25;
  // Height clearance threshold to sit properly on the bottom
  readonly floorClearance = 0.265;
  // Default position of the primary duck
  readonly position = new THREE.Vector3(0.4, this.floorClearance - 1, -0.2);
  readonly velocity = new THREE.Vector3();

  // Number of active instances to render and simulate
  instanceCount = 1;
  // Maximum number of instances allocated in InstancedMesh
  readonly maxDucks = 5;

  // Arrays holding physical properties for all instanced ducks
  readonly positions: THREE.Vector3[];
  readonly velocities: THREE.Vector3[];
  private readonly previousPositions: THREE.Vector3[];

  private draggedInstanceIndex: number | null = null;

  /**
   * Returns the minimum Y center coordinate when the duck rests on the pool floor.
   */
  floorY(poolHeight: number) {
    return this.floorClearance - poolHeight;
  }

  // Displacement strategy mapping multiple overlapping spheres to water heightmap adjustments
  readonly displacement: CompoundSphereWaterDisplacement;
  
  // Optics description for raytracing reflections/refractions in the water shader
  get optics() {
    return {
      kind: 'mesh' as const,
      center: this.position,
      boundingRadius: this.boundingRadius,
      centers: this.positions,
      count: this.instanceCount,
    };
  }

  readonly mesh: THREE.Group;
  private instancedMesh: THREE.InstancedMesh | null = null;
  enabled = false;

  private material: THREE.ShaderMaterial | null = null;
  private loaded = false;
  private baseMatrix = new THREE.Matrix4();

  constructor(private readonly resources: SimulationObjectRenderResources) {
    this.mesh = new THREE.Group();
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;

    // Initialize arrays; first element references this.position and this.velocity directly
    this.positions = Array.from({ length: this.maxDucks }, (_, i) =>
      i === 0 ? this.position : this.position.clone()
    );
    this.velocities = Array.from({ length: this.maxDucks }, (_, i) =>
      i === 0 ? this.velocity : this.velocity.clone()
    );
    this.previousPositions = this.positions.map((p) => p.clone());

    // Approximate the duck's volume with 3 overlapping spheres (torso, head, tail)
    this.displacement = new CompoundSphereWaterDisplacement(
      this.generateDisplacementSpheres(),
      0.15
    );

    this.loadModel();
  }

  /**
   * Generates displacement spheres approximating the duck's volume.
   */
  private generateDisplacementSpheres(): DisplacementSphere[] {
    const spheres: DisplacementSphere[] = [];
    // Center/Main body
    spheres.push({ offset: new THREE.Vector3(0, 0, 0), radius: 0.15 });
    // Head offset (front and slightly up)
    spheres.push({ offset: new THREE.Vector3(0, 0.1, 0.1), radius: 0.08 });
    // Tail offset (back and slightly down)
    spheres.push({ offset: new THREE.Vector3(0, -0.08, -0.05), radius: 0.1 });
    return spheres;
  }

  /**
   * Asynchronously loads the Duck.gltf 3D asset and its diffuse map texture.
   * Scales the mesh to fit the `boundingRadius` exactly and centers it.
   */
  private async loadModel() {
    const base = import.meta.env.BASE_URL;
    const loader = new GLTFLoader();
    try {
      const gltf = await loader.loadAsync(`${base}models/duck/Duck.gltf`);
      const duckScene = gltf.scene;

      const textureLoader = new THREE.TextureLoader();
      const texture = await textureLoader.loadAsync(`${base}models/duck/DuckCM.png`);
      texture.flipY = false; // Align mapping with glTF uv coordinates

      // Custom shader material supporting caustics and light refraction maps
      this.material = new THREE.ShaderMaterial({
        vertexShader: duckRenderVert,
        fragmentShader: duckRenderFrag,
        uniforms: {
          light: { value: this.resources.lightDirection.clone() },
          poolWidth: { value: 1.0 },
          poolHeight: { value: 1.0 },
          poolLength: { value: 1.0 },
          meshCenter: { value: this.position.clone() },
          water: { value: null },
          causticTex: { value: this.resources.causticTexture },
          modelTexture: { value: texture },
          texturePassMode: { value: 0 },
        },
        depthTest: true,
        depthWrite: true,
      });

      // Ensure local and world matrices of GLTF nodes are fully computed
      duckScene.updateMatrixWorld(true);

      let duckGeometry: THREE.BufferGeometry | null = null;
      let localMatrix = new THREE.Matrix4();

      duckScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          duckGeometry = child.geometry;
          localMatrix.copy(child.matrixWorld);
        }
      });

      if (!duckGeometry) {
        throw new Error('No mesh found in Duck glTF model');
      }

      // Calculate normalization scale and centering offset
      const box = new THREE.Box3().setFromObject(duckScene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = this.boundingRadius * 2;
      const scale = targetSize / maxDim;

      // Combine parents transformations into a single base matrix
      this.baseMatrix.makeScale(scale, scale, scale);
      const offsetTranslation = new THREE.Vector3()
        .copy(center)
        .multiplyScalar(-scale);
      offsetTranslation.y -= box.min.y * scale;
      this.baseMatrix.setPosition(offsetTranslation);
      this.baseMatrix.multiply(localMatrix);

      // Create InstancedMesh using the extracted geometry and custom shader material
      this.instancedMesh = new THREE.InstancedMesh(duckGeometry, this.material, this.maxDucks);
      this.instancedMesh.frustumCulled = false;
      this.instancedMesh.count = this.instanceCount;
      this.mesh.add(this.instancedMesh);

      this.loaded = true;
      this.mesh.visible = this.enabled && (this.instanceCount > 0);
    } catch (error) {
      console.error('Failed to load duck model:', error);
    }
  }

  /**
   * Toggles the active state of the ducks, spawning splash displacement waves.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (!enabled) {
      if (this.enabled) {
        for (let i = 0; i < this.maxDucks; i++) {
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

    for (let i = 0; i < this.maxDucks; i++) {
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

    if (this.instancedMesh) {
      this.instancedMesh.count = this.instanceCount;
    }
    this.mesh.visible = this.loaded && (this.instanceCount > 0);
    this.enabled = true;
    this.syncPreviousPosition();
  }

  /**
   * Resets position history to prevent displacement spikes.
   */
  syncPreviousPosition() {
    for (let i = 0; i < this.maxDucks; i++) {
      this.previousPositions[i].copy(this.positions[i]);
    }
  }

  /**
   * Main update tick to execute buoyancy/gravity physics and write wave height displacements.
   */
  update(seconds: number, context: ObjectUpdateContext, water: Water) {
    if (!this.enabled) return;

    if (!this.mesh.visible && this.loaded && this.instanceCount > 0) {
      this.mesh.visible = true;
    }

    for (let i = 0; i < this.instanceCount; i++) {
      const isDragged = (i === this.draggedInstanceIndex && context.dragging);
      const duckContext = {
        ...context,
        dragging: isDragged
      };

      updatePhysics(
        seconds,
        this.positions[i],
        this.velocities[i],
        duckContext,
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
   * Performs bounding sphere raycasting check for mouse drags.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled || !this.loaded) return null;

    let nearestDistance = 1.0e6;
    let hitPoint: THREE.Vector3 | null = null;
    this.draggedInstanceIndex = null;

    for (let i = 0; i < this.instanceCount; i++) {
      const toOrigin = origin.clone().sub(this.positions[i]);
      const a = direction.lengthSq();
      const b = 2 * toOrigin.dot(direction);
      const c = toOrigin.lengthSq() - this.boundingRadius * this.boundingRadius;
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
   * Translates the duck position and clamps it within the pool boundaries.
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
      // Fallback/Update bounds for all ducks simultaneously (e.g. pool resizing)
      for (let i = 0; i < this.instanceCount; i++) {
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
    if (!this.material || !this.instancedMesh) return;
    this.material.uniforms.water.value = water.textureA.texture;
    this.material.uniforms.light.value.copy(this.resources.lightDirection);
    this.material.uniforms.poolWidth.value = poolWidth;
    this.material.uniforms.poolHeight.value = poolHeight;
    this.material.uniforms.poolLength.value = poolLength;
    this.material.uniforms.meshCenter.value.copy(this.position);
    this.material.uniformsNeedUpdate = true;

    if (this.instancedMesh) {
      this.instancedMesh.count = this.instanceCount;
    }

    // Compose instance matrices
    const tempMatrix = new THREE.Matrix4();
    for (let i = 0; i < this.instanceCount; i++) {
      tempMatrix.makeTranslation(
        this.positions[i].x,
        this.positions[i].y,
        this.positions[i].z
      ).multiply(this.baseMatrix);
      this.instancedMesh.setMatrixAt(i, tempMatrix);
    }
    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Returns a coordinate high in the sky where the object stays when inactive.
   */
  private getInactivePosition(index: number): THREE.Vector3 {
    return new THREE.Vector3(this.positions[index].x, 10.0 + index * 2.0, this.positions[index].z);
  }
}
