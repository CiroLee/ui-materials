/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8749F5',
          400: '#A976F9',
          300: '#BF91FD',
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
