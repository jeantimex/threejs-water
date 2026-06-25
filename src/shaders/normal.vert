varying vec2 coord;

void main() {
  // Map coordinates from [-1, 1] NDC space to [0, 1] texture UV coordinates
  coord = position.xy * 0.5 + 0.5;

  // Set screen projection position for screen-space quad rendering
  gl_Position = vec4(position.xyz, 1.0);
}
