import type { UserConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default {
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
} satisfies UserConfig
