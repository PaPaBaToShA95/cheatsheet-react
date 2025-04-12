import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite', 
  optimizeDeps: {
    exclude: ['lightningcss', 'fsevents'], 
  },
  base: "/cheatsheet-react/",
  server: {
    host: true, 
    port: 5173, 
  },
  plugins: [react()],
})