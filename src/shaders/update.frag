precision highp float;

// Texture containing the simulation state:
// - Red channel (r): Water height displacement from rest level
// - Green channel (g): Vertical velocity of the water column
uniform sampler2D tInput;

// Texture coordinate step size corresponding to one pixel/grid cell: vec2(1.0 / width, 1.0 / height)
uniform vec2 delta;

varying vec2 coord;

void main() {
  // Read current pixel state (height and velocity)
  vec4 info = texture2D(tInput, coord);

  // Define offset vectors for 4-neighbor grid sampling
  vec2 dx = vec2(delta.x, 0.0);
  vec2 dy = vec2(0.0, delta.y);
  
  // Compute average height of the 4 nearest neighbors (North, South, East, West).
  // This acts as a finite-difference approximation of the discrete Laplacian operator:
  // Laplacian(H) ≈ (H_east + H_west + H_north + H_south - 4 * H_center)
  // Which represents the curvature of the surface.
  float average = (
    texture2D(tInput, coord - dx).r +
    texture2D(tInput, coord - dy).r +
    texture2D(tInput, coord + dx).r +
    texture2D(tInput, coord + dy).r
  ) * 0.25;

  // Integrate wave equation acceleration into velocity:
  // acceleration = c^2 * Laplacian(height)
  // Here, (average - info.r) represents the discrete spatial Laplacian.
  // We scale this acceleration and add it to the vertical velocity (info.g).
  info.g += (average - info.r) * 2.0;
  
  // Apply a decay factor (0.995) to model friction, viscosity, and energy dissipation.
  // This dampens high-frequency noise and keeps the simulation stable over time.
  info.g *= 0.995;
  
  // Euler integration: update the height displacement (info.r) using the updated velocity (info.g)
  info.r += info.g;

  gl_FragColor = info;
}
