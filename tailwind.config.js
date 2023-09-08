/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8749F5',
          600: '#8041ee',
        },
        success: {
          500: '#65ca16',
          600: '#58b70e',
        },
        warn: {
          500: '#ffc000',
          600: '#f3ae0a',
        },
        danger: {
          500: '#FF4C3F',
          600: '#eb3e31',
        },
      },
      padding: {
        'button-ty': '10px',
        'button-sm': '16px',
        'button-md': '20px',
        'button-lg': '24px',
        cell: '14px',
      },
      height: {
        'button-ty': '28px',
        'button-sm': '32px',
        'button-md': '40px',
        'button-lg': '48px',
      },
      borderRadius: ({ theme }) => ({
        medium: '6px',
        ...theme('height'),
      }),
      zIndex: {
        popup: 100,
      },
    },
  },
  plugins: [],
};
