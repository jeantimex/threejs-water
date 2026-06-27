precision highp float;

/**
 * DROP/SPLASH CREATION SHADER
 *
 * This shader adds a circular ripple to the water simulation, triggered when
 * the user clicks/touches the water surface or when raindrops fall.
 *
 * The drop profile is carefully designed to create natural-looking ripples:
 * - Smooth edges prevent aliasing and high-frequency noise
 * - Cosine-based profile mimics how water actually displaces in a splash
 * - The shape generates clean outward-propagating circular waves
 */

const float PI = 3.141592653589793;

// Current simulation state (R: height, G: velocity, BA: normal components)
uniform sampler2D tInput;

// Drop center position in NDC (Normalized Device Coordinates) [-1, 1]
uniform vec2 center;

// Radius of the drop effect in physical units
uniform float radius;

// Displacement strength: positive = upward bulge, negative = depression
uniform float strength;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  /**
   * DROP PROFILE CALCULATION
   *
   * Step 1: Coordinate transformation
   *   NDC center [-1, 1] → UV space [0, 1]
   *   Formula: UV = NDC * 0.5 + 0.5
   *
   * Step 2: Distance calculation
   *   Compute physical distance from pixel to drop center
   *
   * Step 3: Invert and clamp to [0, 1]
   *   drop = max(0, 1 - d)
   *   Result: 1 at center, 0 at/beyond radius edge
   */
  vec2 physicalDiff = (coord - (center * 0.5 + 0.5)) * 2.0 * vec2(poolWidth, poolLength);
  
  // Scale the physical radius of the drop proportionally to the pool dimensions.
  // This ensures the drop always covers the same number of grid cells on the simulation
  // texture regardless of pool size, maintaining high-fidelity resolution and preventing
  // single-pixel spikes that cause numerical solver splitting (double-ripple artifacts).
  float physRadius = radius * 2.0 * poolLength;
  float drop = max(0.0, 1.0 - length(physicalDiff) / physRadius);

  /**
 * * SMOOTH COSINE PROFILE
 *    *
 *    * A simple linear falloff would create waves with sharp edges, causing
 *    * high-frequency artifacts. Instead, we use a raised cosine profile:
 *    *
 *    *   f(x) = 0.5 - 0.5 * cos(x * π)
 *    *
 *    * This is the "Hann window" function, which has these properties:
 *    *   - f(0) = 0       (zero at the edge)
 *    *   - f(1) = 1       (maximum at the center)
 *    *   - f'(0) = 0      (zero slope at edge - smooth transition)
 *    *   - f'(1) = 0      (zero slope at center - smooth peak)
 *    *
 *    * The smooth derivatives ensure no discontinuities in the wave shape,
 *    * producing clean, natural-looking circular ripples.
 */
  drop = 0.5 - cos(drop * PI) * 0.5;

  // Add displacement to current height
  // Positive strength = upward push (like a drop hitting from below)
  // Negative strength = downward depression (like a raindrop impact)
  info.r += drop * strength;

  gl_FragColor = info;
}
