/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8749F5',
          400: '#9a63ef',
          300: '#a46eee',
          200: '#D7B6FD',
          100: '#EBDAFE',
        },
      },
      zIndex: {
        popup: 100,
      },
    },
  },
  plugins: [],
};
