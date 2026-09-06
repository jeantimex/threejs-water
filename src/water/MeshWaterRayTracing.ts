import * as THREE from 'three';
import { FloatVertexAttributeTexture, MeshBVH, MeshBVHUniformStruct, SAH } from 'three-mesh-bvh';

/** One local-space triangle hierarchy shared by every instance of a mesh. */
export class MeshWaterRayTracing {
  readonly bvh = new MeshBVHUniformStruct();
  readonly normals = new FloatVertexAttributeTexture();
  readonly uvs = new FloatVertexAttributeTexture();

  constructor(
    geometry: THREE.BufferGeometry,
    readonly texture: THREE.Texture
  ) {
    const tree = new MeshBVH(geometry, { strategy: SAH, maxDepth: 30 });
    this.bvh.updateFrom(tree);
    this.normals.updateFrom(geometry.getAttribute('normal') as THREE.BufferAttribute);
    this.uvs.updateFrom(geometry.getAttribute('uv') as THREE.BufferAttribute);
  }
}
