uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vPosition = cubeCenter + position.xyz * cubeHalfSize * 2.0;
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
