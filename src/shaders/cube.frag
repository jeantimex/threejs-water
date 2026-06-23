precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

uniform int poolShape;
uniform float roundedBoxRadius;
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
uniform sampler2D tiles;
uniform sampler2D causticTex;
uniform sampler2D water;

varying vec3 vPosition;

vec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax) {
  vec3 tMin = (cubeMin - origin) / ray;
  vec3 tMax = (cubeMax - origin) / ray;
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

  float t = 0.0;
  float d = 0.0;
  for (int i = 0; i < 30; i++) {
    vec2 p = origin.xz + t * r.xz;
    d = getRoundedBoxSDF(p);
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

vec3 getMorphedNormal(vec2 p) {
  vec2 diff1 = p - vec2(-0.35, 0.0);
  vec2 diff2 = p - vec2(0.35, 0.0);
  float len1 = length(diff1);
  float len2 = length(diff2);
  vec2 n1 = len1 > 1.0e-5 ? diff1 / len1 : vec2(1.0, 0.0);
  vec2 n2 = len2 > 1.0e-5 ? diff2 / len2 : vec2(1.0, 0.0);
  
  float d1 = len1 - 0.75;
  float d2 = len2 - 0.65;
  float k = 0.15;
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  vec2 n2d = mix(n2, n1, h);
  return vec3(-n2d.x, 0.0, -n2d.y); // inward normal
}

vec3 getRoundedBoxNormal(vec2 p) {
  float e = 0.001;
  vec2 grad = vec2(
    getRoundedBoxSDF(p + vec2(e, 0.0)) - getRoundedBoxSDF(p - vec2(e, 0.0)),
    getRoundedBoxSDF(p + vec2(0.0, e)) - getRoundedBoxSDF(p - vec2(0.0, e))
  );
  vec2 n = length(grad) > 1.0e-6 ? normalize(grad) : normalize(p);
  return vec3(-n.x, 0.0, -n.y);
}

vec3 getWallColor(vec3 point) {
  float scale = 0.5;
  vec3 wallColor;
  vec3 normal;
  if (poolShape == 3) {
    if (point.y < -0.999) {
      wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      float angle = atan(point.z, point.x);
      wallColor = texture2D(tiles, vec2(angle / 6.283185307179586 * 4.0, point.y * 0.5)).rgb;
      normal = getRoundedBoxNormal(point.xz);
    }
  } else if (poolShape == 2) {
    if (point.y < -0.999) {
      wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      float angle = atan(point.z, point.x);
      wallColor = texture2D(tiles, vec2(angle / 6.283185307179586 * 4.0, point.y * 0.5)).rgb;
      normal = getMorphedNormal(point.xz);
    }
  } else if (poolShape == 1) {
    if (point.y < -0.999) {
      wallColor = texture2D(tiles, point.xz * 0.5 + 0.5).rgb;
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      float angle = atan(point.z, point.x);
      wallColor = texture2D(tiles, vec2(angle / 6.283185307179586 * 4.0, point.y * 0.5)).rgb;
      normal = vec3(-point.x, 0.0, -point.z);
    }
  } else {
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
  }

  scale /= length(point);
  if (sphereEnabled) {
    scale *= 1.0 - 0.9 / pow(length(point - sphereCenter) / sphereRadius, 4.0);
  } else if (cubeEnabled) {
    float cubeDistance = length((point - cubeCenter) / cubeHalfSize);
    scale *= 1.0 - 0.9 / pow(max(cubeDistance, 0.001), 4.0);
  } else if (torusKnotEnabled) {
    float knotDistance = length(point - torusKnotCenter);
    scale *= 1.0 - 0.9 / pow(knotDistance / torusKnotShadowRadius, 4.0);
  } else if (meshEnabled) {
    float meshDistance = length(point - meshCenter);
    scale *= 1.0 - 0.9 / pow(meshDistance / meshBoundingRadius, 4.0);
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t;
    if (poolShape == 3) {
      t = intersectRoundedBox(point, refractedLight, -poolHeight, 2.0);
    } else if (poolShape == 2) {
      t = intersectMorphed(point, refractedLight, -poolHeight, 2.0);
    } else if (poolShape == 1) {
      t = intersectCylinder(point, refractedLight, 1.0, -poolHeight, 2.0);
    } else {
      t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
    }
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

void main() {
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);
  vec4 info = texture2D(water, vPosition.xz * 0.5 + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}
