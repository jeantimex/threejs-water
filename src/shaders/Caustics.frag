precision highp float;

/**
 * CAUSTICS FRAGMENT SHADER
 *
 * Caustics are the bright, shimmering light patterns seen at the bottom of a pool.
 * They form when light rays refract through the wavy water surface and converge
 * (focus) or diverge at different points on the pool floor.
 *
 * This shader computes caustic intensity by comparing the area of light rays
 * before and after refraction - a technique based on differential geometry.
 * When waves focus light (rays converge), the projected area shrinks, causing
 * brightness to increase proportionally.
 */

// Index of Refraction (IOR) constants for Snell's Law: n1 * sin(θ1) = n2 * sin(θ2)
// Air has IOR ≈ 1.0, water has IOR ≈ 1.333 (at 20°C for visible light)
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const float poolHeight = 1.0;

uniform vec3 light; // Normalized direction TO the light source (sun)
uniform vec3 sphereCenter; // World-space center of the sphere object
uniform float sphereRadius; // Radius of the sphere object
uniform bool sphereEnabled; // Whether sphere is active in the scene
uniform vec3 cubeCenter; // World-space center of the cube object
uniform vec3 cubeHalfSize; // Half-extents (width/2, height/2, depth/2) of the cube
uniform bool cubeEnabled; // Whether cube is active in the scene
uniform vec3 torusKnotCenter; // World-space center of the torus knot
uniform bool torusKnotEnabled; // Whether torus knot is active in the scene
uniform vec3 meshCenter; // World-space center of custom mesh bounding sphere
uniform float meshBoundingRadius; // Radius of custom mesh bounding sphere
uniform bool meshEnabled; // Whether custom mesh is active in the scene
uniform sampler2D objectShadowTex; // Shadow map texture for complex geometry occlusion

varying vec3 oldPos; // Pool floor position if water were flat (no refraction)
varying vec3 newPos; // Pool floor position with actual wave refraction
varying vec3 ray; // Refracted light ray direction through wavy surface

/**
 * Ray-AABB (Axis-Aligned Bounding Box) intersection using the slab method.
 *
 * The slab method treats each axis as a pair of parallel planes (slabs).
 * For each axis, we compute where the ray enters and exits that slab.
 * The ray intersects the box where ALL slabs overlap simultaneously.
 *
 * Math: For each axis i, solve:  origin.i + t * direction.i = plane.i
 *       Therefore: t = (plane.i - origin.i) / direction.i
 *
 * @param origin Ray starting point
 * @param r Ray direction (does not need to be normalized)
 * @param cubeMin Minimum corner of the AABB
 * @param cubeMax Maximum corner of the AABB
 * @return vec2(tNear, tFar) - parametric distances to entry and exit points
 *         If tNear > tFar, the ray misses the box entirely
 */
vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {
  // Compute parametric t values for intersections with each slab
  vec3 tMin = (cubeMin - origin) / r;
  vec3 tMax = (cubeMax - origin) / r;

  // Handle negative ray directions: swap min/max if ray points backwards
  vec3 t1 = min(tMin, tMax); // Entry t for each axis
  vec3 t2 = max(tMin, tMax); // Exit t for each axis

  // The ray enters the box when it has entered ALL slabs (max of entries)
  float tNear = max(max(t1.x, t1.y), t1.z);
  // The ray exits the box when it exits ANY slab (min of exits)
  float tFar = min(min(t2.x, t2.y), t2.z);

  return vec2(tNear, tFar);
}

/**
 * Returns 1.0 if the ray intersects the cube object, otherwise 0.0.
 */
float cubeOcclusion(vec3 origin, vec3 direction) {
  vec2 hit = intersectCube(origin, direction, cubeCenter - cubeHalfSize, cubeCenter + cubeHalfSize);
  return step(0.0, hit.y) * step(hit.x, hit.y);
}

