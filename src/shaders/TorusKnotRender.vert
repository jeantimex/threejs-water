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

varying vec3 vPosition; // World position for fragment shader
varying vec3 vNormal; // Surface normal for lighting
varying vec3 vTorusKnotCenter;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vTorusKnotCenter = centerWorld.xyz;

  vNormal = normal;

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
