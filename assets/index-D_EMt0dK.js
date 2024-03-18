import{j as s}from"./index-C05EYDUz.js";import{C as l,a as r}from"./CheckboxGroup-B6gHAS1p.js";import{H as a}from"./index-BJmJd5F7.js";import{N as o,S as e,C as p,A as t}from"./index-B5CGe3bm.js";import"./index-C-r7zJs6.js";import"./index-CWVVL8aY.js";import"./index-C4LmOpUy.js";import"./index-Dkd40zvW.js";import"./index-Bqa_tqQn.js";const j=[{prop:"value",desc:"current selected value",type:"tag: string | number",required:!1,default:"-"},{prop:"checked",desc:"whether the checkbox is checked",type:"boolean",required:!1,default:"false"},{prop:"disabled",desc:"whether the checkbox is disabled",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"onCheckedChange",desc:"checkbox change callback",type:"(checked: boolean, value?: string | number) => void",required:!1,default:"-"}],d=[{prop:"value",desc:"current selected value",type:"tag: string | number",required:!1,default:"-"},{prop:"options",desc:"checkbox config options",type:"CheckboxGroupOption[]",required:!0,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onCheckedChange",desc:"checkbox change callback",type:"(list: (string | number)[]) => void",required:!1,default:"-"}],i=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Checkbox&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span>
      <span class="hljs-attr">checked</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span>
      <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{(checked,</span> <span class="hljs-attr">value</span>) =&gt;</span> console.log(checked, value)}
    &gt;
      apple
    <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span></span>
  )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Checkbox&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center [&amp;&gt;*]:mr-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,u=`<pre class="hljs"><code><span class="hljs-keyword">import</span> {<span class="hljs-keyword">type</span> <span class="hljs-title class_">CheckboxProps</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Checkbox&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-attr">checkboxGroup</span>: <span class="hljs-title class_">CheckboxProps</span>[] = [
    {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
      <span class="hljs-attr">label</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>🍎<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
    },
    {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
      <span class="hljs-attr">label</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>🍌<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
    },
    {
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
      <span class="hljs-attr">label</span>: (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>orange<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>🍊<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      ),
      <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
    },
  ];
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;orange&quot;</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex [&amp;&gt;label]:mr-2 [&amp;&gt;label_button]:self-baseline [&amp;_button]:mt-[6px]&quot;</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{checkboxGroup}</span>
      <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{(list)</span> =&gt;</span> console.log(&#x27;what you choose:&#x27;, list)}
    /&gt;</span>
  )
}
</code></pre>
`;function q(){const c=[{value:"apple",label:s.jsxs("div",{children:[s.jsx("p",{children:"apple"}),s.jsx("p",{children:"🍎"})]})},{value:"banana",label:s.jsxs("div",{children:[s.jsx("p",{children:"banana"}),s.jsx("p",{children:"🍌"})]})},{value:"orange",label:s.jsxs("div",{children:[s.jsx("p",{children:"orange"}),s.jsx("p",{children:"🍊"})]}),disabled:!0}];return s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Checkbox",sourceName:"Checkbox"}),s.jsxs(e,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{checked:!0,value:"apple",onCheckedChange:(n,h)=>console.log(n,h),children:"apple"}),s.jsx(p,{content:i})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"disabled"}),s.jsxs("div",{className:"flex items-center [&>*]:mr-2",children:[s.jsx(l,{disabled:!0,children:"disabled"}),s.jsx(l,{checked:!0,disabled:!0,children:"disabled"})]}),s.jsx(p,{content:g})]}),s.jsxs(e,{children:[s.jsx(a,{as:"h4",className:"mb-2",children:"checkbox group"}),s.jsx(r,{value:"orange",className:"flex [&>label]:mr-2 [&>label_button]:self-baseline [&_button]:mt-[6px]",options:c,onCheckedChange:n=>console.log("what you choose:",n)}),s.jsx(p,{content:u})]}),s.jsx(a,{as:"h2",className:"mb-2",children:"API"}),s.jsx(a,{as:"h4",className:"mb-2",children:"Checkbox"}),s.jsx(t,{rows:j}),s.jsx(a,{as:"h4",className:"my-2",children:"CheckboxGroup"}),s.jsx(t,{rows:d})]})}export{q as default};
