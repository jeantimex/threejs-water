import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig(({ command }) => ({
  // Use '/' for dev server, '/threejs-water/' for production build
  base: command === 'serve' ? '/' : '/threejs-water/',
  plugins: [glsl()],
}))
