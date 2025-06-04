import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import viteDebugInfo from "./vite.debug.info";

export default defineConfig({
  plugins: [react(), tailwindcss(), viteDebugInfo()],
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      external: [], // Don't externalize any modules
    },
    assetsInlineLimit: 0, // Don't inline any assets
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})