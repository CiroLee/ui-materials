import{d as W,r as u,j as s,L as D,F as g,n as X}from"./index-7aiQm4Ms.js";import{C as Y}from"./CheckboxGroup-ChdtRMqL.js";import{N as Z,S as o,C as i,A as ss}from"./index-B548joKT.js";import{H as t}from"./index-BFX1Q4Ps.js";import{g as n}from"./input.style-BqcXTAcm.js";import"./index-CeUM9KKc.js";import"./index-DsxX9A_U.js";import"./index-CkL5R6mX.js";import"./index--LrMFM4X.js";import"./index-aQrpTcQC.js";const as=W({slots:{base:`${n.base} group`,input:n.input,prefix:n.prefix,rightBlock:"relative flex flex-col flex-center overflow-hidden",spinButton:`select-none relative bg-brand-500/10 flex flex-center opacity-0 transition-all duration-200 
    ease-linear group-hover:opacity-100 group/btn hover:bg-brand-500/20 rounded-[2px]`,spinArrow:"text-gray-400/60 group-hover/btn:text-brand-500"},variants:{size:{tiny:{base:n.tinyBase,input:`${n.smallInput} px-[6px]`,spinButton:"size-[10px]",spinArrow:"size-[10px]",rightBlock:"pr-[4px]"},small:{base:n.smallBase,input:`${n.smallInput} px-[6px]`,spinButton:"size-[10px]",spinArrow:"size-[10px]",rightBlock:"pr-[6px]"},medium:{base:n.mediumBase,input:`${n.mediumInput} px-[8px]`,spinButton:"size-[14px]",spinArrow:"size-[14px]",rightBlock:"pr-[8px]"},large:{base:n.largeBase,input:`${n.largeInput} px-[8px]`,spinButton:"size-[16px]",spinArrow:"size-[16px]",rightBlock:"pr-[8px]"}},disabled:{true:{base:n.disabledBase,input:n.disabledInput,rightBlock:"opacity-0"}},status:{error:{base:n.errorBase,prefix:"[&>*]:text-danger-500",suffix:"[&>*]:text-danger-500",spinButton:"bg-danger-500/10 hover:bg-danger-500/20"},warn:{base:n.warnBase,prefix:"[&>*]:text-warn-500",suffix:"[&>*]:text-warn-500",spinButton:"bg-warn-500/10 hover:bg-warn-500/20"},readonly:{}}},defaultVariants:{size:"medium"}}),$=u.forwardRef((x,N)=>{const{size:p,value:k,status:r,step:h=1,placeholder:L,min:j=-1/0,max:y=1/0,disabled:f,keyboard:z=!0,prefix:C,onChange:v,onInput:I,onBlur:q,onFocus:A,onStep:B,className:M,style:H}=x,{base:V,input:F,spinButton:S,spinArrow:_,rightBlock:T,prefix:E}=as(),K=u.useRef(null),[c,d]=u.useState(k??""),P=u.useMemo(()=>Number(c)>=y,[c]),U=u.useMemo(()=>Number(c)<=j,[c]),R=a=>a===""?null:Number(a),O=a=>{const e=a.currentTarget;d(e.value),I==null||I(R(e.value))},G=a=>{const e=a.currentTarget;v==null||v(R(e.value))},J=a=>{const e=a.currentTarget;if(e.value==="")return;const w=Number(e.value);w>y?d(y.toString()):w<j&&d(j.toString()),q==null||q(a)},b=(a,e,w=!1)=>{const m=c?e==="increase"?Number(c)+a:Number(c)-a:a;if(e==="increase"&&m<j)d(String(j));else{if(m<j||m>y||r==="readonly")return;d(String(m))}w&&(B==null||B(m,{step:a,type:e}))},Q=a=>{a.key!=="ArrowUp"&&a.key!=="ArrowDown"||(a.preventDefault(),[a.key==="ArrowUp",z].every(Boolean)&&b(h,"increase"),[a.key==="ArrowDown",z].every(Boolean)&&b(h,"decrease"))};return s.jsxs("label",{ref:N,className:V({size:p,status:r,disabled:f,class:M}),style:H,children:[C?s.jsx("div",{className:E({status:r}),children:C}):null,s.jsx("input",{ref:K,type:"number",value:c??"",disabled:f,placeholder:L,readOnly:r==="readonly",className:F({size:p,disabled:f,class:"input-number"}),onInput:O,onChange:G,onBlur:J,onFocus:A,onKeyDown:Q}),s.jsxs("div",{className:T({size:p,disabled:f}),children:[s.jsx("div",{className:S({status:r,size:p,class:`${P?"cursor-not-allowed":""}`}),onClick:()=>b(h,"increase",!0),children:s.jsx(D,{className:_()})}),s.jsx("div",{className:S({status:r,size:p,class:`${U?"cursor-not-allowed":""}`}),onClick:()=>b(h,"decrease",!0),children:s.jsx(D,{className:_({class:"rotate-180"})})})]})]})});$.displayName="InputNumber";const l=$,ns=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [val, setVal] = useState&lt;<span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px]&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{val}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{setVal}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>{val}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ls=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px] flex flex-col space-y-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;tiny&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;medium&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,es=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiMoneyCnyBoxLine</span>, <span class="hljs-title class_">RiBarChartLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/icon&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px] flex flex-col space-y-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiMoneyCnyBoxLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiBarChartLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ps=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px]&quot;</span> <span class="hljs-attr">min</span>=<span class="hljs-string">{2}</span> <span class="hljs-attr">max</span>=<span class="hljs-string">{20}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ts=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px]&quot;</span> <span class="hljs-attr">step</span>=<span class="hljs-string">{2}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,rs=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiMoneyCnyBoxLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[400px]&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{10}</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RIMoneyCnyBoxLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,cs=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiMoneyCnyBoxLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col space-y-3 w-[400px]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiMoneyCnyBoxLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiMoneyCnyBoxLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;readonly&quot;</span> <span class="hljs-attr">prefix</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiMoneyCnyBoxLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>} value={666} /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,os=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">InputNumber</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/InputNumber&#x27;</span>;


