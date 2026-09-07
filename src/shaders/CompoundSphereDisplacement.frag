precision highp float;

uniform sampler2D tInput;
uniform vec3 oldCenters[120];
uniform vec3 newCenters[120];
uniform float radii[120];
uniform int sphereCount;
uniform float displacementScale;
uniform float poolWidth;
uniform float poolLength;
varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);
  vec3 point = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );
  // Treat the compound samples as a union, not as independent volumes. This
  // prevents overlapping torus samples from amplifying the same water column.
  float oldVolume = 0.0;
  float newVolume = 0.0;
  for (int i = 0; i < 120; i++) {
    if (i >= sphereCount) break;
    float radius = radii[i];
    vec3 oldDelta = point - oldCenters[i];
    vec3 newDelta = point - newCenters[i];
    float oldDy = exp(-pow(length(oldDelta) / radius * 1.5, 6.0));
    float newDy = exp(-pow(length(newDelta) / radius * 1.5, 6.0));
    float oldMin = min(0.0, oldCenters[i].y - oldDy);
    float oldMax = min(max(0.0, oldCenters[i].y + oldDy), oldMin + 2.0 * oldDy);
    float newMin = min(0.0, newCenters[i].y - newDy);
    float newMax = min(max(0.0, newCenters[i].y + newDy), newMin + 2.0 * newDy);
    oldVolume = max(oldVolume, oldMax - oldMin);
    newVolume = max(newVolume, newMax - newMin);
  }
  gl_FragColor = vec4(info.r + (oldVolume - newVolume) * 0.1 * displacementScale, info.gba);
}
