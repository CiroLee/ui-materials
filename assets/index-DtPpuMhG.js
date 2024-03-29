import{r as j,d as w,j as s}from"./index-DckClljG.js";import{N as _,D as V,S as i,A as z}from"./index-BOOu6lZm.js";import{$ as C,b as y,_ as $}from"./index-CIbmra9d.js";import{H as h,C as u,a as B,B as f}from"./index-DeVYuj6E.js";const q="Progress",g=100,[D,ns]=C(q),[E,S]=D(q),N=j.forwardRef((a,n)=>{const{__scopeProgress:e,value:l,max:p,getValueLabel:r=R,...m}=a,o=x(p)?p:g,c=b(l,o)?l:null,k=d(c)?r(c,o):void 0;return j.createElement(E,{scope:e,value:c,max:o},j.createElement(y.div,$({"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":d(c)?c:void 0,"aria-valuetext":k,role:"progressbar","data-state":v(c,o),"data-value":c??void 0,"data-max":o},m,{ref:n})))});N.propTypes={max(a,n,e){const l=a[n],p=String(l);return l&&!x(l)?new Error(M(p,e)):null},value(a,n,e){const l=a[n],p=String(l),r=x(a.max)?a.max:g;return l!=null&&!b(l,r)?new Error(G(p,e)):null}};const A="ProgressIndicator",I=j.forwardRef((a,n)=>{var e;const{__scopeProgress:l,...p}=a,r=S(A,l);return j.createElement(y.div,$({"data-state":v(r.value,r.max),"data-value":(e=r.value)!==null&&e!==void 0?e:void 0,"data-max":r.max},p,{ref:n}))});function R(a,n){return`${Math.round(a/n*100)}%`}function v(a,n){return a==null?"indeterminate":a===n?"complete":"loading"}function d(a){return typeof a=="number"}function x(a){return d(a)&&!isNaN(a)&&a>0}function b(a,n){return d(a)&&!isNaN(a)&&a<=n&&a>=0}function M(a,n){return`Invalid prop \`max\` of value \`${a}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${g}\`.`}function G(a,n){return`Invalid prop \`value\` of value \`${a}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${g} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const T=N,L=I,O=w({base:"size-full transition-transform duration-300 ease rounded-[inherit]",variants:{color:{primary:"bg-brand-500",info:"bg-info-500",success:"bg-success-500",warn:"bg-warn-500",danger:"bg-danger-500"},striped:{true:"bg-striped-gradient bg-[length:1.25rem_1.25rem]"}},defaultVariants:{size:"medium",color:"primary"}},{twMerge:!1}),F=w({base:"overflow-hidden relative bg-black/10",variants:{size:{small:"h-[6px] rounded-[3px]",medium:"h-[8px] rounded-[4px]",large:"h-[12px] rounded-[6px]"}},defaultVariants:{size:"medium"}}),P=j.forwardRef((a,n)=>{const{percent:e=0,size:l,color:p,striped:r,className:m,style:o}=a;return s.jsx(T,{ref:n,value:e,className:F({size:l,class:m}),style:{transform:"translateZ(0)",...o},children:s.jsx(L,{className:O({color:p,striped:r}),style:{transform:`translateX(-${100-e}%)`}})})});P.displayName="Progress";const t=P,H=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Progress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Progress&#x27;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span></span>
  )
}
</code></pre>
`,X=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Progress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Progress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;space-y-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,U=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Progress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Progress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
     <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;space-y-3&quot;</span>&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
       <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,Z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Progress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Progress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;space-y-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,J=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Progress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Progress&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span>, { <span class="hljs-title class_">ButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [percent, setPercent] = <span class="hljs-title function_">useState</span>(<span class="hljs-number">10</span>);
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handleChangePercent</span> = (<span class="hljs-params">value: <span class="hljs-built_in">number</span></span>) =&gt; {
    <span class="hljs-keyword">const</span> newVal = value + percent;
      <span class="hljs-keyword">if</span> (newVal &gt; <span class="hljs-number">100</span>) {
        <span class="hljs-title function_">setPercent</span>(<span class="hljs-number">100</span>);
      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (newVal &lt; <span class="hljs-number">0</span>) {
        <span class="hljs-title function_">setPercent</span>(<span class="hljs-number">0</span>);
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-title function_">setPercent</span>(newVal);
      }
};
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;space-y-3&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">percent</span>=<span class="hljs-string">{percent}</span> <span class="hljs-attr">striped</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4 mr-2&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{percent}%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> handleChangePercent(-10)}&gt;-<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> handleChangePercent(10)}&gt;+<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Progress</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Progress&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Progress</span>
      <span class="hljs-attr">percent</span>=<span class="hljs-string">{65}</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-3/4 bg-pink-400/20 h-[16px] rounded-[8px] [&amp;_div]:bg-blue-600 [&amp;_div]:rounded-none&quot;</span>
    /&gt;</span></span>
  )
}
</code></pre>
`,Q=[{prop:"percent",desc:"percentage of the progress",type:"number",required:!1,default:"-"},{prop:"size",desc:"size of the progress",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"colors",desc:"color of the progress",type:"tag: primary | success | info | warn | danger",required:!1,default:"primary"},{prop:"striped",type:"boolean",desc:"whether the progress indicator is striped style",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function ls(){const[a,n]=j.useState(10),e=l=>{const p=l+a;p>100?n(100):p<0?n(0):n(p)};return s.jsxs(s.Fragment,{children:[s.jsx(_,{title:"Progress",sourceName:"Progress"}),s.jsx(V,{children:"Display a progress bar"}),s.jsxs(i,{className:"mb-4",children:[s.jsx(h,{as:"h2",className:"mb-2",children:"basic"}),s.jsx(t,{percent:65,className:"w-3/4"}),s.jsx(u,{content:H})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(h,{as:"h2",className:"mb-2",children:"size"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(t,{percent:65,size:"small",className:"w-3/4"}),s.jsx(t,{percent:65,size:"medium",className:"w-3/4"}),s.jsx(t,{percent:65,size:"large",className:"w-3/4"})]}),s.jsx(u,{content:X})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(h,{as:"h2",className:"mb-2",children:"color"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(t,{percent:65,color:"primary",className:"w-3/4"}),s.jsx(t,{percent:65,color:"success",className:"w-3/4"}),s.jsx(t,{percent:65,color:"info",className:"w-3/4"}),s.jsx(t,{percent:65,color:"warn",className:"w-3/4"}),s.jsx(t,{percent:65,color:"danger",className:"w-3/4"})]}),s.jsx(u,{content:U})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(h,{as:"h2",className:"mb-2",children:"striped"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(t,{percent:65,striped:!0,color:"primary",className:"w-3/4"}),s.jsx(t,{percent:65,striped:!0,color:"success",className:"w-3/4"}),s.jsx(t,{percent:65,striped:!0,color:"info",className:"w-3/4"}),s.jsx(t,{percent:65,striped:!0,color:"warn",className:"w-3/4"}),s.jsx(t,{percent:65,striped:!0,color:"danger",className:"w-3/4"})]}),s.jsx(u,{content:Z})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(h,{as:"h2",className:"mb-2",children:"dynamic"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(t,{percent:a,striped:!0,color:"primary",className:"w-3/4 mr-2"}),s.jsxs("span",{children:[a,"%"]})]}),s.jsxs(B,{children:[s.jsx(f,{outline:!0,onClick:()=>e(-10),children:"-"}),s.jsx(f,{outline:!0,onClick:()=>e(10),children:"+"})]})]}),s.jsx(u,{content:J})]}),s.jsxs(i,{className:"mb-4",children:[s.jsx(h,{as:"h2",className:"mb-2",children:"custom"}),s.jsx(t,{percent:65,className:"w-3/4 bg-pink-400/20 h-[16px] rounded-[8px] [&_div]:bg-blue-600 [&_div]:rounded-none"}),s.jsx(u,{content:K})]}),s.jsx(h,{as:"h2",className:"mb-4",children:"API"}),s.jsx(z,{rows:Q})]})}export{ls as default};
