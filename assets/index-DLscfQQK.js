import{u as i,r as j,j as s,s as m,S as u,i as d}from"./index-D1KJsCxW.js";import{N as g,S as e,B as n,C as l,A as c}from"./index-B0PqRUAz.js";import{H as a}from"./index-C4zB0jjx.js";import{R as x}from"./index-BKIuqmke.js";import"./index-0vRULWmZ.js";import"./index-BugOsXht.js";import"./index-BZgWwdkS.js";import"./index-CwP2f8qY.js";import"./index-2vO1aP_T.js";import"./index-D9EGPFwj.js";import"./index-gcasCBg6.js";import"./index-BA8G_bom.js";const y=`<pre class="hljs"><code><span class="hljs-comment">// first, place the ToastProvider component at the root of your app.</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ToastProvider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Toast&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ToastProvider</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">YourApp</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ToastProvider</span>&gt;</span></span>
  );
}
</code></pre>
`,f=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Toast&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;this is a toast message&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> { toast, closeToast } = <span class="hljs-title function_">useToast</span>();
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> toast(text)}&gt;Show Toast<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
  );
}
</code></pre>
`,w=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useToast, <span class="hljs-keyword">type</span> <span class="hljs-title class_">ToastPlacement</span>  } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Toast&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">RadioOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;
<span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;this is a toast message&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">placementOption</span>: <span class="hljs-title class_">RadioOption</span>[] = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;topLeft&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;topLeft&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;topCenter&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;topCenter&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;topRight&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;topRight&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;bottomLeft&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;bottomLeft&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;bottomCenter&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;bottomCenter&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;bottomRight&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;bottomRight&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;center&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;center&#x27;</span>,
  },
];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> { toast } = <span class="hljs-title function_">useToast</span>();
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[440px] grid grid-cols-3 gap-3 mb-3&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">{placement}</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{placementOption}</span>
      <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{setPlacement}</span>
    /&gt;</span></span>
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
      <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
        toast(text, { placement: placement as ToastPlacement });
    }}&gt;
      show toast
    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
  );
}
</code></pre>
`,k=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Toast&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiCheckLine</span>, <span class="hljs-title class_">RiSendPlaneLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;
<span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;this is a toast message&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> { toast } = <span class="hljs-title function_">useToast</span>();
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          toast(text, {
            icon: <span class="hljs-tag">&lt;<span class="hljs-name">RiCheckLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-green-500&quot;</span> /&gt;</span>,
          });
        }}&gt;
            info
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          toast(text, {
            icon: <span class="hljs-tag">&lt;<span class="hljs-name">RiSendPlaneLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-blue-500&quot;</span> /&gt;</span>,
            });
        }}&gt;
            success
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre>
`,b=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Toast&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">const</span> text = <span class="hljs-string">&#x27;this is a toast message&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> { toast, closeToast } = <span class="hljs-title function_">useToast</span>();
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
      <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
        toast(text, {
          autoClose: false,
          icon: <span class="hljs-tag">&lt;<span class="hljs-name">AlertTriangle</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-red-500&quot;</span> /&gt;</span>,
          action: (
           <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{closeToast}</span>&gt;</span>
             action
           <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
          ),
        });
    }}&gt;
      show toast
    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
  );
}
</code></pre>
`,T=[{prop:"duration",desc:"displayed duration of toast, unit is millisecond",type:"number",required:!1,default:"2000"},{prop:"placement",desc:"placement of toast",required:!1,type:"tag: topCenter | topLeft | topRight | bottomCenter | bottomLeft | bottomRight | center",default:"topCenter"},{prop:"icon",desc:"prefix icon of toast",required:!1,type:"React.ReactNode",default:"-"},{prop:"action",type:"React.ReactNode",desc:"suffix action of toast",required:!1,default:"-"},{prop:"autoClose",desc:"whether auto close toast after duration",type:"boolean",required:!1,default:"true"}],C=[{prop:"toast",desc:"toast function to show toast",type:"(text: string, options?: ToastOptions) => void",required:!1},{prop:"closeToast",desc:"close toast",type:"() => void",required:!1}],p="this is a toast message",R=[{label:"topLeft",value:"topLeft"},{label:"topCenter",value:"topCenter"},{label:"topRight",value:"topRight"},{label:"bottomLeft",value:"bottomLeft"},{label:"bottomCenter",value:"bottomCenter"},{label:"bottomRight",value:"bottomRight"},{label:"center",value:"center"}];function G(){const{toast:t,closeToast:r}=i(),[o,h]=j.useState("topCenter");return s.jsxs(s.Fragment,{children:[s.jsx(g,{title:"Toast",sourceName:"Toast"}),s.jsxs(e,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(n,{onClick:()=>t(p),children:"Show Toast"}),s.jsx(l,{content:y}),s.jsx(l,{content:f})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"placement"}),s.jsx(x,{className:"w-[440px] grid grid-cols-3 gap-3 mb-3",value:o,options:R,onValueChange:h}),s.jsx(n,{onClick:()=>{t(p,{placement:o})},children:"show toast"}),s.jsx(l,{content:w})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"with icons"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx(n,{onClick:()=>{t(p,{icon:s.jsx(m,{size:18,className:"text-green-500"})})},children:"info"}),s.jsx(n,{onClick:()=>{t(p,{icon:s.jsx(u,{size:18,className:"text-blue-500"})})},children:"success"})]}),s.jsx(l,{content:k})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(a,{as:"h4",className:"mb-2",children:"action"}),s.jsx(n,{onClick:()=>{t(p,{autoClose:!1,icon:s.jsx(d,{size:18,className:"text-red-500"}),action:s.jsx(n,{size:"tiny",outline:!0,type:"text",onClick:r,children:"action"})})},children:"show toast"}),s.jsx(l,{content:b})]}),s.jsx(a,{as:"h2",className:"mb-2",children:"API"}),s.jsx(a,{as:"h4",className:"mb-2",children:"hooks"}),s.jsx(c,{rows:C}),s.jsx(a,{as:"h4",className:"my-2",children:"ToastOptions"}),s.jsx(c,{rows:T})]})}export{G as default};