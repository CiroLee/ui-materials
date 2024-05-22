import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/ui-materials/',
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@site': path.resolve(__dirname, './src/website'),
      '@ui': path.resolve(__dirname, './src/packages/ui'),
    },
  },
  css: {
    postcss: {
      // 自动追加前缀
      plugins: [autoprefixer(), tailwindcss()],
    },
  },
  build: {
    target: 'es2022',
  },
});
