precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);
const float poolHeight = 1.0;
const float torusKnotShadowRadius = 0.13;

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
uniform sampler2D water;

uniform float cornerRadius;
uniform float poolWidth;
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
        if (i == 0) validA = (ptA.x >= r_sub_x - eps && ptA.y >= r_sub_z - eps);
        else if (i == 1) validA = (ptA.x <= -r_sub_x + eps && ptA.y >= r_sub_z - eps);
        else if (i == 2) validA = (ptA.x <= -r_sub_x + eps && ptA.y <= -r_sub_z + eps);
        else if (i == 3) validA = (ptA.x >= r_sub_x - eps && ptA.y <= -r_sub_z + eps);
        if (validA) {
          tNear = min(tNear, tA);
          tFar = max(tFar, tA);
          found = true;
        }
        
        // Check tB
        vec2 ptB = origin + tB * ray;
        bool validB = false;
        if (i == 0) validB = (ptB.x >= r_sub_x - eps && ptB.y >= r_sub_z - eps);
        else if (i == 1) validB = (ptB.x <= -r_sub_x + eps && ptB.y >= r_sub_z - eps);
        else if (i == 2) validB = (ptB.x <= -r_sub_x + eps && ptB.y <= -r_sub_z + eps);
        else if (i == 3) validB = (ptB.x >= r_sub_x - eps && ptB.y <= -r_sub_z + eps);
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
    float tYMin = (-1.0 - origin.y) / ray.y;
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
  
  if (point.y < -0.999) {
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
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
    scale += diffuse * caustic.r * 2.0 * caustic.g;
  } else {
    vec2 t = intersectRoundedBox(point, refractedLight, cornerRadius);
    diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
    scale += diffuse * 0.5;
  }
  return wallColor * scale;
}

void main() {
  gl_FragColor = vec4(getWallColor(vPosition), 1.0);
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}
