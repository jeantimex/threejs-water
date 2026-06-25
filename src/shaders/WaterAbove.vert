/**
 * WATER SURFACE VERTEX SHADER (Above View)
 *
 * Transforms a flat grid mesh into a displaced water surface by sampling
 * the wave simulation heightmap. Each vertex is pushed up or down based
 * on the simulated wave height at that position.
 *
 * The mesh is defined in XY coordinates but rendered as a horizontal XZ plane
 * (Y becomes the vertical/height axis in world space).
 */

// Wave simulation texture: R channel contains height displacement
uniform sampler2D water;

// World position passed to fragment shader for lighting calculations
varying vec3 vPosition;

void main() {
  // Sample wave height at this vertex's position
  // Convert from mesh coords [-1,1] to texture UV [0,1]
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  // Swizzle XY mesh coordinates to XZ world coordinates
  // The mesh is defined flat in XY, but we render it horizontal in XZ
  vPosition = position.xzy;

  // Displace vertex vertically by the wave height (stored in R channel)
  vPosition.y += info.r;

  // Standard MVP transformation to clip space
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
