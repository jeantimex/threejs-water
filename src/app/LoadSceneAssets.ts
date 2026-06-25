import * as THREE from 'three';

export interface SceneAssets {
  tileTexture: THREE.Texture;
  cubemap: THREE.CubeTexture;
}

/**
 * Asynchronously loads static textures and skybox cubemaps required to render the scene.
 *
 * 1. Repeating Tile Texture:
 *    Loads tiles.jpg, wrapping it horizontally/vertically with bilinear mipmap filtering
 *    to yield high-quality surface lookups at different viewing distances.
 *
 * 2. Skybox Cubemap:
 *    Loads 6 directional faces. Configures axis mapping, disables mipmaps (since reflections
 *    require sharp boundaries), and flips the vertical mapping direction for camera reflection parity.
 */
export async function loadSceneAssets(): Promise<SceneAssets> {
  // Use Vite's BASE_URL for correct paths in both dev and production
  const base = import.meta.env.BASE_URL;

  // LoadRepeating pool tile texture
  const tileTexture = await new THREE.TextureLoader().loadAsync(`${base}tiles.jpg`);
  tileTexture.wrapS = THREE.RepeatWrapping;
  tileTexture.wrapT = THREE.RepeatWrapping;
  tileTexture.minFilter = THREE.LinearMipmapLinearFilter;
  tileTexture.generateMipmaps = true;

  // Load Skybox cubemap textures (X, Y, Z directions)
  const cubemap = await new THREE.CubeTextureLoader().loadAsync([
    `${base}xpos.jpg`,
    `${base}xneg.jpg`,
    `${base}ypos.jpg`,
    `${base}ypos.jpg`,
    `${base}zpos.jpg`,
    `${base}zneg.jpg`,
  ]);
  cubemap.flipY = true; // Align vertical orientation with shaders
  cubemap.colorSpace = THREE.NoColorSpace;
  cubemap.minFilter = THREE.LinearFilter;
  cubemap.magFilter = THREE.LinearFilter;
  cubemap.generateMipmaps = false;

  return { tileTexture, cubemap };
}
