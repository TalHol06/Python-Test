import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  // define: {
  //   'process.env.NODE_ENV': JSON.stringify('production'),
  // },
  server: {
    port: 3000,
    open: true,
    // host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
    // allowedHosts: [
    //   'python-test-frontend.onrender.com',
    //   'localhost',
    //   '.onrender.com',
    // ],
  }
  
});
