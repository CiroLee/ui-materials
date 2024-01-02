const themeExtends = {
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
    tiny: '2px',
    small: '3px',
    medium: '4px',
    large: '6px',
    ...theme('height'),
  }),
  zIndex: {
    popup: 100,
  },
  animation: {
    flicker: 'flicker 2s infinite ease',
    shimmer: 'shimmer 2s infinite linear',
  },
  keyframes: {
    flicker: {
      '0%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0 50%' },
    },
    shimmer: {
      '50%': { opacity: 0.5 },
    },
  },
  backgroundImage: {
    'skeleton-flicker': 'linear-gradient(90deg, rgb(0 0 0 / 5%) 20%, rgb(0 0 0 / 10%) 40%, rgb(0 0 0 / 5%) 60%)',
  },
};

export default themeExtends;
module.exports = themeExtends;
