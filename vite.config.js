import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/FormBuilderApp/',  // YOUR ACTUAL REPO NAME
  plugins: [tailwindcss()],
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
  },
});
