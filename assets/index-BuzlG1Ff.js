import{r as t,j as s}from"./index-DVJh4_k1.js";import{H as p,C as i}from"./index-C2mXlWvz.js";import{N as d,S as o,T as m,a as g,b as a,c as b,d as x,e as l,A as u}from"./index-BJRHTw7p.js";import{S as c}from"./index-Ckg4ax1j.js";import"./index-CmCUS2YP.js";import"./index-BqrRrWwI.js";import"./index-DW2Cozmn.js";import"./index-GVr0sQU_.js";const T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Table</span>, <span class="hljs-title class_">TableBody</span>, <span class="hljs-title class_">TableDataCell</span>, <span class="hljs-title class_">TableHeader</span>, <span class="hljs-title class_">TableHeaderCell</span>, <span class="hljs-title class_">TableRow</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Table&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [checked, setChecked] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-2 flex items-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-1 mr-2&quot;</span>&gt;</span>border:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{border}</span> <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{setBorder}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Table</span> <span class="hljs-attr">border</span>=<span class="hljs-string">{border}</span> <span class="hljs-attr">headerFixed</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;h-[220px]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TableHeader</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TableHeaderCell</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">TableHeaderCell</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TableHeaderCell</span>&gt;</span>Desc<span class="hljs-tag">&lt;/<span class="hljs-name">TableHeaderCell</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">TableHeaderCell</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">TableHeaderCell</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TableHeader</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TableBody</span>&gt;</span>
          {new Array(10).fill(0).map((_, index) =&gt; (
              <span class="hljs-tag">&lt;<span class="hljs-name">TableRow</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">TableDataCell</span>&gt;</span>Radix<span class="hljs-tag">&lt;/<span class="hljs-name">TableDataCell</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">TableDataCell</span>&gt;</span>Headless UI<span class="hljs-tag">&lt;/<span class="hljs-name">TableDataCell</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">TableDataCell</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-blue-500&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.radix-ui.com&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_black&quot;</span>&gt;</span>
                    https://www.radix-ui.com
                  <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">TableDataCell</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">TableRow</span>&gt;</span>
          ))}
          <span class="hljs-tag">&lt;/<span class="hljs-name">TableBody</span>&gt;</span>
       <span class="hljs-tag">&lt;/<span class="hljs-name">Table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,w=[{prop:"border",desc:"whether show table border",type:"boolean",required:!1,default:!1},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"string",required:!1,default:"-"}];function S(){const[n,r]=t.useState(!0),[e,h]=t.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Table",sourceName:"Table"}),s.jsxs(o,{className:"mb-4",children:[s.jsx(p,{as:"h4",className:"mb-2",children:"basic"}),s.jsxs("div",{className:"mb-2 flex items-center",children:[s.jsx("span",{className:"mb-1 mr-2",children:"border:"}),s.jsx(c,{size:"small",checked:n,onCheckedChange:r})]}),s.jsxs("div",{className:"mb-2 flex items-center",children:[s.jsx("span",{className:"mb-1 mr-2",children:"headerFixed:"}),s.jsx(c,{size:"small",checked:e,onCheckedChange:h})]}),s.jsxs(m,{border:n,headerFixed:e,className:"h-[220px]",children:[s.jsxs(g,{children:[s.jsx(a,{children:"Name"}),s.jsx(a,{children:"Desc"}),s.jsx(a,{children:"Link"})]}),s.jsx(b,{children:new Array(10).fill(0).map((f,j)=>s.jsxs(x,{children:[s.jsx(l,{children:"Radix"}),s.jsx(l,{children:"Headless UI"}),s.jsx(l,{children:s.jsx("a",{className:"text-blue-500",href:"https://www.radix-ui.com",target:"_black",children:"https://www.radix-ui.com"})})]},j))})]}),s.jsx(i,{content:T})]}),s.jsx(p,{as:"h2",className:"mb-2",children:"API"}),s.jsx(u,{rows:w})]})}export{S as default};
