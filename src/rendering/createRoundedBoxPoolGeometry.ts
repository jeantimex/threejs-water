import * as THREE from 'three'

export function createRoundedBoxPoolGeometry(R: number): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry()

  const positions: number[] = []
  const normals: number[] = []
  const indices: number[] = []

  const yFloor = -1.0
  const yRim = 2.0 / 12.0
  const rSub = 1.0 - R

  const segmentsPerCorner = 16
  const totalPoints = 4 * segmentsPerCorner

  const floorVertices: THREE.Vector3[] = []
  
  // Generate perimeter points in counterclockwise order
  for (let c = 0; c < 4; c++) {
    let cx = 0, cz = 0
    let startAngle = 0
    if (c === 0) {
      // North-East
      cx = rSub; cz = rSub
      startAngle = 0
    } else if (c === 1) {
      // North-West
      cx = -rSub; cz = rSub
      startAngle = Math.PI / 2
    } else if (c === 2) {
      // South-West
      cx = -rSub; cz = -rSub
      startAngle = Math.PI
    } else {
      // South-East
      cx = rSub; cz = -rSub
      startAngle = 1.5 * Math.PI
    }

    for (let i = 0; i < segmentsPerCorner; i++) {
      const angle = startAngle + (i / segmentsPerCorner) * (Math.PI / 2)
      const x = cx + R * Math.cos(angle)
      const z = cz + R * Math.sin(angle)
      floorVertices.push(new THREE.Vector3(x, yFloor, z))
    }
  }

  // Add center vertex for floor triangulation
  positions.push(0, yFloor, 0)
  normals.push(0, 1, 0)

  // Add perimeter vertices for floor
  for (let i = 0; i < totalPoints; i++) {
    const v = floorVertices[i]
    positions.push(v.x, v.y, v.z)
    normals.push(0, 1, 0)
  }

  // Triangulate floor: connect center (index 0) to perimeter
  for (let i = 0; i < totalPoints; i++) {
    const next = (i + 1) % totalPoints
    indices.push(0, next + 1, i + 1)
  }

  // Generate wall normals
  const wallNormals: THREE.Vector3[] = []
  for (let i = 0; i < totalPoints; i++) {
    const v = floorVertices[i]
    const normal = new THREE.Vector3()
    if (Math.abs(v.x) > rSub && Math.abs(v.z) > rSub && R > 0) {
      const cx = Math.sign(v.x) * rSub
      const cz = Math.sign(v.z) * rSub
      normal.set(v.x - cx, 0, v.z - cz).normalize().negate() // points inwards
    } else {
      if (Math.abs(v.x) >= 0.999) {
        normal.set(-Math.sign(v.x), 0, 0)
      } else {
        normal.set(0, 0, -Math.sign(v.z))
      }
    }
    wallNormals.push(normal)
  }

  // Add wall vertices (bottom and top for each point)
  const wallStartIndex = positions.length / 3

  for (let i = 0; i < totalPoints; i++) {
    const v = floorVertices[i]
    const n = wallNormals[i]
    
    // Bottom vertex
    positions.push(v.x, yFloor, v.z)
    normals.push(n.x, n.y, n.z)

    // Top vertex
    positions.push(v.x, yRim, v.z)
    normals.push(n.x, n.y, n.z)
  }

  // Triangulate walls: connect bottom & top rings
  for (let i = 0; i < totalPoints; i++) {
    const next = (i + 1) % totalPoints
    
    const bCurr = wallStartIndex + 2 * i
    const tCurr = wallStartIndex + 2 * i + 1
    const bNext = wallStartIndex + 2 * next
    const tNext = wallStartIndex + 2 * next + 1

    indices.push(bCurr, bNext, tNext)
    indices.push(bCurr, tNext, tCurr)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
  geometry.setIndex(indices)

  return geometry
}
