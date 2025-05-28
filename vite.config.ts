import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
