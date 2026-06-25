/**
 * WATER SURFACE VERTEX SHADER (Below View)
 *
 * Identical to waterAbove.vert - displaces vertices based on wave simulation.
 * The difference is in the fragment shader, which handles the underwater
 * viewing case with inverted normals and different Fresnel behavior.
 *
 * When the camera is underwater, this mesh is rendered with backface culling
 * disabled, showing the underside of the water surface.
 */

// Wave simulation texture: R channel contains height displacement
uniform sampler2D water;

// World position passed to fragment shader
varying vec3 vPosition;

void main() {
  // Sample wave height at this vertex's UV position
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  // Convert XY mesh to XZ world plane
  vPosition = position.xzy;

  // Apply wave displacement
  vPosition.y += info.r;

  // Transform to clip space
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
