precision highp float;

uniform sampler2D tInput;
uniform vec3 oldCenter;
uniform vec3 newCenter;
uniform vec3 halfSize;
varying vec2 coord;

float volumeInCube(vec3 center) {
  vec3 point = vec3(coord.x * 2.0 - 1.0, 0.0, coord.y * 2.0 - 1.0);
  vec3 distanceToBox = abs(point - center) - halfSize;
  float signedDistance = length(max(distanceToBox, 0.0))
    + min(max(distanceToBox.x, max(distanceToBox.y, distanceToBox.z)), 0.0);
  float scale = max(max(halfSize.x, halfSize.y), halfSize.z);
  float t = max(signedDistance, 0.0) / scale;
  float dy = exp(-pow(t * 1.5, 6.0));
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
  return (ymax - ymin) * 0.1;
}

void main() {
  vec4 info = texture2D(tInput, coord);
  info.r += volumeInCube(oldCenter);
  info.r -= volumeInCube(newCenter);
  gl_FragColor = info;
}
