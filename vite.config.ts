import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
  base: "/vin-decoder/",
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/modules'),
      "@assets": path.resolve(__dirname, "./src/assets"),
    }
  }
})
