import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import mdPlugin, { Mode } from 'vite-plugin-markdown';
import hljs from 'highlight.js/lib/common';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/radix-materials/',
  plugins: [
    react(),
    mdPlugin({
      mode: [Mode.HTML],
      markdown: (body: string) => body,
      markdownIt: {
        highlight: function (str: string, lang = '') {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre class="hljs"><code>${
                hljs.highlight(str, {
                  language: hljs.getLanguage(lang)?.name || 'json',
                  ignoreIllegals: true,
                }).value
              }</code></pre>`;
            } catch (err) {
              console.log(err);
            }
          }
        },
      },
    }),
  ],
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
});
