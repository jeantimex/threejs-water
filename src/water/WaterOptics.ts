/**
 * @file WaterOptics.ts
 * @description Defines the descriptors and types used to configure optical physical shapes
 * interactively in the water simulation, such as spheres, boxes, torus knots, or custom meshes.
 */

import type * as THREE from 'three';

/**
 * Union type representing the shape descriptor for objects that interact with light
 * and create refraction, reflection, and caustic shadows within the pool.
 */
export type WaterOpticsDescriptor =
  /** Represents no optical physical shape in the water. */
  | { kind: 'none' }
  /** Represents a spherical optical physical shape in the water. */
  | {
      kind: 'sphere';
      /** The world space center position of the sphere (fallback). */
      center: THREE.Vector3;
      /** The radius of the sphere (fallback). */
      radius: number;
      /** Array of centers of all spheres. */
      centers: THREE.Vector3[];
      /** Array of radii of all spheres. */
      radii: number[];
      /** The number of spheres. */
      count: number;
    }
  /** Represents a box/cuboid optical physical shape in the water. */
  | {
      kind: 'box';
      /** The world space center position of the box (fallback). */
      center: THREE.Vector3;
      /** The half-extents of the box in the x, y, and z dimensions (fallback). */
      halfSize: THREE.Vector3;
      /** Array of centers of all boxes. */
      centers: THREE.Vector3[];
      /** Array of halfSizes of all boxes. */
      halfSizes: THREE.Vector3[];
      /** The number of boxes. */
      count: number;
    }
  /** Represents a torus knot optical physical shape in the water. */
  | {
      kind: 'torusknot';
      /** The world space center position of the torus knot (fallback). */
      center: THREE.Vector3;
      /** Array of centers of all torus knots. */
      centers: THREE.Vector3[];
      /** The number of torus knots. */
      count: number;
    }
  /** Represents a custom mesh optical physical shape in the water. */
  | {
      kind: 'mesh';
      /** The world space center position of the mesh. */
      center: THREE.Vector3;
      /** The bounding radius of the mesh for physics or simple intersections. */
      boundingRadius: number;
      /** The radius used for custom shadow calculations. Defaults to boundingRadius if not provided. */
      shadowRadius?: number;
    };

/**
 * Constant representing a null or empty water optics configuration.
 */
export const NO_WATER_OPTICS: WaterOpticsDescriptor = { kind: 'none' };
