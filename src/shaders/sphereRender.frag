precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Global directional light vector
uniform vec3 light;

// Sphere properties
uniform vec3 sphereCenter;
uniform float sphereRadius;

// Pool boundaries (width, height, length) for bounds-clamping and ambient occlusion mapping
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

// Water simulation height texture
uniform sampler2D water;

// Precomputed caustics texture
uniform sampler2D causticTex;

varying vec3 vPosition;

/**
 * Calculates shading and illumination for the sphere obstacle.
 * Models synthetic ambient occlusion based on proximity to the pool walls and floor.
 */
vec3 getSphereColor(vec3 point) {
  // Base sphere albedo color
  vec3 color = vec3(0.5);
  
  // Approximate ambient occlusion (shadowing) as the sphere gets close to the pool walls:
  // - X-walls:
  color *= 1.0 - 0.9 / pow((poolWidth + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
  // - Z-walls:
  color *= 1.0 - 0.9 / pow((poolLength + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
  // - Floor Y-wall (using poolHeight to avoid NaN/negative base bugs):
  color *= 1.0 - 0.9 / pow((point.y + poolHeight + sphereRadius) / sphereRadius, 3.0);

  // Surface normal of the sphere at this point
  vec3 sphereNormal = (point - sphereCenter) / sphereRadius;
  
  // Refracted light direction vector as it passes from air into water
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec3 targetRefracted = refractedLight;
  
  // Calculate basic diffuse reflection using the refracted light direction
  float diffuse = max(0.0, dot(-targetRefracted, sphereNormal)) * 0.5;
  
  // Sample local water displacement height
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  
  // If the sphere fragment is submerged, project caustics from the water surface
  if (point.y < info.r) {
    // Ray-project along the refracted light direction back to the water surface at y = 0.0
    vec4 caustic = texture2D(causticTex, 0.75 * (point.xz - point.y * targetRefracted.xz / targetRefracted.y) * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
    // Multiply diffuse shading by caustic light focus intensity
    diffuse *= caustic.r * 4.0;
  }
  
  color += diffuse;
  return color;
}

void main() {
  // Compute core shading for the sphere obstacle
  gl_FragColor = vec4(getSphereColor(vPosition), 1.0);
  
  // Tint sphere color if submerged underwater
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (vPosition.y < info.r) {
    gl_FragColor.rgb *= underwaterColor * 1.2;
  }
}
