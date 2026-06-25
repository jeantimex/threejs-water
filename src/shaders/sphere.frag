precision highp float;

uniform sampler2D tInput;
uniform vec3 oldCenter;
uniform vec3 newCenter;
uniform float radius;
uniform float displacementScale;
varying vec2 coord;

// Computes the volume of the sphere intersecting the water surface column at the current UV coordinates.
// The water surface is at y = 0.0, and the water body is y <= 0.0.
float volumeInSphere(vec3 center) {
  // 1. Calculate XZ displacement from the sphere center to the current water grid column (mapped from [0, 1] UV to [-1, 1])
  // Note: Y is 0.0 relative to the water surface, so the vertical distance is center.y.
  vec3 toCenter = vec3(coord.x * 2.0 - 1.0, 0.0, coord.y * 2.0 - 1.0) - center;
  
  // 2. Normalize XZ/Y distance by sphere radius
  float t = length(toCenter) / radius;
  
  // 3. Compute vertical profile thickness 'dy' at distance 't' using a smooth exponential falloff.
  // This models the shape of the sphere without generating sharp boundary discontinuities.
  float dy = exp(-pow(t * 1.5, 6.0));
  
  // 4. Calculate the intersection height bounds [ymin, ymax] of the sphere column with the submerged region (y <= 0.0)
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
  
  // 5. Return the height of the submerged column section, scaled by the displacement coefficient.
  return (ymax - ymin) * 0.1 * displacementScale;
}

void main() {
  vec4 info = texture2D(tInput, coord);

  // Add water height at the object's old position (water refills the space)
  info.r += volumeInSphere(oldCenter);
  // Subtract water height at the object's new position (object pushes water out of the way)
  info.r -= volumeInSphere(newCenter);

  gl_FragColor = info;
}
