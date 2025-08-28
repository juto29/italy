import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Load environment-specific variables to handle differing base paths
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE_URL,
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
    },
    build: {
      outDir: 'docs',
    },
  }
})
