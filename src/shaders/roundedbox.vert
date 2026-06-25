varying vec3 vPosition;

void main() {
  // Pass model-space position directly to fragment shader for raytracing pool corners
  vPosition = position.xyz;
  
  // Transform to projection space coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
