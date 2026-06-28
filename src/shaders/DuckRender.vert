/**
 * DUCK MODEL VERTEX SHADER
 *
 * Transforms the loaded duck GLTF mesh to world space.
 * The duck is a custom mesh with its own texture, unlike
 * the procedural sphere/cube/torus objects.
 *
 * This shader also passes UV coordinates for texture mapping.
 */

varying vec3 vPosition; // World position for fragment shader
varying vec3 vNormal; // World-space normal for lighting
varying vec2 vUv; // Texture coordinates for albedo map
varying vec3 vMeshCenter;

void main() {
  vec4 centerWorld = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vMeshCenter = centerWorld.xyz;

  vNormal = normalize((instanceMatrix * vec4(normal, 0.0)).xyz);
  vUv = uv;

  vec4 worldPos = instanceMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
