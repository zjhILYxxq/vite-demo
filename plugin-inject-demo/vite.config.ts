import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { customePlugin } from './config/customerPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    customePlugin
  ],
  server: {
    open: true
  },
  optimizeDeps: {
    force: true
  }
})
