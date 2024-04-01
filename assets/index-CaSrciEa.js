import{r as a,j as s,H as l}from"./index-DNICQ8NF.js";import{N as S,D as B,S as t,A as _}from"./index-rJa6HX1d.js";import{H as n,B as p,C as e}from"./index-_DhQyXzb.js";import{R as c}from"./index-DYlX25w6.js";import"./index-C-cdsa15.js";import"./index-CA-e9VSr.js";import"./index-C4qS0b9r.js";import"./index-CSqJZj69.js";import"./index-D759T38V.js";import"./index-Cx4UYWJX.js";import"./index-CkxT94Wl.js";import"./index-CZ68qV6A.js";const q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
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
`,N=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
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
`,z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
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
`,C=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
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
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
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
`,T=[{prop:"show",desc:"whether to display the Loading component",type:"boolean",required:!1,default:"-"},{prop:"size",desc:"size of the Loading icon",type:"tag: tiny | small | medium | large | number | string",required:!1,default:"medium"},{prop:"text",desc:"loading text",type:"string",required:!1,default:"-"},{prop:"backdrop",desc:"backdrop type of Loading component",type:"link: Backdrop(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/common.ts)",required:!1,default:"translucent"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],D=[{label:"tiny",value:"tiny"},{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"},{label:"custom(100px)",value:"100"}],G=[{label:"translucent",value:"translucent"},{label:"blur",value:"blur"},{label:"transparent",value:"transparent"}],O=[{label:"fullscreen",value:"fullscreen"},{label:"non-fullscreen",value:"container"}];function Q(){const[m,r]=a.useState(!1),[x,i]=a.useState(!1),[y,h]=a.useState(!1),[k,j]=a.useState(!1),[w,d]=a.useState(!1),[g,f]=a.useState("medium"),[u,b]=a.useState("translucent"),[L,v]=a.useState("container");return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Loading",sourceName:"Loading"}),s.jsx(B,{children:"A component to show loading status"}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(p,{onClick:()=>{r(!0),setTimeout(()=>{r(!1)},1500)},children:"show loading"}),s.jsx(l,{show:m,text:"loading..."}),s.jsx(e,{content:q})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"size"}),s.jsx(c,{className:"mb-3 flex flex-wrap gap-3",options:D,value:g,onValueChange:o=>f(o)}),s.jsx(p,{onClick:()=>{i(!0),setTimeout(()=>{i(!1)},1500)},children:"show loading"}),s.jsx(l,{show:x,size:g,text:"loading..."}),s.jsx(e,{content:N})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"without text"}),s.jsx(p,{onClick:()=>{h(!0),setTimeout(()=>{h(!1)},1500)},children:"show loading"}),s.jsx(l,{show:y}),s.jsx(e,{content:C})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"backdrop"}),s.jsx(c,{className:"mb-2",options:G,value:u,onValueChange:o=>b(o)}),s.jsx(p,{onClick:()=>{j(!0),setTimeout(()=>{j(!1)},1500)},children:"show loading"}),s.jsx(l,{show:k,backdrop:u,text:"loading..."}),s.jsx(e,{content:z})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"fullscreen"}),s.jsx(c,{className:"mb-2",options:O,value:"container",onValueChange:v}),s.jsxs("div",{className:"relative mb-3 p-2 border border-zinc-200 rounded-2",children:[s.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),s.jsx(l,{show:w,fullscreen:L==="fullscreen",text:"loading..."})]}),s.jsx(p,{onClick:()=>{d(!0),setTimeout(()=>{d(!1)},1500)},children:"show loading"}),s.jsx(e,{content:R})]}),s.jsx(n,{as:"h2",className:"mb-4",children:"API"}),s.jsx(_,{rows:T})]})}export{Q as default};
