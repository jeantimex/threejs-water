precision highp float;

/**
 * POOL WALLS/FLOOR FRAGMENT SHADER
 *
 * Renders the interior surfaces of the swimming pool with:
 * - Tiled texture mapping (triplanar projection)
 * - Underwater caustic lighting patterns
 * - Soft shadows from objects in the pool
 * - Water color tinting for submerged surfaces
 *
 * The shader handles both submerged portions (with caustics) and
 * above-water portions (rim area with direct lighting).
 */

// Optical constants
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Color tint applied to underwater surfaces (blue-green absorption)
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

// Scene uniforms
uniform vec3 light; // Light direction (toward sun)
uniform vec3 sphereCenter; // Interactive sphere position
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter; // Interactive cube position
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter; // Interactive torus knot position
uniform bool torusKnotEnabled;
uniform vec3 meshCenter; // Custom mesh position
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;
uniform sampler2D tiles; // Pool tile texture
uniform sampler2D causticTex; // Pre-computed caustic light map
uniform sampler2D water; // Water simulation heightmap

varying vec3 vPosition; // World-space position from vertex shader

/**
 * Ray-AABB intersection for shadow edge calculations.
 * Returns parametric distances (tNear, tFar) along the ray.
 */
vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

/**
 * Computes the final color for a point on the pool walls or floor.
 *
 * RENDERING FEATURES:
 * 1. Triplanar texture mapping - tiles projected based on surface orientation
 * 2. Proximity-based ambient occlusion from scene objects
 * 3. Diffuse lighting from refracted sunlight
 * 4. Caustic patterns for underwater surfaces
 * 5. Edge fadeout for above-water portions
 */
vec3 getWallColor(vec3 point) {
  float scale = 0.5; // Base brightness multiplier
  vec3 wallColor;
  vec3 normal;

  /**
 * * TRIPLANAR TEXTURE MAPPING
 *    *
 *    * Instead of traditional UV unwrapping, we project the tile texture
 *    * from each axis direction. The dominant axis determines which
 *    * projection to use, ensuring seamless tiling on all pool surfaces.
 */
  if (abs(point.x) > 0.999) {
    // LEFT/RIGHT WALLS (perpendicular to X axis)
    // Project texture along X, using YZ coordinates for UVs
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0); // Points inward (-X or +X)
  } else if (abs(point.z) > 0.999) {
    // FRONT/BACK WALLS (perpendicular to Z axis)
    // Project texture along Z, using XY coordinates for UVs
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z); // Points inward
  } else {
    // POOL FLOOR (perpendicular to Y axis)
    // Project texture from above, using XZ coordinates for UVs
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0); // Points up
  }

  /**
 * * DISTANCE-BASED ATTENUATION
 *    *
 *    * Surfaces farther from the center receive less ambient light,
 *    * simulating the natural falloff of indirect illumination.
 */
  scale /= length(point);

  /**
 * * OBJECT PROXIMITY SHADOWS (Soft Ambient Occlusion)
 *    *
 *    * Objects in the pool cast soft shadows on nearby surfaces.
 *    * Uses inverse power falloff: 1 - 0.9 / d^4
 *    *
 *    * Close to object (d ≈ 1): shadow ≈ 0.1 (dark)
 *    * Far from object (d >> 1): shadow → 1 (full brightness)
 */
  if (sphereEnabled) {
    scale *= 1.0 - 0.6 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.6 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.6 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.6 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
  }

  // Compute underwater light direction (refracted through water surface)
  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal)); // Lambertian term

  // Check if this point is underwater
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);

  if (point.y < info.r) {
    /**
 * * UNDERWATER CAUSTIC LIGHTING
 *      *
 *      * Sample the caustic texture at the projected position.
 *      * The projection accounts for the light's slant angle through water.
 *      *
 *      * caustic.r = intensity (brightness)
 *      * caustic.g = shadow factor (object occlusion)
 */
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    /**
 * * ABOVE-WATER LIGHTING (Pool Rim)
 *      *
 *      * For the portion above the waterline, we fade the lighting
 *      * smoothly to avoid hard edges where water meets the rim.
 *      * Uses a sigmoid function for smooth transition.
 */
    vec2 t = intersectCube(
      point,
      refractedLight,
      vec3(-1.0, -poolHeight, -1.0),
      vec3(1.0, 2.0, 1.0)
    );
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }

  return wallColor * scale;
}

void main() {
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);

  // Add blue tinting modulation for underwater fragments
  vec4 info = texture2D(water, vPosition.xz * 0.5 + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}
