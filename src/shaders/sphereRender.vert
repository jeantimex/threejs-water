uniform vec3 sphereCenter;
uniform float sphereRadius;
varying vec3 vPosition;

void main() {
  vPosition = sphereCenter + position.xyz * sphereRadius;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
