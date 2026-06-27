precision highp float;

/**
 * WATER SURFACE FRAGMENT SHADER (View from Above)
 *
 * This shader renders the water surface as seen from above, implementing:
 * 1. Fresnel reflectance - how much light reflects vs refracts based on angle
 * 2. Parallax displacement - finding the correct water height at each pixel
 * 3. Ray tracing - following reflected/refracted rays to find colors
 * 4. Caustic integration - adding underwater light patterns
 *
 * The water surface acts as an interface between two media (air and water),
 * governed by Snell's Law for refraction and Fresnel equations for reflectance.
 */

// Index of Refraction constants
const float IOR_AIR = 1.0; // n₁: air (approximately vacuum)
const float IOR_WATER = 1.333; // n₂: water at 20°C for visible light

// Water tinting colors for light absorption simulation (Beer's Law approximation)
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); // Tint when looking down into water
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); // Tint when looking up from underwater

const float poolHeight = 1.0; // Pool depth below rest water level
const float torusKnotShadowRadius = 0.13; // Shadow falloff radius for torus knot

uniform vec3 light;
uniform vec3 sphereCenter;
uniform float sphereRadius;
uniform bool sphereEnabled;
uniform vec3 cubeCenter;
uniform vec3 cubeHalfSize;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
uniform float meshBoundingRadius;
uniform float meshShadowRadius;
uniform bool meshEnabled;
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D objectReflectionTex;
uniform sampler2D objectClippedReflectionTex;
uniform sampler2D objectRefractionTex;
uniform sampler2D water;
uniform samplerCube sky;
uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

varying vec3 vPosition;

/**
 * Calculates intersections of a ray with the pool bounding box limits.
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
 * Ray-Sphere intersection using the quadratic formula.
 *
 * Geometric setup:
 *   - Sphere: all points P where |P - C|² = r²
 *   - Ray: P(t) = O + t*D (origin O, direction D, parameter t ≥ 0)
 *
 * Substituting ray into sphere equation yields quadratic:
 *   at² + bt + c = 0
 *
 * Where:
 *   a = D·D (always > 0)
 *   b = 2(O-C)·D
 *   c = (O-C)·(O-C) - r²
 *
 * Solutions: t = (-b ± √(b²-4ac)) / 2a
 * We use -b - √... to get the nearest intersection (smallest positive t).
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center; // Vector from sphere center to ray origin
  float a = dot(ray, ray); // ||D||² (= 1 if ray is normalized)
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;

  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a); // Nearest intersection
    if (t > 0.0) return t; // Only valid if in front of ray origin
  }
  return 1.0e6; // No valid intersection
}

/**
 * Calculates exit/entry bounds on a sphere obstacle.
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
 * Signed Distance Function (SDF) for a (2,3) Torus Knot (Trefoil Knot).
 *
 * A (p,q) torus knot winds p times through the hole and q times around
 * the torus. This creates a continuous closed curve in 3D space.
 *
 * The SDF is computed by discretizing the knot curve into line segments
 * and finding the minimum distance from the query point to any segment.
 * This distance is then offset by the tube radius to create a solid shape.
 *
 * For raymarching, the SDF's key property is: at any point, the SDF value
 * is a safe distance to step without overshooting the surface.
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;

  // Early-out optimization: if outside bounding sphere, return approximate distance
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }

  float minDist = 1.0e6;
  const int segments = 64; // Curve discretization resolution
  const float radius = 0.17; // Major radius of the torus
  const float tube = 0.045; // Tube thickness
  const float p_knot = 2.0; // Winds through hole p times
  const float q_knot = 3.0; // Winds around torus q times

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    // Parametric angle along the knot curve
    float theta = float(i) / float(segments) * 6.283185307179586;

    // Torus knot parametric equations (creates the trefoil shape)
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );

    if (i > 0) {
      // Point-to-segment distance formula
      vec3 ba = pt - prevPt; // Segment direction
      vec3 pa = pos - prevPt; // Vector to query point
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); // Projection parameter
      float d = length(pa - ba * h); // Distance to closest point on segment
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube; // Offset by tube radius for solid shape
}

/**
 * Traces a ray to intersect the Torus Knot SDF.
 */
