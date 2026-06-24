const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const float poolHeight = 1.0;

uniform int poolShape;
uniform float roundedBoxRadius;
uniform vec3 light;
uniform sampler2D water;

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

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float getPoolSDF(vec2 p) {
  float d1 = length(p - vec2(-0.35, 0.0)) - 0.75;
  float d2 = length(p - vec2(0.35, 0.0)) - 0.65;
  return smin(d1, d2, 0.15);
}

float getRoundedBoxSDF(vec2 p) {
  float radius = clamp(roundedBoxRadius, 0.0, 1.0);
  vec2 q = abs(p) - vec2(1.0 - radius);
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
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

  float tBoxNear = -1.0e6;
  float tBoxFar = 1.0e6;
  if (abs(r.x) > 1.0e-6) {
    float t1 = (-1.2 - origin.x) / r.x;
    float t2 = (1.1 - origin.x) / r.x;
    tBoxNear = max(tBoxNear, min(t1, t2));
    tBoxFar = min(tBoxFar, max(t1, t2));
  } else if (origin.x < -1.2 || origin.x > 1.1) {
    return vec2(-1.0e6, -1.0e6);
  }
  if (abs(r.z) > 1.0e-6) {
    float t1 = (-0.85 - origin.z) / r.z;
    float t2 = (0.85 - origin.z) / r.z;
    tBoxNear = max(tBoxNear, min(t1, t2));
    tBoxFar = min(tBoxFar, max(t1, t2));
  } else if (origin.z < -0.85 || origin.z > 0.85) {
    return vec2(-1.0e6, -1.0e6);
  }

  float tNear = max(tPlaneNear, tBoxNear);
  float tFar = min(tPlaneFar, tBoxFar);
  if (tNear > tFar) {
    return vec2(-1.0e6, -1.0e6);
  }

  bool foundInside = false;
  float tInside = tNear;
  for (int i = 0; i <= 48; i++) {
    float tSample = mix(tNear, tFar, float(i) / 48.0);
    if (!foundInside && getPoolSDF(origin.xz + tSample * r.xz) <= 0.000001) {
      foundInside = true;
      tInside = tSample;
    }
  }
  if (!foundInside) {
    return vec2(-1.0e6, -1.0e6);
  }

  if (getPoolSDF(origin.xz + tNear * r.xz) > 0.000001) {
    float lo = tNear;
    float hi = tInside;
    for (int i = 0; i < 18; i++) {
      float mid = 0.5 * (lo + hi);
      if (getPoolSDF(origin.xz + mid * r.xz) <= 0.000001) {
        hi = mid;
      } else {
        lo = mid;
      }
    }
    tNear = hi;
  }

  if (getPoolSDF(origin.xz + tFar * r.xz) > 0.000001) {
    float lo = tInside;
    float hi = tFar;
    for (int i = 0; i < 18; i++) {
      float mid = 0.5 * (lo + hi);
      if (getPoolSDF(origin.xz + mid * r.xz) <= 0.000001) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    tFar = lo;
  }

  return vec2(tNear, tFar);
}

vec2 intersectRoundedBox(vec3 origin, vec3 r, float yMin, float yMax) {
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

  float tBoxNear = -1.0e6;
  float tBoxFar = 1.0e6;
  if (abs(r.x) > 1.0e-6) {
    float t1 = (-1.0 - origin.x) / r.x;
    float t2 = (1.0 - origin.x) / r.x;
    tBoxNear = max(tBoxNear, min(t1, t2));
    tBoxFar = min(tBoxFar, max(t1, t2));
  } else if (abs(origin.x) > 1.0) {
    return vec2(-1.0e6, -1.0e6);
  }
  if (abs(r.z) > 1.0e-6) {
    float t1 = (-1.0 - origin.z) / r.z;
    float t2 = (1.0 - origin.z) / r.z;
    tBoxNear = max(tBoxNear, min(t1, t2));
    tBoxFar = min(tBoxFar, max(t1, t2));
  } else if (abs(origin.z) > 1.0) {
    return vec2(-1.0e6, -1.0e6);
  }

  float tNear = max(tPlaneNear, tBoxNear);
  float tFar = min(tPlaneFar, tBoxFar);
  if (tNear > tFar) {
    return vec2(-1.0e6, -1.0e6);
  }

  bool foundInside = false;
  float tInside = tNear;
  for (int i = 0; i <= 48; i++) {
    float tSample = mix(tNear, tFar, float(i) / 48.0);
    if (!foundInside && getRoundedBoxSDF(origin.xz + tSample * r.xz) <= 0.000001) {
      foundInside = true;
      tInside = tSample;
    }
  }
  if (!foundInside) {
    return vec2(-1.0e6, -1.0e6);
  }

  if (getRoundedBoxSDF(origin.xz + tNear * r.xz) > 0.000001) {
    float lo = tNear;
    float hi = tInside;
    for (int i = 0; i < 18; i++) {
      float mid = 0.5 * (lo + hi);
      if (getRoundedBoxSDF(origin.xz + mid * r.xz) <= 0.000001) {
        hi = mid;
      } else {
        lo = mid;
      }
    }
    tNear = hi;
  }

  if (getRoundedBoxSDF(origin.xz + tFar * r.xz) > 0.000001) {
    float lo = tInside;
    float hi = tFar;
    for (int i = 0; i < 18; i++) {
      float mid = 0.5 * (lo + hi);
      if (getRoundedBoxSDF(origin.xz + mid * r.xz) <= 0.000001) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    tFar = lo;
  }

  return vec2(tNear, tFar);
}

vec2 intersectPool(vec3 origin, vec3 r) {
  if (poolShape == 3) {
    return intersectRoundedBox(origin, r, -poolHeight, 2.0);
  }
  if (poolShape == 2) {
    return intersectMorphed(origin, r, -poolHeight, 2.0);
  }
  if (poolShape == 1) {
    return intersectCylinder(origin, r, 1.0, -poolHeight, 2.0);
  }
  return intersectCube(origin, r, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
}

bool validIntersection(vec2 t) {
  return t.x <= t.y && t.y > -1.0e5 && t.y < 1.0e5;
}

vec4 project(vec3 origin, vec3 r, vec3 refractedLight) {
  vec2 t;
  t = intersectPool(origin, r);
  if (!validIntersection(t)) {
    return vec4(0.0, 0.0, 0.0, 0.0);
  }
  origin += r * t.y;
  float tplane = (-origin.y - 1.0) / refractedLight.y;
  return vec4(origin + refractedLight * tplane, 1.0);
}

void main() {
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5;
  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);

  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);
  vec4 oldProjection = project(position.xzy, refractedLight, refractedLight);
  vec4 newProjection = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);
  oldPos = oldProjection.xyz;
  newPos = newProjection.xyz;
  causticValid = oldProjection.w * newProjection.w;

  vec2 projectedPosition = causticValid > 0.5
    ? 0.75 * (newPos.xz + refractedLight.xz / refractedLight.y)
    : vec2(2.0);
  gl_Position = vec4(projectedPosition, 0.0, 1.0);
}
