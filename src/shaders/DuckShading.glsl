uniform sampler2D modelTexture;

// Shared by the visible duck and water rays hitting its triangles.
vec3 getDuckColor(vec3 position, vec3 normal, vec2 uv) {
  vec3 baseColor = texture2D(modelTexture, uv).rgb;
  vec3 n = normalize(normal);
  vec3 refractedLight = refract(-light, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  float litFactor = max(0.0, dot(n, -refractedLight));
  float aoStrength = 0.6 * (1.0 - litFactor);

  baseColor *= 1.0 - aoStrength / pow((poolWidth + 0.25 - abs(position.x)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((poolLength + 0.25 - abs(position.z)) / 0.25, 3.0);
  baseColor *= 1.0 - aoStrength / pow((position.y + poolHeight + 0.25) / 0.25, 3.0);

  float diffuse = litFactor * 0.6;
  vec4 info = texture2D(water, position.xz * vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5);
  if (position.y < info.r) {
    vec4 caustic = texture2D(
      causticTex,
      0.75 * (position.xz - position.y * refractedLight.xz / refractedLight.y) *
        vec2(0.5 / poolWidth, 0.5 / poolLength) + 0.5
    );
    diffuse *= caustic.r * 4.0;
  }

  vec3 color = baseColor * (0.4 + diffuse);
  if (position.y < info.r) color *= underwaterColor * 1.2;
  return color;
}
