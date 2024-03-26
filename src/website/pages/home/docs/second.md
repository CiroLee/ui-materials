```ts
// project structure
ui-materials
   ├── src
   │   ├── packages
   │   │  ├── ui
   │   │  │   ├── plugins
   │   │  │   │   │   ├── ...
   │   │  │   │   ├── tailwind.plugin.js
   │   │  │   │   ├── └── tailwind.theme.js


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import tailwindcssExtra from 'tailwindcss-extra';
import themeExtends from 'your path/plugins/tailwind.theme';
import uiPlugin from 'your path/plugins/tailwind.plugin';
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
  ],
};

```
