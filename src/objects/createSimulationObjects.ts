import type * as THREE from 'three'
import type { Renderer } from '../Renderer'
import { SimulationObjectRegistry } from './SimulationObjectRegistry'
import { SphereObject } from './SphereObject'

export function createSimulationObjects(scene: THREE.Scene, renderer: Renderer) {
  return new SimulationObjectRegistry(scene)
    .register(new SphereObject(renderer.getSphereMesh()), true)
}
