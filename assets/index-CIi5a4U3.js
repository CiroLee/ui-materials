import{d as D,r as t,j as s,i as B}from"./index-BwkAii_s.js";import{H as e,C as o,a as S,B as d}from"./index-DcfM6-vL.js";import{N as L,D as R,S as i,A as V}from"./index-CoYEuxBG.js";const $=D({slots:{base:"relative inline-block overflow-hidden",svg:"stroke-2",indicator:"transition-all",tracker:"stroke-black/10"},variants:{size:{small:{base:"w-[32px] h-[32px]"},medium:{base:"w-[56px] h-[56px]"},large:{base:"w-[80px] h-[80px]"}},color:{primary:{indicator:"stroke-brand-500"},info:{indicator:"stroke-info-500"},success:{indicator:"stroke-success-500"},warn:{indicator:"stroke-warn-500"},danger:{indicator:"stroke-danger-500"}}},defaultVariants:{size:"medium",color:"primary"}}),u=t.forwardRef((p,r)=>{const{percent:n=0,size:h,color:c,svgClassName:x,indicatorClassName:f,trackerClassName:k,className:y,style:w,children:C}=p,{svg:N,indicator:P,base:q,tracker:b}=$(),g=t.useRef(null),[l,v]=t.useState(0),_=()=>{const j=2*Math.PI*10;v(j)},z=t.useCallback(()=>{const j=n<0?0:n>100?100:n,m=l-l*j/100;return m>=l?l:m},[n,l]);return t.useEffect(()=>{g.current&&_()},[]),s.jsxs("div",{className:q({size:h,class:y}),style:w,ref:r,children:[s.jsxs("svg",{ref:g,viewBox:"0 0 24 24",fill:"none",className:N({size:h,class:x}),children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",strokeLinecap:"round",transform:"rotate(-90 12 12)",className:b({class:k})}),s.jsx("circle",{cx:"12",cy:"12",r:"10",transform:"rotate(-90 12 12)",strokeLinecap:"round",className:P({color:c,class:f}),strokeDashoffset:z(),strokeDasharray:`${l} ${l}`})]}),s.jsx("div",{className:"absolute inset-0 flex flex-center",children:C})]})});u.displayName="CircleProgress";const a=u,A=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">CircleProgress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/CircleProgress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> /&gt;</span></span>
    )
}
</code></pre>
`,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">CircleProgress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/CircleProgress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center [&amp;_div]:mr-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,G=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">CircleProgress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/CircleProgress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center [&amp;_div]:mr-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warn&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,H=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">CircleProgress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/CircleProgress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [percent, setPercent] = <span class="hljs-title function_">useState</span>(<span class="hljs-number">20</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handlePercentChange</span> = (<span class="hljs-params">value: <span class="hljs-built_in">number</span></span>) =&gt; {
    <span class="hljs-keyword">const</span> newVal = value + percent;
    <span class="hljs-keyword">if</span> (newVal &lt; <span class="hljs-number">0</span>) {
      <span class="hljs-title function_">setPercent</span>(<span class="hljs-number">0</span>);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (newVal &gt; <span class="hljs-number">100</span>) {
      <span class="hljs-title function_">setPercent</span>(<span class="hljs-number">100</span>);
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-title function_">setPercent</span>(newVal);
    }
  };
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{percent}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{percent}%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CircleProgress</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> handlePercentChange(-10)}&gt;-<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> handlePercentChange(10)}&gt;+<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,I=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">CircleProgress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/CircleProgress&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiALertLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CircleProgress</span>
        <span class="hljs-attr">percent</span>=<span class="hljs-string">{60}</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;square-[110px]&quot;</span>
        <span class="hljs-attr">trackerClassName</span>=<span class="hljs-string">&quot;stroke-[rgba(45,117,117,0.5)]&quot;</span>
        <span class="hljs-attr">indicatorClassName</span>=<span class="hljs-string">&quot;stroke-[#2558d0]&quot;</span>
        <span class="hljs-attr">svgClassName</span>=<span class="hljs-string">&quot;stroke-[3]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiALertLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{32}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CircleProgress</span>&gt;</span></span>
    )
}
</code></pre>
`,T=[{prop:"percent",desc:"percentage of the progress, min is 0 and max is 100",type:"number",required:!1,default:"-"},{prop:"size",desc:"size of progress",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"color",desc:"color of progress",type:"tag: primary | success | info | warn | danger",required:!1,default:"primary"},{prop:"indicatorClassName",desc:"custom indicator className",type:"string",required:!1,default:"-"},{prop:"svgClassName",desc:"custom svg wrapper className",type:"string",required:!1,default:"-"},{prop:"trackerClassName",desc:"custom tracker bar className",type:"string",required:!1,default:"-"},{prop:"className",desc:"root wrapper className",type:"string",required:!1,default:"-"},{prop:"style",desc:"root wrapper style",type:"React.CSSProperties",required:!1,default:"-"}];function J(){const[p,r]=t.useState(20),n=h=>{const c=h+p;c<0?r(0):c>100?r(100):r(c)};return s.jsxs(s.Fragment,{children:[s.jsx(L,{title:"CircleProgress",sourceName:"CircleProgress"}),s.jsx(R,{children:"A component to display progress width circle shape"}),s.jsxs(i,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(a,{percent:20}),s.jsx(o,{content:A})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"flex items-center [&_div]:mr-3",children:[s.jsx(a,{percent:20,size:"small"}),s.jsx(a,{percent:20,size:"medium"}),s.jsx(a,{percent:20,size:"large"})]}),s.jsx(o,{content:E})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"color"}),s.jsxs("div",{className:"flex items-center gap-x-3",children:[s.jsx(a,{percent:20,color:"primary"}),s.jsx(a,{percent:20,color:"success"}),s.jsx(a,{percent:20,color:"info"}),s.jsx(a,{percent:20,color:"warn"}),s.jsx(a,{percent:20,color:"danger"})]}),s.jsx(o,{content:G})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"dynamic"}),s.jsx(a,{percent:p,size:"large",children:s.jsxs("span",{children:[p,"%"]})}),s.jsxs(S,{children:[s.jsx(d,{outline:!0,onClick:()=>n(-10),children:"-"}),s.jsx(d,{outline:!0,onClick:()=>n(10),children:"+"})]}),s.jsx(o,{content:H})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"custom"}),s.jsx(a,{percent:60,className:"w-[110px] h-[110px]",trackerClassName:"stroke-[rgba(45,117,117,0.5)]",indicatorClassName:"stroke-[#2558d0]",svgClassName:"stroke-[3]",children:s.jsx(B,{size:34,color:"red"})}),s.jsx(o,{content:I})]}),s.jsx(e,{as:"h2",className:"mb-4",children:"API"}),s.jsx(V,{rows:T})]})}export{J as default};
