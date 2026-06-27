precision highp float;

/**
 * BOX/CUBE WATER DISPLACEMENT SHADER
 *
 * Similar to the sphere displacement shader, but for rectangular objects.
 * Uses a Signed Distance Function (SDF) to define the box shape, then applies
 * a smooth falloff to avoid sharp boundary artifacts in the water simulation.
 *
 * The approach handles boxes of any aspect ratio by normalizing distances
 * relative to the largest dimension.
 */

// Current water simulation state texture
uniform sampler2D tInput;

// Previous frame's box center position (in physical space)
uniform vec3 oldCenter;

// Current frame's box center position (in physical space)
uniform vec3 newCenter;

// Half-extents of the box (width/2, height/2, depth/2) (in physical space)
// The full box spans from (center - halfSize) to (center + halfSize)
uniform vec3 halfSize;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

/**
 * Computes an approximation of the submerged "column volume" of the box
 * at the current texture coordinate position.
 *
 * SIGNED DISTANCE FUNCTION (SDF) APPROACH:
 *
 * An SDF returns the shortest distance from a point to a surface:
 *   - Negative inside the shape
 *   - Zero on the surface
 *   - Positive outside the shape
 *
 * For an axis-aligned box centered at origin with half-extents h:
 *   d = max(|p| - h, 0) + min(max(|p| - h components), 0)
 *
 * The first term handles points outside (Euclidean distance to nearest face).
 * The second term handles points inside (negative distance to nearest face).
 *
 * @param center Box center position in world coordinates
 * @return Approximate submerged column height (water displacement amount)
 */
float volumeInCube(vec3 center) {
  // Convert texture coords [0,1] to physical XZ coordinates in pool boundary
  // Y is set to 0 (water surface level) for the XZ plane query
  vec3 point = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );

  /**
   * BOX SDF COMPUTATION
   *
   * Vector from box surface to query point:
   *   q = |p - center| - halfSize
   *
   * For each axis:
   *   q.i > 0: point is outside box in this dimension (distance = q.i)
   *   q.i < 0: point is inside box in this dimension (penetration = -q.i)
   *   q.i = 0: point is exactly on the box face
   */
  vec3 distanceToBox = abs(point - center) - halfSize;

  /**
   * SIGNED DISTANCE CALCULATION
   *
   * Case 1: Point outside box (at least one q.i > 0)
   *   Distance = Euclidean distance to nearest corner/edge/face
   *   = length(max(q, 0))
   *
   * Case 2: Point inside box (all q.i < 0)
   *   Distance = negative of smallest penetration (closest face)
   *   = min(max(q.x, q.y, q.z), 0)  [returns negative value]
   *
   * Combined formula covers both cases:
   */
  float signedDistance =
    length(max(distanceToBox, 0.0)) + // Outside: distance to surface
    min(max(distanceToBox.x, max(distanceToBox.y, distanceToBox.z)), 0.0); // Inside: negative penetration

  // Normalize distance by largest box dimension for consistent falloff behavior
  float scale = max(max(halfSize.x, halfSize.y), halfSize.z);

  // Clamped normalized distance (0 on surface or inside, >0 outside)
  float t = max(signedDistance, 0.0) / scale;

  /**
   * SMOOTH FALLOFF PROFILE
   *
   * Like the sphere shader, we use a super-Gaussian falloff to create
   * smooth wave profiles without sharp discontinuities at box edges.
   *
   * exp(-(1.5*t)^6) is nearly 1 inside and on the box surface (t ≈ 0),
   * and drops quickly to 0 as we move away from the box.
   */
  float dy = exp(-pow(t * 1.5, 6.0));

  // Compute intersection of box column with underwater region (Y ≤ 0)
  float ymin = min(0.0, center.y - dy);
  float ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);

  // Return submerged height, scaled for appropriate wave magnitude
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
