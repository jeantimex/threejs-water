import * as THREE from 'three'
import type { Water } from '../Water'
import poolVert from '../shaders/cube.vert'
import poolFrag from '../shaders/cube.frag'
import type { WaterOpticsState } from './WaterOpticsState'
import { getMorphedPoolRadiusAtAngle } from './MorphedPoolShape'

export class PoolPass {
  readonly mesh: THREE.Mesh
  private readonly material: THREE.ShaderMaterial

  constructor(
    tileTexture: THREE.Texture,
    causticTexture: THREE.Texture,
    private readonly state: WaterOpticsState
  ) {
    this.material = new THREE.ShaderMaterial({
      vertexShader: poolVert,
      fragmentShader: poolFrag,
      uniforms: {
        light: { value: state.lightDirection.clone() },
        ...state.createUniforms(),
        tiles: { value: tileTexture },
        causticTex: { value: causticTexture },
        water: { value: null },
      },
      side: THREE.FrontSide,
      depthTest: true,
      depthWrite: true,
    })

    this.mesh = new THREE.Mesh(this.createGeometry('Box'), this.material)
    this.mesh.frustumCulled = false
  }

  prepare(water: Water) {
    this.material.uniforms.water.value = water.textureA.texture
    this.material.uniforms.light.value.copy(this.state.lightDirection)
    this.state.syncUniforms(this.material)
    this.material.uniformsNeedUpdate = true
  }

  setShape(shape: 'Box' | 'Cylinder' | 'Morphed') {
    this.mesh.geometry.dispose()
    this.mesh.geometry = this.createGeometry(shape)
  }

  private createGeometry(shape: 'Box' | 'Cylinder' | 'Morphed') {
    if (shape === 'Morphed') {
      return this.createMorphedGeometry()
    }
    const geometry = shape === 'Cylinder'
      ? new THREE.CylinderGeometry(1, 1, 2, 64, 1, false)
      : new THREE.BoxGeometry(2, 2, 2)
    const positions = geometry.attributes.position
    const source = geometry.index!
    const indices: number[] = []

    for (let i = 0; i < source.count; i += 3) {
      const a = source.getX(i)
      const b = source.getX(i + 1)
      const c = source.getX(i + 2)
      if (!(
        positions.getY(a) < 0
        && positions.getY(b) < 0
        && positions.getY(c) < 0
      )) {
        indices.push(a, b, c)
      }
    }

    geometry.setIndex(indices)
    return geometry
  }

  private createMorphedGeometry() {
    const geometry = new THREE.BufferGeometry()
    const positions: number[] = []
    const indices: number[] = []
    
    const N = 128
    const points: THREE.Vector2[] = []
    for (let i = 0; i < N; i++) {
      const theta = (i / N) * Math.PI * 2
      const r = getMorphedPoolRadiusAtAngle(theta)
      points.push(new THREE.Vector2(r * Math.cos(theta), r * Math.sin(theta)))
    }
    
    for (let i = 0; i < N; i++) {
      positions.push(points[i].x, 1.0, points[i].y)
    }
    for (let i = 0; i < N; i++) {
      positions.push(points[i].x, -1.0, points[i].y)
    }
    positions.push(0.0, 1.0, 0.0)
    const centerIdx = 2 * N
    
    for (let i = 0; i < N; i++) {
      const next = (i + 1) % N
      const b1 = i
      const b2 = next
      const t1 = i + N
      const t2 = next + N
      
      indices.push(b1, t2, t1)
      indices.push(b1, b2, t2)
    }
    
    for (let i = 0; i < N; i++) {
      const next = (i + 1) % N
      indices.push(centerIdx, next, i)
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setIndex(indices)
    geometry.computeVertexNormals()
    return geometry
  }
}
