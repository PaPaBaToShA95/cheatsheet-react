
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/cheatsheet-react/",
  server: {
    host: true, // або '0.0.0.0' — щоб слухати всі мережі
    port: 5173, // або інший порт
  },
  plugins: [react()],
})

