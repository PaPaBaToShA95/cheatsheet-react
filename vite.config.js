import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/cheatsheet-react/", 
  cacheDir: '.vite',
  optimizeDeps: {
    exclude: ['lightningcss', 'fsevents'],
  },
  server: {
    host: true,
    port: 5173,
  },
  plugins: [react()],
})
