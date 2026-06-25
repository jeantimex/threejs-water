precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Global light source directional vector
uniform vec3 light;

// Pool boundaries used to map coordinates into texture space
uniform float poolWidth;
uniform float poolLength;

// Water simulation height texture
uniform sampler2D water;

// Precomputed caustics texture
uniform sampler2D causticTex;

// Target render pass mode:
// 1 = Normal rendering / refraction
// 2 = Reflection pass (submerged fragments clipped via discard)
uniform int texturePassMode;

varying vec3 vPosition;
varying vec3 vNormal;

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
      0.75 * (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
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
