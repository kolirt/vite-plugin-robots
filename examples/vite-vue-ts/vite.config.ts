import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { robots } from 'vite-plugin-robots'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), robots()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
