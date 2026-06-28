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

// Duck's albedo/diffuse texture
uniform sampler2D modelTexture;

// Render pass mode:
// 1 = Standard rendering - render all fragments
// 2 = Reflection pass - discard underwater fragments
uniform int texturePassMode;

varying vec3 vPosition; // World-space position
varying vec3 vNormal; // World-space normal
varying vec2 vUv; // Texture coordinates

void main() {
  // Sample albedo color from the duck's texture coordinates
  vec3 baseColor = texture2D(modelTexture, vUv).rgb;

  vec3 n = normalize(vNormal);

  // Calculate the light vector after it enters the water (refracted through horizontal surface)
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  // Modulate ambient occlusion strength by light alignment:
  // Surfaces directly facing the light source should have reduced/no ambient shadow.
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  // Approximate ambient occlusion (shadowing) as the duck gets close to the pool walls/floor:
  // - X-walls:
  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(vPosition.x)) / 0.25, 3.0);
  // - Z-walls:
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(vPosition.z)) / 0.25, 3.0);
  // - Floor Y-wall:
  baseColor *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + 0.25) / 0.25, 3.0);

  // Basic diffuse reflection using the refracted light vector for submerged look consistency
  float diffuse = max(0.0, dot(-refractedLight, n)) * 0.6;

  // Retrieve local water surface displacement height at this vertical XZ column
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  // If rendering above-water reflection textures (mode == 2), discard pixels below the water height
  if (texturePassMode == 2 && vPosition.y < info.r) {
    discard;
  }

  // If the duck's vertex fragment is below the local water level, apply water effects
  if (vPosition.y < info.r) {
    // Project the caustic coordinates onto the moving water surface.
    // We trace back along the refracted light ray from vPosition.y to the water surface at y = 0.0.
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    // Multiply diffuse shading by the caustic focus intensity
    diffuse *= caustic.r * 4.0;
  }

  // Combine ambient and diffuse lighting components
  vec3 color = baseColor * (0.4 + diffuse);

  // Tint submerged fragments with the water absorption color
  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, 1.0);
}
