import{d as V,r as p,j as s,al as L,am as F,an as O}from"./index-DVJh4_k1.js";import{N as $,S as c,A as D}from"./index-BJRHTw7p.js";import{c as I,H as e,C as i}from"./index-C2mXlWvz.js";const A=V({slots:{base:"bg-zinc-100 inline-flex box-border relative",item:`segment-item h-full flex flex-center select-none z-[2] transition-all text-zinc-500/70 [&:not(.disabled):not(.active)]:hover:text-zinc-600
    [&.disabled]:opacity-40 [&.disabled]:cursor-not-allowed`,indicator:"segment-indicator h-full transition-all ease-linear absolute top-0 z-[1] shadow [&.disabled]:shadow-none"},variants:{size:{tiny:{base:"h-[26px] rounded-small p-[2px] text-[13px]",item:"rounded-tiny px-[6px]",indicator:"rounded-tiny"},small:{base:"h-[34px] rounded-medium p-[3px] text-[14px]",item:"rounded-small px-[6px]",indicator:"rounded-small"},medium:{base:"h-[42px] rounded-large p-[4px]",item:"rounded-medium px-[8px]",indicator:"rounded-medium"},large:{base:"h-[50px] rounded-large p-[5px] text-[18px]",item:"rounded-medium px-[8px]",indicator:"rounded-medium"}},colors:{default:{item:"[&.active:not(.disabled)]:text-zinc-800",indicator:"bg-white [&.disabled]:bg-[#f3f3f3]"},primary:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-brand-500 shadow-brand-400 [&.disabled]:opacity-40"},info:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-info-500 shadow-info-400 [&.disabled]:opacity-40"},success:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-success-500 shadow-success-400 [&.disabled]:opacity-40"},warn:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-warn-500 shadow-warn-400 [&.disabled]:opacity-40"},danger:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-danger-500 shadow-danger-400 [&.disabled]:opacity-40"}}},defaultVariants:{size:"medium",colors:"default"}}),b=p.forwardRef((o,y)=>{const{options:r,defaultValue:w,size:h,colors:u,className:v,style:k,onSegmentChange:j}=o,{base:q,item:N,indicator:S}=A(),[m,z]=p.useState(w??r[0].value),x=p.useRef(null),t=p.useRef(null),_=l=>{l.disabled||(z(l.value),j==null||j(l.value))},C=()=>{var f;if(!t.current)return;const l=((f=x.current)==null?void 0:f.children)||[],d=r.findIndex(R=>R.value===m),g=Array.from(l)[d];t.current.style.width=`${g.offsetWidth}px`,t.current.style.transform=`translateX(${g.offsetLeft}px)`,g.classList.contains("disabled")?t.current.classList.add("disabled"):t.current.classList.remove("disabled")};return p.useEffect(()=>{C()},[m]),s.jsx("div",{ref:y,className:q({size:h,class:v}),style:k,children:s.jsxs("div",{ref:x,className:"w-full flex relative",children:[r.map((l,d)=>s.jsx("div",{className:N({size:h,colors:u,class:I(`${m===l.value?"active":""}`,{disabled:l.disabled})}),onClick:()=>_(l),children:l.label},d)),s.jsx("div",{ref:t,className:S({size:h,colors:u})})]})})});b.displayName="Segment";const a=b,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Segment</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Segment&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CommonOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@/packages/types/components&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">CommonOption</span>[] = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;beef&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;beef&#x27;</span>,
    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Segment</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
      <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;orange&quot;</span>
      <span class="hljs-attr">onSegmentChange</span>=<span class="hljs-string">{(val)</span> =&gt;</span> {
        console.log(&#x27;segment, you choose: &#x27;, val);
      }}
    /&gt;</span>
  )
}
</code></pre>
`,E=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Segment</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Segment&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center flex-wrap gap-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-sm mb-1 ml-1&quot;</span>&gt;</span>tiny:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-sm mb-1 ml-1&quot;</span>&gt;</span>small:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-sm mb-1 ml-1&quot;</span>&gt;</span>medium:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text-sm mb-1 ml-1&quot;</span>&gt;</span>large:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,H=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Segment</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Segment&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;[&amp;_.segment-item]:w-[100px] mb-3&quot;</span> /&gt;</span></span>
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-[408px] [&amp;_.segment-item]:flex-1&quot;</span> /&gt;</span></span>
  )
}
</code></pre>
`,T=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Segment</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Segment&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiImageCircleLine</span>, <span class="hljs-title class_">RiFileLine</span>, <span class="hljs-title class_">RiVideoLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CommonOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@/packages/types/components&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">iconOptions</span>: <span class="hljs-title class_">CommonOption</span>[] = [
  {
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiImageCircleLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Photo<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    ),
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;photo&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiFileLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>File<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    ),
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;file&#x27;</span>,
  },
  {
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">RiVideoLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{18}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Video<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/&gt;</span></span>
    ),
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;video&#x27;</span>,
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{iconOptions}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;[&amp;_.segment-item]:w-[80px]&quot;</span> /&gt;</span></span>
  )
}
</code></pre>
`,X=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Segment</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Segment&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex flex-wrap gap-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;default&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;warn&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Segment</span> <span class="hljs-attr">colors</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,B=[{prop:"defaultValue",type:"string",desc:"default value of segment for initial",required:!1,default:"-"},{prop:"options",desc:"options of segment",type:"link: CommonOption(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/components.ts)",required:!0,default:"-"},{prop:"size",desc:"size of segment",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"colors",desc:"color theme of segment",type:"tag: default | primary | info | success | warn | danger",required:!1,default:"default"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onSegmentChange",desc:"callback when segment item changed",required:!1,type:"(value: string) => void",default:"-"}],n=[{label:"apple",value:"apple"},{label:"banana",value:"banana"},{label:"orange",value:"orange"},{label:"beef",value:"beef",disabled:!0}],W=[{label:s.jsxs(s.Fragment,{children:[s.jsx(L,{size:18}),s.jsx("span",{children:"Photo"})]}),value:"photo"},{label:s.jsxs(s.Fragment,{children:[s.jsx(F,{size:18}),s.jsx("span",{children:"File"})]}),value:"file"},{label:s.jsxs(s.Fragment,{children:[s.jsx(O,{size:18}),s.jsx("span",{children:"Video"})]}),value:"video"}];function M(){return s.jsxs(s.Fragment,{children:[s.jsx($,{title:"Segment",sourceName:"Segment"}),s.jsxs(c,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(a,{options:n,defaultValue:"orange",onSegmentChange:o=>{console.log("segment, you choose: ",o)}}),s.jsx(i,{content:P})]}),s.jsxs(c,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"flex items-center flex-wrap gap-3",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm mb-1 ml-1",children:"tiny:"}),s.jsx(a,{size:"tiny",options:n})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm mb-1 ml-1",children:"small:"}),s.jsx(a,{size:"small",options:n})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm mb-1 ml-1",children:"medium:"}),s.jsx(a,{size:"medium",options:n})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm mb-1 ml-1",children:"large:"}),s.jsx(a,{size:"large",options:n})]})]}),s.jsx(i,{content:E})]}),s.jsxs(c,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"layout evenly"}),s.jsx(a,{options:n,className:"[&_.segment-item]:w-[100px] mb-3 mr-3"}),s.jsx(a,{options:n,className:"w-[408px] [&_.segment-item]:flex-1"}),s.jsx(i,{content:H})]}),s.jsxs(c,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"with icon"}),s.jsx(a,{options:W,className:"[&_.segment-item]:w-[80px]"}),s.jsx(i,{content:T})]}),s.jsxs(c,{className:"mb-4",children:[s.jsx(e,{as:"h4",className:"mb-2",children:"colors"}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsx(a,{colors:"default",options:n}),s.jsx(a,{colors:"primary",options:n}),s.jsx(a,{colors:"info",options:n}),s.jsx(a,{colors:"success",options:n}),s.jsx(a,{colors:"warn",options:n}),s.jsx(a,{colors:"danger",options:n})]}),s.jsx(i,{content:X})]}),s.jsx(e,{as:"h2",className:"mb-4",children:"API"}),s.jsx(D,{rows:B})]})}export{M as default};
