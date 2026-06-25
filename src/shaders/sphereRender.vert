uniform vec3 sphereCenter;
uniform float sphereRadius;
varying vec3 vPosition;

void main() {
  // Reconstruct the world-space position of the sphere vertex by scaling and offsetting
  // local unit sphere coordinates by the sphere center and radius.
  vPosition = sphereCenter + position.xyz * sphereRadius;
  
  // Transform to projection space coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
