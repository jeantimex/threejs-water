precision highp float;

/**
 * DUCK MODEL FRAGMENT SHADER
 *
 * Renders the textured rubber duck model with underwater effects.
 *
 * FEATURES:
 * 1. Albedo texture mapping (duck's painted surface)
 * 2. Diffuse lighting from refracted sunlight
 * 3. Caustic patterns when submerged
 * 4. Underwater color tinting (blue-green absorption)
 * 5. Multi-pass rendering support (refraction/reflection)
 *
 * Unlike the procedural objects (sphere, cube), the duck uses
 * an actual texture map for its base color.
 */

// Optical constants for Snell's Law
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Underwater color absorption tint
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Light direction (toward sun)
uniform vec3 light;

// Pool dimensions for coordinate normalization
uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

varying vec3 vMeshCenter;

// Simulation textures
uniform sampler2D water; // Wave heightmap (R = height)
uniform sampler2D causticTex; // Caustic light intensity map

// Render pass mode:
// 1 = Standard rendering - render all fragments
// 2 = Reflection pass - discard underwater fragments
uniform int texturePassMode;

varying vec3 vPosition; // World-space position
varying vec3 vNormal; // World-space normal
varying vec2 vUv; // Texture coordinates

#include "./DuckShading.glsl"

void main() {
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (texturePassMode == 2 && vPosition.y < info.r) discard;
  gl_FragColor = vec4(getDuckColor(vPosition, vNormal, vUv), 1.0);
}
