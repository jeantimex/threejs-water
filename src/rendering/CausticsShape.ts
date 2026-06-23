import * as THREE from 'three'
import { getMorphedPoolSdf } from './MorphedPoolShape'

export type PoolShape = 'Box' | 'Cylinder' | 'Morphed'

const CAUSTICS_SUBDIVISIONS = 200

export class CausticsShapeGeometry {
  static create(shape: PoolShape) {
    if (shape === 'Morphed') return this.createMorphedGeometry()
    if (shape === 'Cylinder') return this.createCylinderGeometry()
    return new THREE.PlaneGeometry(2, 2, CAUSTICS_SUBDIVISIONS, CAUSTICS_SUBDIVISIONS)
  }

  private static createCylinderGeometry() {
    const vertices: number[] = []
    const indices: number[] = []
    const stride = CAUSTICS_SUBDIVISIONS + 1

    for (let y = 0; y <= CAUSTICS_SUBDIVISIONS; y++) {
      const v = y / CAUSTICS_SUBDIVISIONS
      const py = v * 2 - 1

      for (let x = 0; x <= CAUSTICS_SUBDIVISIONS; x++) {
        const u = x / CAUSTICS_SUBDIVISIONS
        const px = u * 2 - 1
        vertices.push(px, py, 0)
      }
    }

    const inside = (index: number) => {
      const x = vertices[index * 3]
      const y = vertices[index * 3 + 1]
      return x * x + y * y <= 1.000001
    }

    for (let y = 0; y < CAUSTICS_SUBDIVISIONS; y++) {
      for (let x = 0; x < CAUSTICS_SUBDIVISIONS; x++) {
        const a = y * stride + x
        const b = a + 1
        const c = a + stride
        const d = c + 1

        if (inside(a) && inside(b) && inside(c)) indices.push(a, b, c)
        if (inside(b) && inside(d) && inside(c)) indices.push(b, d, c)
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setIndex(indices)
    return geometry
  }

  private static createMorphedGeometry() {
    const vertices: number[] = []
    const indices: number[] = []
    const stride = CAUSTICS_SUBDIVISIONS + 1

    for (let y = 0; y <= CAUSTICS_SUBDIVISIONS; y++) {
      const v = y / CAUSTICS_SUBDIVISIONS
      const py = v * 2 - 1

      for (let x = 0; x <= CAUSTICS_SUBDIVISIONS; x++) {
        const u = x / CAUSTICS_SUBDIVISIONS
        const px = u * 2 - 1
        vertices.push(px, py, 0)
      }
    }

    const inside = (index: number) => {
      const x = vertices[index * 3]
      const z = vertices[index * 3 + 1]
      
      const { sdf } = getMorphedPoolSdf(x, z)
      
      return sdf <= 0.000001
    }

    for (let y = 0; y < CAUSTICS_SUBDIVISIONS; y++) {
      for (let x = 0; x < CAUSTICS_SUBDIVISIONS; x++) {
        const a = y * stride + x
        const b = a + 1
        const c = a + stride
        const d = c + 1

        if (inside(a) && inside(b) && inside(c)) indices.push(a, b, c)
        if (inside(b) && inside(d) && inside(c)) indices.push(b, d, c)
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setIndex(indices)
    return geometry
  }
}
