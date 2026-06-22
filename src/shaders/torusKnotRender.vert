varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
