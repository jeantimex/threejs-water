#if USE_MESH_RAY_TRACING
#define MESH_BVH_IMPLEMENTATION

uniform BVH meshBVH;
uniform sampler2D meshNormalAttribute;
uniform sampler2D meshUvAttribute;

#include "./DuckShading.glsl"

bool intersectMeshInstances(vec3 origin, vec3 ray, out float distance, out vec3 normal, out vec2 uv) {
  distance = 1.0e6;
  if (!meshEnabled || dot(ray, ray) < 0.0001) return false;

  uvec4 nearestIndices = uvec4(0u);
  vec3 nearestBarycoord = vec3(0.0);
  bool found = false;
  for (int i = 0; i < MAX_MESHES; i++) {
    if (i >= meshCount) break;
    uvec4 indices = uvec4(0u);
    vec3 faceNormal = vec3(0.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float hitDistance = 1.0e6;
    // Instance normalization is baked into the BVH; only translation varies.
    bool hit = bvhIntersectFirstHit(
      meshBVH, origin - meshCenters[i], ray,
      indices, faceNormal, barycoord, side, hitDistance
    );
    if (hit && hitDistance > 0.00001 && hitDistance < distance) {
      distance = hitDistance;
      nearestIndices = indices;
      nearestBarycoord = barycoord;
      found = true;
    }
  }
  if (found) {
    normal = normalize(textureSampleBarycoord(meshNormalAttribute, nearestBarycoord, nearestIndices.xyz).xyz);
    uv = textureSampleBarycoord(meshUvAttribute, nearestBarycoord, nearestIndices.xyz).xy;
  }
  return found;
}
#endif
