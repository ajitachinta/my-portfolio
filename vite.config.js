import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Repo is served from https://ajitachinta.github.io/my-portfolio/
  base: '/my-portfolio/',
  plugins: [react()],
})
