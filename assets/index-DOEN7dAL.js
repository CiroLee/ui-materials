import{d as V,r as n,j as s,k as O}from"./index-DNICQ8NF.js";import{N as J,D as K,S as t,A as Q}from"./index-rJa6HX1d.js";import{B as a,H as l,C as p,a as d}from"./index-_DhQyXzb.js";import{R as U}from"./index-DYlX25w6.js";import{a as W}from"./CheckboxGroup-CDm27HL9.js";import{P as X}from"./index-BQ111xTJ.js";import"./index-C-cdsa15.js";import"./index-CA-e9VSr.js";import"./index-C4qS0b9r.js";import"./index-CSqJZj69.js";import"./index-D759T38V.js";import"./index-Cx4UYWJX.js";import"./index-CkxT94Wl.js";import"./index-CZ68qV6A.js";const $=V({slots:{base:"modal bg-white rounded-large py-4 shadow-[color:rgba(0,0,0,0.04)] shadow-[0_10px_15px_-4px,0_-10px_15px_-4px,10px_0_15px_-4px,-10px_0_15px_-4px] relative overflow-hidden",title:"px-4 font-bold overflow-hidden pr-6 ellipsis",commonClose:"absolute top-4 right-4",defaultCloseIcon:`size-[24px] rounded-small flex flex-center after:absolute after:rotate-45 after:w-[1px] after:h-[16px] after:rounded-[1px] after:bg-gray-400 before:absolute 
    before:-rotate-45 before:w-[1px] before:h-[16px] before:rounded-[1px] before:bg-gray-400 transition-colors hover:bg-gray-300/40 hover:after:bg-gray-600 hover:before:bg-gray-600`,content:"modal__content px-4 my-4 max-h-[65vh] overflow-auto last:mb-0",footer:"px-4 flex gap-3"},variants:{size:{small:{base:"w-[60vw] md:w-[32vw]"},medium:{base:"w-[70vw] md:w-[50vw]"},large:{base:"w-[94vw] md:w-[80vw]"}},footerAlign:{start:{footer:"justify-start"},end:{footer:"justify-end"},center:{footer:"justify-center"}}},defaultVariants:{size:"medium",footerAlign:"end"}});function Y({title:u}){const{title:o}=$();return s.jsx("div",{className:o(),children:u})}const H=n.forwardRef((u,o)=>{const{show:M,size:m,title:h,closeIcon:j,enableEsc:S=!0,maskClosable:C=!0,backdrop:x="translucent",footerAlign:q,footer:w,cancelText:_="取消",confirmText:B="确定",children:v,onClose:c,onConfirm:i,className:G,style:g}=u,{base:z,commonClose:r,defaultCloseIcon:A,content:f,footer:I}=$(),y=()=>{c(),i==null||i()},T=n.useMemo(()=>x==="transparent"?"[&_.popup-mask]:bg-transparent":"",[x]),k=R=>{R.key==="Escape"&&S&&c()};return n.useEffect(()=>(document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}),[S]),s.jsx(X,{placement:"center",className:T,isBlur:x==="blur",show:M,ref:o,maskClosable:C,onClose:c,children:s.jsxs("div",{className:z({size:m,class:G}),style:g,children:[j===void 0?s.jsx("div",{className:r({class:A()}),onClick:c}):j===null?null:s.jsx("div",{className:r(),onClick:c,children:j}),n.isValidElement(h)?s.jsx(s.Fragment,{children:h}):h?s.jsx(Y,{title:h}):null,s.jsx("div",{className:f(),children:v}),w===void 0?s.jsxs("div",{className:I({footerAlign:q}),children:[s.jsx(a,{type:"text",outline:!0,onClick:c,children:_}),s.jsx(a,{onClick:y,children:B})]}):w===null?null:s.jsx(s.Fragment,{children:w})]})})});H.displayName="Modal";const e=H,Z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>setShow(true)}&gt;open a modal<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ss=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span>, { <span class="hljs-title class_">ButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [modalSize, setModalSize] = useState&lt;<span class="hljs-string">&#x27;small&#x27;</span> | <span class="hljs-string">&#x27;medium&#x27;</span> | <span class="hljs-string">&#x27;large&#x27;</span>&gt;(<span class="hljs-string">&#x27;medium&#x27;</span>);
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setModalSize(&#x27;small&#x27;);
           }}&gt;
            small
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setModalSize(&#x27;medium&#x27;);
          }}&gt;
            medium
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setModalSize(&#x27;large&#x27;);
        }}&gt;
            large
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{modalSize}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,as=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span>, { <span class="hljs-title class_">ButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [modalBackdrop, setModalBackdrop] = useState&lt;<span class="hljs-string">&#x27;translucent&#x27;</span> | <span class="hljs-string">&#x27;blur&#x27;</span> | <span class="hljs-string">&#x27;transparent&#x27;</span>&gt;(<span class="hljs-string">&#x27;translucent&#x27;</span>);
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setModalBackdrop(&#x27;translucent&#x27;);
           }}&gt;
            small
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setModalBackdrop(&#x27;blur&#x27;);
          }}&gt;
            medium
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
           setShow(true);
           setModalBackdrop(&#x27;transparent&#x27;);
        }}&gt;
            large
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">backdrop</span>=<span class="hljs-string">{modalBackdrop}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ns=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Heading</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Heading&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span>, { <span class="hljs-title class_">ButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [showTitle, setShowTitle] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setShowTitle(false);
        }}&gt;
            without title
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setShowTitle(true);
        }}&gt;
            custom title
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span>
          <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">{</span>
            <span class="hljs-attr">showTitle</span> ? (
              &lt;<span class="hljs-attr">Heading</span> <span class="hljs-attr">as</span>=<span class="hljs-string">&quot;h4&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;px-4 text-brand-500 text-center&quot;</span>&gt;</span>
                custom title
              <span class="hljs-tag">&lt;/<span class="hljs-name">Heading</span>&gt;</span>
            ) : null
          }
          onClose={() =&gt; setShow(false)}&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ls=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiShutDownLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span>, { <span class="hljs-title class_">ButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [showCloseIcon, setShowCloseIcon] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setShowCloseIcon(false);
        }}&gt;
            without closeIcon
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setShowCloseIcon(true);
        }}&gt;
            custom closeIcon
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span>
          <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
          <span class="hljs-attr">closeIcon</span>=<span class="hljs-string">{</span>
            <span class="hljs-attr">showCloseIcon</span> ? (
              &lt;<span class="hljs-attr">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;size-[24px] rounded flex flex-center transition-colors group hover:bg-gray-200/40&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">RiShutDownLine</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-gray-300 group-hover:text-red-500&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{16}</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            ) : null
          }
          onClose={() =&gt; setShow(false)}&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ts=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;

<span class="hljs-keyword">type</span> <span class="hljs-title class_">FooterALign</span> = <span class="hljs-string">&#x27;start&#x27;</span> | <span class="hljs-string">&#x27;center&#x27;</span> | <span class="hljs-string">&#x27;end&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [footerAlign, setFooterAlign] = useState&lt;<span class="hljs-title class_">FooterALign</span>&gt;(<span class="hljs-string">&#x27;end&#x27;</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
        <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;end&quot;</span>
        <span class="hljs-attr">options</span>=<span class="hljs-string">{[</span>
          { <span class="hljs-attr">value:</span> &#x27;<span class="hljs-attr">start</span>&#x27;, <span class="hljs-attr">label:</span> &#x27;<span class="hljs-attr">align:left</span>&#x27; },
          { <span class="hljs-attr">value:</span> &#x27;<span class="hljs-attr">center</span>&#x27;, <span class="hljs-attr">label:</span> &#x27;<span class="hljs-attr">align:center</span>&#x27; },
          { <span class="hljs-attr">value:</span> &#x27;<span class="hljs-attr">end</span>&#x27;, <span class="hljs-attr">label:</span> &#x27;<span class="hljs-attr">align:end</span>&#x27; },
        ]}
        <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(value)</span> =&gt;</span> setFooterAlign(value as FooterALign)}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-4&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setModal6(true)}&gt;
          open modal
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span>
        <span class="hljs-attr">show</span>=<span class="hljs-string">{modal6}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
        <span class="hljs-attr">cancelText</span>=<span class="hljs-string">&quot;cancel&quot;</span>
        <span class="hljs-attr">confirmText</span>=<span class="hljs-string">&quot;confirm&quot;</span>
        <span class="hljs-attr">footerAlign</span>=<span class="hljs-string">{footerAlign}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setModal6(false)}&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,ps=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [showFooter, setShowFooter] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setShowFooter(false);
        }}&gt;
            without footer
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            setShow(true);
            setShowFooter(true);
        }}&gt;
            custom footer
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span>
          <span class="hljs-attr">show</span>=<span class="hljs-string">{modal7}</span>
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
          <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}
          footer={
            showFooter ? (
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;px-4 flex justify-end&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>
                  close
                <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">ButtonGroup</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;cancel<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;submit<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">ButtonGroup</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            ) : null
          }&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,es=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Checkbox</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Checkbox&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [closable, setClosable] = useState&lt;<span class="hljs-built_in">string</span>[]&gt;([]);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span>
        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex gap-3&quot;</span>
        <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{(list)</span> =&gt;</span> {
          setClosable(list as string[]);
        }}
        options={[
          { value: &#x27;escape&#x27;, label: &#x27;escape to close&#x27; },
          { value: &#x27;maskable&#x27;, label: &#x27;click mask to close&#x27; },
        ]} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-4&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(true)}&gt;
          open modal
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span>
          <span class="hljs-attr">show</span>=<span class="hljs-string">{show}</span>
          <span class="hljs-attr">enableEsc</span>=<span class="hljs-string">{closable.includes(</span>&#x27;<span class="hljs-attr">escape</span>&#x27;)}
          <span class="hljs-attr">maskClosable</span>=<span class="hljs-string">{closable.includes(</span>&#x27;<span class="hljs-attr">maskable</span>&#x27;)}
          <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span>
          <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setShow(false)}&gt;
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-2&quot;</span>&gt;</span>this is text...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,cs=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Modal</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Modal&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [show, setShow] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mt-4&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setModal9(true)}&gt;
          open modal
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Modal</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">show</span>=<span class="hljs-string">{modal9}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setModal9(false)}&gt;
        {new Array(30).fill(0).map((_, index) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span>&gt;</span>this is text {index} ...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">Modal</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,os=[{prop:"show",desc:"whether to show the modal",type:"boolean",required:!1,default:"false"},{prop:"size",desc:"modal size",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"title",desc:"modal title",type:"React.ReactNode",required:!1,default:"-"},{prop:"closeIcon",desc:"close icon, if set null, will not render closeIcon",type:"tag: React.ReactNode | null",required:!1,default:"-"},{prop:"footer",desc:"modal footer, if set null, will not render footer",type:"tag: React.ReactNode | null",required:!1,default:"-"},{prop:"enableEsc",desc:"whether to enable ESC to close the modal",type:"boolean",required:!1,default:!0},{prop:"maskClosable",desc:"whether to enable click mask to close the modal",type:"boolean",required:!1,default:!0},{prop:"backdrop",desc:"mask backdrop style",type:"tag: translucent | blur | transparent",required:!1,default:"translucent"},{prop:"footerAlign",desc:"modal footer alignment",type:"tag: start | center | end",required:!1,default:"end"},{prop:"cancelText",desc:"cancel button text",type:"string",required:!1,default:"取消"},{prop:"confirmText",desc:"confirm button text",type:"string",required:!1,default:"确定"},{prop:"onClose",desc:"modal close handler",type:"() => void",required:!0,default:"-"},{prop:"onConfirm",desc:"modal confirm handler",type:"() => void",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}];function Ss(){const[u,o]=n.useState("medium"),[M,m]=n.useState("translucent"),[h,j]=n.useState(!0),[S,C]=n.useState(!0),[x,q]=n.useState(!0),[w,_]=n.useState("end"),[B,v]=n.useState([]),[c,i]=n.useState(!1),[G,g]=n.useState(!1),[z,r]=n.useState(!1),[A,f]=n.useState(!1),[I,y]=n.useState(!1),[T,k]=n.useState(!1),[R,b]=n.useState(!1),[L,F]=n.useState(!1),[P,E]=n.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(J,{title:"Modal",sourceName:"Modal"}),s.jsx(K,{children:"Modal dialog displayed above the page"}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(a,{onClick:()=>i(!0),children:"open a modal"}),s.jsxs(e,{show:c,title:"title",onClose:()=>i(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]})]}),s.jsx(p,{content:Z}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"size"}),s.jsxs(d,{children:[s.jsx(a,{onClick:()=>{g(!0),o("small")},children:"small"}),s.jsx(a,{onClick:()=>{g(!0),o("medium")},children:"medium"}),s.jsx(a,{onClick:()=>{g(!0),o("large")},children:"large"})]}),s.jsxs(e,{show:G,title:"title",size:u,onClose:()=>g(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:ss})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"backdrop"}),s.jsxs(d,{children:[s.jsx(a,{onClick:()=>{r(!0),m("translucent")},children:"translucent"}),s.jsx(a,{onClick:()=>{r(!0),m("blur")},children:"blur"}),s.jsx(a,{onClick:()=>{r(!0),m("transparent")},children:"transparent"})]}),s.jsxs(e,{show:z,title:"title",backdrop:M,onClose:()=>r(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:as})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"title"}),s.jsxs(d,{children:[s.jsx(a,{onClick:()=>{f(!0),j(!1)},children:"without title"}),s.jsx(a,{onClick:()=>{f(!0),j(!0)},children:"custom title"})]}),s.jsxs(e,{show:A,title:h?s.jsx(l,{as:"h4",className:"px-4 text-brand-500 text-center",children:"custom title"}):null,onClose:()=>f(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:ns})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"closeIcon"}),s.jsxs(d,{children:[s.jsx(a,{onClick:()=>{y(!0),C(!1)},children:"without closeIcon"}),s.jsx(a,{onClick:()=>{y(!0),C(!0)},children:"custom closeIcon"})]}),s.jsxs(e,{show:I,title:"title",closeIcon:S?s.jsx("div",{className:"size-[24px] rounded flex flex-center transition-colors group hover:bg-gray-200/40",children:s.jsx(O,{className:"text-gray-300 group-hover:text-red-500",size:16})}):null,onClose:()=>y(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:ls})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"footerAlign"}),s.jsx(U,{value:"end",options:[{value:"start",label:"align:left"},{value:"center",label:"align:center"},{value:"end",label:"align:end"}],onValueChange:N=>_(N)}),s.jsx(a,{className:"mt-4",onClick:()=>k(!0),children:"open modal"}),s.jsxs(e,{show:T,title:"title",cancelText:"cancel",confirmText:"confirm",footerAlign:w,onClose:()=>k(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:ts})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"custom footer"}),s.jsxs(d,{children:[s.jsx(a,{onClick:()=>{b(!0),q(!1)},children:"without footer"}),s.jsx(a,{onClick:()=>{b(!0),q(!0)},children:"custom footer"})]}),s.jsxs(e,{show:R,title:"title",onClose:()=>b(!1),footer:x?s.jsxs("div",{className:"px-4 flex justify-end",children:[s.jsx(a,{outline:!0,className:"mr-2",children:"close"}),s.jsxs(d,{children:[s.jsx(a,{onClick:()=>b(!1),children:"cancel"}),s.jsx(a,{onClick:()=>b(!1),children:"submit"})]})]}):null,children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:ps})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"keyboard Escape and maskClosable"}),s.jsx(W,{className:"flex gap-3",onCheckedChange:N=>{v(N)},options:[{value:"escape",label:"escape to close"},{value:"maskable",label:"click mask to close"}]}),s.jsx(a,{className:"mt-4",onClick:()=>F(!0),children:"open modal"}),s.jsxs(e,{show:L,enableEsc:B.includes("escape"),maskClosable:B.includes("maskable"),title:"title",onClose:()=>F(!1),children:[s.jsx("p",{className:"my-2",children:"this is text..."}),s.jsx("p",{className:"my-2",children:"this is text..."})]}),s.jsx(p,{content:es})]}),s.jsxs(t,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"scroll content"}),s.jsx(a,{className:"mt-4",onClick:()=>E(!0),children:"open modal"}),s.jsx(e,{title:"title",show:P,onClose:()=>E(!1),children:new Array(30).fill(0).map((N,D)=>s.jsxs("p",{children:["this is text ",D," ..."]},D))}),s.jsx(p,{content:cs})]}),s.jsx(l,{as:"h2",className:"mb-4",children:"API"}),s.jsx(Q,{rows:os})]})}export{Ss as default};
