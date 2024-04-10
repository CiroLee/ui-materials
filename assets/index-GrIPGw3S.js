import{d as k,r as p,j as s}from"./index-PCb06teX.js";import{N as F,D as B,S as n,A as q}from"./index-CJk_xHEX.js";import{L as _,H as a,C as r}from"./index-DUaNUOXA.js";const z=k({slots:{base:"browser-frame rounded-medium border border-zinc-200",header:"frame-header relative flex flex-center h-[32px] border-b border-zinc-200 px-[12px]",title:"frame-title inline-flex text-[14px] h-full text-zinc-700 items-center max-w-[30%] ellipsis",url:"h-[76%] block max-w-[36%] text-zinc-700 ellipsis px-[8px] rounded-small bg-zinc-100 text-[14px]",content:"frame-content relative h-[320px] overflow-auto"}});function v(){return s.jsxs("div",{className:"absolute left-[12px] flex flex-center h-full space-x-[6px] [&_li]:list-none [&_li]:size-[13px] [&_li]:rounded-full",children:[s.jsx("li",{className:"bg-[#ff5f57]"}),s.jsx("li",{className:"bg-[#febc2e]"}),s.jsx("li",{className:"bg-[#28c840]"})]})}function S(){return s.jsxs("div",{className:"absolute right-[12px] flex flex-center h-full space-x-[12px] [&_li]:list-none [&_li]:w-[12px]",children:[s.jsx("li",{className:"h-px bg-zinc-300"}),s.jsx("li",{className:"h-[12px] border-zinc-300 border"}),s.jsx("li",{className:`relative h-[12px] before:bg-zinc-300 before:rotate-45 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full 
      after:h-full after:bg-zinc-300 after:w-px after:-rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2`})]})}const o=p.forwardRef((h,i)=>{const{frameType:m="macos",asIframe:j,title:t,url:l,showUrl:d,children:f,className:u,style:x}=h,{base:w,header:g,title:y,url:b,content:N}=z();return s.jsxs("div",{ref:i,className:w({class:u}),style:x,children:[s.jsxs("header",{className:g(),children:[m==="macos"?s.jsx(v,{}):s.jsx(S,{}),d&&l?s.jsx(_,{href:l,isBlank:!0,className:b(),children:l}):p.isValidElement(t)?s.jsx(s.Fragment,{children:"title"}):s.jsx("span",{className:y(),children:t})]}),s.jsx("main",{className:N(),children:j&&l?s.jsx("iframe",{className:"w-full h-full border-none",src:l}):s.jsx(s.Fragment,{children:f})})]})});o.displayName="BrowserFrame";const e=o,c=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">BrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/BrowserFrame&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">BrowserFrame</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-4&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">BrowserFrame</span> <span class="hljs-attr">frameType</span>=<span class="hljs-string">&quot;windows&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,D=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">BrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/BrowserFrame&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">BrowserFrame</span> <span class="hljs-attr">showUrl</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://www.google.com&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">BrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/BrowserFrame&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">BrowserFrame</span> <span class="hljs-attr">showUrl</span> <span class="hljs-attr">asIframe</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://cirolee.github.io/ui-materials&quot;</span>  /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">BrowserFrame</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/BrowserFrame&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">BrowserFrame</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;p-4&quot;</span>&gt;</span>custom content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">BrowserFrame</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,U=[{prop:"frameType",desc:"type of frame, support macos and windows style",type:"tag: macos | windows",required:!1,default:"macos"},{prop:"title",desc:"title of frame",type:"React.ReactNode",required:!1,default:"-"},{prop:"url",desc:"url of frame",type:"string",required:!1,default:"-"},{prop:"showUrl",desc:"whether to show url",type:"boolean",required:!1,default:"false"},{prop:"asFrame",desc:"whether to render as frame, must be used with url",type:"boolean",required:!1,default:"false"},{prop:"children",desc:"children of frame",type:"ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function A(){return s.jsxs(s.Fragment,{children:[s.jsx(F,{title:"BrowserFrame",sourceName:"BrowserFrame"}),s.jsx(B,{children:"Display browser frame with macos style and windows style"}),s.jsxs(n,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"style"}),s.jsx(e,{className:"mb-4"}),s.jsx(e,{frameType:"windows"}),s.jsx(r,{content:c})]}),s.jsxs(n,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"title"}),s.jsx(e,{frameType:"macos",title:"macOS"}),s.jsx(r,{content:c})]}),s.jsxs(n,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"show url"}),s.jsx(e,{showUrl:!0,url:"https://www.google.com"}),s.jsx(r,{content:D})]}),s.jsxs(n,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"use as iframe"}),s.jsx(e,{showUrl:!0,asIframe:!0,url:"https://cirolee.github.io/ui-materials"}),s.jsx(r,{content:T})]}),s.jsxs(n,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"custom children"}),s.jsx(e,{children:s.jsx("p",{className:"p-4",children:"custom content"})}),s.jsx(r,{content:R})]}),s.jsx(a,{as:"h2",className:"mb-4",children:"API"}),s.jsx(q,{rows:U})]})}export{A as default};
