precision highp float;

uniform sampler2D tInput;
uniform vec2 delta;
varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  vec2 dx = vec2(delta.x, 0.0);
  vec2 dy = vec2(0.0, delta.y);
  float average = (
    texture2D(tInput, coord - dx).r +
    texture2D(tInput, coord - dy).r +
    texture2D(tInput, coord + dx).r +
    texture2D(tInput, coord + dy).r
  ) * 0.25;

  info.g += (average - info.r) * 2.0;
  info.g *= 0.995;
  info.r += info.g;

  gl_FragColor = info;
}
