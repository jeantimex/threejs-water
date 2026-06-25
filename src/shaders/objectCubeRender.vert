uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  // Reconstruct world-space coordinate of the cube vertex by multiplying local coordinates
  // (which span [-0.5, 0.5]) by double the half-size extents, and offsetting by the cube's center.
  vPosition = cubeCenter + position.xyz * cubeHalfSize * 2.0;
  
  // Pass normal through to fragment shading
  vNormal = normal;
  
  // Project vertex to clip space
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
