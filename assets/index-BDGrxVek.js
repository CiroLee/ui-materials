import{j as s,l as t}from"./index-DS6qm14V.js";import{L as a,B as r,H as e,C as i}from"./index-B3S6f_Ni.js";import{C as l}from"./index-CYnvvJAA.js";const c="```bash\n# install necessary dependencies\npnpm add tailwindcss autoprefixer tailwindcss-extra -D\npnpm add framer-motion tailwindcss-variants clsx\n```\n",o=`\`\`\`ts
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

\`\`\`
`,n="size-8 border border-gray-300 rounded-full flex-shrink-0 flex flex-center text-gray-700 mr-2",p=()=>s.jsxs("div",{className:"",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx(a,{href:"https://github.com/CiroLee/ui-materials",isBlank:!0,children:s.jsxs(r,{size:"small",outline:!0,type:"text",className:"cursor-pointer",children:[s.jsx(t,{size:16,className:"mr-1"}),s.jsx("span",{children:"Github"})]})})}),s.jsx(e,{as:"h4",className:"my-12",children:"modern ui materials about react aiming to use easily"}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(e,{as:"h5",className:n,children:"1"}),s.jsx("span",{children:"install basic dependencies"})]}),s.jsx(i,{className:"md:w-[80%] mb-8",content:c}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(e,{as:"h5",className:n,children:"2"}),s.jsxs("span",{children:["copy plugins to your project, and import them in your ",s.jsx(l,{size:"tiny",children:"tailwind.config.js"})]})]}),s.jsx(i,{content:o,className:"md:w-[80%] mb-8"}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(e,{as:"h5",className:n,children:"3"}),s.jsx("span",{children:"copy component codes to your project, just it!"})]}),s.jsx("p",{className:"text-gray-400 indent-10",children:"note: you may install some extra dependencies for some component, view code for detail"})]});export{p as default};
