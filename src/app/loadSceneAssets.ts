import * as THREE from 'three'

export interface SceneAssets {
  tileTexture: THREE.Texture
  cubemap: THREE.CubeTexture
}

export async function loadSceneAssets(): Promise<SceneAssets> {
  const tileTexture = await new THREE.TextureLoader().loadAsync('/tiles.jpg')
  tileTexture.wrapS = THREE.RepeatWrapping
  tileTexture.wrapT = THREE.RepeatWrapping
  tileTexture.minFilter = THREE.LinearMipmapLinearFilter
  tileTexture.generateMipmaps = true

  const cubemap = await new THREE.CubeTextureLoader().loadAsync([
    '/xpos.jpg',
    '/xneg.jpg',
    '/ypos.jpg',
    '/ypos.jpg',
    '/zpos.jpg',
    '/zneg.jpg',
  ])
  cubemap.flipY = true
  cubemap.colorSpace = THREE.NoColorSpace
  cubemap.minFilter = THREE.LinearFilter
  cubemap.magFilter = THREE.LinearFilter
  cubemap.generateMipmaps = false

  return { tileTexture, cubemap }
}
