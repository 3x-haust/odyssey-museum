import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // pdfjs-dist ships ESM; pre-bundle so the worker resolves cleanly in dev
    include: ['pdfjs-dist'],
  },
  build: {
    target: 'es2020',
  },
});
