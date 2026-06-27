precision highp float;

/**
 * WAVE EQUATION SIMULATION SHADER
 *
 * This shader implements a real-time water wave simulation using the 2D wave equation.
 * The simulation runs on the GPU, with each pixel representing one cell of the water grid.
 *
 * PHYSICS BACKGROUND:
 * The 2D wave equation describes how disturbances propagate across a surface:
 *
 *   ∂²h/∂t² = c² * (∂²h/∂x² + ∂²h/∂z²)
 *
 * Where:
 *   h = height displacement from rest
 *   c = wave propagation speed
 *   The right side (∂²h/∂x² + ∂²h/∂z²) is the Laplacian ∇²h
 *
 * DISCRETIZATION:
 * We store two quantities per cell:
 *   - height (info.r): Current displacement from rest level
 *   - velocity (info.g): Rate of change of height (∂h/∂t)
 *
 * Each timestep:
 *   1. Compute discrete Laplacian using 4-neighbor stencil
 *   2. acceleration = c² * Laplacian
 *   3. velocity += acceleration * dt
 *   4. velocity *= damping (energy loss)
 *   5. height += velocity * dt
 */

// Simulation state texture:
//   R channel: Water height displacement from rest level (h)
//   G channel: Vertical velocity of the water column (∂h/∂t)
//   B channel: (unused in this pass, stores normal.x)
//   A channel: (unused in this pass, stores normal.z)
uniform sampler2D tInput;

// Grid spacing in texture coordinates: vec2(1/width, 1/height)
// Used to sample neighboring cells for Laplacian computation
uniform vec2 delta;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

void main() {
  // Read current cell state
  vec4 info = texture2D(tInput, coord);

  // Define neighbor offset vectors for 4-point stencil
  vec2 dx = vec2(delta.x, 0.0);  // One cell in X direction
  vec2 dy = vec2(0.0, delta.y);  // One cell in Z direction

  /**
   * DISCRETE LAPLACIAN COMPUTATION IN PHYSICAL COORDINATES
   *
   * The continuous Laplacian ∇²h = ∂²h/∂x² + ∂²h/∂z² measures surface curvature.
   * On a non-uniform grid where cells have physical dimensions (2*poolWidth*delta.x)
   * in X and (2*poolLength*delta.y) in Z, the second derivatives are:
   *
   *   ∂²h/∂x² ≈ (H_E - 2*H_C + H_W) / Δx²
   *   ∂²h/∂z² ≈ (H_N - 2*H_C + H_S) / Δz²
   *
   * By scaling the delta grid spacing by poolWidth and poolLength, we make the
   * wave propagation speed c isotropic in physical space.
   */
  float d2h_dx2 = texture2D(tInput, coord + dx).r + texture2D(tInput, coord - dx).r - 2.0 * info.r;
  float d2h_dz2 = texture2D(tInput, coord + dy).r + texture2D(tInput, coord - dy).r - 2.0 * info.r;

  /**
   * VELOCITY UPDATE (Semi-implicit Euler)
   *
   * From physics: acceleration = c² * ∇²h
   *
   * To maintain numerical stability (CFL condition) across arbitrary pool aspect ratios
   * and sizes, we scale the time-step by the square of the minimum pool dimension.
   * This prevents the effective wave propagation speed in grid space from exceeding
   * the stability limit when poolWidth or poolLength is small (< 1.0).
   */
  float stabilityScale = min(poolWidth * poolWidth, poolLength * poolLength);
  info.g += 0.5 * stabilityScale * (d2h_dx2 / (poolWidth * poolWidth) + d2h_dz2 / (poolLength * poolLength));

  /**
   * DAMPING (Energy Dissipation)
   *
   * Real water loses energy to friction, viscosity, and air resistance.
   * We model this with exponential decay: v(t+dt) = v(t) * damping
   *
   * damping = 0.995 per frame:
   *   - After 60 frames (1 sec @ 60fps): velocity reduced to 0.995^60 ≈ 74%
   *   - After 300 frames (5 sec): velocity reduced to 0.995^300 ≈ 22%
   *
   * This provides gradual settling without abrupt stopping.
   */
  info.g *= 0.995;

  /**
   * HEIGHT UPDATE (Euler Integration)
   *
   * height += velocity * dt
   *
   * Since dt is absorbed into our coefficients, we simply add velocity.
   */
  info.r += info.g;

  gl_FragColor = info;
}
