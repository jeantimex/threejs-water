varying vec2 coord;

void main() {
  // Map coordinates from [-1, 1] NDC space to [0, 1] texture UV coordinates
  coord = position.xy * 0.5 + 0.5;

  // Set position for screen-aligned quad rendering
  gl_Position = vec4(position.xyz, 1.0);
}
