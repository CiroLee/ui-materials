import{r as a,d as z,j as s,A as H,m as K}from"./index-COZO8Rzb.js";import{H as u,B as f,C as b}from"./index-CaQzaSfZ.js";import{N as G,S as v,A as L}from"./index-CJvfj1Kn.js";import{$ as U,a as C,b as Z,_ as g,c as J}from"./index-BdZm8eSK.js";import{a as Q,$ as P}from"./index-BBEZAuME.js";import{$ as N,a as W,b as X,c as Y,d as ss,e as as,f as ns}from"./index-DZMYs03R.js";import{h as ts,b as es,$ as ls,a as ps}from"./Combination-8cZ1LfsX.js";import{$ as os}from"./index-G4FVeZ_f.js";import{$ as E}from"./index-ByhUHD7A.js";import{S as cs}from"./index-7dX-Kikt.js";import{D as rs}from"./index-BVOm_AMB.js";import"./index-CR97gBd8.js";import"./index-BaEBlOYj.js";const R="Popover",[S,Qs]=U(R,[N]),k=N(),[is,$]=S(R),hs=n=>{const{__scopePopover:r,children:l,open:p,defaultOpen:t,onOpenChange:e,modal:o=!1}=n,c=k(r),i=a.useRef(null),[h,j]=a.useState(!1),[x=!1,d]=Q({prop:p,defaultProp:t,onChange:e});return a.createElement(W,c,a.createElement(is,{scope:r,contentId:os(),triggerRef:i,open:x,onOpenChange:d,onOpenToggle:a.useCallback(()=>d(y=>!y),[d]),hasCustomAnchor:h,onCustomAnchorAdd:a.useCallback(()=>j(!0),[]),onCustomAnchorRemove:a.useCallback(()=>j(!1),[]),modal:o},l))},ds="PopoverTrigger",js=a.forwardRef((n,r)=>{const{__scopePopover:l,...p}=n,t=$(ds,l),e=k(l),o=C(r,t.triggerRef),c=a.createElement(Z.button,g({type:"button","aria-haspopup":"dialog","aria-expanded":t.open,"aria-controls":t.contentId,"data-state":D(t.open)},p,{ref:o,onClick:P(n.onClick,t.onOpenToggle)}));return t.hasCustomAnchor?c:a.createElement(X,g({asChild:!0},e),c)}),A="PopoverPortal",[gs,us]=S(A,{forceMount:void 0}),fs=n=>{const{__scopePopover:r,forceMount:l,children:p,container:t}=n,e=$(A,r);return a.createElement(gs,{scope:r,forceMount:l},a.createElement(E,{present:l||e.open},a.createElement(Y,{asChild:!0,container:t},p)))},w="PopoverContent",ms=a.forwardRef((n,r)=>{const l=us(w,n.__scopePopover),{forceMount:p=l.forceMount,...t}=n,e=$(w,n.__scopePopover);return a.createElement(E,{present:p||e.open},e.modal?a.createElement(xs,g({},t,{ref:r})):a.createElement(bs,g({},t,{ref:r})))}),xs=a.forwardRef((n,r)=>{const l=$(w,n.__scopePopover),p=a.useRef(null),t=C(r,p),e=a.useRef(!1);return a.useEffect(()=>{const o=p.current;if(o)return ts(o)},[]),a.createElement(es,{as:J,allowPinchZoom:!0},a.createElement(B,g({},n,{ref:t,trapFocus:l.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(n.onCloseAutoFocus,o=>{var c;o.preventDefault(),e.current||(c=l.triggerRef.current)===null||c===void 0||c.focus()}),onPointerDownOutside:P(n.onPointerDownOutside,o=>{const c=o.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0,h=c.button===2||i;e.current=h},{checkForDefaultPrevented:!1}),onFocusOutside:P(n.onFocusOutside,o=>o.preventDefault(),{checkForDefaultPrevented:!1})})))}),bs=a.forwardRef((n,r)=>{const l=$(w,n.__scopePopover),p=a.useRef(!1),t=a.useRef(!1);return a.createElement(B,g({},n,{ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:e=>{var o;if((o=n.onCloseAutoFocus)===null||o===void 0||o.call(n,e),!e.defaultPrevented){var c;p.current||(c=l.triggerRef.current)===null||c===void 0||c.focus(),e.preventDefault()}p.current=!1,t.current=!1},onInteractOutside:e=>{var o,c;(o=n.onInteractOutside)===null||o===void 0||o.call(n,e),e.defaultPrevented||(p.current=!0,e.detail.originalEvent.type==="pointerdown"&&(t.current=!0));const i=e.target;((c=l.triggerRef.current)===null||c===void 0?void 0:c.contains(i))&&e.preventDefault(),e.detail.originalEvent.type==="focusin"&&t.current&&e.preventDefault()}}))}),B=a.forwardRef((n,r)=>{const{__scopePopover:l,trapFocus:p,onOpenAutoFocus:t,onCloseAutoFocus:e,disableOutsidePointerEvents:o,onEscapeKeyDown:c,onPointerDownOutside:i,onFocusOutside:h,onInteractOutside:j,...x}=n,d=$(w,l),y=k(l);return ls(),a.createElement(ps,{asChild:!0,loop:!0,trapped:p,onMountAutoFocus:t,onUnmountAutoFocus:e},a.createElement(ss,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:j,onEscapeKeyDown:c,onPointerDownOutside:i,onFocusOutside:h,onDismiss:()=>d.onOpenChange(!1)},a.createElement(as,g({"data-state":D(d.open),role:"dialog",id:d.contentId},y,x,{ref:r,style:{...x.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))}),vs=a.forwardRef((n,r)=>{const{__scopePopover:l,...p}=n,t=k(l);return a.createElement(ns,g({},t,p,{ref:r}))});function D(n){return n?"open":"closed"}const $s=hs,ys=js,ws=fs,Ps=ms,ks=vs,_s={"top-start":{base:"origin-bottom-left"},"top-center":{base:"origin-bottom"},"top-end":{base:"origin-bottom-right"},"right-start":{base:"origin-top-left"},"right-center":{base:"origin-left"},"right-end":{base:"origin-bottom-left"},"bottom-start":{base:"origin-top-left"},"bottom-center":{base:"origin-top"},"bottom-end":{base:"origin-top-right"},"left-start":{base:"origin-top-right"},"left-center":{base:"origin-right"},"left-end":{base:"origin-top-right"}},qs=z({slots:{base:"p-3 rounded-large bg-white drop-shadow-around",title:"font-bold",content:"text-sm text-zinc-400"},variants:{placement:_s},defaultVariants:{placement:"bottom-center"}}),Os={open:{opacity:1,scale:1},closed:{opacity:0,scale:.8}},F=a.forwardRef((n,r)=>{const{isOpen:l,disabled:p,title:t,content:e,sideOffset:o=5,showArrow:c=!0,align:i="center",side:h="bottom",onOpenChange:j,children:x,className:d,style:y}=n,[q,_]=a.useState(!1),{base:I,title:M,content:T}=qs(),V=O=>{p||(_(O),j==null||j(O))};return a.useEffect(()=>{p&&_(!1),_(!!l)},[l,p]),s.jsxs($s,{onOpenChange:V,children:[s.jsx(ys,{asChild:!0,children:x}),s.jsx(H,{children:q?s.jsx(ws,{forceMount:!0,children:s.jsx(Ps,{className:"outline-0",ref:r,sideOffset:o,align:i,side:h,children:s.jsxs(K.div,{className:I({placement:`${h}-${i}`,class:d}),style:y,initial:"closed",animate:q?"open":"closed",exit:"closed",variants:Os,children:[a.isValidElement(t)?t:t?s.jsx("div",{className:M(),children:t}):null,a.isValidElement(e)?e:e?s.jsx("div",{className:T(),children:e}):null,c?s.jsx(ks,{className:"fill-white"}):null]})})}):null})]})});F.displayName="Popover";const m=F,Cs=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Popover</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Popover&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [status, setStatus] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;this is popover texts and it is long&quot;</span>
        <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;top&quot;</span>
        <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;start&quot;</span>
        <span class="hljs-attr">onOpenChange</span>=<span class="hljs-string">{setStatus}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>popover<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-2 text-zinc-500&quot;</span>&gt;</span>status: {String(status)}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,Ns=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Switch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Switch&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Popover</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Popover&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;


<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [disabled, setDisabled] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center mb-2&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{disabled}</span> <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{setDisabled}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-zinc-500 ml-2&quot;</span>&gt;</span>disabled: {String(disabled)}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;this is popover texts and it is long&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">{disabled}</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>popover<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,Es=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Popover</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Popover&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">Side</span>, <span class="hljs-title class_">Align</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path&#x27;</span>;
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
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[440px] grid grid-cols-3 grid-rows-4 gap-3&quot;</span>&gt;</span>
      {placements.map((item, index) =&gt; (
        <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;this is popover contents&quot;</span> <span class="hljs-attr">side</span>=<span class="hljs-string">{item.side}</span> <span class="hljs-attr">align</span>=<span class="hljs-string">{item.align}</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>
            {item.side}-{item.align}
            <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
      ))}
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,Rs=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Popover</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Popover&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;this is popover texts and it is long&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>with arrow<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">showArrow</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;this is popover texts and it is long&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>without arrow<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,Ss=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Popover</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Popover&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">sideOffset</span>=<span class="hljs-string">{20}</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;this is popover texts and it is long&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>popover<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,As=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Popover</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Popover&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-brand-500 font-bold&quot;</span>&gt;</span>custom title<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>}
        content={<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-sm text-danger-500&quot;</span>&gt;</span>use as custom contents<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>}&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>popover<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,Bs=[{prop:"isOpen",desc:"whether the popover is open default",type:"boolean",default:"false",required:!1},{prop:"disabled",desc:"whether the popover is disabled",type:"boolean",required:!1,default:!1},{prop:"title",desc:"popover title",type:"React.ReactNode",required:!1,default:"-"},{prop:"content",desc:"popover content",type:"React.ReactNode",required:!1,default:"-"},{prop:"sideOffset",desc:"popover offset from the trigger",type:"number",required:!1,default:"5"},{prop:"showArrow",desc:"whether to show the arrow",type:"boolean",required:!1,default:"true"},{prop:"align",desc:"popover alignment",type:"tag: start | center | end",required:!1,default:"center"},{prop:"side",desc:"popover side",type:"tag: top | bottom | left | right",required:!1,default:"bottom"},{prop:"onOpenChange",desc:"callback when popover open status changed",type:"(open: boolean) => void",required:!1,default:"-"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],Ds=[{side:"top",align:"start"},{side:"top",align:"center"},{side:"top",align:"end"},{side:"right",align:"start"},{side:"right",align:"center"},{side:"right",align:"end"},{side:"bottom",align:"start"},{side:"bottom",align:"center"},{side:"bottom",align:"end"},{side:"left",align:"start"},{side:"left",align:"center"},{side:"left",align:"end"}];function Ws(){const[n,r]=a.useState(!1),[l,p]=a.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx(G,{title:"Popover",sourceName:"Popover"}),s.jsx(rs,{children:"A component to display information by floating style, offen trigger by a button"}),s.jsxs(v,{className:"mb-4",children:[s.jsx(u,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(m,{title:"title",content:"this is popover texts and it is long",side:"top",align:"start",onOpenChange:r,children:s.jsx(f,{type:"primary",children:"popover"})}),s.jsxs("p",{className:"mt-2 text-zinc-500",children:["status: ",String(n)]}),s.jsx(b,{content:Cs})]}),s.jsxs(v,{className:"mb-4",children:[s.jsx(u,{as:"h4",className:"mb-2",children:"placement(side & align)"}),s.jsx("div",{className:"inline-grid grid-cols-3 grid-rows-4 gap-3",children:Ds.map((t,e)=>s.jsx(m,{title:"title",content:"this is popover contents",side:t.side,align:t.align,children:s.jsxs(f,{type:"primary",children:[t.side,"-",t.align]})},e))}),s.jsx(b,{content:Es})]}),s.jsxs(v,{className:"mb-4",children:[s.jsx(u,{as:"h4",className:"mb-2",children:"disabled"}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsx(cs,{checked:l,onCheckedChange:p}),s.jsxs("span",{className:"text-zinc-500 ml-2",children:["disabled: ",String(l)]})]}),s.jsx(m,{title:"title",content:"this is popover texts and it is long",disabled:l,side:"right",children:s.jsx(f,{type:"primary",children:"popover"})})]}),s.jsx(b,{content:Ns})]}),s.jsxs(v,{className:"mb-4",children:[s.jsx(u,{as:"h4",className:"mb-2",children:"Arrow"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx(m,{title:"title",content:"this is popover texts and it is long",children:s.jsx(f,{type:"primary",children:"with arrow"})}),s.jsx(m,{title:"title",showArrow:!1,content:"this is popover texts and it is long",children:s.jsx(f,{type:"primary",children:"without arrow"})})]}),s.jsx(b,{content:Rs})]}),s.jsxs(v,{className:"mb-4",children:[s.jsx(u,{as:"h4",className:"mb-2",children:"sideOffset"}),s.jsx(m,{title:"title",sideOffset:20,content:"this is popover texts and it is long",children:s.jsx(f,{type:"primary",children:"popover"})}),s.jsx(b,{content:Ss})]}),s.jsxs(v,{className:"mb-4",children:[s.jsx(u,{as:"h4",className:"mb-2",children:"title & content"}),s.jsx(m,{title:s.jsx("p",{className:"text-brand-500 font-bold",children:"custom title"}),content:s.jsx("p",{className:"text-sm text-danger-500",children:"use as custom contents"}),children:s.jsx(f,{type:"primary",children:"popover"})}),s.jsx(b,{content:As})]}),s.jsx(u,{as:"h2",className:"mb-4",children:"API"}),s.jsx(L,{rows:Bs})]})}export{Ws as default};
