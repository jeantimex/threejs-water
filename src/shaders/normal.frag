precision highp float;

// Texture containing the simulation state (height in red channel)
uniform sampler2D tInput;

// Texture coordinate step size corresponding to one pixel/grid cell
uniform vec2 delta;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  // Calculate the tangent vector along the X axis.
  // The vector starts at the current cell and goes to the adjacent right cell:
  // dx = (delta.x, height_right - height_center, 0.0)
  vec3 dx = vec3(delta.x, texture2D(tInput, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);
  
  // Calculate the tangent vector along the Z axis (mapped to the Y coordinate of the texture).
  // The vector starts at the current cell and goes to the adjacent up cell:
  // dy = (0.0, height_up - height_center, delta.y)
  vec3 dy = vec3(0.0, texture2D(tInput, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);
  
  // Compute the surface normal by taking the cross product of the Z tangent (dy) and X tangent (dx).
  // Normal = dy x dx. Due to standard coordinates, this points upwards.
  // Normalize the resulting vector to unit length, then pack the X and Z coordinates
  // into the Blue (b) and Alpha (a) channels of the texture.
  // This packs both height/velocity (rg) and normal data (ba) into a single 4-channel texture.
  info.ba = normalize(cross(dy, dx)).xz;

  gl_FragColor = info;
}