/**
 * Analytical ray-sphere intersection using the quadratic formula.
 *
 * A sphere is defined as all points P where |P - C|² = r².
 * A ray is defined as P(t) = O + t*D where O is origin, D is direction.
 *
 * Substituting the ray into the sphere equation:
 *   |O + t*D - C|² = r²
 *   |(O - C) + t*D|² = r²
 *
 * Let L = O - C (vector from sphere center to ray origin):
 *   |L + t*D|² = r²
 *   (L + t*D)·(L + t*D) = r²
 *   L·L + 2*t*(L·D) + t²*(D·D) = r²
 *
 * Rearranging into standard quadratic form at² + bt + c = 0:
 *   a = D·D           (always positive for non-zero direction)
 *   b = 2 * L·D       (projection of L onto ray direction)
 *   c = L·L - r²      (distance² from origin to center, minus radius²)
 *
 * discriminant = b² - 4ac determines number of intersections:
 *   < 0: ray misses sphere (no real solutions)
 *   = 0: ray tangent to sphere (one solution)
 *   > 0: ray pierces sphere (two solutions)
 *
 * @return Parametric t of nearest intersection, or 1.0e6 if no hit
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center; // L = O - C
  float a = dot(ray, ray); // D·D
  float b = 2.0 * dot(toSphere, ray); // 2 * L·D
  float c = dot(toSphere, toSphere) - radius * radius; // L·L - r²
  float discriminant = b * b - 4.0 * a * c;

  if (discriminant > 0.0) {
    // Use the smaller root (-b - sqrt) for the nearest intersection
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t; // Only return if intersection is in front of ray
  }
  return 1.0e6; // No valid intersection
}

/**
 * Returns near entry intersection distance with sphere bounds.
 */
float intersectSphereBounds(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float root = sqrt(discriminant);
    float near = (-b - root) / (2.0 * a);
    float far = (-b + root) / (2.0 * a);
    if (near > 0.0) return near;
    if (far > 0.0) return 0.0;
  }
  return 1.0e6;
}

/**
 * Signed Distance Function (SDF) for a (p, q) Torus Knot.
 *
 * A torus knot is a curve that winds around a torus surface, going through
 * the hole p times while circling the torus q times. Here we use (2, 3) = trefoil knot.
 *
 * PARAMETRIC EQUATIONS for a (p, q) torus knot:
 *   r(θ) = R * (2 + cos(q*θ)) / 2    -- varying radius from center
 *   x(θ) = r(θ) * cos(p*θ)           -- horizontal position
 *   y(θ) = R * sin(q*θ) / 2          -- vertical oscillation
 *   z(θ) = r(θ) * sin(p*θ)           -- depth position
 *
 * where θ ∈ [0, 2π], R is the major radius, and the curve is then inflated
 * by 'tube' radius to create the solid shape.
 *
 * SDF COMPUTATION:
 * We discretize the curve into 64 line segments and find the minimum distance
 * from point p to any segment. This uses the point-to-line-segment formula:
 *   For segment from A to B, and point P:
 *   h = clamp((PA · AB) / (AB · AB), 0, 1)  -- projection parameter
 *   distance = |PA - AB * h|                 -- perpendicular distance
 *
 * @param p Query point in world space
 * @param center Center of the torus knot
 * @return Signed distance (negative inside, positive outside)
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;

  // OPTIMIZATION: Early-out using bounding sphere test.
  // The torus knot fits within a sphere of radius 0.31 centered at its origin.
  // If we're far outside this sphere, return approximate distance to save computation.
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }

  float minDist = 1.0e6;
  const int segments = 64; // Number of line segments approximating the curve
  const float radius = 0.17; // Major radius R of the torus
  const float tube = 0.045; // Tube thickness (Minkowski sum radius)
  const float p_knot = 2.0; // Number of times curve goes through the hole
  const float q_knot = 3.0; // Number of times curve winds around the torus

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    // θ ranges from 0 to 2π as i goes from 0 to segments
    float theta = float(i) / float(segments) * 6.283185307179586; // 2π

    // Compute point on the knot curve at parameter θ
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5; // Varying radius
    vec3 pt = vec3(
      rad * cos(p_knot * theta), // x
      -radius * sin(q_knot * theta) * 0.5, // y (inverted for visual orientation)
      rad * sin(p_knot * theta) // z
    );

    if (i > 0) {
      // Point-to-line-segment distance calculation
      vec3 ba = pt - prevPt; // Segment vector (B - A)
      vec3 pa = pos - prevPt; // Vector from A to query point
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); // Projection parameter [0,1]
      float d = length(pa - ba * h); // Distance to closest point on segment
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }

  // Subtract tube radius: inside tube = negative, outside = positive
  return minDist - tube;
}

/**
 * Sphere-tracing (raymarching) to find ray intersection with the torus knot.
 *
 * SPHERE TRACING ALGORITHM:
 * Unlike analytical intersections (spheres, planes), complex SDFs require
 * iterative raymarching. The key insight is that the SDF gives us a safe
 * distance to step - if SDF(p) = d, we know there's no surface within d
 * units of p, so we can safely advance the ray by d.
 *
 * Algorithm:
 *   1. Start at ray entry into bounding sphere
 *   2. Evaluate SDF at current point
 *   3. If SDF < ε, we've hit the surface
 *   4. Otherwise, advance ray by SDF distance (guaranteed safe)
 *   5. Repeat until hit or max iterations/distance exceeded
 *
 * This converges quickly near surfaces (small steps) and efficiently
 * skips empty space (large steps).
 *
 * @param origin Ray starting point
 * @param ray Ray direction
 * @param center Torus knot center position
 * @return Parametric t of intersection, or 1.0e6 if no hit
 */
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  // First, find where ray enters the bounding sphere
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6; // Ray misses bounding sphere entirely

  float t = t_bound; // Start marching from bounding sphere entry
  for (int i = 0; i < 30; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);

    if (d < 0.001) {
      return t; // Close enough to surface - we've hit it
    }

    t += d; // Safe step: advance by SDF distance

    // Stop if we've marched too far (exited bounding region)
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6; // No intersection found
}

