import{d as B,r as a,j as s,A as _,m as q,U as N}from"./index-DVJh4_k1.js";import{N as z,S as t,A as C}from"./index-BJRHTw7p.js";import{H as l,B as p,C as e}from"./index-C2mXlWvz.js";import{R as k}from"./index-Td5uBg8c.js";import"./index-sf1bR_d_.js";import"./index-CmCUS2YP.js";import"./index-BqrRrWwI.js";import"./index-DW2Cozmn.js";import"./index-DbxdkObA.js";import"./index-BKb5tYFp.js";import"./index-GVr0sQU_.js";import"./index-DJeFikaz.js";const R=B({slots:{base:"size-full flex flex-col flex-center absolute inset-0 z-loading",text:"text-brand-500"},variants:{backdrop:{translucent:{base:"bg-white-mask"},blur:{base:"bg-white-mask backdrop-blur-sm"},transparent:{base:"bg-transparent"}},fullscreen:{true:{base:"fixed"}}},defaultVariants:{backdrop:"translucent",fullscreen:!0}}),b=a.forwardRef((u,c)=>{const{show:g,size:n="medium",text:r,backdrop:i,fullscreen:m,className:h,style:x}=u,{base:j,text:d}=R(),y=a.useMemo(()=>{switch(n){case"tiny":return 24;case"small":return 36;case"medium":return 48;case"large":return 64;default:return n}},[n]);return s.jsx(_,{children:g?s.jsxs(q.div,{ref:c,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:j({backdrop:i,fullscreen:m,class:h}),style:x,children:[s.jsx(N,{size:y,className:"animate-spin text-brand-500"}),r?s.jsx("p",{className:d({class:`${n==="tiny"?"text-[14px]":""}`}),children:r}):null]}):null})});b.displayName="Loading";const o=b,T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Loading</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Loading&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [loading, setLoading] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          setLoading(true);
          setTimeout(() =&gt; {
            setLoading(false);
          }, 1500);
        }}&gt;
        show loading...
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{loading}</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;loading...&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Loading</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Loading&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Size</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/types/common&#x27;</span>;

<span class="hljs-keyword">const</span> sizeOptions = [
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;tiny&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;tiny&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;small&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;small&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;medium&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;medium&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;large&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;large&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;custom(100px)&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;100&#x27;</span> },
];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [loading, setLoading] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [size, setSize] = useState&lt;<span class="hljs-title class_">Size</span>&gt;(<span class="hljs-string">&#x27;medium&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-2&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{sizeOptions}</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{size}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(value)</span> =&gt;</span> setSize(value)}
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          setLoading(true);
          setTimeout(() =&gt; {
            setLoading(false);
          }, 1500);
        }}&gt;
        show loading
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{loading}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{size}</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;loading...&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,O=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Loading</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Loading&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Backdrop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/types/common&#x27;</span>;

<span class="hljs-keyword">const</span> backdropOptions = [
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;translucent&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;translucent&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;blur&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;blur&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;transparent&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;transparent&#x27;</span> },
];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [loading, setLoading] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [backdrop, setBackDrop] = useState&lt;<span class="hljs-title class_">Backdrop</span>&gt;(<span class="hljs-string">&#x27;translucent&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-2&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{backdropOptions}</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{size}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(value)</span> =&gt;</span> setBackDrop(value)}
      /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          setLoading(true);
          setTimeout(() =&gt; {
            setLoading(false);
          }, 1500);
        }}&gt;
        show loading
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{loading}</span> <span class="hljs-attr">backdrop</span>=<span class="hljs-string">{backdrop}</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;loading...&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Loading</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Loading&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [loading, setLoading] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          setLoading(true);
          setTimeout(() =&gt; {
            setLoading(false);
          }, 1500);
        }}&gt;
        show loading...
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{loading}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,V=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Loading</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Loading&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Size</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/types/common&#x27;</span>;

<span class="hljs-keyword">const</span> fullscreenOptions = [
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;fullscreen&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;fullscreen&#x27;</span> },
  { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;non-fullscreen&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;container&#x27;</span> },
];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [loading, setLoading] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
 <span class="hljs-keyword">const</span> [fullscreen, setFullscreen] = useState&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">&#x27;container&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-2&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{fullscreenOptions}</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">{size}</span>
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{setFullscreen}</span>
      /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          setLoading(true);
          setTimeout(() =&gt; {
            setLoading(false);
          }, 1500);
        }}&gt;
        show loading
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{loading}</span> <span class="hljs-attr">fullscreen</span>=<span class="hljs-string">{fullscreen}</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;loading...&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,$=[{prop:"show",desc:"whether to display the Loading component",type:"boolean",required:!1,default:"-"},{prop:"size",desc:"size of the Loading icon",type:"tag: tiny | small | medium | large | number | string",required:!1,default:"medium"},{prop:"text",desc:"loading text",type:"string",required:!1,default:"-"},{prop:"backdrop",desc:"backdrop type of Loading component",type:"link: Backdrop(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/common.ts)",required:!1,default:"translucent"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],A=[{label:"tiny",value:"tiny"},{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"},{label:"custom(100px)",value:"100"}],F=[{label:"translucent",value:"translucent"},{label:"blur",value:"blur"},{label:"transparent",value:"transparent"}],P=[{label:"fullscreen",value:"fullscreen"},{label:"non-fullscreen",value:"container"}];function ss(){const[u,c]=a.useState(!1),[g,n]=a.useState(!1),[r,i]=a.useState(!1),[m,h]=a.useState(!1),[x,j]=a.useState(!1),[d,y]=a.useState("medium"),[w,L]=a.useState("translucent"),[v,S]=a.useState("container");return s.jsxs(s.Fragment,{children:[s.jsx(z,{title:"Loading",sourceName:"Loading"}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(p,{onClick:()=>{c(!0),setTimeout(()=>{c(!1)},1500)},children:"show loading"}),s.jsx(o,{show:u,text:"loading..."}),s.jsx(e,{content:T})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"size"}),s.jsx(k,{className:"mb-3 flex flex-wrap gap-3",options:A,value:d,onValueChange:f=>y(f)}),s.jsx(p,{onClick:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:"show loading"}),s.jsx(o,{show:g,size:d,text:"loading..."}),s.jsx(e,{content:G})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"without text"}),s.jsx(p,{onClick:()=>{i(!0),setTimeout(()=>{i(!1)},1500)},children:"show loading"}),s.jsx(o,{show:r}),s.jsx(e,{content:D})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"backdrop"}),s.jsx(k,{className:"mb-2",options:F,value:w,onValueChange:f=>L(f)}),s.jsx(p,{onClick:()=>{h(!0),setTimeout(()=>{h(!1)},1500)},children:"show loading"}),s.jsx(o,{show:m,backdrop:w,text:"loading..."}),s.jsx(e,{content:O})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"fullscreen"}),s.jsx(k,{className:"mb-2",options:P,value:"container",onValueChange:S}),s.jsxs("div",{className:"relative mb-3 p-2 border border-zinc-200 rounded-2",children:[s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),s.jsx(o,{show:x,fullscreen:v==="fullscreen",text:"loading..."})]}),s.jsx(p,{onClick:()=>{j(!0),setTimeout(()=>{j(!1)},1500)},children:"show loading"}),s.jsx(e,{content:V})]}),s.jsx(l,{as:"h2",className:"mb-4",children:"API"}),s.jsx(C,{rows:$})]})}export{ss as default};
