precision highp float;

uniform sampler2D tInput;
uniform vec3 oldCenter;
uniform vec3 newCenter;
uniform float radius;
uniform float displacementScale;
varying vec2 coord;

float volumeInSphere(vec3 center) {
  vec3 toCenter = vec3(coord.x * 2.0 - 1.0, 0.0, coord.y * 2.0 - 1.0) - center;
  float t = length(toCenter) / radius;
  float dy = exp(-pow(t * 1.5, 6.0));
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
  return (ymax - ymin) * 0.1 * displacementScale;
}

void main() {
  vec4 info = texture2D(tInput, coord);

  info.r += volumeInSphere(oldCenter);
  info.r -= volumeInSphere(newCenter);

  gl_FragColor = info;
}
