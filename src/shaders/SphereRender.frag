precision highp float;

/**
 * SPHERE OBJECT FRAGMENT SHADER
 *
 * Renders the interactive sphere object floating in the pool.
 *
 * LIGHTING MODEL:
 * 1. Base diffuse color (gray)
 * 2. Proximity-based ambient occlusion (darkens near walls/floor)
 * 3. Diffuse lighting from refracted sunlight
 * 4. Caustic patterns when submerged
 * 5. Underwater color tinting
 */

// Optical constants for Snell's Law
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Blue-green tint for underwater light absorption
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Light direction (normalized, pointing toward sun)
uniform vec3 light;

// Varyings passed from vertex shader
varying vec3 vSphereCenter;
varying float vSphereRadius;

// Pool dimensions for coordinate scaling and AO calculations
uniform float poolWidth;
uniform float poolHeight;
uniform float poolLength;

// Simulation textures
uniform sampler2D water; // Wave heightmap (R = height)
uniform sampler2D causticTex; // Caustic light intensity map

varying vec3 vPosition; // World-space fragment position

/**
 * Calculates shading and illumination for the sphere obstacle.
 * Models synthetic ambient occlusion based on proximity to the pool walls and floor.
 */
vec3 getSphereColor(vec3 point) {
  // Base sphere albedo color
  vec3 color = vec3(0.5);

  // Surface normal of the sphere at this point
  vec3 sphereNormal = (point - vSphereCenter) / vSphereRadius;

  // Refracted light direction vector as it passes from air into water
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  vec3 targetRefracted = refractedLight;

  // Modulate ambient occlusion strength by light alignment:
  // Surfaces directly facing the light source should have reduced/no ambient shadow.
  float litFactor = max(0.0, dot(sphereNormal, -targetRefracted));
  float aoStrength = 0.6 * (1.0 - litFactor);

  // Approximate ambient occlusion (shadowing) as the sphere gets close to the pool walls:
  // - X-walls:
  color *= 1.0 - aoStrength / pow((poolWidth + vSphereRadius - abs(point.x)) / vSphereRadius, 3.0);
  // - Z-walls:
  color *= 1.0 - aoStrength / pow((poolLength + vSphereRadius - abs(point.z)) / vSphereRadius, 3.0);
  // - Floor Y-wall (using poolHeight to avoid NaN/negative base bugs):
  color *= 1.0 - aoStrength / pow((point.y + poolHeight + vSphereRadius) / vSphereRadius, 3.0);

  // Calculate basic diffuse reflection using the refracted light direction
  float diffuse = max(0.0, dot(-targetRefracted, sphereNormal)) * 0.5;

  // Sample local water displacement height
  vec4 info = texture2D(water, point.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  // If the sphere fragment is submerged, project caustics from the water surface
  if (point.y < info.r) {
    // Ray-project along the refracted light direction back to the water surface at y = 0.0
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (point.xz - point.y * targetRefracted.xz / targetRefracted.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
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
