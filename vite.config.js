import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/cheatsheet-react/", 
  cacheDir: '.vite',

  optimizeDeps: {
    exclude: ['lightningcss', 'fsevents'],
    include: ['react', 'react-dom'] 
  },

  server: {
    host: true, 
    port: 5173, 
    open: true 
  },

  build: {
    outDir: 'dist', 
    assetsInlineLimit: 4096, 
    sourcemap: true 
  },

  plugins: [react()],

  
  css: {
    devSourcemap: true 
  }
})