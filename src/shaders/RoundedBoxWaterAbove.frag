precision highp float;

/**
 * ROUNDED POOL WATER SURFACE SHADER (Above View)
 *
 * Renders the water surface for pools with rounded corners.
 * Extends the standard water surface shader with rounded pool geometry.
 *
 * FEATURES:
 * 1. Fresnel-based reflection/refraction blending
 * 2. Parallax displacement for wave alignment
 * 3. Ray tracing against rounded pool walls
 * 4. Caustic lighting on underwater surfaces
 * 5. Sky cubemap reflections with sun spot
 * 6. Pre-rendered object reflection/refraction textures
 *
 * The key difference from the standard water shader is that ray
 * intersection tests use the rounded rectangle geometry instead
 * of a simple axis-aligned box.
 */

// Optical constants for Snell's Law
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Water color tints for light absorption simulation
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25); // Looking down
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0); // Looking up
const float torusKnotShadowRadius = 0.13;

// Scene uniforms
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

// Textures
uniform sampler2D tiles; // Pool tile texture
uniform sampler2D causticTex; // Caustic light map
uniform sampler2D objectReflectionTex; // Pre-rendered object reflections
uniform sampler2D objectClippedReflectionTex; // Reflections clipped at water line
uniform sampler2D objectRefractionTex; // Pre-rendered object refractions
uniform sampler2D water; // Wave simulation heightmap
uniform samplerCube sky; // Environment cubemap

// Camera and projection
uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

// Pool geometry
uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

varying vec3 vPosition;

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
  // 3. Line z = L (x in [-r_sub_x, r_sub_x])
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 4. Line z = -L (x in [-r_sub_x, r_sub_x])
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  // 4 corners
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

        // Check tA
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

        // Check tB
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

