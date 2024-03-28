import{j as s}from"./index-BjDtT8fq.js";import{H as l,C as t}from"./index-ELNk07RW.js";import{N as r,S as p,A as e}from"./index-BMqOMO7u.js";import{A as a,a as c}from"./AvatarGroup-DN8uroZN.js";import"./index-B7Kw24g9.js";import"./index-DnxZLGbc.js";const h=[{prop:"src",desc:"avatar image url",type:"string",required:!1,default:"-"},{prop:"shape",desc:"avatar shape",type:"tag: circle | round",required:!1,default:"circle"},{prop:"size",desc:"avatar size",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"bordered",desc:"whether add border around the avatar",type:"boolean",required:!1,default:!1},{prop:"color",desc:"avatar border color",type:"string",required:!1,default:"#eae8e8"},{prop:"alt",desc:"alt text for avatar",type:"string",required:!1,default:"-"},{prop:"text",desc:"text content for avatar",type:"string",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],j=[{prop:"children",type:"React.ReactNode",required:!0,default:"-"},{prop:"direction",desc:"avatar direction",type:"tag: horizontal | vertical",required:!1,default:"horizontal"},{prop:"gap",desc:"gap between avatar",type:"string",required:!1,default:"-12px"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],i=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Avatar&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">IMG_URL</span> = <span class="hljs-string">&#x27;https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-end [&amp;&gt;*]:mr-4 text-gray-600 text-sm&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center justify-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>tiny<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center justify-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>small<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center justify-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>medium<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center justify-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>large<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-col items-center justify-center&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>fallback<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,o=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Avatar&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">IMG_URL</span> = <span class="hljs-string">&#x27;https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-end [&amp;&gt;*]:mr-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Avatar&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-end [&amp;&gt;*]:mr-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;T&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-purple-500 text-white&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;S&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-orange-500 text-white&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;M&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-blue-500 text-white&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;L&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-red-500 text-white text-[22px]&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;A&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-green-500 text-white text-[22px]&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,m=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Avatar&#x27;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">IMG_URL</span> = <span class="hljs-string">&#x27;https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">AvatarGroup</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;+2&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-gray-300 text-white&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">AvatarGroup</span>&gt;</span></span>
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">AvatarGroup</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-3&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;+2&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;bg-gray-300 text-white&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">AvatarGroup</span>&gt;</span></span>
  )
}
</code></pre>
`,u=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Avatar&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-end [&amp;&gt;*]:mr-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#8749F5&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Avatar</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#65ca16&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{IMG_URL}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,n="https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png";function N(){return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Avatar",sourceName:"Avatar"}),s.jsxs(p,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"flex items-end [&>*]:mr-4 text-gray-600 text-sm",children:[s.jsxs("div",{className:"flex flex-col items-center justify-center",children:[s.jsx(a,{size:"tiny",src:n}),s.jsx("p",{children:"tiny"})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center",children:[s.jsx(a,{size:"small",src:n}),s.jsx("p",{children:"small"})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center",children:[s.jsx(a,{size:"medium",src:n}),s.jsx("p",{children:"medium"})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center",children:[s.jsx(a,{size:"large",src:n}),s.jsx("p",{children:"large"})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center",children:[s.jsx(a,{size:"large"}),s.jsx("p",{children:"fallback"})]})]}),s.jsx(t,{content:i})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"shape"}),s.jsxs("div",{className:"flex items-end [&>*]:mr-4",children:[s.jsx(a,{size:"large",src:n}),s.jsx(a,{size:"large",shape:"round",src:n})]}),s.jsx(t,{content:o})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-4",children:"bordered"}),s.jsxs("div",{className:"flex items-end [&>*]:mr-4",children:[s.jsx(a,{bordered:!0,src:n}),s.jsx(a,{bordered:!0,color:"#8749F5",src:n}),s.jsx(a,{bordered:!0,shape:"round",color:"#65ca16",src:n})]}),s.jsx(t,{content:u})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"text avatar"}),s.jsxs("div",{className:"flex items-end [&>*]:mr-4",children:[s.jsx(a,{text:"T",size:"tiny",className:"bg-purple-500 text-white"}),s.jsx(a,{text:"S",size:"small",className:"bg-orange-500 text-white"}),s.jsx(a,{text:"M",size:"medium",className:"bg-blue-500 text-white"}),s.jsx(a,{text:"L",size:"large",className:"bg-red-500 text-white text-[22px]"}),s.jsx(a,{text:"A",shape:"round",size:"large",className:"bg-green-500 text-white text-[22px]"})]}),s.jsx(t,{content:g})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"avatar group"}),s.jsxs(c,{children:[s.jsx(a,{src:n}),s.jsx(a,{src:n}),s.jsx(a,{src:n}),s.jsx(a,{text:"+2",size:"medium",className:"bg-gray-300 text-white"})]}),s.jsxs(c,{className:"mt-3",direction:"vertical",children:[s.jsx(a,{src:n}),s.jsx(a,{src:n}),s.jsx(a,{src:n}),s.jsx(a,{text:"+2",size:"medium",className:"bg-gray-300 text-white"})]}),s.jsx(t,{content:m})]}),s.jsx(l,{as:"h2",className:"mb-2",children:"API"}),s.jsx(l,{as:"h4",className:"mb-2",children:"Avatar"}),s.jsx(e,{rows:h}),s.jsx(l,{as:"h4",className:"my-2",children:"AvatarGroup"}),s.jsx(e,{rows:j})]})}export{N as default};
