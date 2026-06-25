// Water heightmap displacement texture
uniform sampler2D water;

// Horizontal pool size boundaries
uniform float poolWidth;
uniform float poolLength;

varying vec3 vPosition;

void main() {
  // 1. Sample current simulated wave height displacement at the UV location
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  
  // 2. Map coordinates from 2D plane XY to 3D horizontal plane XZ
  vPosition = position.xzy;
  
  // 3. Scale horizontal dimensions to match the physical pool width and length parameters
  vPosition.x *= poolWidth;
  vPosition.z *= poolLength;
  
  // 4. Displace height vertically by simulated wave height
  vPosition.y += info.r;
  
  // 5. Transform to projection space coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
