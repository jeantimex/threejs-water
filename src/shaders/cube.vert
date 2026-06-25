// Default pool height mapping constant (1.0)
const float poolHeight = 1.0;

varying vec3 vPosition;

void main() {
  vPosition = position.xyz;
  
  // Re-map the vertical Y coordinate:
  // Maps standard box geometry coordinates so that the pool walls start at the base Y = -poolHeight
  // and extend up to the water/rim boundary levels.
  vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;
  
  // Transform to projection space coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
