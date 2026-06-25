/**
 * FULLSCREEN QUAD VERTEX SHADER
 *
 * Used for GPU-based simulation passes (water displacement, wave propagation).
 * Renders a simple quad covering the entire screen/render target.
 * The fragment shader then processes each pixel of the simulation texture.
 */

varying vec2 coord; // Texture coordinates passed to fragment shader

void main() {
  // Convert vertex position from NDC [-1,1] to UV [0,1]
  // This maps the quad corners to texture coordinate corners
  coord = position.xy * 0.5 + 0.5;

  // Output clip-space position (z=0, w=1 for 2D rendering)
  gl_Position = vec4(position.xyz, 1.0);
}
