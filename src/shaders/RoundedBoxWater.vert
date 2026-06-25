/**
 * ROUNDED POOL WATER SURFACE VERTEX SHADER
 *
 * Similar to the standard water surface shader, but scales the mesh
 * to match non-uniform pool dimensions (width != length).
 *
 * The water simulation always runs on a unit square [-1,1] grid,
 * so we scale the output positions to match the actual pool shape.
 */

// Wave simulation texture (R = height)
uniform sampler2D water;

// Pool dimensions for coordinate scaling
uniform float poolWidth; // Half-width (X scale)
uniform float poolLength; // Half-length (Z scale)

varying vec3 vPosition; // World position for fragment shader

void main() {
  // Sample wave height at this vertex's UV position
  vec4 info = texture2D(water, position.xy * 0.5 + 0.5);

  // Convert XY mesh to XZ world coordinates
  vPosition = position.xzy;

  // Scale to actual pool dimensions
  // The simulation grid is normalized [-1,1], scale to [-width,width] x [-length,length]
  vPosition.x *= poolWidth;
  vPosition.z *= poolLength;

  // Apply wave height displacement
  vPosition.y += info.r;

  // Standard MVP transformation
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
