import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // Keep it as the current directory (default behavior)
  build: {
    outDir: '../dist', // Output directory for the build relative to the `client/` folder
    emptyOutDir: true, // Clear the output directory before building
  },
  publicDir: 'public', // Specify the directory where `index.html` is located
});
