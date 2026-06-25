/**
 * SPHERE OBJECT VERTEX SHADER
 *
 * Transforms a unit sphere mesh to the correct world position and size.
 * The sphere is used as an interactive object that floats in the pool
 * and creates water displacement waves.
 */

uniform vec3 sphereCenter; // World-space center position of the sphere
uniform float sphereRadius; // Radius of the sphere

varying vec3 vPosition; // World position passed to fragment shader

void main() {
  // Transform unit sphere (radius=1, center=origin) to world space:
  // worldPos = center + localPos * radius
  vPosition = sphereCenter + position.xyz * sphereRadius;

  // Standard MVP transformation
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
