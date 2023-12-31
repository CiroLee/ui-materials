/** @type {import('tailwindcss').Config} */
import themeExtends from './src/packages/plugins/tailwind.theme';
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...themeExtends,
    },
  },
  plugins: [require('tailwindcss-extra')],
};
