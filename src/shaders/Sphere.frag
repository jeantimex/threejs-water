precision highp float;

/**
 * SPHERE WATER DISPLACEMENT SHADER
 *
 * This shader calculates how a moving sphere displaces the water surface.
 * When an object moves through water, it pushes water away from its new position
 * and water flows back into its old position.
 *
 * The displacement is computed per-pixel on the water heightmap grid, approximating
 * the submerged volume of the sphere at each (X, Z) column position.
 */

uniform sampler2D tInput; // Current water simulation state texture
uniform vec3 oldCenter; // Sphere center position in previous frame
uniform vec3 newCenter; // Sphere center position in current frame
uniform float radius; // Sphere radius
uniform float displacementScale; // Multiplier for displacement strength
uniform float poolWidth;
uniform float poolLength;
varying vec2 coord; // Texture coordinate for this pixel

/**
 * Computes an approximation of the submerged "column volume" of the sphere
 * at the current texture coordinate position.
 *
 * APPROACH:
 * For each (X, Z) position on the water grid, we estimate how much of the
 * vertical column is occupied by the sphere below the water surface (Y ≤ 0).
 *
 * Instead of computing exact sphere-plane intersection (which involves
 * sqrt and is discontinuous at the boundary), we use a smooth exponential
 * falloff that approximates the sphere profile while avoiding sharp edges
 * that would cause high-frequency ripples.
 *
 * MATHEMATICAL MODEL:
 *   t = horizontal distance from sphere center / radius (normalized)
 *   dy = exp(-(1.5*t)^6)  -- Super-Gaussian falloff (flatter than Gaussian near center)
 *
 * This dy represents the "thickness" of the sphere at distance t.
 * A true sphere has dy = sqrt(1 - t²) for t < 1, but the exponential
 * version is smoother at the boundary and avoids sqrt discontinuities.
 *
 * @param center Sphere center position in world coordinates
 * @return Approximate submerged column height (water displacement amount)
 */
float volumeInSphere(vec3 center) {
  // Convert texture coords [0,1] to physical XZ coordinates in [-poolWidth, poolWidth] x [-poolLength, poolLength]
  // Y is set to 0 (water surface level) for the XZ plane query
  vec3 pointPhys = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );

  // Compute 3D distance to sphere center (in physical space)
  vec3 toCenter = pointPhys - center;

  // Normalized 3D distance (0 at center, 1 at radius, >1 outside)
  float t = length(toCenter) / radius;

  // Super-Gaussian falloff: flat near center, drops off sharply near boundary
  // The (1.5*t)^6 exponent creates a flatter profile than standard Gaussian
  float dy = exp(-pow(t * 1.5, 6.0));

  // Compute intersection of sphere column with underwater region (Y ≤ 0)
  // ymin: bottom of submerged portion (either sphere bottom or water surface)
  // ymax: top of submerged portion (clamped to water surface at Y=0)
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);

  // Return submerged height, scaled for appropriate wave magnitude
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
