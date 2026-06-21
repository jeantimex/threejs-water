const float poolHeight = 1.0;
varying vec3 vPosition;

void main() {
  vPosition = position.xyz;
  vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
