import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      loose: true,
    }),
    svgr(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
