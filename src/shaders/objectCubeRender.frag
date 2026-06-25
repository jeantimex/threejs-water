precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

// Global directional light vector
uniform vec3 light;

// Pool boundaries used to map coordinates into texture space
uniform float poolWidth;
uniform float poolLength;

// Water simulation height texture
uniform sampler2D water;

// Precomputed caustics texture
uniform sampler2D causticTex;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  // Base albedo color of the cube
  vec3 color = vec3(0.5);
  
  // Calculate light direction refracted from air (index = 1.0) into water (index = 1.333)
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  
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
      0.75 * (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
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
