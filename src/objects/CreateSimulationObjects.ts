import type * as THREE from 'three'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import { SimulationObjectRegistry } from './SimulationObjectRegistry'
import { CubeObject } from './CubeObject'
import { DuckObject } from './DuckObject'
import { SphereObject } from './SphereObject'
import { TorusKnotObject } from './TorusKnotObject'

/**
 * Factory function that instantiates the active simulation objects (Sphere, Cube, TorusKnot, Duck),
 * registers them inside a new SimulationObjectRegistry, and returns the registry instance.
 *
 * The SphereObject is registered as the default active object.
 */
export function createSimulationObjects(
  scene: THREE.Scene,
  resources: SimulationObjectRenderResources
) {
  return new SimulationObjectRegistry(scene)
    .register(new SphereObject(resources), true) // Sphere is active by default
    .register(new CubeObject(resources))
    .register(new TorusKnotObject(resources))
    .register(new DuckObject(resources))
}
