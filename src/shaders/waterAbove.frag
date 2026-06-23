precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);
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
uniform sampler2D objectReflectionTex;
uniform sampler2D objectClippedReflectionTex;
uniform sampler2D objectRefractionTex;
uniform sampler2D water;
uniform samplerCube sky;
uniform vec3 eye;
uniform mat4 viewProjectionMatrix;
uniform mat4 reflectionViewProjectionMatrix;

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

vec2 intersectPool(vec3 origin, vec3 ray) {
  if (poolShape == 3) {
    return intersectRoundedBox(origin, ray, -poolHeight, 2.0);
  }
  if (poolShape == 2) {
    return intersectMorphed(origin, ray, -poolHeight, 2.0);
  }
  if (poolShape == 1) {
    return intersectCylinder(origin, ray, 1.0, -poolHeight, 2.0);
  }
  return intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
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
  color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);

  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
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
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
}

vec3 getTorusKnotColor(vec3 point) {
  vec3 color = vec3(0.5);
  vec3 normal = getTorusKnotNormal(point, torusKnotCenter);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, normal)) * 0.5;
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }
  return color + diffuse;
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
  }

  vec3 refractedLight = -refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(refractedLight, normal));
  vec4 info = texture2D(water, point.xz * 0.5 + 0.5);
  if (point.y < info.r) {
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t;
    t = intersectPool(point, refractedLight);
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

vec4 sampleProjectedTexture(sampler2D tex, mat4 matrix, vec3 point) {
  vec4 clip = matrix * vec4(point, 1.0);
  vec3 ndc = clip.xyz / max(clip.w, 1.0e-6);
  vec2 uv = ndc.xy * 0.5 + 0.5;
  float inBounds = step(0.0, uv.x)
    * step(0.0, uv.y)
    * step(uv.x, 1.0)
    * step(uv.y, 1.0)
    * step(0.0, clip.w);
  return texture2D(tex, clamp(uv, 0.0, 1.0)) * inBounds;
}

vec4 sampleObjectRefraction(vec3 origin, vec3 ray, vec3 center, float radius) {
  float hit = intersectSphereBounds(origin, ray, center, radius);
  if (hit >= 1.0e6) return vec4(0.0);
  return sampleProjectedTexture(
    objectRefractionTex,
    viewProjectionMatrix,
    origin + ray * hit
  );
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

vec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor) {
  vec3 color;
  float sphereDistance = sphereEnabled ? intersectSphere(origin, ray, sphereCenter, sphereRadius) : 1.0e6;
  vec2 cubeIntersection = intersectCube(origin, ray, cubeCenter - cubeHalfSize, cubeCenter + cubeHalfSize);
  bool cubeHit = cubeEnabled && cubeIntersection.x <= cubeIntersection.y && cubeIntersection.y > 0.0;
  float cubeDistance = cubeHit
    ? (cubeIntersection.x > 0.0 ? cubeIntersection.x : (cubeIntersection.y > 0.0 ? cubeIntersection.y : 1.0e6))
    : 1.0e6;
  float torusKnotDistance = (torusKnotEnabled && ray.y > 0.0) ? intersectTorusKnot(origin, ray, torusKnotCenter) : 1.0e6;
  
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
  } else if (ray.y < 0.0) {
    vec2 t;
    t = intersectPool(origin, ray);
    color = getWallColor(origin + ray * t.y);
  } else {
    vec2 t;
    t = intersectPool(origin, ray);
    vec3 hit = origin + ray * t.y;
    if (hit.y < 2.0 / 12.0) {
      color = getWallColor(hit);
    } else {
      color = textureCube(sky, ray).rgb;
      color += vec3(pow(max(0.0, dot(light, ray)), 5000.0)) * vec3(10.0, 8.0, 6.0);
    }
  }
  if (ray.y < 0.0) color *= waterColor;
  return color;
}

void main() {
  if (poolShape == 3 && getRoundedBoxSDF(vPosition.xz) > -0.004) {
    discard;
  } else if (poolShape == 2 && getPoolSDF(vPosition.xz) > -0.004) {
    discard;
  } else if (poolShape == 1 && dot(vPosition.xz, vPosition.xz) > 0.996) {
    discard;
  } else if (poolShape == 0 && max(abs(vPosition.x), abs(vPosition.z)) > 0.996) {
    discard;
  }
  vec2 coord = vPosition.xz * 0.5 + 0.5;
  vec4 info = texture2D(water, coord);

  for (int i = 0; i < 5; i++) {
    coord += info.ba * 0.005;
    info = texture2D(water, coord);
  }

  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);
  vec3 incomingRay = normalize(vPosition - eye);

  vec3 reflectedRay = reflect(incomingRay, normal);
  vec3 refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
  float fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

  vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);
  vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);

  if (torusKnotEnabled) {
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, torusKnotCenter, 0.31);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    vec4 reflectedObject = sampleObjectReflection(vPosition, reflectedRay, torusKnotCenter, 0.31);
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  } else if (meshEnabled) {
    vec4 refractedObject = sampleObjectRefraction(vPosition, refractedRay, meshCenter, meshBoundingRadius);
    refractedColor = mix(refractedColor, refractedObject.rgb, refractedObject.a);
    vec4 reflectedObject = sampleProjectedTexture(
      objectClippedReflectionTex,
      reflectionViewProjectionMatrix,
      vPosition
    );
    reflectedColor = mix(reflectedColor, reflectedObject.rgb, reflectedObject.a);
  }

  gl_FragColor = vec4(mix(refractedColor, reflectedColor, fresnel), 1.0);
}