float intersectTorusKnot(vec3 origin, vec3 ray, vec3 center) {
  float t_bound = intersectSphereBounds(origin, ray, center, 0.31);
  if (t_bound > 1.0e5) return 1.0e6;

  float t = t_bound;
  for (int i = 0; i < 30; i++) {
    vec3 p = origin + ray * t;
    float d = sdTorusKnot(p, center);
    if (d < 0.001) {
      return t;
    }
    t += d;
    if (t > t_bound + 0.5) break;
  }
  return 1.0e6;
}

/**
 * Computes surface normal of the Torus Knot using gradient estimation.
 *
 * For an SDF, the gradient ∇d points away from the surface (outward normal).
 * We estimate the gradient using central finite differences:
 *
 *   ∂d/∂x ≈ (d(x+ε) - d(x-ε)) / (2ε)
 *
 * This works because the SDF's gradient direction is the surface normal,
 * and the gradient magnitude is 1 (for a proper distance field).
 *
 * @param p Query point on the surface
 * @param center Torus knot center position
 * @return Normalized outward-facing surface normal
 */
vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001; // Small offset for finite difference

  // Central differences: f'(x) ≈ (f(x+h) - f(x-h)) / 2h
  // Note: The 2h factor cancels out after normalization
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

/**
 * Computes shading color for a point on the sphere surface.
 *
 * Uses a combination of:
 * 1. Proximity-based ambient occlusion (darkening near walls/floor)
 * 2. Diffuse lighting from the underwater sun direction
 * 3. Caustic light patterns when underwater
 */
vec3 getSphereColor(vec3 point) {
  vec3 color = vec3(0.5); // Base gray color

  /**
 * * PROXIMITY AMBIENT OCCLUSION
 *    *
 *    * Darkens the sphere near pool walls and floor to simulate soft shadows
 *    * and reduced ambient light in corners. Uses an inverse power falloff:
 *    *
 *    *   occlusion = 1 - 0.9 / (distance/radius)³
 *    *
 *    * When distance ≈ radius: occlusion ≈ 1 - 0.9 = 0.1 (very dark)
 *    * When distance >> radius: occlusion → 1 (full brightness)
 *    *
 *    * Distances measured from walls (X=±1), back wall (Z=±1), and floor (Y=-poolHeight)
 */
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0); // Side walls
  color *= 1.0 - 0.6 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0); // Front/back walls
  color *= 1.0 - 0.6 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0); // Floor

  // Compute sphere surface normal (for a sphere, it's simply the normalized radial direction)
  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;

  // Get underwater light direction (refracted sunlight)
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  // Lambertian diffuse: intensity = max(0, N · L)
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

  // Apply caustic lighting if the point is underwater
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    // Below the water surface height
    // Sample caustics at the projected position (accounting for light slant)
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse *= caustic.r * 4.0; // Amplify diffuse by caustic intensity
  }

  color += diffuse;
  return color;
}

/**
 * Computes cube shading.
 */
vec3 getCubeColor(vec3 point) {
  vec3 local = (point - cubeCenter) / cubeHalfSize;
  vec3 axis = abs(local);
  vec3 cubeNormal;
  if (axis.x > axis.y && axis.x > axis.z) {
    cubeNormal = vec3(sign(local.x), 0.0, 0.0);
  } else if (axis.y > axis.z) {
    cubeNormal = vec3(0.0, sign(local.y), 0.0);
  } else {
    cubeNormal = vec3(0.0, 0.0, sign(local.z));
  }

  vec3 color = vec3(0.5);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, cubeNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

/**
 * Computes Torus Knot shading.
 */
vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

/**
 * Computes pool wall shading.
 */
vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  if (abs(point.x) > 0.999) {
    wallColor = texture2D(tiles, point.yz * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(-point.x, 0.0, 0.0);
  } else if (abs(point.z) > 0.999) {
    wallColor = texture2D(tiles, point.yx * 0.5 + vec2(1.0, 0.5)).rgb;
    normal = vec3(0.0, 0.0, -point.z);
  } else {
    wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
    normal = vec3(0.0, 1.0, 0.0);
  }

  scale /= length(point);
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

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
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

/**
 * Samples a texture projected from camera matrices.
 */
vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds =
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

/**
 * Samples refracted objects inside water.
 */
vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);
}

