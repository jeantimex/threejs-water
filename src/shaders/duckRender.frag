precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Global light source directional vector
uniform vec3 light;

// Pool dimensions to map world space positions into texture coordinates
uniform float poolWidth;
uniform float poolLength;

// The heightmap and normal map simulation state texture
uniform sampler2D water;

// The generated caustic texture mapping light intensities focused by water waves
uniform sampler2D causticTex;

// The duck albedo texture
uniform sampler2D modelTexture;

// Defines the rendering pass state:
// 1 = Regular rendering or refraction pass
// 2 = Reflection pass where everything submerged below the water surface is clipped/discarded
uniform int texturePassMode;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  // Sample albedo color from the duck's texture coordinates
  vec3 baseColor = texture2D(modelTexture, vUv).rgb;
  
  vec3 n = normalize(vNormal);
  
  // Calculate the light vector after it enters the water (refracted through horizontal surface)
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  
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
      0.75 * (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
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
