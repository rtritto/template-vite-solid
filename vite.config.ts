import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  cacheDir: '.vite',
  plugins: [
    solidPlugin()
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
    outDir: '.vite/dist'
  }
})