precision highp float;

/**
 * ROUNDED POOL CAUSTICS VERTEX SHADER
 *
 * Computes caustic light patterns for pools with rounded corners.
 * Extends the standard caustics shader with ray-rounded-rectangle
 * intersection for accurate light projection onto curved walls.
 *
 * The caustics are computed by comparing where light rays land
 * on the pool floor/walls with flat water vs. wavy water.
 * Light focusing (convergence) creates bright caustic lines.
 */

// Optical constants for Snell's Law
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Light direction (toward sun)
uniform vec3 light;

// Wave simulation texture
uniform sampler2D water;

// Pool geometry
uniform float cornerRadius;
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

// Passed to fragment shader for area comparison
varying vec3 oldPos; // Where light hits with flat water
varying vec3 newPos; // Where light hits with wavy water
varying vec3 ray; // Refracted ray direction

/**
 * Solves 2D intersections of a ray with a rounded rectangle layout on the horizontal XZ plane.
 * Used to find coordinates where refracted light hits the pool perimeter walls.
 */
vec2 intersectRoundedRectangle2D(vec2 origin, vec2 ray, float R) {
  float tNear = 1e6;
  float tFar = -1e6;
  bool found = false;

  float r_sub_x = poolWidth - R;
  float r_sub_z = poolLength - R;
  float eps = 1.0e-3;

  // 1. Check straight wall line: x = +poolWidth (z in [-r_sub_z, r_sub_z])
  if (abs(ray.x) > 1.0e-7) {
    float t = (poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 2. Check straight wall line: x = -poolWidth (z in [-r_sub_z, r_sub_z])
  if (abs(ray.x) > 1.0e-7) {
    float t = (-poolWidth - origin.x) / ray.x;
    float z = origin.y + t * ray.y;
    if (z >= -r_sub_z - eps && z <= r_sub_z + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 3. Check straight wall line: z = +poolLength (x in [-r_sub_x, r_sub_x])
  if (abs(ray.y) > 1.0e-7) {
    float t = (poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }
  // 4. Check straight wall line: z = -poolLength (x in [-r_sub_x, r_sub_x])
  if (abs(ray.y) > 1.0e-7) {
    float t = (-poolLength - origin.y) / ray.y;
    float x = origin.x + t * ray.x;
    if (x >= -r_sub_x - eps && x <= r_sub_x + eps) {
      tNear = min(tNear, t);
      tFar = max(tFar, t);
      found = true;
    }
  }

  // 5. Check the 4 corner circle arcs using quadratic formula:
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

        // Validate intersection A falls in the correct corner quadrant
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

        // Validate intersection B falls in the correct corner quadrant
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
 * Calculates 3D intersection parameters of a ray with the rounded pool box boundaries.
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
 * Projects a ray from the surface down to the pool walls/floor boundary.
 */
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {
  // Find boundary intersection point
  vec2 tcube = intersectRoundedBox(origin, r, cornerRadius);
  origin += r * tcube.y;

  // Project to plane bottom
  float tplane = (-origin.y - poolHeight) / refractedLight.y;
  return origin + refractedLight * tplane;
}

void main() {
  // 1. Sample the water height displacement and normal gradients
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5;

  // 2. Reconstruct the 3D surface normal vector: Ny = sqrt(1.0 - (Nx^2 + Nz^2))
  vec2 slope = clamp(info.ba, vec2(-0.999), vec2(0.999));
  float slopeLengthSq = min(dot(slope, slope), 0.999);
  vec3 normal = normalize(vec3(slope.x, sqrt(max(0.001, 1.0 - slopeLengthSq)), slope.y));

  // 3. Compute refracted directional light rays
  // Sunlight entering completely flat water:
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  // Sunlight entering through the active curved water surface (based on normal):
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);

  // 4. Project both paths (flat vs active wave) onto the pool walls/floor
  oldPos = project(
    vec3(position.x * poolWidth, 0.0, position.y * poolLength),
    refractedLight,
    refractedLight
  );
  newPos = project(
    vec3(position.x * poolWidth, info.r, position.y * poolLength),
    ray,
    refractedLight
  );

  // 5. Project coordinates onto the horizontal caustic texture grid for focusing
  gl_Position.x = 0.75 * (newPos.x - newPos.y * refractedLight.x / refractedLight.y) / poolWidth;
  gl_Position.y = 0.75 * (newPos.z - newPos.y * refractedLight.z / refractedLight.y) / poolLength;
  gl_Position.z = 0.0;
  gl_Position.w = 1.0;
}
