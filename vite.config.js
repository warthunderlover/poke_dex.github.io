import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_BASE_URL || "/", // Esto asegura que funcione en GitHub Pages
});
