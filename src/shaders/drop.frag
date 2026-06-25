precision highp float;

const float PI = 3.141592653589793;

// The input simulation state texture (height in R, velocity in G)
uniform sampler2D tInput;

// Center of the drop in normalized device coordinates (range [-1, 1])
uniform vec2 center;

// Radius of the drop in texture coordinate space
uniform float radius;

// Displacement strength (height offset positive or negative) of the drop
uniform float strength;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  // 1. Transform the NDC drop center from [-1, 1] to [0, 1] UV space.
  // 2. Compute the distance from the current pixel (coord) to the drop center.
  // 3. Normalize by the radius and clamp between 0.0 and 1.0 (with 1.0 at the center).
  float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);
  
  // Apply a smooth cosine profile: f(x) = 0.5 - 0.5 * cos(x * PI)
  // This produces a bell-like curve that drops smoothly to 0.0 at the radius boundary,
  // preventing sharp seams or high-frequency ripples at the edges of the splash.
  drop = 0.5 - cos(drop * PI) * 0.5;
  
  // Accumulate the displacement height to the water height channel
  info.r += drop * strength;

  gl_FragColor = info;
}
