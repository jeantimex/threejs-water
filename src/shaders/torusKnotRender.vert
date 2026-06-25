/**
 * TORUS KNOT OBJECT VERTEX SHADER
 *
 * Transforms the TorusKnotGeometry mesh to world space.
 * The torus knot is a complex mathematical curve that winds
 * around a torus surface (p,q = 2,3 creates a trefoil knot).
 *
 * Unlike sphere/cube which are procedurally positioned,
 * the torus knot uses the model matrix for transformation.
 */

varying vec3 vPosition;  // World position for fragment shader
varying vec3 vNormal;    // Surface normal for lighting

void main() {
  // Transform vertex to world space using model matrix
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  // Pass through object-space normal (will be transformed in frag if needed)
  vNormal = normal;

  // Standard MVP transformation to clip space
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
