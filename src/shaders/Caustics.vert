/**
 * CAUSTICS VERTEX SHADER
 *
 * This shader computes where light rays hit the pool floor/walls after refracting
 * through the water surface. By comparing the "flat water" case (oldPos) to the
 * "wavy water" case (newPos), the fragment shader can determine light concentration.
 *
 * The key insight: we render a grid aligned with the water surface, but position
 * each vertex where its corresponding light ray lands on the pool floor. This
 * creates a deformed mesh where vertex density indicates light intensity.
 */

// Index of Refraction values for Snell's Law calculation
// Snell's Law: n₁ sin(θ₁) = n₂ sin(θ₂)
const float IOR_AIR = 1.0; // Air IOR (vacuum = 1.0, air ≈ 1.0003)
const float IOR_WATER = 1.333; // Water IOR (varies slightly with temperature and wavelength)
const float poolHeight = 1.0; // Depth of pool below water surface

uniform vec3 light; // Normalized direction vector pointing TOWARD the light source
uniform sampler2D water; // Water simulation texture (R: height, G: velocity, BA: normal.xz)

varying vec3 oldPos; // Pool floor hit position assuming flat water surface
varying vec3 newPos; // Pool floor hit position with actual wavy surface
varying vec3 ray; // Direction of refracted light ray through wavy surface

/**
 * Computes ray intersection with a bounding cube (representing the pool bounds)
 * using the Kay-Kajiya slab method.
 * Returns vec2(tNear, tFar) representing entry and exit parameters.
 */
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / r;
  vec3 tMax = (cubeMax - origin) / r;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Projects a point from the water surface onto the pool floor/walls.
 *
 * This handles two types of light paths:
 * 1. Direct path: Ray goes straight to the floor
 * 2. Wall bounce path: Ray hits a side wall first, then continues to floor
 *
 * The two-step process ensures we properly handle rays that exit through
 * the sides of the pool before reaching the bottom.
 *
 * @param origin Starting point (on water surface)
 * @param r Initial ray direction (may hit wall first)
 * @param refractedLight Final ray direction for floor projection
 * @return Final position on pool floor
 */
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {
  // Step 1: Find where ray exits the pool bounding box
  // Pool bounds: X ∈ [-1, 1], Y ∈ [-poolHeight, 2], Z ∈ [-1, 1]
  vec2 tcube = intersectCube(origin, r, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));

  // Step 2: Move to the exit point (may be on wall or floor)
  origin += r * tcube.y;

  // Step 3: If we hit a wall (not the floor), continue projecting to floor
  // Solve for t in: origin.y + t * refractedLight.y = -poolHeight
  // Rearranged: t = (-poolHeight - origin.y) / refractedLight.y
  float tplane = (-origin.y - 1.0) / refractedLight.y;
  return origin + refractedLight * tplane;
}

void main() {
  /**
 * * CAUSTICS VERTEX TRANSFORMATION
 *    *
 *    * Each vertex in the water grid represents one "column" of light entering the water.
 *    * We compute where this light column hits the pool floor, both for flat water
 *    * (reference) and for the actual wavy surface (distorted).
 */

  // Step 1: Sample water simulation state at this grid point
  // UV mapping: position.xy ∈ [-1, 1] → UV ∈ [0, 1]
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5; // Scale normal derivatives for smoother caustics

  /**
 * * Step 2: Reconstruct surface normal from stored derivatives.
 *    *
 *    * The water texture stores ∂h/∂x in B and ∂h/∂z in A (height partial derivatives).
 *    * The normal vector N = normalize(-∂h/∂x, 1, -∂h/∂z)
 *    *
 *    * We use the identity: for unit normal, Ny = sqrt(1 - Nx² - Nz²)
 *    * where Nx and Nz are the (scaled) stored derivatives.
 */
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  /**
 * * Step 3: Compute refracted light directions using Snell's Law.
 *    *
 *    * refractedLight: Direction if water were perfectly flat (uniform refraction)
 *    * ray: Direction through the actual wavy surface (varies per vertex)
 *    *
 *    * GLSL refract(I, N, eta) computes the refracted direction where:
 *    *   I = incident direction (normalized)
 *    *   N = surface normal (normalized)
 *    *   eta = n1/n2 (ratio of indices of refraction)
 */
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);

  /**
 * * Step 4: Project light rays to pool floor.
 *    *
 *    * oldPos: Where light would hit if water were flat (reference grid)
 *    * newPos: Where light actually hits through wavy surface (distorted grid)
 *    *
 *    * Note: position.xzy swizzle converts from XY grid to XZ world (Y is up in world space)
 */
  oldPos = project(position.xzy, refractedLight, refractedLight);
  newPos = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);

  /**
 * * Step 5: Position vertex for rasterization.
 *    *
 *    * We render directly to the caustics texture, so gl_Position maps to texture UV.
 *    * The 0.75 scale factor matches the pool floor's coverage in the texture.
 *    *
 *    * The offset (refractedLight.xz / refractedLight.y) accounts for the slant of
 *    * the light - without this, caustics would be misaligned with the pool floor rendering.
 */
  gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);
}
