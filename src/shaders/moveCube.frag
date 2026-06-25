precision highp float;

// Input simulation texture (heightmap)
uniform sampler2D tInput;

// Previous position center of the cube
uniform vec3 oldCenter;

// Current position center of the cube
uniform vec3 newCenter;

// Half-extents size of the cube (x, y, z)
uniform vec3 halfSize;

varying vec2 coord;

/**
 * Computes the volume of the box/cube intersecting the water column at the current UV coordinate.
 * Uses a 3D box Signed Distance Function (SDF) to model the falloff and height profile.
 */
float volumeInCube(vec3 center) {
  // 1. Map texture coordinates from [0, 1] to [-1, 1] to get the horizontal grid coordinate.
  // The water surface is defined at rest Y = 0.0.
  vec3 point = vec3(coord.x * 2.0 - 1.0, 0.0, coord.y * 2.0 - 1.0);
  
  // 2. Compute the offset vector from the box surface.
  // Standard SDF component for axis-aligned bounding boxes.
  vec3 distanceToBox = abs(point - center) - halfSize;
  
  // 3. Combine positive (outside) and negative (inside) SDF contributions.
  float signedDistance = length(max(distanceToBox, 0.0))
    + min(max(distanceToBox.x, max(distanceToBox.y, distanceToBox.z)), 0.0);
    
  // 4. Determine a normalization scale based on the largest dimension of the box.
  float scale = max(max(halfSize.x, halfSize.y), halfSize.z);
  
  // 5. Compute the normalized distance 't' outside/on the box.
  float t = max(signedDistance, 0.0) / scale;
  
  // 6. Compute vertical thickness 'dy' at distance 't' using a smooth exponential falloff.
  // This helps approximate the box profile smoothly without hard boundary artifacts on the heightmap.
  float dy = exp(-pow(t * 1.5, 6.0));
  
  // 7. Calculate the Y range [ymin, ymax] representing the intersection of the box column with the water (Y <= 0.0).
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
  
  // 8. Return the thickness of the submerged column section, scaled by displacement factor.
  return (ymax - ymin) * 0.1;
}

void main() {
  vec4 info = texture2D(tInput, coord);
  
  // Add water height where the cube was (water flows back in)
  info.r += volumeInCube(oldCenter);
  
  // Subtract water height where the cube is moving to (cube displaces water)
  info.r -= volumeInCube(newCenter);
  
  gl_FragColor = info;
}
