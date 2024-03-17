import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ViteRobots',
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['fs', 'fs/promises', 'path', ...Object.keys(pkg.dependencies)],
      output: {
        globals: {
          fs: 'fs',
          'fs/promises': 'fsp',
          path: 'path',
          ...(() => {
            const obj = {}
            Object.keys(pkg.dependencies).forEach((key) => {
              obj[key] = key
            })
            return obj
          })()
        }
      }
    }
  }
})
