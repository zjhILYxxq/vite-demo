import react from '@vitejs/plugin-react';
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'

export default {
  root: process.cwd(),
  plugins: [
    react(),
    OptimizationPersist(),
    PkgConfig()
  ],
  server: {
    force: true,
    open: true
  }
}