precision highp float;

/**
 * TORUS KNOT OBJECT FRAGMENT SHADER
 *
 * Renders the torus knot with underwater lighting effects.
 *
 * FEATURES:
 * 1. Diffuse lighting from refracted sunlight
 * 2. Caustic patterns when submerged
 * 3. Underwater color tinting (Beer's Law approximation)
 * 4. Support for multi-pass rendering (refraction/reflection)
 *
 * The reflection pass discards underwater fragments to prevent
 * them from appearing in above-water reflections.
 */

// Optical constants
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Light direction (pointing toward sun)
uniform vec3 light;

// Pool dimensions for UV coordinate mapping
uniform float poolWidth;
uniform float poolLength;

// Simulation textures
uniform sampler2D water; // Wave heightmap
uniform sampler2D causticTex; // Caustic intensity map

// Render pass mode:
// 1 = Standard rendering (refraction pass) - render everything
// 2 = Reflection pass - discard underwater fragments
uniform int texturePassMode;

varying vec3 vPosition; // World-space position
varying vec3 vNormal; // Surface normal

void main() {
  // Base albedo color of the Torus Knot
  vec3 color = vec3(0.5);

  // Calculate refracted light direction vector entering the water surface
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  // Calculate diffuse illumination using normal and refracted light vector
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  // Sample local water surface displacement height
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  // Clip submerged fragments if rendering above-water reflections (mode == 2)
  if (texturePassMode == 2 && vPosition.y < info.r) {
    discard;
  }

  // If Torus Knot fragment is submerged:
  if (vPosition.y < info.r) {
    // Project caustics coordinates by tracing back refracted light ray to water surface at y = 0.0
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    // Multiply diffuse shading by caustic focus intensity
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }

  color += diffuse;

  // Apply underwater blue-green color absorption multiplier
  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, 1.0);
}
