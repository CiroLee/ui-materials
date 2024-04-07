import{d as D,r as t,j as s}from"./index-BwkAii_s.js";import{N as C,D as R,S as i,A as S}from"./index-CoYEuxBG.js";import{H as p,C as o}from"./index-DcfM6-vL.js";import{I as A}from"./index-CP2An5ei.js";import"./input.style-BqcXTAcm.js";const $=D({slots:{base:"inline-flex gap-3",input:"aspect-square text-center [&_input]:p-0 [&_input]:text-center"}}),y=t.forwardRef((e,x)=>{const{quantity:h,type:f,size:q,disabled:w,onValueChange:j,onComplete:u,className:k,style:I}=e,{base:b,input:P}=$(),[d,N]=t.useState([]),[c,v]=t.useState([]);t.useEffect(()=>{N(Array(h).fill(null).map(()=>t.createRef()))},[h]);const z=(r,n)=>{const a=d[n+1],m=r.target;v(g=>(g[n]=m.value,[...g])),j==null||j(m.value),a!=null&&a.current&&m.value&&a.current.focus()},_=(r,n)=>{if(r.key==="Backspace"&&c[n]===""){const a=d[n-1];a!=null&&a.current&&a.current.focus()}};return t.useEffect(()=>{c.length===h&&c.every(Boolean)&&(u==null||u(c))},[c]),s.jsx("div",{ref:x,className:b({class:k}),style:I,children:d.map((r,n)=>s.jsx(A,{inputRef:r,type:f,disabled:w,className:P(),maxLength:1,size:q,pwdIconVisible:!1,onInput:a=>z(a,n),onKeyDown:a=>_(a,n)},n))})});y.displayName="PinInput";const l=y,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">PinInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/PinInput&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Demo</span>() {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">onCompleteChange</span>=<span class="hljs-string">{(val)</span> =&gt;</span> {
      console.log(&#x27;complete change: &#x27;, val)
    }}
  )
</span></code></pre>
`,V=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">PinInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/PinInput&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Demo</span>() {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{6}</span> /&gt;</span></span>
  )
</code></pre>
`,B=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">PinInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/PinInput&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Demo</span>() {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span></span>
  )
</code></pre>
`,H=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">PinInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/PinInput&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Demo</span>() {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span></span>
  )
</code></pre>
`,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">PinInput</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/PinInput&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Demo</span>() {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col gap-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>tiny<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>medium<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>large<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PinInput</span> <span class="hljs-attr">quantity</span>=<span class="hljs-string">{4}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
</code></pre>
`,O=[{prop:"quantity",desc:"quantity of inputs",type:"number",required:!0,default:"-"},{prop:"type",desc:"input type, password type will hide contents",type:"tag: text | password",required:!1,default:"text"},{prop:"disabled",desc:"whether disabled input",type:"boolean",required:!1,default:"false"},{prop:"size",desc:"size of input",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"callback on input change",type:"(value: string) => void",required:!1,default:"-"},{prop:"onComplete",type:"(value: string[]) => void",desc:"callback when all inputs have valid values",required:!1,default:"-"}];function M(){return s.jsxs(s.Fragment,{children:[s.jsx(C,{title:"PinInput",sourceName:"PinInput"}),s.jsx(R,{children:"A component allows verification codes with auto-focus transfer"}),s.jsxs(i,{className:"mb-4",children:[s.jsx(p,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{quantity:4,onComplete:e=>{console.log("complete callback",e)}}),s.jsx(o,{content:E})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(p,{as:"h4",className:"mb-2",children:"quantity"}),s.jsx("div",{className:"flex flex-col",children:s.jsx(l,{quantity:6,onComplete:e=>{console.log("complete callback",e)}})}),s.jsx(o,{content:V})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(p,{as:"h4",className:"mb-2",children:"password"}),s.jsx(l,{type:"password",quantity:4}),s.jsx(o,{content:B})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(p,{as:"h4",className:"mb-2",children:"disabled"}),s.jsx(l,{quantity:4,disabled:!0}),s.jsx(o,{content:H})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(p,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx("p",{children:"tiny"}),s.jsx(l,{quantity:4,size:"tiny"}),s.jsx("p",{children:"small"}),s.jsx(l,{quantity:4,size:"small"}),s.jsx("p",{children:"medium"}),s.jsx(l,{quantity:4,size:"medium"}),s.jsx("p",{children:"large"}),s.jsx(l,{quantity:4,size:"large"})]}),s.jsx(o,{content:K})]}),s.jsx(p,{as:"h2",className:"mb-4",children:"API"}),s.jsx(S,{rows:O})]})}export{M as default};
