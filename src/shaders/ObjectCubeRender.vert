/**
 * CUBE OBJECT VERTEX SHADER
 *
 * Transforms a unit box mesh to the correct world position and size.
 * The cube is used as an interactive object that floats in the pool.
 *
 * Input mesh: BoxGeometry with vertices in [-0.5, 0.5] range
 * Output: Scaled and positioned cube in world space
 */

varying vec3 vPosition; // World position for fragment shader
varying vec3 vNormal; // Surface normal for lighting
varying vec3 vCubeCenter;
varying vec3 vCubeHalfSize;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vCubeCenter = centerWorld.xyz;

  // Scaling in instanceMatrix is 2.0 * halfSize, so multiply by 0.5 to extract halfSize
  vCubeHalfSize = vec3(
    length(vec3(instanceMatrix[0][0], instanceMatrix[0][1], instanceMatrix[0][2])),
    length(vec3(instanceMatrix[1][0], instanceMatrix[1][1], instanceMatrix[1][2])),
    length(vec3(instanceMatrix[2][0], instanceMatrix[2][1], instanceMatrix[2][2]))
  ) * 0.5;

  vNormal = normal;

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
