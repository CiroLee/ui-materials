import{j as s}from"./index-D1KJsCxW.js";import{N as r,S as t,B as a,C as p,A as c}from"./index-B0PqRUAz.js";import{H as n}from"./index-C4zB0jjx.js";import{T as l}from"./index-BKWz4QZC.js";import"./index-BugOsXht.js";import"./index-BZgWwdkS.js";import"./index-CwP2f8qY.js";import"./index-B_t6_aj9.js";import"./index-D9EGPFwj.js";import"./index-BA8G_bom.js";const i=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>Hover me<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span></span>
    )
}
</code></pre>
`,h=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
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
`,j=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
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
`,d=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;tooltip&quot;</span> <span class="hljs-attr">sideOffset</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;right&gt;
      &lt;Button&gt;Hover me&lt;/Button&gt;
    &lt;/Tooltip&gt;</span></span></span>
    )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;font-bold text-danger-500&quot;</span>&gt;</span>custom title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>}&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>hover me<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span></span>
    )
}
</code></pre>
`,m=[{prop:"isOpen",desc:"whether Tooltip is open default",type:"boolean",required:!1,default:"-"},{prop:"title",desc:"Tooltip title",type:"React.ReactNode",required:!1,default:"-"},{prop:"side",desc:"Tooltip side",type:"tag: top | right | bottom | left",required:!1,default:"top"},{prop:"align",desc:"Tooltip align",type:"tag: start | center | end",required:!1,default:"center"},{prop:"sideOffset",desc:"Tooltip side offset",type:"number",required:!1,default:"5"},{prop:"showArrow",desc:"whether Tooltip show arrow",type:"boolean",required:!1,default:"true"},{prop:"delay",desc:"The delay in milliseconds before the Tooltip open",type:"number",required:!1,default:"200"},{prop:"onOpenChange",desc:"Callback when Tooltip open state change",type:"(open: boolean) => void",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}],x=[{side:"top",align:"start"},{side:"top",align:"center"},{side:"top",align:"end"},{side:"right",align:"start"},{side:"right",align:"center"},{side:"right",align:"end"},{side:"bottom",align:"start"},{side:"bottom",align:"center"},{side:"bottom",align:"end"},{side:"left",align:"start"},{side:"left",align:"center"},{side:"left",align:"end"}];function _(){return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Tooltip",sourceName:"Tooltip"}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{title:"tooltip",children:s.jsx(a,{children:"Hover me"})}),s.jsx(p,{content:i})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"placement(side & align)"}),s.jsx("div",{className:"inline-grid grid-cols-3 grid-rows-4 gap-3",children:x.map((e,o)=>s.jsx(l,{title:"tooltip text",align:e.align,side:e.side,children:s.jsxs(a,{children:[e.side,"-",e.align]})},o))}),s.jsx(p,{content:h})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"Arrow"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx(l,{title:"tooltip",showArrow:!0,children:s.jsx(a,{children:"with arrow"})}),s.jsx(l,{title:"tooltip",showArrow:!1,children:s.jsx(a,{children:"without arrow"})})]}),s.jsx(p,{content:j})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"sideOffset"}),s.jsx(l,{title:"tooltip",sideOffset:20,side:"right",children:s.jsx(a,{children:"hover me"})}),s.jsx(p,{content:d})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"custom title"}),s.jsx(l,{title:s.jsx("span",{className:"font-bold text-danger-500",children:"custom title"}),children:s.jsx(a,{children:"hover me"})}),s.jsx(p,{content:g})]}),s.jsx(n,{as:"h2",className:"mb-4",children:"API"}),s.jsx(c,{rows:m})]})}export{_ as default};
