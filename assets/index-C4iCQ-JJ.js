import{d as b,r as q,j as s,e as y,s as B}from"./index-DVJh4_k1.js";import{H as t,C as p}from"./index-C2mXlWvz.js";import{A as a}from"./AvatarGroup-C59P6-m8.js";import{N as k,S as e,A as w}from"./index-BJRHTw7p.js";import"./index-CmCUS2YP.js";import"./index-DW2Cozmn.js";const v=b({base:"flex justify-center items-center absolute bg-[var(--bg-color)] text-[--text-color]  border-white box-border origin-center -translate-y-1/2",variants:{size:{small:"min-w-[16px] h-[16px] text-[10px] rounded-[8px]",medium:"min-w-[20px] h-[20px] text-[14px] rounded-[10px]",large:"min-w-[24px] h-[24px] text-[16px] rounded-[12px]"},placement:{"top-right":"","top-left":"","bottom-right":"","bottom-left":""},outline:{false:"border-0",true:"border-[2px]"}},compoundVariants:[{size:"small",placement:"top-right",class:"top-[10%] right-[10%] translate-x-1/2"},{size:"medium",placement:"top-right",class:"top-[8%] right-[8%] translate-x-1/2"},{size:"large",placement:"top-right",class:"top-[6%] right-[6%] translate-x-1/2"},{size:"small",placement:"top-left",class:"top-[10%] left-[10%] -translate-x-1/2"},{size:"medium",placement:"top-left",class:"top-[8%] left-[8%] -translate-x-1/2"},{size:"large",placement:"top-left",class:"top-[6%] left-[6%] -translate-x-1/2"},{size:"small",placement:"bottom-right",class:"bottom-[10%] right-[10%] translate-y-1/2 translate-x-1/2"},{size:"medium",placement:"bottom-right",class:"bottom-[8%] right-[8%] translate-y-1/2 translate-x-1/2"},{size:"large",placement:"bottom-right",class:"bottom-[6%] right-[6%] translate-y-1/2 translate-x-1/2"},{size:"small",placement:"bottom-left",class:"bottom-[10%] left-[10%] translate-y-1/2 -translate-x-1/2"},{size:"medium",placement:"bottom-left",class:"bottom-[8%] left-[8%] translate-y-1/2 -translate-x-1/2"},{size:"large",placement:"bottom-left",class:"bottom-[6%] left-[6%] translate-y-1/2 -translate-x-1/2"}],defaultVariants:{size:"medium",placement:"top-right"}}),c=q.forwardRef(function(r,o){const{size:h,placement:j,content:g,bgColor:i="#FF4C3F",textColor:m="#fff",outline:d=!0,children:u,className:x,style:f}=r;return s.jsxs("div",{className:"inline-flex relative box-border",ref:o,children:[u,s.jsx("div",{className:v({size:h,placement:j,outline:d,class:x}),style:{"--bg-color":i,"--text-color":m,...f},children:g})]})});c.displayName="Badge";const n=c,N=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Badge&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Badge&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">bgColor</span>=<span class="hljs-string">&quot;#8749F5&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">bgColor</span>=<span class="hljs-string">&quot;#ffc000&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">bgColor</span>=<span class="hljs-string">&quot;green&quot;</span> <span class="hljs-attr">textColor</span>=<span class="hljs-string">&quot;purple&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,C=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Badge&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;px-1&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;99+&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-right&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-right&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-left&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;9&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-left&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,_=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Badge&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">outline</span>=<span class="hljs-string">{false}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">outline</span>=<span class="hljs-string">{false}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Badge&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiNotification2Line</span>, <span class="hljs-title class_">Check</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiNotification2Line</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{12}</span> /&gt;</span>}&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RiCheckLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{12}</span> /&gt;</span>} bgColor=&quot;#5bce5b&quot;&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Badge</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-right&quot;</span> <span class="hljs-attr">bgColor</span>=<span class="hljs-string">&quot;#5bce5b&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Badge</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,A=[{prop:"content",desc:"badge content",type:"React.ReactNode",required:!1,default:"-"},{prop:"size",desc:"badge size",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"bgColor",desc:"badge background color",type:"string",required:!1,default:"#FF4C3F"},{prop:"textColor",desc:"badge text color",type:"string",required:!1,default:"#fff"},{prop:"placement",desc:"badge placement",type:"tag: top-right | top-left | bottom-right | bottom-left",required:!1,default:"top-right"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],l="https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png";function V(){return s.jsxs(s.Fragment,{children:[s.jsx(k,{title:"Badge",sourceName:"Badge"}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-4",children:"size"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{size:"small",content:"9",children:s.jsx(a,{src:l})}),s.jsx(n,{size:"medium",content:"9",children:s.jsx(a,{src:l})}),s.jsx(n,{size:"large",content:"9",children:s.jsx(a,{src:l})})]}),s.jsx(p,{content:N})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-4",children:"bgColor & textColor"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{content:"2",bgColor:"#8749F5",children:s.jsx(a,{src:l})}),s.jsx(n,{content:"2",bgColor:"#ffc000",children:s.jsx(a,{src:l})}),s.jsx(n,{content:"2",bgColor:"green",textColor:"purple",children:s.jsx(a,{src:l})})]}),s.jsx(p,{content:z})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-4",children:"placements"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{className:"px-1",content:"99+",placement:"top-right",children:s.jsx(a,{src:l})}),s.jsx(n,{content:"9",placement:"bottom-right",children:s.jsx(a,{src:l})}),s.jsx(n,{content:"9",placement:"top-left",children:s.jsx(a,{src:l})}),s.jsx(n,{content:"9",placement:"bottom-left",children:s.jsx(a,{src:l})})]}),s.jsx(p,{content:C})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-4",children:"disabled outline"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{content:"2",outline:!1,children:s.jsx(a,{shape:"round",src:l})}),s.jsx(n,{content:"2",outline:!1,children:s.jsx(a,{src:l})})]}),s.jsx(p,{content:_})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(t,{as:"h4",className:"mb-4",children:"custom content"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{content:s.jsx(y,{size:12}),children:s.jsx(a,{shape:"round",src:l})}),s.jsx(n,{content:s.jsx(B,{size:12}),bgColor:"#5bce5b",children:s.jsx(a,{src:l})}),s.jsx(n,{size:"small",placement:"bottom-right",bgColor:"#5bce5b",children:s.jsx(a,{bordered:!0,color:"#5bce5b",src:l})})]}),s.jsx(p,{content:R})]}),s.jsx(t,{as:"h4",className:"my-2",children:"API"}),s.jsx(w,{rows:A})]})}export{V as default};
