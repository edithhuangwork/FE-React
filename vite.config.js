import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // a. turn on next line for github page deploy
  // base: "/FE-React/",
  // b. turn on next line for netlify
  base: "/",
  build: {
    outDir: 'dist',
    assetDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chuckFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