<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [keyboard, setKeyboard] = useState&lt;<span class="hljs-built_in">boolean</span>&gt;(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{keyboard}</span> <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{setKeyboard}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>keyboard enabled:{String(keyboard)}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">InputNumber</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-2 w-[400px]&quot;</span> <span class="hljs-attr">keyboard</span>=<span class="hljs-string">{keyboard}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,is=[{prop:"value",desc:"input value",type:"tag:number | null",required:!1,default:"-"},{prop:"size",desc:"input size",type:"tag: tiny | small| medium | large",required:!1,default:"medium"},{prop:"placeholder",desc:"input placeholder",type:"string",required:!1,default:"-"},{prop:"step",desc:"input step",type:"number",required:!1,default:"1"},{prop:"min",desc:"input min value",type:"number",required:!1,default:"-Infinity"},{prop:"max",desc:"input max value",type:"number",required:!1,default:"Infinity"},{prop:"disabled",desc:"whether set input disabled",type:"boolean",required:!1,default:"false"},{prop:"status",desc:"input status",type:"tag: error | warn | readonly",required:!1,default:"false"},{prop:"keyboard",desc:"whether enable using keyboard arrow to change input value",type:"boolean",required:!1,default:"true"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onChange",desc:"change event of InputNumber",type:"(value: number | null) => void;",required:"false",default:"-"},{prop:"onInput",desc:"input event of InputNumber",type:"(value: number | null) => void;",required:"false",default:"-"},{prop:"onBlur",desc:"blur event of InputNumber",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onFocus",desc:"focus event of InputNumber",type:"(e: React.FocusEventHandler<HTMLInputElement>) => void",required:"false",default:"-"},{prop:"onStep",desc:"step event of InputNumber",type:"(value: number, option: { step: number; type: 'increase' | 'decrease' }) => void",required:!1,default:"-"}];function ws(){const[x,N]=u.useState(null),[p,k]=u.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx(Z,{title:"InputNumber",sourceName:"InputNumber"}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{className:"w-[400px]",value:x,onChange:N}),s.jsx("p",{className:"mt-2",children:x}),s.jsx(i,{content:ns})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"w-[400px] flex flex-col space-y-3",children:[s.jsx(l,{size:"tiny",placeholder:"tiny"}),s.jsx(l,{size:"small",placeholder:"small"}),s.jsx(l,{size:"medium",placeholder:"medium"}),s.jsx(l,{size:"large",placeholder:"large"})]}),s.jsx(i,{content:ls})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"prefix"}),s.jsxs("div",{className:"w-[400px] flex flex-col space-y-3",children:[s.jsx(l,{prefix:s.jsx(g,{size:18})}),s.jsx(l,{prefix:s.jsx(X,{size:18})})]}),s.jsx(i,{content:es})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"min and max"}),s.jsx(l,{className:"w-[400px]",min:2,max:20}),s.jsx(i,{content:ps})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"step"}),s.jsx(l,{className:"w-[400px]",step:2,onStep:(r,h)=>{console.log("value:",r,"option:",h)}}),s.jsx(i,{content:ts})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"disabled"}),s.jsx(l,{className:"w-[400px]",disabled:!0,value:10,prefix:s.jsx(g,{size:18})}),s.jsx(i,{content:rs})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"status"}),s.jsxs("div",{className:"flex flex-col space-y-3 w-[400px]",children:[s.jsx(l,{status:"error",prefix:s.jsx(g,{size:18})}),s.jsx(l,{status:"warn",prefix:s.jsx(g,{size:18})}),s.jsx(l,{status:"readonly",prefix:s.jsx(g,{size:18}),value:666})]}),s.jsx(i,{content:cs})]}),s.jsxs(o,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-2",children:"keyboard"}),s.jsx(Y,{checked:p,onCheckedChange:k,children:s.jsxs("span",{children:["keyboard enabled:",String(p)]})}),s.jsx(l,{className:"mt-2 w-[400px]",keyboard:p}),s.jsx(i,{content:os})]}),s.jsx(t,{as:"h2",className:"mb-2",children:"API"}),s.jsx(ss,{rows:is})]})}export{ws as default};
