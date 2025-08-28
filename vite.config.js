import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Disable automatic browser opening for compatibility in headless environments
export default defineConfig({
  base: '/italy/',
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'docs',
  },
})
