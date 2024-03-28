import{j as s,l}from"./index-BjDtT8fq.js";import{L as t,B as i,H as n,C as e}from"./index-ELNk07RW.js";import{C as r}from"./index-DfbaTK5Q.js";const c=`<pre class="hljs"><code><span class="hljs-comment"># install necessary dependencies</span>
pnpm add tailwindcss autoprefixer tailwindcss-extra -D
pnpm add framer-motion tailwindcss-variants clsx
</code></pre>
`,p=`<pre class="hljs"><code><span class="hljs-comment">// project structure</span>
ui-materials
   ├── src
   │   ├── packages
   │   │  ├── ui
   │   │  │   ├── plugins
   │   │  │   │   │   ├── ...
   │   │  │   │   ├── tailwind.<span class="hljs-property">plugin</span>.<span class="hljs-property">js</span>
   │   │  │   │   ├── └── tailwind.<span class="hljs-property">theme</span>.<span class="hljs-property">js</span>


<span class="hljs-comment">// tailwind.config.js</span>
<span class="hljs-comment">/** <span class="hljs-doctag">@type</span> {<span class="hljs-type">import(&#x27;tailwindcss&#x27;).Config</span>} */</span>
<span class="hljs-keyword">import</span> tailwindcssExtra <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;tailwindcss-extra&#x27;</span>;
<span class="hljs-keyword">import</span> themeExtends <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/plugins/tailwind.theme&#x27;</span>;
<span class="hljs-keyword">import</span> uiPlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/plugins/tailwind.plugin&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">content</span>: [<span class="hljs-string">&#x27;./index.html&#x27;</span>, <span class="hljs-string">&#x27;./src/**/*.{js,ts,jsx,tsx}&#x27;</span>],
  <span class="hljs-attr">theme</span>: {
    <span class="hljs-attr">extend</span>: {
      ...themeExtends,
    },
  },
  <span class="hljs-attr">plugins</span>: [
    tailwindcssExtra,
    uiPlugin,
  ],
};

</code></pre>
`,a="size-8 border border-gray-300 rounded-full flex-shrink-0 flex flex-center text-gray-700 mr-2",h=()=>s.jsxs("div",{className:"",children:[s.jsx("div",{className:"flex justify-end",children:s.jsx(t,{href:"https://github.com/CiroLee/ui-materials",isBlank:!0,children:s.jsxs(i,{size:"small",outline:!0,type:"text",className:"cursor-pointer",children:[s.jsx(l,{size:16,className:"mr-1"}),s.jsx("span",{children:"Github"})]})})}),s.jsx(n,{as:"h4",className:"my-12",children:"modern ui materials about react aiming to use easily"}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(n,{as:"h5",className:a,children:"1"}),s.jsx("span",{children:"install basic dependencies"})]}),s.jsx(e,{className:"md:w-[80%] mb-8",content:c}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(n,{as:"h5",className:a,children:"2"}),s.jsxs("span",{children:["copy plugins to your project, and import them in your ",s.jsx(r,{size:"tiny",children:"tailwind.config.js"})]})]}),s.jsx(e,{content:p,className:"md:w-[80%] mb-8"}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(n,{as:"h5",className:a,children:"3"}),s.jsx("span",{children:"copy component codes to your project, just it!"})]}),s.jsx("p",{className:"text-gray-400 indent-10",children:"note: you may install some extra dependencies for some component, view code for detail"})]});export{h as default};
