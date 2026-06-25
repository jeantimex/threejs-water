varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  // Compute world position of the vertex
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  
  // Transform surface normal to world/view coordinates
  vNormal = normalMatrix * normal;
  
  // Pass along texture coordinates
  vUv = uv;
  
  // Projects the vertex to screen coordinates
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
