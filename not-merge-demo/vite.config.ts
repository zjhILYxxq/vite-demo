import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'lodash-es' // 不对 lodash-es 进行预构建
    ]  
  },
  server: {
    // open: true,
    force: true
  }
})