/**
 * Samples reflected objects inside water.
 */
vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectReflectionTex,
    reflectionViewProjectionMatrix,
    origin + ray * hit
  );
}

/**
 * Ray-traces a single ray to determine the color seen in that direction.
 *
 * This is a simple ray tracer that handles:
 * 1. Intersection with scene objects (sphere, cube, torus knot)
 * 2. Intersection with pool walls and floor
 * 3. Escape to sky (cubemap environment)
 * 4. Water color absorption (Beer's Law)
 *
 * The ray can be either a reflected ray (bouncing off water surface toward sky)
 * or a refracted ray (entering water toward pool floor).
 *
 * @param origin Starting point of the ray (on water surface)
 * @param ray Normalized direction of the ray
 * @param waterColor Tinting color for underwater light absorption
 * @return Final color for this ray
 */
vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;

  // Test intersections with all scene objects and find the nearest hit
  float sphereDistance = sphereEnabled
    ? intersectSphere(origin, ray, sphereCenter, sphereRadius)
    : 1.0e6;

  vec2 cubeIntersection = intersectCube(
    origin,
    ray,
    cubeCenter - cubeHalfSize,
    cubeCenter + cubeHalfSize
  );
  bool cubeHit =
    cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
  float cubeDistance = cubeHit
    ? cubeIntersection.x > 0.0
      ? cubeIntersection.x
      : cubeIntersection.y > 0.0
        ? cubeIntersection.y
        : 1.0e6
    : 1.0e6;

  // Only trace torus knot for upward rays (performance optimization)
  float torusKnotDistance =
    torusKnotEnabled && ray.y > 0.0
      ? intersectTorusKnot(origin, ray, torusKnotCenter)
      : 1.0e6;

  // Find nearest object intersection
  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);

  if (objectDistance < 1.0e6) {
    // RAY HIT AN OBJECT - shade the hit point
    vec3 hit = origin + ray * objectDistance;
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit);
    } else {
      color = getTorusKnotColor(hit);
    }

  } else if (ray.y < 0.0) {
    // RAY POINTS DOWNWARD - hits pool floor or walls
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    color = getWallColor(origin + ray * t.y);

  } else {
    // RAY POINTS UPWARD - exits water into air
    vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    vec3 hit = origin + ray * t.y;

    if (hit.y < 2.0 / 12.0) {
      // Hit pool wall above water line
      color = getWallColor(hit);
    } else {
      // Escaped to sky - sample environment cubemap
      color = textureCube(sky, ray).rgb;

      /**
 * * SUN SPOT (Specular Highlight)
 *        *
 *        * Add a bright spot where the ray direction aligns with the sun.
 *        * Uses a high-power falloff (5000) for a small, intense highlight.
 *        *
 *        * Color (10, 8, 6) gives a warm yellow-white sun appearance.
 */
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
    }
  }

  /**
 * * WATER COLOR ABSORPTION (Beer-Lambert Law Approximation)
 *    *
 *    * Light traveling through water is absorbed, with longer wavelengths
 *    * (red) absorbed more than shorter ones (blue). This is why deep
 *    * water appears blue-green.
 *    *
 *    * We simplify this by multiplying by a tint color for downward rays
 *    * (longer path through water = more absorption).
 */
  if (ray.y < 0.0) color *= waterColor;

  return color;
}

