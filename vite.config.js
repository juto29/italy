import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Disable automatic browser opening for compatibility in headless environments
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
})
