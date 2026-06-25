/**
 * POOL WALLS/FLOOR VERTEX SHADER
 *
 * Transforms a standard box geometry into the pool interior shape.
 * The pool has walls extending from the floor (Y = -poolHeight) up to
 * just above the water surface, with a rim at the top.
 *
 * COORDINATE MAPPING:
 * Input box geometry has Y ∈ [-1, 1]
 * Output pool has Y ∈ [-poolHeight, rim_height]
 *
 * The 7/12 factor creates the proper proportions:
 * - 5/12 below water (submerged wall)
 * - 2/12 above water (visible rim)
 */

const float poolHeight = 1.0; // Depth of pool below water surface

varying vec3 vPosition; // World position for fragment shader

void main() {
  vPosition = position.xyz;

  /**
 * * VERTICAL COORDINATE REMAPPING
 *    *
 *    * Transform from standard box coords to pool coords:
 *    *   Input:  Y ∈ [-1, 1]  (standard box)
 *    *   Output: Y ∈ [-poolHeight, rim]
 *    *
 *    * Formula breakdown:
 *    *   (1.0 - Y) maps [-1,1] → [2,0]  (flip and shift)
 *    *   * (7/12)  scales to pool proportions
 *    *   - 1.0     shifts so water surface is at Y=0
 *    *   * poolHeight  scales to actual pool depth
 */
  vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
