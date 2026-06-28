precision highp float;

/**
 * ROUNDED POOL CAUSTICS FRAGMENT SHADER
 *
 * Computes caustic intensity and shadow occlusion for rounded pools.
 *
 * CAUSTIC INTENSITY:
 * Uses the differential area method - comparing the area of a light
 * patch before and after refraction. When rays converge (lens effect),
 * the ratio oldArea/newArea becomes large, creating bright caustics.
 *
 * SHADOW CALCULATION:
 * Objects in the pool block light, creating shadows on the caustic map.
 * Different techniques are used for different object types:
 * - Sphere: Analytical soft shadow
 * - Cube: Multi-sample ray-box intersection
 * - Complex meshes: Pre-rendered shadow map lookup
 */

// Optical constants
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Scene object parameters
uniform vec3 light;
#define MAX_SPHERES 10
uniform vec3 sphereCenters[MAX_SPHERES];
uniform float sphereRadii[MAX_SPHERES];
uniform int sphereCount;
uniform bool sphereEnabled;
#define MAX_CUBES 10
uniform vec3 cubeCenters[MAX_CUBES];
uniform vec3 cubeHalfSizes[MAX_CUBES];
uniform int cubeCount;
uniform bool cubeEnabled;
uniform vec3 torusKnotCenter;
uniform bool torusKnotEnabled;
uniform vec3 meshCenter;
uniform float meshBoundingRadius;
uniform bool meshEnabled;

// Shadow map for complex geometry
uniform sampler2D objectShadowTex;

// Pool geometry
uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

// From vertex shader
varying vec3 oldPos; // Flat water projection point
varying vec3 newPos; // Wavy water projection point
varying vec3 ray; // Refracted ray direction

/**
 * Solves 2D intersections of a ray with a rounded rectangle layout on the horizontal XZ plane.
 */
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  // 1. Line x = poolWidth (z in [-r_sub_z, r_sub_z])
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 2. Line x = -poolWidth (z in [-r_sub_z, r_sub_z])
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 3. Check line: z = +poolLength (x in [-r_sub_x, r_sub_x])
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 4. Check line: z = -poolLength (x in [-r_sub_x, r_sub_x])
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  // 5. Check corners
  if (R > 0.0) {
    vec2 centers[4];
    centers[0] = vec2(r_sub_x, r_sub_z);
    centers[1] = vec2(-r_sub_x, r_sub_z);
    centers[2] = vec2(-r_sub_x, -r_sub_z);
    centers[3] = vec2(r_sub_x, -r_sub_z);

    for (int i = 0; i < 4; i++) {
      vec2 center = centers[i];
      vec2 toCenter = origin - center;
      float a = dot(ray, ray);
      float b = 2.0 * dot(toCenter, ray);
      float c = dot(toCenter, toCenter) - R * R;
      float disc = b * b - 4.0 * a * c;
      if (disc >= 0.0) {
        float sqrtDisc = sqrt(disc);
        float tA = (-b - sqrtDisc) / (2.0 * a);
        float tB = (-b + sqrtDisc) / (2.0 * a);

        vec2 ptA = origin + tA * ray;
        bool validA = false;
        if (i == 0) validA = ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps;
        else if (i == 1) validA = ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps;
        else if (i == 2) validA = ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps;
        else if (i == 3) validA = ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps;
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }

        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps;
        else if (i == 1) validB = ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps;
        else if (i == 2) validB = ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps;
        else if (i == 3) validB = ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps;
        if (validB) {
          tNear = min(tNear, tB);
          tFar = max(tFar, tB);
          found = true;
        }
      }
    }
  }

  if (!found) {
    return vec2(-1e6, 1e6);
  }

  return vec2(tNear, tFar);
}

/**
 * Calculates 3D intersection parameters of a ray with the rounded pool box.
 */
vec2 intersectRoundedBox(vec3 origin, vec3 ray, float R) {
  float tYNear = -1.0e6;
  float tYFar = 1.0e6;
  if (abs(ray.y) > 1.0e-7) {
    float tYMin = (-poolHeight - origin.y) / ray.y;
    float tYMax = (2.0 - origin.y) / ray.y;
    tYNear = min(tYMin, tYMax);
    tYFar = max(tYMin, tYMax);
  }
  vec2 tXZ = intersectRoundedRectangle2D(origin.xz, ray.xz, R);
  float tNear = max(tYNear, tXZ.x);
  float tFar = min(tYFar, tXZ.y);
  return vec2(tNear, tFar);
}

/**
 * Solves standard ray-box intersection.
 * Used for fast shadow occlusion slab tests against the active cube obstacle.
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
 * Checks if a shadow ray intersects the cube obstacle.
 */
