import{d as q,r as u,j as s,ao as I}from"./index-Ce8o4Ws_.js";import{N as B,D,S as r,A as f}from"./index-Be36CH7U.js";import{H as l,C as c}from"./index-BLqlGQVW.js";const C=q({slots:{base:"tree",node:"tree-node relative h-[32px] overflow-hidden transition-all",item:"tree-item relative h-[32px] flex items-center hover:bg-zinc-100/60 hover:cursor-default transition-all",icon:"transition-transform"},variants:{expended:{true:{node:"h-fit",icon:"rotate-90"}},branch:{true:{node:"before:w-px before:h-[calc(100%_-_32px)] before:bg-zinc-200 before:absolute before:left-[0.7em] before:top-[32px]"}},disabled:{true:{item:"text-zinc-300 hover:cursor-not-allowed"}}},defaultVariants:{expended:!1,branch:!1,disabled:!1}}),j=u.forwardRef((d,o)=>{const{options:g,showBranchLine:b,defaultExpendedIds:y=[],className:w,style:T,onSelectedChange:e}=d,{base:k,item:N,node:v,icon:O}=C(),[t,x]=u.useState(y),E=(a,n)=>{var m;if(n.disabled)return;let p=!1;t.includes(n.id)?(x([...t.filter(_=>n.id!==_)]),p=!1):(x([...t,n.id]),p=!0),(m=n.children)!=null&&m.length?e==null||e(n,p):e==null||e(n,!1)};return s.jsx("div",{ref:o,className:k({class:w}),style:T,children:g.map(a=>{var n;return s.jsxs("div",{className:v({expended:t.includes(a.id),branch:b}),children:[s.jsxs("div",{className:N({disabled:a.disabled}),onClick:p=>E(p,a),children:[(n=a.children)!=null&&n.length?s.jsx(I,{size:24,className:O({expended:t.includes(a.id)})}):null,s.jsx("span",{className:"only:px-2 pr-2",children:a.label})]}),a.children&&a.children.length?s.jsx(j,{className:"pl-4",options:a.children,onSelectedChange:e},`child-${a.id}`):null]},a.id)})})});j.displayName="Tree";const i=j,P=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tree</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">TreeOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tree&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">commonTreeOptions</span>: <span class="hljs-title class_">TreeOption</span>[] = [
  {
    <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-1&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;item-1&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;item-1&#x27;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;item-1.1&#x27;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;item-1.1&#x27;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;item-1.1&#x27;</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-2&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;item-2&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;item-2&#x27;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-2-1&#x27;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;item-2-1.1&#x27;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;item-2-1.2&#x27;</span>,
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-2-2&#x27;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;item-2-2.1&#x27;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;item-2-2.2&#x27;</span>,
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{commonTreeOptions}</span>
      <span class="hljs-attr">onSelectedChange</span>=<span class="hljs-string">{(detail,</span> <span class="hljs-attr">isExpended</span>) =&gt;</span> {
        console.log(&#x27;you selection is: &#x27;, detail, &#x27;current node isExpended: &#x27;, isExpended);
      }}
    /&gt;</span>
  )
}
</code></pre>
`,R=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tree</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tree&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{commonTreeOptions}</span> <span class="hljs-attr">showBranchLine</span> /&gt;</span></span>
  )
}
</code></pre>
`,$=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tree</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">TreeOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tree&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">disabledOptions</span>: <span class="hljs-title class_">TreeOption</span>[] = [
  {
    <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-3&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;item-3&#x27;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;item-3&#x27;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-child-3&#x27;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;tree-child-3&#x27;</span>,
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;tree-child-3.1&#x27;</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;tree-child-3.1&#x27;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;tree-child-3.1&#x27;</span>,
          },
        ],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{disabledOptions}</span>
    /&gt;</span></span>
  )
}
</code></pre>
`,z=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Tree</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tree&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{commonTreeOptions}</span> <span class="hljs-attr">defaultExpendedIds</span>=<span class="hljs-string">{[</span>&#x27;<span class="hljs-attr">tree-1</span>&#x27;, &#x27;<span class="hljs-attr">tree-2</span>&#x27;]} /&gt;</span></span>
  )
}
</code></pre>
`,A=[{prop:"options",type:"TreeOption[]",desc:"tree options",required:!0,default:"-"},{prop:"defaultExpendedIds",desc:"default expended tree node ids",type:"string[]",required:!1,default:"-"},{prop:"isBranch",desc:"whether to show branch line",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onSelectedChange",desc:"callback when click tree node",type:"(detail: TreeOption, isExpended: boolean) => void",required:!1,default:"-"}],S=[{prop:"id",desc:"tree node unique id",type:"string",required:!0,default:"-"},{prop:"label",desc:"display content of tree node",type:"React.ReactNode",required:!1,default:"-"},{prop:"value",desc:"value of tree node",type:"string",required:!1,default:"-"},{prop:"disabled",desc:"if current node is disabled",type:"boolean",required:!1,default:"-"},{prop:"children",desc:"children node of tree",type:"TreeOption[]",required:!1,default:"-"}],h=[{id:"tree-1",value:"item-1",label:"item-1",children:[{id:"item-1.1",label:"item-1.1",value:"item-1.1"}]},{id:"tree-2",value:"item-2",label:"item-2",children:[{id:"tree-2-1",value:"item-2-1.1",label:"item-2-1.2"},{id:"tree-2-2",value:"item-2-2.1",label:"item-2-2.2"}]}],H=[{id:"tree-3",label:"item-3",value:"item-3",children:[{id:"tree-child-3",label:"tree-child-3",disabled:!0,children:[{id:"tree-child-3.1",label:"tree-child-3.1",value:"tree-child-3.1"}]}]}];function G(){return s.jsxs(s.Fragment,{children:[s.jsx(B,{title:"Tree",sourceName:"Tree"}),s.jsx(D,{children:"A component used to show a tree hierarchy"}),s.jsxs(r,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(i,{className:"max-w-[200px]",options:h,onSelectedChange:(d,o)=>{console.log("you selection is: ",d,"current node isExpended: ",o)}}),s.jsx(c,{content:P})]}),s.jsxs(r,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"isBranch"}),s.jsx(i,{className:"max-w-[200px]",options:h,showBranchLine:!0}),s.jsx(c,{content:R})]}),s.jsxs(r,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"disabled"}),s.jsx(i,{className:"max-w-[200px]",options:H}),s.jsx(c,{content:$})]}),s.jsxs(r,{className:"mb-4",children:[s.jsx(l,{as:"h4",className:"mb-2",children:"defaultExpendedIds"}),s.jsx(i,{className:"max-w-[200px]",options:h,defaultExpendedIds:["tree-1","tree-2"]}),s.jsx(c,{content:z})]}),s.jsx(l,{as:"h2",className:"mb-4",children:"API"}),s.jsx(l,{as:"h4",className:"mb-2",children:"Props"}),s.jsx(f,{rows:A}),s.jsx(l,{as:"h4",className:"my-2",children:"TreeOption"}),s.jsx(f,{rows:S})]})}export{G as default};
