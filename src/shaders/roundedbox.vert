/**
 * ROUNDED POOL BOX VERTEX SHADER
 *
 * Simple pass-through shader for the rounded pool geometry.
 * The complex rounded corner calculations are done in the fragment shader
 * using ray-tracing against the implicit rounded rectangle shape.
 */

varying vec3 vPosition; // Position for fragment shader ray calculations

void main() {
  // Pass position directly - fragment shader handles rounded corner math
  vPosition = position.xyz;

  // Standard MVP transformation
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
