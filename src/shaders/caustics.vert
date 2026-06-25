// Constants representing the Index of Refraction (IOR) of air and water
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const float poolHeight = 1.0;

uniform vec3 light;           // The direction of the incoming sun/light ray
uniform sampler2D water;      // The current water heightmap texture containing heights and normal derivatives

varying vec3 oldPos;          // Coordinates on the pool walls/floor under flat, unrefracted water
varying vec3 newPos;          // Coordinates on the pool walls/floor under distorted, refracted water
varying vec3 ray;             // The local refracted light ray direction

/**
 * Computes ray intersection with a bounding cube (representing the pool bounds)
 * using the Kay-Kajiya slab method.
 * Returns vec2(tNear, tFar) representing entry and exit parameters.
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
 * Projects a point from the water surface down to the pool walls or floor
 * along a specified ray direction.
 */
vec3 project(vec3 origin, vec3 r, vec3 refractedLight) {
  // 1. Intersect the ray with the pool bounding box [-1, -poolHeight, -1] to [1, 2, 1]
  vec2 tcube = intersectCube(origin, r, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));
  // 2. Extrapolate position to the boundary exit point
  origin += r * tcube.y;
  // 3. Project to plane bottom
  float tplane = (-origin.y - 1.0) / refractedLight.y;
  return origin + refractedLight * tplane;
}

void main() {
  // 1. Sample the water height texture at the current grid vertex
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);
  info.ba *= 0.5; // Scale height derivatives
  
  // 2. Reconstruct the normal of the water surface at this grid point
  vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);

  // 3. Compute the unrefracted refracted ray (sunlight entering flat water)
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  // 4. Compute the distorted refracted ray (refracted by the wave's normal slope)
  ray = refract(-light, normal, IOR_AIR / IOR_WATER);
  
  // 5. Project flat position vs wave position down onto the pool boundary
  oldPos = project(position.xzy, refractedLight, refractedLight);
  newPos = project(position.xzy + vec3(0.0, info.r, 0.0), ray, refractedLight);

  // 6. Project the final wave location into the caustics texture grid
  // Using the scaling factor of 0.75 matching the caustics alignment
  gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);
}
