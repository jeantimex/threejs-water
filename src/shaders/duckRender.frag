precision highp float;

const float IOR_AIR = 1.0;
const float IOR_WATER = 1.333;
const vec3 underwaterColor = vec3(0.4, 0.9, 1.0);

uniform vec3 light;
uniform sampler2D water;
uniform sampler2D causticTex;
uniform sampler2D modelTexture;
uniform bool isTexturePass;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vec3 baseColor = texture2D(modelTexture, vUv).rgb;
  vec3 n = normalize(vNormal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float diffuse = max(0.0, dot(-refractedLight, n)) * 0.6;

  vec4 info = texture2D(water, vPosition.xz * 0.5 + 0.5);

  if (vPosition.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (vPosition.xz - vPosition.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);

  if (vPosition.y < info.r) {
    color *= underwaterColor * 1.2;
  }

  gl_FragColor = vec4(color, (!isTexturePass || vPosition.y < info.r) ? 1.0 : 0.0);
}
