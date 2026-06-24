varying vec3 vPosition;

void main() {
  vPosition = position.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
