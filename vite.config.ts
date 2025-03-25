import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 3000, hmr: { overlay: false } },
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      src: resolve('src/'),
    },
  },
});
