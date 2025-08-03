import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Luam-Candles/',
  preview: {
    port: 4174,
    strictPort: true
  }
})
