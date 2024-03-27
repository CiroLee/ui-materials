import{d as o,r as i,j as s}from"./index-DygmJ1BA.js";import{N as m,S as g,A as y}from"./index-DrMImJcd.js";import{C as l,H as p}from"./index-D8JiO3IO.js";const b={command:"⌘",shift:"⇧",ctrl:"⌃",option:"⌥",enter:"⏎",delete:"⌦",escape:"⎋",tab:"⇥",capslock:"⇪",up:"↑",right:"→",down:"↓",left:"←",pageup:"⇞",pagedown:"⇟",home:"⇱",end:"⇲",help:"?",space:"␣"},u=o({base:`inline-flex flex-center relative px-[6px] border border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.2)] shadow-inset-[0_1px_1px_rgba(255,255,255,0.7)]
   bg-gray-200/50 h-[24px] text-[14px] rounded-[4px] [&>span:not(:first-child)]:ml-1`}),t=i.forwardRef(function(e,c){const{keys:r,children:n,className:h,style:d}=e;return s.jsxs("div",{ref:c,className:u({class:h}),style:d,children:[r.map((x,j)=>s.jsx("span",{children:b[x]||""},j)),n?s.jsx("span",{children:n}):null]})});t.displayName="Kbd";const a=t,f=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Kbd</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Kbd&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mb-4 [&amp;&gt;div]:mr-2&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">command</span>&#x27;]} /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">command</span>&#x27;]}&gt;</span>K<span class="hljs-tag">&lt;/<span class="hljs-name">Kbd</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">command</span>&#x27;, &#x27;<span class="hljs-attr">shift</span>&#x27;]}&gt;</span>T<span class="hljs-tag">&lt;/<span class="hljs-name">Kbd</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Kbd</span> <span class="hljs-attr">keys</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">option</span>&#x27;, &#x27;<span class="hljs-attr">command</span>&#x27;]}&gt;</span>D<span class="hljs-tag">&lt;/<span class="hljs-name">Kbd</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre>
`,K=`<pre class="hljs"><code><span class="hljs-keyword">type</span> <span class="hljs-title class_">KbdKey</span> =
  | <span class="hljs-string">&#x27;command&#x27;</span>
  | <span class="hljs-string">&#x27;shift&#x27;</span>
  | <span class="hljs-string">&#x27;ctrl&#x27;</span>
  | <span class="hljs-string">&#x27;option&#x27;</span>
  | <span class="hljs-string">&#x27;enter&#x27;</span>
  | <span class="hljs-string">&#x27;delete&#x27;</span>
  | <span class="hljs-string">&#x27;escape&#x27;</span>
  | <span class="hljs-string">&#x27;tab&#x27;</span>
  | <span class="hljs-string">&#x27;capslock&#x27;</span>
  | <span class="hljs-string">&#x27;up&#x27;</span>
  | <span class="hljs-string">&#x27;right&#x27;</span>
  | <span class="hljs-string">&#x27;down&#x27;</span>
  | <span class="hljs-string">&#x27;left&#x27;</span>
  | <span class="hljs-string">&#x27;pageup&#x27;</span>
  | <span class="hljs-string">&#x27;pagedown&#x27;</span>
  | <span class="hljs-string">&#x27;home&#x27;</span>
  | <span class="hljs-string">&#x27;end&#x27;</span>
  | <span class="hljs-string">&#x27;help&#x27;</span>
  | <span class="hljs-string">&#x27;space&#x27;</span>;
</code></pre>
`,k=[{prop:"keys",desc:"keyboard keys",type:"KbdKey",required:!0,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function v(){return s.jsxs(s.Fragment,{children:[s.jsx(m,{title:"Kbd",sourceName:"Kbd"}),s.jsxs(g,{className:"mb-4 [&>div]:mr-2",children:[s.jsx(a,{keys:["command"]}),s.jsx(a,{keys:["command"],children:"K"}),s.jsx(a,{keys:["command","shift"],children:"T"}),s.jsx(a,{keys:["option","command"],children:"D"})]}),s.jsx(l,{content:f}),s.jsx(p,{as:"h4",className:"my-4",children:"KbdKey"}),s.jsx(l,{content:K}),s.jsx(p,{as:"h4",className:"my-4",children:"API"}),s.jsx(y,{rows:k})]})}export{v as default};
