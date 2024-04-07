import{r as h,j as s,X as c,n as o}from"./index-BwkAii_s.js";import{N as j,D as i,S as l,A as u}from"./index-CoYEuxBG.js";import{H as n,C as p}from"./index-DcfM6-vL.js";import{I as a}from"./index-CP2An5ei.js";import{C as d}from"./CheckboxGroup-rmX-I4QS.js";import"./input.style-BqcXTAcm.js";import"./index-Cq3oz0ID.js";import"./index-hK3z6PwC.js";import"./index-BanSQ2Cz.js";import"./index-C_HT0aGO.js";import"./index-Bjxkl6hP.js";const m=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handler</span> = (<span class="hljs-params">e, text: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(text, (e.<span class="hljs-property">target</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">HTMLInputElement</span>).<span class="hljs-property">value</span>);
  }
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Input</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;input sth...&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;some texts&quot;</span>
      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{function(e)</span> {
        <span class="hljs-attr">handler</span>(<span class="hljs-attr">e</span>, &#x27;<span class="hljs-attr">input</span>&#x27;)
      }}
      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{function(e)</span> {
        <span class="hljs-attr">handler</span>(<span class="hljs-attr">e</span>, &#x27;<span class="hljs-attr">change</span>&#x27;)
      }}
      <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{function(e)</span> {
        <span class="hljs-attr">handler</span>(<span class="hljs-attr">e</span>, &#x27;<span class="hljs-attr">blur</span>&#x27;)
      }}
      <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{function(e)</span> {
        <span class="hljs-attr">handler</span>(<span class="hljs-attr">e</span>, &#x27;<span class="hljs-attr">focus</span>&#x27;)
      }}
    /&gt;</span></span>
  )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px] space-y-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;tiny size&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;small size&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;medium size&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;large size&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,x=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiUserLine</span>, <span class="hljs-title class_">RiSearchLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px] space-y-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;icon prefix...&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiUserLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;text prefix...&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">span</span>&gt;</span>+86<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;icon suffix...&quot;</span> <span class="hljs-attr">suffix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiSearchLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,f=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Checkbox&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [disabled, setDisabled] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;space-y-2 w-[400px]&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{disabled}</span> <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{setDisabled}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>disabled: {\`\${disabled}\`}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{!!disabled}</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;input sth...&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">span</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>} /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,y=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RIUserLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px] space-y-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiUserLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiUserLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;readonly...&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,w=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px]&quot;</span> <span class="hljs-attr">allowClear</span> /&gt;</span></span>
  )
}
</code></pre>
`,q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px] space-y-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">showCount</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">maxLength</span>=<span class="hljs-string">{10}</span> <span class="hljs-attr">showCount</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,k=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Input</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Input&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {

  <span class="hljs-keyword">return</span> (
     <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px]&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span></span>
  )
}
</code></pre>
`,I=[{prop:"type",desc:"type of Input",type:"tag:text | password",required:"false",default:"text"},{prop:"value",desc:"value of Input",type:"string",required:"false",default:"-"},{prop:"placeholder",desc:"placeholder of Input",type:"string",required:"false",default:"-"},{prop:"showCount",desc:"whether show count of Input",type:"boolean",required:"false",default:"false"},{prop:"showClear",desc:"whether show clear button",type:"boolean",required:!1,default:"false"},{prop:"maxLength",desc:"max length of Input",type:"number",required:"false",default:"-"},{prop:"prefix",desc:"prefix node of Input",type:"React.ReactNode",required:"false",default:"-"},{prop:"suffix",desc:"suffix node of Input",type:"React.ReactNode",required:"false",default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onChange",desc:"change event of Input",type:"(e: React.ChangeEvent<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onInput",desc:"input event of Input",type:"(e: React.FormEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onBlur",desc:"blur event of Input",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onFocus",desc:"focus event of Input",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"}];function H(){const[e,r]=h.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx(j,{title:"Input",sourceName:"Input"}),s.jsx(i,{children:"Form input component offen used to input one line words"}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(a,{className:"max-max-w-[400px]",placeholder:"input sth...",value:"some texts",onInput:t=>{console.log("input",t.target.value)},onChange:t=>{console.log("change",t.target.value)},onBlur:t=>{console.log("blur",t.target.value)},onFocus:t=>{console.log("focus",t.target.value)}}),s.jsx(p,{content:m})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"max-w-[400px] space-y-3",children:[s.jsx(a,{size:"tiny",placeholder:"tiny size"}),s.jsx(a,{size:"small",placeholder:"small size"}),s.jsx(a,{size:"medium",placeholder:"medium size"}),s.jsx(a,{size:"large",placeholder:"large size"})]}),s.jsx(p,{content:g})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"prefix and suffix"}),s.jsxs("div",{className:"max-w-[400px] space-y-3",children:[s.jsx(a,{placeholder:"icon prefix...",prefix:s.jsx(c,{size:18})}),s.jsx(a,{placeholder:"text prefix...",prefix:s.jsx("span",{children:"+86"})}),s.jsx(a,{placeholder:"icon suffix...",suffix:s.jsx(o,{size:18})})]}),s.jsx(p,{content:x})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"disabled"}),s.jsxs("div",{className:"space-y-2 max-w-[400px]",children:[s.jsx(d,{checked:e,onCheckedChange:r,children:s.jsxs("span",{children:["disabled: ",`${e}`]})}),s.jsx(a,{disabled:!!e,placeholder:"input sth...",prefix:s.jsx("span",{children:"$"})})]}),s.jsx(p,{content:f})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"status"}),s.jsxs("div",{className:"max-w-[400px] space-y-3",children:[s.jsx(a,{status:"error",placeholder:"error",prefix:s.jsx(c,{size:18})}),s.jsx(a,{status:"warn",placeholder:"warn",prefix:s.jsx(c,{size:18})}),s.jsx(a,{status:"readonly",placeholder:"readonly",value:"readonly..."})]}),s.jsx(p,{content:y})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"allow clear"}),s.jsx(a,{className:"max-w-[400px]",allowClear:!0}),s.jsx(p,{content:w})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"showCount"}),s.jsxs("div",{className:"max-w-[400px] space-y-3",children:[s.jsx(a,{placeholder:"without maxLength",showCount:!0}),s.jsx(a,{placeholder:"with maxLength",showCount:!0,maxLength:10})]}),s.jsx(p,{content:q})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"password"}),s.jsx(a,{type:"password",className:"max-w-[400px]",placeholder:"password"}),s.jsx(p,{content:k})]}),s.jsx(n,{as:"h2",className:"mb-4",children:"API"}),s.jsx(u,{rows:I})]})}export{H as default};
