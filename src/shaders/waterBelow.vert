// The water heightmap texture containing current wave displacements (red channel)
uniform sampler2D water;

varying vec3 vPosition;

void main() {
  // 1. Sample the heightmap displacement value using normalized position coordinates
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  
  // 2. Map coordinates from 2D plane XY to 3D horizontal plane XZ
  vPosition = position.xzy;
  
  // 3. Offset the vertex height vertically by the simulated height displacement
  vPosition.y += info.r;
  
  // 4. Transform to projection coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
