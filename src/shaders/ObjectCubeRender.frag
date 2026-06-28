precision highp float;

/**
 * CUBE OBJECT FRAGMENT SHADER
 *
 * Renders the interactive cube/box object floating in the pool.
 *
 * LIGHTING MODEL:
 * 1. Base diffuse color (gray)
 * 2. Diffuse lighting from refracted sunlight using face normals
 * 3. Caustic patterns when submerged (with ambient boost)
 * 4. Underwater color tinting
 */

// Optical constants for Snell's Law refraction
const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;

// Blue-green tint simulating underwater light absorption
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Light direction (normalized, pointing toward sun)
uniform vec3 light;

// Pool dimensions for coordinate normalization
uniform float poolWidth;
uniform float poolLength;
uniform float poolHeight;

// Cube dimensions
varying vec3 vCubeCenter;
varying vec3 vCubeHalfSize;

// Simulation textures
uniform sampler2D water; // Wave heightmap (R = height)
uniform sampler2D causticTex; // Caustic light intensity map

varying vec3 vPosition; // World-space fragment position
varying vec3 vNormal; // Face normal for diffuse lighting

void main() {
  // Base albedo color of the cube
  vec3 color = vec3(0.5);

  // Calculate light direction refracted from air (index = 1.0) into water (index = 1.333)
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  // Modulate ambient occlusion strength by light alignment:
  // Surfaces directly facing the light source should have reduced/no ambient shadow.
  float litFactor = max(0.0, dot(normalize(vNormal), -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  // Approximate ambient occlusion (shadowing) as the cube gets close to the pool walls/floor:
  // - X-walls:
  color *= 1.0 - aoStrength / pow((poolWidth + vCubeHalfSize.x - abs(vPosition.x)) / vCubeHalfSize.x, 3.0);
  // - Z-walls:
  color *= 1.0 - aoStrength / pow((poolLength + vCubeHalfSize.z - abs(vPosition.z)) / vCubeHalfSize.z, 3.0);
  // - Floor Y-wall:
  color *= 1.0 - aoStrength / pow((vPosition.y + poolHeight + vCubeHalfSize.y) / vCubeHalfSize.y, 3.0);

  // Compute standard diffuse shading relative to the refracted light direction
  float diffuse = max(0.0, dot(-refractedLight, normalize(vNormal))) * 0.5;

  // Retrieve the local height displacement of the water surface at this XZ column position
  vec4 info = texture2D(water, vPosition.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);

  // If this part of the cube is submerged underwater:
  if (vPosition.y < info.r) {
    // Raytrace along the refracted light vector from the fragment Y position back up to the surface at Y=0.0
    // and map it to UV texture space to sample caustic light intensity.
    vec4 caustic = texture2D(
      causticTex,
      0.75 *
        (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) +
        0.5
    );
    // Amplify diffuse light by caustics focus intensity, adding an ambient offset (0.06)
    diffuse = (diffuse + 0.06) * caustic.r * 4.0;
  }

  color += diffuse;

  // Apply blue-green tinting to the final color if the fragment is submerged
  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, 1.0);
}
