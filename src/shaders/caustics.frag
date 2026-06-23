precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const float poolHeight = 1.0;

uniform int poolShape;
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
uniform bool meshEnabled;
uniform sampler2D objectShadowTex;

varying vec3 oldPos;
varying vec3 newPos;
varying vec3 ray;
varying float causticValid;

vec2 intersectCube(vec3 origin, vec3 r, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / r;
  vec3 tMax = (cubeMax - origin) / r;
  vec3 t1 = min(tMin, tMax);
  vec3 t2 = max(tMin, tMax);
  float tNear = max(max(t1.x, t1.y), t1.z);
  float tFar = min(min(t2.x, t2.y), t2.z);
  return vec2(tNear, tFar);
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float getPoolSDF(vec2 p) {
  float d1 = length(p - vec2(-0.35, 0.0)) - 0.75;
  float d2 = length(p - vec2(0.35, 0.0)) - 0.65;
  return smin(d1, d2, 0.15);
}

vec2 intersectMorphed(vec3 origin, vec3 r, float yMin, float yMax) {
  float tPlaneNear = -1.0e6;
  float tPlaneFar = 1.0e6;
  if (abs(r.y) > 1.0e-6) {
    float tPlane1 = (yMin - origin.y) / r.y;
    float tPlane2 = (yMax - origin.y) / r.y;
    tPlaneNear = min(tPlane1, tPlane2);
    tPlaneFar = max(tPlane1, tPlane2);
  } else {
    if (origin.y < yMin || origin.y > yMax) {
      return vec2(-1.0e6, -1.0e6);
    }
  }
  
  float t = 0.0;
  float d = 0.0;
  for (int i = 0; i < 30; i++) {
    vec2 p = origin.xz + t * r.xz;
    d = getPoolSDF(p);
    if (abs(d) < 0.0005) {
      break;
    }
    t += abs(d) / max(length(r.xz), 1.0e-6);
    if (t > 4.0) break;
  }
  
  float tNear = tPlaneNear;
  float tFar = min(t, tPlaneFar);
  return vec2(tNear, tFar);
}

vec2 intersectCylinder(vec3 origin, vec3 r, float radius, float yMin, float yMax) {
  float a = r.x * r.x + r.z * r.z;
  float b = 2.0 * (origin.x * r.x + origin.z * r.z);
  float c = origin.x * origin.x + origin.z * origin.z - radius * radius;
  
  float tNear = -1.0e6;
  float tFar = 1.0e6;
  
  if (a > 1.0e-6) {
    float discriminant = b * b - 4.0 * a * c;
    if (discriminant < 0.0) {
      return vec2(-1.0e6, -1.0e6);
    }
    float root = sqrt(discriminant);
    float t1 = (-b - root) / (2.0 * a);
    float t2 = (-b + root) / (2.0 * a);
    tNear = min(t1, t2);
    tFar = max(t1, t2);
  } else {
    if (origin.x * origin.x + origin.z * origin.z > radius * radius) {
      return vec2(-1.0e6, -1.0e6);
    }
  }
  
  float tPlaneNear = -1.0e6;
  float tPlaneFar = 1.0e6;
  if (abs(r.y) > 1.0e-6) {
    float tPlane1 = (yMin - origin.y) / r.y;
    float tPlane2 = (yMax - origin.y) / r.y;
    tPlaneNear = min(tPlane1, tPlane2);
    tPlaneFar = max(tPlane1, tPlane2);
  } else {
    if (origin.y < yMin || origin.y > yMax) {
      return vec2(-1.0e6, -1.0e6);
    }
  }
  
  tNear = max(tNear, tPlaneNear);
  tFar = min(tFar, tPlaneFar);
  
  return vec2(tNear, tFar);
}

float cubeOcclusion(vec3 origin, vec3 direction) {
  vec2 hit = intersectCube(
    origin,
    direction,
    cubeCenter - cubeHalfSize,
    cubeCenter + cubeHalfSize
  );
  return step(0.0, hit.y) * step(hit.x, hit.y);
}

float intersectSphere(vec3 origin, vec3 ray, vec3 center, float radius) {
  vec3 toSphere = origin - center;
  float a = dot(ray, ray);
  float b = 2.0 * dot(toSphere, ray);
  float c = dot(toSphere, toSphere) - radius * radius;
  float discriminant = b*b - 4.0*a*c;
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
  float discriminant = b*b - 4.0*a*c;
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
    float theta = (float(i) / float(segments)) * 6.283185307179586;
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

float torusKnotOcclusion(vec3 origin, vec3 direction) {
  float hit = intersectTorusKnot(origin, direction, torusKnotCenter);
  return hit < 1.0e5 ? 1.0 : 0.0;
}

void main() {
  if (causticValid < 0.5) {
    discard;
  }

  float oldArea = length(dFdx(oldPos)) * length(dFdy(oldPos));
  float newArea = length(dFdx(newPos)) * length(dFdy(newPos));
  gl_FragColor = vec4(oldArea / newArea * 0.2, 1.0, 0.0, 0.0);

  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  if (sphereEnabled) {
    vec3 dir = (sphereCenter - newPos) / sphereRadius;
    vec3 area = cross(dir, refractedLight);
    float shadow = dot(area, area);
    float dist = dot(dir, -refractedLight);
    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
    gl_FragColor.g = shadow;
  } else if (cubeEnabled) {
    vec3 shadowRay = -refractedLight;
    vec3 right = normalize(cross(shadowRay, vec3(0.0, 1.0, 0.0)));
    vec3 up = normalize(cross(right, shadowRay));
    float occlusion = 0.0;
    const float spread = 0.025;

    for (int x = -1; x <= 1; x++) {
      for (int y = -1; y <= 1; y++) {
        vec3 sampleOrigin = newPos
          + right * float(x) * spread
          + up * float(y) * spread;
        occlusion += cubeOcclusion(sampleOrigin, shadowRay);
      }
    }
    gl_FragColor.g = 1.0 - occlusion / 9.0;
  } else if (torusKnotEnabled || meshEnabled) {
    vec2 shadowUV = 0.75 * (newPos.xz - newPos.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
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

  vec2 t;
  if (poolShape == 2) {
    t = intersectMorphed(newPos, -refractedLight, -poolHeight, 2.0);
  } else if (poolShape == 1) {
    t = intersectCylinder(newPos, -refractedLight, 1.0, -poolHeight, 2.0);
  } else {
    t = intersectCube(newPos, -refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
  }
  gl_FragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
}
