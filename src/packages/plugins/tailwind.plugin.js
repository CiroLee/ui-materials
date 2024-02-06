import plugin from 'tailwindcss/plugin';

const uiPlugin = plugin(function ({ addComponents }) {
  addComponents({
    '.input-number': {
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
  });
});

export default uiPlugin;