void getRoundedBoxNormalAndUV(vec3 point, float R, out vec3 normal, out vec2 uv) {
  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;

  if (point.y < -poolHeight + 0.001) {
    normal = vec3(0.0, 1.0, 0.0);
    uv = point.xz * 0.5 + 0.5;
    return;
  }

  vec2 absP = abs(point.xz);
  if (absP.x > r_sub_x && absP.y > r_sub_z && R > 0.0) {
    vec2 center = sign(point.xz) * vec2(r_sub_x, r_sub_z);
    vec2 d = point.xz - center;
    normal = vec3(-normalize(d).x, 0.0, -normalize(d).y);

    float s = 0.0;
    if (point.x >= r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = point.z + r_sub_z;
    } else if (point.x >= r_sub_x && point.z > r_sub_z) {
      vec2 cd = point.xz - vec2(r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * atan(cd.y, cd.x);
    } else if (point.z >= r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 2.0 * r_sub_z + R * 1.570796326 + (r_sub_x - point.x);
    } else if (point.z >= r_sub_z && point.x < -r_sub_x) {
      vec2 cd = point.xz - vec2(-r_sub_x, r_sub_z);
      s = 2.0 * r_sub_z + R * 1.570796326 + 2.0 * r_sub_x + R * (atan(cd.y, cd.x) - 1.570796326);
    } else if (point.x <= -r_sub_x && point.z >= -r_sub_z && point.z <= r_sub_z) {
      s = 2.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + (r_sub_z - point.z);
    } else if (point.x <= -r_sub_x && point.z < -r_sub_z) {
      vec2 cd = point.xz - vec2(-r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 3.14159265 + R * (atan(cd.y, cd.x) + 3.14159265);
    } else if (point.z <= -r_sub_z && point.x >= -r_sub_x && point.x <= r_sub_x) {
      s = 4.0 * r_sub_z + 2.0 * r_sub_x + R * 4.71238898 + (point.x + r_sub_x);
    } else {
      vec2 cd = point.xz - vec2(r_sub_x, -r_sub_z);
      s = 4.0 * r_sub_z + 4.0 * r_sub_x + R * 4.71238898 + R * (atan(cd.y, cd.x) + 1.570796326);
    }
    uv = vec2(point.y, s) * 0.5 + vec2(1.0, 0.5);
  } else {
    vec2 normP = absP / vec2(poolWidth, poolLength);
    if (normP.x > normP.y) {
      normal = vec3(-sign(point.x), 0.0, 0.0);
      uv = point.yz * 0.5 + vec2(1.0, 0.5);
    } else {
      normal = vec3(0.0, 0.0, -sign(point.z));
      uv = point.yx * 0.5 + vec2(1.0, 0.5);
    }
  }
}

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

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

vec3 getTorusKnotNormal(vec3 p, vec3 center) {
  const float eps = 0.001;
  vec3 n = vec3(
    sdTorusKnot(p + vec3(eps, 0.0, 0.0), center) - sdTorusKnot(p - vec3(eps, 0.0, 0.0), center),
    sdTorusKnot(p + vec3(0.0, eps, 0.0), center) - sdTorusKnot(p - vec3(0.0, eps, 0.0), center),
    sdTorusKnot(p + vec3(0.0, 0.0, eps), center) - sdTorusKnot(p - vec3(0.0, 0.0, eps), center)
  );
  return normalize(n);
}

vec3 getSphereColor(vec3 point) {
  vec3 color = vec3(0.5);
  color *= 1.0 - 0.9 / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  color *= 1.0 - 0.9 / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  color *= 1.0 - 0.9 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse *= caustic.r * 4.0;
  }
  color += diffuse;
  return color;
}

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
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  vec2 uv;
  getRoundedBoxNormalAndUV(point, cornerRadius, normal, uv);
  wallColor = texture2D(tiles, uv).rgb;

  scale /= length(point);
  if (sphereEnabled) {
    scale *= 1.0 - 0.9 / pow(max(length(point - sphereCenter) / sphereRadius, 1.0), 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.9 / pow(max(cubeDistance, 1.0), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.9 / pow(max(knotDistance / torusKnotShadowRadius, 1.0), 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.9 / pow(max(meshDistance / meshShadowRadius, 1.0), 4.0);
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);
    diffuse *=
      1.0 /
      (1.0 +
        exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds =
    step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0) * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(objectRefractionTex, viewProjectionMatrix, origin + ray * hit);
}

vec4 sampleObjectReflection(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectReflectionTex,
    reflectionViewProjectionMatrix,
    origin + ray * hit
  );
}

// Computes the color of a ray cast into the scene from the water surface.
// This function traces intersections analytically for spheres, boxes, and torus knots,
// and falls back to rounded box pool wall intersections or skybox sampling.
vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;

  // 1. Ray-Object Intersections
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
  float torusKnotDistance =
    torusKnotEnabled && ray.y > 0.0
      ? intersectTorusKnot(origin, ray, torusKnotCenter)
      : 1.0e6;

  // Find the closest intersected object
  float objectDistance = min(min(sphereDistance, cubeDistance), torusKnotDistance);
  if (objectDistance < 1.0e6) {
    vec3 hit = origin + ray * objectDistance;
    if (objectDistance == sphereDistance) {
      color = getSphereColor(hit);
    } else if (objectDistance == cubeDistance) {
      color = getCubeColor(hit);
    } else {
      color = getTorusKnotColor(hit);
    }
  } else // 2. Ray-Pool Wall Intersections (when pointing downwards)
  if (ray.y < 0.0) {
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);
    color = getWallColor(origin + ray * t.y);
  } else // 3. Ray pointing upwards (either hits pool wall trim above water or skybox)
  {
    vec2 t = intersectRoundedBox(origin, ray, cornerRadius);
    vec3 hit = origin + ray * t.y;
    // Lower part of the walls above the water has tile textures
    if (hit.y < 2.0 / 12.0) {
      color = getWallColor(hit);
    } else // Upper part gets the sky cubemap and a sun specular glow
    {
      color = textureCube(sky, ray).rgb;
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0); // Specular highlight
    }
  }

  // Apply attenuation/color absorption of water for underwater rays
  if (ray.y < 0.0) color *= waterColor;
  return color;
}

void main() {
  // 1. Boundary clipping: Discard fragments outside the rounded box corners
  vec2 absP = abs(vPosition.xz);
  float r_sub_x = poolWidth - cornerRadius;
  float r_sub_z = poolLength - cornerRadius;
  if (absP.x > r_sub_x && absP.y > r_sub_z) {
    if (length(absP - vec2(r_sub_x, r_sub_z)) > cornerRadius) {
      discard;
    }
  }

  // 2. Texture space coordinate scaling (mapping [-poolWidth, poolWidth] to [0, 1])
  vec2 coord = vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5;
  vec4 info = texture2D(water, coord);

  // 3. Advection refinement loop to compute a smooth water normal displacement
  for (int i = 0; i < 5; i++) {
    coord += info.ba * 0.005;
    info = texture2D(water, coord);
  }

  // Reconstruct surface normal from heights/derivatives (normal.y = vertical component)
  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
  vec3 incomingRay = normalize(vPosition - eye);

  // 4. Optical reflection and refraction vector computations using standard laws of optics
  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);

  // Fresnel approximation: determines how reflective the surface is based on viewing angle
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  // Trace the paths of reflected and refracted light rays
  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  // 5. Model projection blending: Blend in rasterized reflection/refraction textures for complex models (e.g. Duck)
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
    vec4 reflectedObject = sampleProjectedTexture(
      objectClippedReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  }

  // Final composite color is a mix of refraction and reflection based on the Fresnel coefficient
  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}
