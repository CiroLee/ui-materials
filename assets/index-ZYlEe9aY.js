import{j as s}from"./index-Ce8o4Ws_.js";import{H as a,B as n,C as t}from"./index-BLqlGQVW.js";import{N as r,D as c,S as p,A as i}from"./index-Be36CH7U.js";import{T as l}from"./index-UHOtxgJH.js";import"./index-CGeobuVx.js";import"./index-CtA-lsTg.js";import"./index-CuS6N6ra.js";import"./index-D0ZJ6QUL.js";import"./index-BCGQdU2y.js";import"./index-FkXsO66R.js";const h=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>Hover me<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span></span>
    )
}
</code></pre>
`,j=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Side</span>, <span class="hljs-title class_">Align</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/types/common&#x27;</span>

<span class="hljs-keyword">const</span> <span class="hljs-attr">placements</span>: { <span class="hljs-attr">side</span>: <span class="hljs-title class_">Side</span>; <span class="hljs-attr">align</span>: <span class="hljs-title class_">Align</span> }[] = [
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;top&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;start&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;top&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;center&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;top&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;end&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;right&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;start&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;right&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;center&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;right&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;end&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;bottom&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;start&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;bottom&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;center&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;bottom&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;end&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;start&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;center&#x27;</span>,
  },
  {
    <span class="hljs-attr">side</span>: <span class="hljs-string">&#x27;left&#x27;</span>,
    <span class="hljs-attr">align</span>: <span class="hljs-string">&#x27;end&#x27;</span>,
  },
];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;inline-grid grid-cols-3 grid-rows-4 gap-3&quot;</span>&gt;</span>
        {placements.map((item, index) =&gt; (
        <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip text&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">{item.align}</span> <span class="hljs-attr">side</span>=<span class="hljs-string">{item.side}</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>
            {item.side}-{item.align}
            <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,d=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">showArrow</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>with arrow<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
         <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">showArrow</span>=<span class="hljs-string">{false}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>without arrow<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">sideOffset</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;right&gt;
      &lt;Button&gt;Hover me&lt;/Button&gt;
    &lt;/Tooltip&gt;</span></span></span>
    )
}
</code></pre>
`,m=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;font-bold text-danger-500&quot;</span>&gt;</span>custom title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>}&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>hover me<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span></span>
    )
}
</code></pre>
`,x=[{prop:"isOpen",desc:"whether Tooltip is open default",type:"boolean",required:!1,default:"-"},{prop:"title",desc:"Tooltip title",type:"React.ReactNode",required:!1,default:"-"},{prop:"side",desc:"Tooltip side",type:"tag: top | right | bottom | left",required:!1,default:"top"},{prop:"align",desc:"Tooltip align",type:"tag: start | center | end",required:!1,default:"center"},{prop:"sideOffset",desc:"Tooltip side offset",type:"number",required:!1,default:"5"},{prop:"showArrow",desc:"whether Tooltip show arrow",type:"boolean",required:!1,default:"true"},{prop:"delay",desc:"The delay in milliseconds before the Tooltip open",type:"number",required:!1,default:"200"},{prop:"onOpenChange",desc:"Callback when Tooltip open state change",type:"(open: boolean) => void",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}],u=[{side:"top",align:"start"},{side:"top",align:"center"},{side:"top",align:"end"},{side:"right",align:"start"},{side:"right",align:"center"},{side:"right",align:"end"},{side:"bottom",align:"start"},{side:"bottom",align:"center"},{side:"bottom",align:"end"},{side:"left",align:"start"},{side:"left",align:"center"},{side:"left",align:"end"}];function v(){return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Tooltip",sourceName:"Tooltip"}),s.jsx(c,{children:"Display message when hover a element"}),s.jsxs(p,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{title:"tooltip",children:s.jsx(n,{children:"Hover me"})}),s.jsx(t,{content:h})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"placement(side & align)"}),s.jsx("div",{className:"inline-grid grid-cols-3 grid-rows-4 gap-3",children:u.map((e,o)=>s.jsx(l,{title:"tooltip text",align:e.align,side:e.side,children:s.jsxs(n,{children:[e.side,"-",e.align]})},o))}),s.jsx(t,{content:j})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"Arrow"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx(l,{title:"tooltip",showArrow:!0,children:s.jsx(n,{children:"with arrow"})}),s.jsx(l,{title:"tooltip",showArrow:!1,children:s.jsx(n,{children:"without arrow"})})]}),s.jsx(t,{content:d})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"sideOffset"}),s.jsx(l,{title:"tooltip",sideOffset:20,side:"right",children:s.jsx(n,{children:"hover me"})}),s.jsx(t,{content:g})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"custom title"}),s.jsx(l,{title:s.jsx("span",{className:"font-bold text-danger-500",children:"custom title"}),children:s.jsx(n,{children:"hover me"})}),s.jsx(t,{content:m})]}),s.jsx(a,{as:"h2",className:"mb-4",children:"API"}),s.jsx(i,{rows:x})]})}export{v as default};