/**
 * Returns 1.0 if the ray intersects the torus knot, otherwise 0.0.
 */
float torusKnotOcclusion(vec3 origin, vec3 direction) {
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);
  return hit < 1.0e5
    ? 1.0
    : 0.0;
}

void main() {
  /**
 * * CAUSTICS INTENSITY CALCULATION via Differential Area Comparison
 *    *
 *    * The physical basis: energy conservation. Light energy in a beam is constant,
 *    * but when the beam's cross-sectional area changes (due to refraction), the
 *    * intensity (energy per unit area) must change inversely.
 *    *
 *    * MATHEMATICAL APPROACH:
 *    * We use GPU screen-space derivatives (dFdx, dFdy) to measure how positions
 *    * change across neighboring pixels. For a grid of parallel rays:
 *    *
 *    *   oldPos: Where rays hit if water were flat (regular grid)
 *    *   newPos: Where rays hit after refracting through waves (distorted grid)
 *    *
 *    * The derivative gives us the Jacobian of this mapping:
 *    *   J = | ∂newPos/∂x  ∂newPos/∂y |
 *    *       | ∂newPos/∂x  ∂newPos/∂y |
 *    *
 *    * Area ratio ≈ |det(J_old)| / |det(J_new)|
 *    * For simplicity, we approximate this as (length of sides).
 *    *
 *    * When waves FOCUS light (convex lens effect):
 *    *   - newArea shrinks as rays converge
 *    *   - oldArea / newArea becomes large → bright caustic
 *    *
 *    * When waves SPREAD light (concave lens effect):
 *    *   - newArea expands as rays diverge
 *    *   - oldArea / newArea becomes small → dim area
 */
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));

  // Store caustic intensity in Red channel (scaled down to avoid overexposure)
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  // Compute direction of light after entering water (used for shadow calculations)
  // Snell's Law: n1*sin(θ1) = n2*sin(θ2), implemented via GLSL refract()
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  /**
 * * SHADOW/OCCLUSION CALCULATION
 *    *
 *    * Objects in the water block light rays, creating shadows on the pool floor.
 *    * We store the shadow factor in the Green channel (1.0 = fully lit, 0.0 = full shadow).
 *    *
 *    * Different techniques are used based on object type:
 *    * - Sphere: Analytical soft shadow using cross-product area calculation
 *    * - Cube: Multi-sample ray-box intersection tests
 *    * - Complex meshes: Pre-rendered shadow map with PCF filtering
 */
  if (sphereEnabled) {
    /**
 * * ANALYTICAL SPHERE SOFT SHADOW
 *      *
 *      * This technique computes a soft shadow penumbra analytically, avoiding
 *      * multi-sample noise while still producing smooth shadow edges.
 *      *
 *      * Method:
 *      * 1. Compute vector from surface point to sphere center (normalized by radius)
 *      * 2. Cross product with light direction gives "perpendicular area"
 *      * 3. This area metric indicates how much of the sphere subtends the light
 *      * 4. Sigmoid smoothstep creates smooth penumbra transition
 */
    vec3 dir = (sphereCenter - newPos) / sphereRadius; // Vector to sphere, in radius units
    vec3 area = cross(dir, refractedLight); // Perpendicular to both
    float shadow = dot(area, area); // Squared area metric

    // Distance along light direction (positive = sphere is "above" in light direction)
    float dist = dot(dir, -refractedLight);

    // Smooth shadow falloff based on angular subtension
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);

    // Sigmoid function for smooth umbra/penumbra transition
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);

    // Fade shadow based on distance (no shadow if sphere is behind the point)
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
    gl_FragColor.g = shadow;

  } else if (cubeEnabled) {
    /**
 * * MULTI-SAMPLE CUBE SOFT SHADOW (3x3 = 9 samples)
 *      *
 *      * For boxes, we can't easily compute analytical soft shadows due to the
 *      * sharp corners. Instead, we use stochastic sampling:
 *      *
 *      * 1. Create an orthonormal basis perpendicular to the light direction
 *      * 2. Sample 9 points in a grid pattern around the surface point
 *      * 3. Test each sample ray against the cube
 *      * 4. Average results for soft shadow approximation
 *      *
 *      * This is essentially a simple form of Percentage Closer Soft Shadows (PCSS).
 */
    vec3 shadowRay = -refractedLight; // Direction toward light

    // Build orthonormal basis for sampling plane perpendicular to light
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, shadowRay));

    float occlusion = 0.0;
    const float spread = 0.025; // Sampling spread (controls penumbra width)

    // 3x3 grid of samples
    for (int x = -1; x <= 1; x++) {
      for (int y = -1; y <= 1; y++) {
        vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;
        occlusion += cubeOcclusion(sampleOrigin, shadowRay);
      }
    }
    gl_FragColor.g = 1.0 - occlusion / 9.0; // Average: 0/9=fully lit, 9/9=fully shadowed

  } else if (torusKnotEnabled || meshEnabled) {
    /**
 * * SHADOW MAP LOOKUP WITH PCF (Percentage-Closer Filtering)
 *      *
 *      * Complex geometry uses a pre-rendered shadow map. PCF samples the
 *      * shadow map at multiple offsets and averages, creating soft edges.
 *      *
 *      * Shadow UV calculation:
 *      *   Project the 3D point onto the shadow map plane using the light direction.
 *      *   UV = (point.xz - point.y * light.xz/light.y) -- projection formula
 *      *
 *      * The 0.75 scaling and 0.5+0.5 offset map world [-1,1] to texture [0,1].
 */
    vec2 shadowUV =
      0.75 * (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
    const float d = 4.0 / 1024.0; // Texel offset for 1024x1024 shadow map

    // 9-tap PCF kernel (center + 8 neighbors)
    float occlusion = texture2D(objectShadowTex, shadowUV).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, -d)).r;
    gl_FragColor.g = 1.0 - 0.8 * occlusion / 9.0; // 0.8 factor softens shadow intensity

  } else {
    gl_FragColor.g = 1.0; // No objects - fully lit
  }

  /**
 * * EDGE FADEOUT (Anti-Aliasing at Pool Boundaries)
 *    *
 *    * Caustics should fade smoothly near the water surface line to avoid
 *    * hard seams where the underwater tiles meet the air. This uses a
 *    * sigmoid function to create a smooth transition zone.
 *    *
 *    * The calculation:
 *    * 1. Trace a ray from the surface point toward the light
 *    * 2. Find where this ray exits the pool bounds
 *    * 3. If the exit point is near the water surface (Y ≈ 0), fade out
 *    *
 *    * The sigmoid 1/(1 + e^(-x)) maps the distance to a smooth [0,1] range.
 *    * The constants (200.0, 10.0, 2.0/12.0) are tuned for visual appearance.
 */
  vec2 t = intersectCube(
    newPos,
    -refractedLight,
    vec3(-1.0, -poolHeight, -1.0),
    vec3(1.0, 2.0, 1.0)
  );
  gl_FragColor.r *=
    1.0 /
    (1.0 +
      exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
}
