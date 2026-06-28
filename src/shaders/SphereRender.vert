/**
 * SPHERE OBJECT VERTEX SHADER
 *
 * Transforms a unit sphere mesh to the correct world position and size.
 * The sphere is used as an interactive object that floats in the pool
 * and creates water displacement waves.
 */

varying vec3 vPosition;
varying vec3 vSphereCenter;
varying float vSphereRadius;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vSphereCenter = centerWorld.xyz;
  vSphereRadius = length(vec3(instanceMatrix[0][0], instanceMatrix[0][1], instanceMatrix[0][2]));

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
