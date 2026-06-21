uniform sampler2D water;
varying vec3 vPosition;

void main() {
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  vPosition = position.xzy;
  vPosition.y += info.r;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