void main() {
  /**
 * * STEP 1: COORDINATE MAPPING
 *    * Convert world XZ position to UV texture coordinates [0,1]
 *    * World space: X,Z ∈ [-1, 1] → UV: [0, 1]
 */
  vec2 coord = vPosition.xz * 0.5 + 0.5;
  vec4 info = texture2D(water, coord);

  /**
 * * STEP 2: PARALLAX DISPLACEMENT (Iterative Refinement)
 *    *
 *    * Problem: The water surface is displaced vertically, but we're sampling
 *    * from a fixed horizontal grid. A naive lookup would misalign the surface
 *    * features with their actual 3D positions.
 *    *
 *    * Solution: Iteratively offset the UV lookup in the direction of the
 *    * surface gradient (stored in BA channels). This approximates ray-heightmap
 *    * intersection without expensive per-pixel raymarching.
 *    *
 *    * The gradient (info.ba) points toward higher water; we step along it
 *    * to converge toward the correct sampling point.
 */
  for (int i = 0; i < 5; i++) {
    coord = clamp(coord + info.ba * 0.005, 0.0, 1.0); // Small steps along gradient direction
    info = texture2D(water, coord); // Resample at new location
  }

  /**
 * * STEP 3: NORMAL RECONSTRUCTION
 *    *
 *    * The water texture stores surface slope components:
 *    *   info.b = ∂height/∂x (x-component of gradient)
 *    *   info.a = ∂height/∂z (z-component of gradient)
 *    *
 *    * For a heightfield, the normal is N = normalize(-∂h/∂x, 1, -∂h/∂z)
 *    * The y-component is computed from the unit normal constraint:
 *    *   |N| = 1  →  Nx² + Ny² + Nz² = 1  →  Ny = sqrt(1 - Nx² - Nz²)
 */
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  // STEP 4: View ray from camera to this surface point
  vec3 incomingRay = normalize(vPosition - eye);

  /**
 * * STEP 5: REFLECTION AND REFRACTION RAYS
 *    *
 *    * reflect(I, N): R = I - 2*(I·N)*N
 *    *   Mirrors the incident ray about the normal
 *    *
 *    * refract(I, N, eta): Snell's Law implementation
 *    *   n₁ sin(θ₁) = n₂ sin(θ₂)
 *    *   eta = n₁/n₂ = IOR_AIR/IOR_WATER ≈ 0.75
 *    *   Returns the transmitted ray direction
 */
  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);

  /**
 * * STEP 6: FRESNEL REFLECTANCE (Schlick's Approximation)
 *    *
 *    * The Fresnel equations describe how much light reflects vs. refracts
 *    * at an interface, depending on the incident angle and polarization.
 *    *
 *    * Schlick's approximation: F(θ) = F₀ + (1 - F₀)(1 - cos(θ))⁵
 *    *
 *    * Where:
 *    *   F₀ = ((n₁ - n₂)/(n₁ + n₂))² ≈ 0.02 for air-water at normal incidence
 *    *   θ = angle between view ray and surface normal
 *    *
 *    * Physical behavior:
 *    *   - Looking straight down (θ ≈ 0°): mostly see refracted (underwater) image
 *    *   - Looking at grazing angle (θ → 90°): mostly see reflected (sky) image
 *    *
 *    * We use a modified version with F₀ = 0.25 and power = 3 for artistic control.
 */
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  // STEP 7: Ray trace to find colors for both reflected and refracted rays
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  // 8. Blend pre-rendered refraction and reflection passes for interactive objects
  if (torusKnotEnabled) {
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    vec4 reflectedObject = sampleObjectReflection(vPosition, reflectedRay, torusKnotCenter, 0.31);
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  } else if (meshEnabled) {
    vec4 refractedObject = sampleObjectRefraction(
      vPosition,
      refractedRay,
      meshCenter,
      meshBoundingRadius
    );
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    // Use clipped reflection texture to ensure parts below water are not rendered in reflection map
    vec4 reflectedObject = sampleProjectedTexture(
      objectClippedReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  }

  // 9. Mix colors based on fresnel intensity
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}
