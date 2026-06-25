/**
 * DUCK MODEL VERTEX SHADER
 *
 * Transforms the loaded duck GLTF mesh to world space.
 * The duck is a custom mesh with its own texture, unlike
 * the procedural sphere/cube/torus objects.
 *
 * This shader also passes UV coordinates for texture mapping.
 */

varying vec3 vPosition;  // World position for fragment shader
varying vec3 vNormal;    // World-space normal for lighting
varying vec2 vUv;        // Texture coordinates for albedo map

void main() {
  // Transform vertex position to world space
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  // Transform normal using the normal matrix (handles non-uniform scaling)
  // normalMatrix = transpose(inverse(modelViewMatrix))
  vNormal = normalMatrix * normal;

  // Pass through texture coordinates unchanged
  vUv = uv;

  // Standard MVP transformation
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
