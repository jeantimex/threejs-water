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
 * Represents the Rubber Duck obstacle in the water simulation.
 * Implements SimulationObject. Unlike the primitive geometric shapes, this object's 3D mesh
 * is loaded asynchronously from an external glTF asset. Its complex physical volume is approximated
 * by 3 overlapping displacement spheres for fluid heightmap interactions.
 */
export class DuckObject implements SimulationObject {
  readonly name = 'Rubber Duck';
  // Bounding radius of the duck model
  readonly boundingRadius = 0.25;
  // Height clearance threshold to sit properly on the bottom
  readonly floorClearance = 0.265;
  // Default position
  readonly position = new THREE.Vector3(0.4, this.floorClearance - 1, -0.2);
  readonly velocity = new THREE.Vector3();

  /**
   * Returns the minimum Y center coordinate when the duck rests on the pool floor.
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
  };

  readonly mesh: THREE.Group;
  enabled = false;

  private readonly previousPosition = this.position.clone();
  private material: THREE.ShaderMaterial | null = null;
  private loaded = false;

  constructor(private readonly resources: SimulationObjectRenderResources) {
    this.mesh = new THREE.Group();
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;

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

      duckScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = this.material!;
          child.frustumCulled = false;
        }
      });

      // Normalize size and center pivot
      const box = new THREE.Box3().setFromObject(duckScene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = this.boundingRadius * 2;
      const scale = targetSize / maxDim;

      duckScene.scale.setScalar(scale);
      duckScene.position.sub(center.multiplyScalar(scale));
      duckScene.position.y -= box.min.y * scale;

      this.mesh.add(duckScene);
      this.loaded = true;
    } catch (error) {
      console.error('Failed to load duck model:', error);
    }
  }

  /**
   * Toggles the active state of the duck, spawning splash displacement waves.
   */
  setEnabled(enabled: boolean, water: Water) {
    if (enabled === this.enabled) return;

    const inactivePosition = this.getInactivePosition();
    if (enabled) {
      if (this.position.y <= this.floorClearance - 1) {
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
    this.mesh.visible = enabled && this.loaded;
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

    if (!this.mesh.visible && this.loaded) {
      this.mesh.visible = true;
    }

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
   * Performs bounding sphere raycasting check for mouse drags.
   */
  hitTest(origin: THREE.Vector3, direction: THREE.Vector3): THREE.Vector3 | null {
    if (!this.enabled || !this.loaded) return null;

    const toOrigin = origin.clone().sub(this.position);
    const a = direction.lengthSq();
    const b = 2 * toOrigin.dot(direction);
    const c = toOrigin.lengthSq() - this.boundingRadius * this.boundingRadius;
    const discriminant = b * b - 4 * a * c;

    if (discriminant <= 0) return null;
    const distance = (-b - Math.sqrt(discriminant)) / (2 * a);
    return distance > 0 ? origin.clone().addScaledVector(direction, distance) : null;
  }

  /**
   * Translates the duck position and clamps it within the pool boundaries.
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
    if (!this.material) return;
    this.material.uniforms.water.value = water.textureA.texture;
    this.material.uniforms.light.value.copy(this.resources.lightDirection);
    this.material.uniforms.poolWidth.value = poolWidth;
    this.material.uniforms.poolHeight.value = poolHeight;
    this.material.uniforms.poolLength.value = poolLength;
    this.material.uniforms.meshCenter.value.copy(this.position);
    this.material.uniformsNeedUpdate = true;
  }

  /**
   * Returns a coordinate high in the sky (Y=10.0) where the object stays when inactive.
   */
  private getInactivePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, 10, this.position.z);
  }
}
