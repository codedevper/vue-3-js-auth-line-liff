import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    basicSsl({
      /** name of certification */
      name: 'codedevper',
      /** custom trust domains */
      domains: ['*.codedevper.com'],
      /** custom certification directory */
      certDir: '../cert/codedevper.com'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: 'codedevper.com',
    port: '3000',
    https: true
    //origin: 'https://localhost:8000',
  }
})
