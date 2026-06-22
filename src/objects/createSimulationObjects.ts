import type * as THREE from 'three'
import type { SimulationObjectRenderResources } from '../rendering/SimulationObjectRendering'
import { SimulationObjectRegistry } from './SimulationObjectRegistry'
import { CubeObject } from './CubeObject'
import { DuckObject } from './DuckObject'
import { SphereObject } from './SphereObject'
import { TorusKnotObject } from './TorusKnotObject'

export function createSimulationObjects(
  scene: THREE.Scene,
  resources: SimulationObjectRenderResources
) {
  return new SimulationObjectRegistry(scene)
    .register(new SphereObject(resources), true)
    .register(new CubeObject(resources))
    .register(new TorusKnotObject(resources))
    .register(new DuckObject(resources))
}