float cubeOcclusion(vec3 origin, vec3 direction, vec3 center, vec3 halfSize) {
  vec2 hit = intersectCube(origin, direction, center - halfSize, center + halfSize);
  return step(0.0, hit.y) * step(hit.x, hit.y);
}

/**
 * Checks intersection against a sphere.
 */
float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b * b - 4.0 * a * c;
  if (discriminant > 0.0) {
    float t = (-b - sqrt(discriminant)) / (2.0 * a);
    if (t > 0.0) return t;
  }
  return 1.0e6;
}

/**
 * Checks entry/exit bounds on a sphere obstacle.
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
 * Evaluates the Signed Distance Function (SDF) of the Torus Knot.
 */
float sdTorusKnot(vec3 p, vec3 center) {
  vec3 pos = p - center;
  float d_bound = length(pos) - 0.31;
  if (d_bound > 0.08) {
    return d_bound;
  }
  float minDist = 1.0e6;
  const int segments = 64;
  const float radius = 0.17;
  const float tube = 0.045;
  const float p_knot = 2.0;
  const float q_knot = 3.0;

  vec3 prevPt = vec3(0.0);
  for (int i = 0; i <= segments; i++) {
    float theta = float(i) / float(segments) * 6.283185307179586;
    float rad = radius * (2.0 + cos(q_knot * theta)) * 0.5;
    vec3 pt = vec3(
      rad * cos(p_knot * theta),
      -radius * sin(q_knot * theta) * 0.5,
      rad * sin(p_knot * theta)
    );
    if (i > 0) {
      vec3 ba = pt - prevPt;
      vec3 pa = pos - prevPt;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      float d = length(pa - ba * h);
      minDist = min(minDist, d);
    }
    prevPt = pt;
  }
  return minDist - tube;
}

/**
 * Traces a ray to find intersections with the Torus Knot obstacle.
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
 * Checks if a shadow ray hits the Torus Knot.
 */
float torusKnotOcclusion(vec3 origin, vec3 direction) {
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);
  return hit < 1.0e5
    ? 1.0
    : 0.0;
}

void main() {
  // 1. Calculate relative focusing of the light rays:
  // oldArea / newArea represents the Jacobian determinant of the refraction mapping.
  // When rays converge, newArea becomes smaller than oldArea, focusing light and creating caustics.
  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));

  // Store the focusing ratio in the red channel (scaled by 0.2)
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  // 2. Compute shadow mapping (attenuation factor) for active obstacles:
  if (sphereEnabled) {
    // Analytical soft sphere shadows: computes shadow cone alignment
    float shadowAccum = 1.0;
    for (int i = 0; i < MAX_SPHERES; i++) {
      if (i >= sphereCount) break;
      vec3 dir = (sphereCenters[i] - newPos) / sphereRadii[i];
      vec3 area = cross(dir, refractedLight);
      float shadow = dot(area, area);
      float dist = dot(dir, -refractedLight);
      shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
      shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
      shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
      shadowAccum *= shadow;
    }
    gl_FragColor.g = shadowAccum;
  } else if (cubeEnabled) {
    // 3x3 shadow map kernel sampling for the cube obstacle
    vec3 shadowRay = -refractedLight;
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, shadowRay));

    float shadowAccum = 1.0;
    const float spread = 0.025;

    for (int i = 0; i < MAX_CUBES; i++) {
      if (i >= cubeCount) break;
      float occlusion = 0.0;
      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          vec3 sampleOrigin = newPos + right * float(x) * spread + up * float(y) * spread;
          occlusion += cubeOcclusion(sampleOrigin, shadowRay, cubeCenters[i], cubeHalfSizes[i]);
        }
      }
      shadowAccum *= (1.0 - occlusion / 9.0);
    }
    gl_FragColor.g = shadowAccum;
  } else if (torusKnotEnabled || meshEnabled) {
    // PCF (Percentage Closer Filtering) 3x3 shadow sampling for the custom mesh/Torus Knot
    vec2 shadowUV =
      0.75 *
        (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
      0.5;
    const float d = 4.0 / 1024.0;
    float occlusion = texture2D(objectShadowTex, shadowUV).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, 0.0)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(0.0, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(d, -d)).r;
    occlusion += texture2D(objectShadowTex, shadowUV + vec2(-d, -d)).r;
    gl_FragColor.g = 1.0 - 0.8 * occlusion / 9.0;
  } else {
    gl_FragColor.g = 1.0;
  }

  // 3. Attenuate caustics near the pool edges using shadow boundaries check
  vec2 t = intersectRoundedBox(newPos, -refractedLight, cornerRadius);
  gl_FragColor.r *=
    1.0 /
    (1.0 +
      exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
}
