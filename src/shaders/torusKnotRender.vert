varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  // Compute world position of the vertex
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  
  // Pass surface normal to the fragment shader
  vNormal = normal;
  
  // Transform to projection space coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
