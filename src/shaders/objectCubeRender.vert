/**
 * CUBE OBJECT VERTEX SHADER
 *
 * Transforms a unit box mesh to the correct world position and size.
 * The cube is used as an interactive object that floats in the pool.
 *
 * Input mesh: BoxGeometry with vertices in [-0.5, 0.5] range
 * Output: Scaled and positioned cube in world space
 */

uniform vec3 cubeCenter;    // World-space center position
uniform vec3 cubeHalfSize;  // Half-extents (width/2, height/2, depth/2)

varying vec3 vPosition;     // World position for fragment shader
varying vec3 vNormal;       // Surface normal for lighting

void main() {
  // Transform unit box to world space:
  // Local coords [-0.5, 0.5] * 2 = [-1, 1] * halfSize = [-halfSize, halfSize]
  // Then offset by center
  vPosition = cubeCenter + position.xyz * cubeHalfSize * 2.0;

  // Pass through the vertex normal (already in object space, which matches world for axis-aligned box)
  vNormal = normal;

  // Standard MVP transformation
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
