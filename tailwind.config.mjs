/** @type {import('tailwindcss').Config} */
import tailwindcssExtra from 'tailwindcss-extra';
import themeExtends from './src/packages/plugins/tailwind.theme';
import uiPlugin from './src/packages/plugins/tailwind.plugin';
import plugin from 'tailwindcss/plugin';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...themeExtends,
    },
  },
  plugins: [
    tailwindcssExtra,
    uiPlugin,
    plugin(function ({ addComponents }) {
      addComponents({
        '.site-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '4px',
            '&:hover': {
              background: '#a3a3a3',
            },
          },
        },
      });
    }),
  ],
};
