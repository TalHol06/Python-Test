import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/_tests_/setup.ts'
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.REACT_APP_API_URL,
        secure: false,
        changeOrigin: true
      }
    }
  }
})
