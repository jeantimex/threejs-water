/**
 * @file SimulationObjectRendering.ts
 * @description Defines the resources and interfaces required to render physical objects
 * that interact with the water simulation, ensuring correct shadowing, lighting, and refraction.
 */

import type * as THREE from 'three';

/**
 * Interface detailing the global rendering resources shared with objects
 * placed inside the pool simulation.
 */
export interface SimulationObjectRenderResources {
  /** The normalized directional vector pointing towards the light source. */
  lightDirection: THREE.Vector3;
  /** The generated caustic texture representing light focused through the moving water surface. */
  causticTexture: THREE.Texture;
}
