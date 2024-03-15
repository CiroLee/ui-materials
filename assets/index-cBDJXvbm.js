import{d as v,r,j as s,W as w,B as k,C}from"./index-D1KJsCxW.js";import{B as R,c as q,N as V,S as e,C as c,A as N}from"./index-B0PqRUAz.js";import{H as t}from"./index-C4zB0jjx.js";import{$ as B,a as _}from"./index-0vRULWmZ.js";import"./index-BugOsXht.js";import"./index-BZgWwdkS.js";import"./index-CwP2f8qY.js";import"./index-2vO1aP_T.js";import"./index-D9EGPFwj.js";import"./index-gcasCBg6.js";import"./index-BA8G_bom.js";const G=v({base:"flex gap-x-2.5"}),j=r.forwardRef((a,o)=>{const{value:u,type:i="outline",options:g,size:d,className:m,style:x,onValueChange:h}=a,[y,f]=r.useState(u||""),b=r.useMemo(()=>i==="outline"?"border-brand-500":"border-0 bg-brand-500 text-white hover:bg-brand-500/90 active:bg-brand-600",[i]);return s.jsx(B,{ref:o,className:G({class:m}),style:x,onValueChange:n=>{f(n),h==null||h(n)},children:g.map(n=>s.jsx(_,{asChild:!0,disabled:n.disabled,value:n.value,children:s.jsx(R,{outline:!0,type:"text",shape:"square",size:d,className:q({[b]:y===n.value}),children:n.label})},n.value))})});j.displayName="RadioButtonGroup";const l=j,z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioButtonGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioButtonGroup&#x27;</span>;
<span class="hljs-keyword">import</span>  <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RadioOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/types/components&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">RadioOption</span>[] = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;S&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;s&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;M&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;m&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;L&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;l&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;XL&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;xl&#x27;</span>,
    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handleOnValueChange</span> = (<span class="hljs-params">value: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;you choose: &#x27;</span>, value);
  };
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span> /&gt;</span></span>
  )
}
</code></pre>
`,O=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioButtonGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioButtonGroup&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col gap-y-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>tiny<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span>
        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span>
        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>tiny<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span>
        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>tiny<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span>
        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,L=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioButtonGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioButtonGroup&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col gap-y-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>type:outline<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;outline&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>type:solid<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span>
        <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;solid&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,$=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioButtonGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioButtonGroup&#x27;</span>;
<span class="hljs-keyword">import</span>  <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RadioOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/types/components&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiBankCardLine</span>, <span class="hljs-title class_">RiAlipayLine</span>, <span class="hljs-title class_">RiWechatPayLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">RadioOption</span>[] = [
  {
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiBankCardLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{28}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>card<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    ),
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;bank&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiAlipayLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{28}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>alipay<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    ),
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;alipay&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiWechatPayLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{28}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>wechat-pay<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    ),
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;wechat-pay&#x27;</span>,
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handleOnValueChange</span> = (<span class="hljs-params">value: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;you choose: &#x27;</span>, value);
  };
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioButtonGroup</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;[&amp;_button]:w-[100px] [&amp;_button]:h-[80px]&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{handleOnValueChange}</span> /&gt;</span></span>
  )
}
</code></pre>
`,S=[{prop:"value",desc:"value of radio",type:"string",required:!1,default:"-"},{prop:"options",desc:"radio button config options(see RadioGroup)",type:"link: RadioOption(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/components.ts)",required:!0,default:"-"},{prop:"type",desc:"appearance of radio button",type:"tag: outline | solid",required:!1,default:"outline"},{prop:"size",desc:"size of radio button",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"radio change callback",type:"(value: string) => void",required:!1,default:"-"}],p=[{label:"S",value:"s"},{label:"M",value:"m"},{label:"L",value:"l"},{label:"XL",value:"xl",disabled:!0}],A=[{label:s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx(w,{size:28}),s.jsx("p",{children:"card"})]}),value:"bank"},{label:s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx(k,{size:28}),s.jsx("p",{children:"alipay"})]}),value:"alipay"},{label:s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx(C,{size:28}),s.jsx("p",{children:"wechat-pay"})]}),value:"wechat-pay"}];function K(){const a=o=>{console.log("you choose: ",o)};return s.jsxs(s.Fragment,{children:[s.jsx(V,{title:"RadioButtonGroup",sourceName:"RadioButtonGroup"}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{options:p,onValueChange:a}),s.jsx(c,{content:z})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"type"}),s.jsxs("div",{className:"flex flex-col gap-y-2",children:[s.jsx("p",{children:"type:outline"}),s.jsx(l,{type:"outline",options:p,onValueChange:a}),s.jsx("p",{children:"type:solid"}),s.jsx(l,{type:"solid",options:p,onValueChange:a})]}),s.jsx(c,{content:L})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"flex flex-col gap-y-3",children:[s.jsx("p",{children:"tiny"}),s.jsx(l,{size:"tiny",options:p,onValueChange:a}),s.jsx("p",{children:"small"}),s.jsx(l,{size:"small",options:p,onValueChange:a}),s.jsx("p",{children:"tiny"}),s.jsx(l,{size:"medium",options:p,onValueChange:a}),s.jsx("p",{children:"tiny"}),s.jsx(l,{size:"large",options:p,onValueChange:a})]}),s.jsx(c,{content:O})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"custom content"}),s.jsx(l,{className:"[&_button]:w-[100px] [&_button]:h-[80px]",options:A,onValueChange:a}),s.jsx(c,{content:$})]}),s.jsx(t,{as:"h2",className:"mb-4",children:"API"}),s.jsx(N,{rows:S})]})}export{K as default};
