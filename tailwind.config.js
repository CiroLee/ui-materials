/** @type {import('tailwindcss').Config} */
import tailwindcssExtra from 'tailwindcss-extra';
import themeExtends from './src/packages/plugins/tailwind.theme';
import uiPlugin from './src/packages/plugins/tailwind.plugin';
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...themeExtends,
    },
  },
  plugins: [tailwindcssExtra, uiPlugin],
};
