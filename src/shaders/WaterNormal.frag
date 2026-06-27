precision highp float;

/**
 * SURFACE NORMAL COMPUTATION SHADER
 *
 * This shader computes the surface normal at each point of the water heightmap.
 * The normals are essential for realistic lighting, reflection, and refraction.
 *
 * MATHEMATICAL BACKGROUND:
 * For a heightfield h(x, z), the surface can be parameterized as:
 *   S(x, z) = (x, h(x, z), z)
 *
 * The tangent vectors are the partial derivatives:
 *   T_x = ∂S/∂x = (1, ∂h/∂x, 0)
 *   T_z = ∂S/∂z = (0, ∂h/∂z, 1)
 *
 * The normal is perpendicular to both tangents:
 *   N = T_z × T_x = (-∂h/∂x, 1, -∂h/∂z)
 *
 * After normalization, we store only x and z components (y can be reconstructed).
 */

// Simulation state texture containing height in R channel
uniform sampler2D tInput;

// Grid spacing for finite difference calculation
uniform float poolWidth;
uniform float poolLength;
uniform vec2 delta;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  /**
   * TANGENT VECTOR COMPUTATION
   *
   * We compute tangent vectors using finite differences:
   *
   *   T_x ≈ S(x + Δx) - S(x) = (Δx, h(x+Δx) - h(x), 0)
   *   T_z ≈ S(z + Δz) - S(z) = (0, h(z+Δz) - h(z), Δz)
   *
   * These approximate the partial derivative directions on the surface.
   */

  // Tangent in X direction: (Δx_phys, Δheight_x, 0)
  // Points from current cell toward the right neighbor
  vec3 dx = vec3(
    delta.x * 2.0 * poolWidth, // X component: physical grid spacing
    texture2D(tInput, vec2(coord.x + delta.x, coord.y)).r - info.r, // Y component: height difference
    0.0 // Z component: no change in Z
  );

  // Tangent in Z direction: (0, Δheight_z, Δz_phys)
  // Points from current cell toward the top neighbor (Z mapped to texture Y)
  vec3 dy = vec3(
    0.0, // X component: no change in X
    texture2D(tInput, vec2(coord.x, coord.y + delta.y)).r - info.r, // Y component: height difference
    delta.y * 2.0 * poolLength // Z component: physical grid spacing
  );

  /**
 * * CROSS PRODUCT FOR NORMAL
 *    *
 *    * N = T_z × T_x = dy × dx
 *    *
 *    * Cross product formula:
 *    *   (a × b).x = a.y * b.z - a.z * b.y
 *    *   (a × b).y = a.z * b.x - a.x * b.z
 *    *   (a × b).z = a.x * b.y - a.y * b.x
 *    *
 *    * With our vectors:
 *    *   dy = (0, Δh_z, Δz)
 *    *   dx = (Δx, Δh_x, 0)
 *    *
 *    *   N.x = Δh_z * 0 - Δz * Δh_x = -Δz * Δh_x
 *    *   N.y = Δz * Δx - 0 * 0 = Δz * Δx  (positive, pointing up)
 *    *   N.z = 0 * Δh_x - Δh_z * Δx = -Δh_z * Δx
 *    *
 *    * The result points upward (N.y > 0) for a surface viewed from above.
 *    *
 *    * STORAGE OPTIMIZATION:
 *    * We only store N.x and N.z in the BA channels. N.y can be reconstructed:
 *    *   |N| = 1  →  N.y = sqrt(1 - N.x² - N.z²)
 */
  info.ba = normalize(cross(dy, dx)).xz;

  gl_FragColor = info;
}
