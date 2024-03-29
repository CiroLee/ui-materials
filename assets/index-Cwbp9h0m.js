import{j as s}from"./index-q7CDUrFp.js";import{N as c,D as r,S as p,A as o}from"./index-oKhp_3jT.js";import{H as n,C as t}from"./index-Cl9hbDk5.js";import{R as l}from"./index-DfiJSUEf.js";import"./index-CFeUuSSk.js";import"./index-BJw0FEPb.js";import"./index-COba5_RJ.js";import"./index-itjhxnW_.js";import"./index-BMx5E7eA.js";import"./index-_0vujlwK.js";import"./index-yj4WXu_N.js";import"./index-B39kRP4G.js";const h=[{prop:"direction",desc:"item direction",type:"tag: horizontal | vertical",required:!1,default:"horizontal"},{prop:"value",desc:"current selected value",type:"string",required:!1,default:"-"},{prop:"options",desc:"radio config options",type:"CommonOption[]",required:!0,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onValueChange",desc:"radio change callback",type:"(value: string) => void",required:!1,default:"-"}],i=[{prop:"value",desc:"value to trigger when value change",type:"string",required:!0,default:"-"},{prop:"label",desc:"label of radio",type:"React.ReactNode",required:!0,default:"-"},{prop:"disabled",desc:"disable status",type:"boolean",required:!1,default:"false"}],j=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">CommonOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">CommonOption</span>[] = [
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
  },
    {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
  },
]
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(v)</span> =&gt;</span> console.log(&#x27;you choose: &#x27;, v)} /&gt;</span>
  )
}
</code></pre>
`,d=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">CommonOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">CommonOption</span>[] = [
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
  },
    {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
  },
]
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;pb-3 mb-3 border-b&quot;</span>
      <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
      <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(v)</span> =&gt;</span> console.log(&#x27;you choose: &#x27;, v)}
    /&gt;</span>
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(v)</span> =&gt;</span> console.log(&#x27;you choose: &#x27;, v)} /&gt;</span>
  )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">CommonOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">CommonOption</span>[] = [
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
  },
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
  },
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
    <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
  },
];
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">options</span>=<span class="hljs-string">{options}</span> <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(v)</span> =&gt;</span> console.log(&#x27;you choose: &#x27;, v)} /&gt;</span>
  )
}
</code></pre>
`,u=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">RadioGroup</span>, { <span class="hljs-keyword">type</span> <span class="hljs-title class_">CommonOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/RadioGroup&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
<span class="hljs-keyword">const</span> <span class="hljs-attr">options</span>: <span class="hljs-title class_">CommonOption</span>[] = [
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;apple&#x27;</span>,
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>🍎<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    ),
  },
  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;banana&#x27;</span>,
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>🍌<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    ),
  },

  {
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;orange&#x27;</span>,
    <span class="hljs-attr">label</span>: (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>orange<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>🍊<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    ),
  },
];
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;[&amp;&gt;label_button]:self-baseline [&amp;_button]:mt-[6px]&quot;</span>
      <span class="hljs-attr">options</span>=<span class="hljs-string">{option}</span>
      <span class="hljs-attr">onValueChange</span>=<span class="hljs-string">{(v)</span> =&gt;</span> console.log(&#x27;you choose: &#x27;, v)}
    /&gt;</span>
  )
}
</code></pre>
`,e=[{value:"apple",label:"apple"},{value:"banana",label:"banana"}],m=[{value:"apple",label:"apple"},{value:"banana",label:"banana"},{value:"orange",label:"orange",disabled:!0}],x=[{value:"apple",label:s.jsxs("div",{children:[s.jsx("p",{children:"apple"}),s.jsx("p",{children:"🍎"})]})},{value:"banana",label:s.jsxs("div",{children:[s.jsx("p",{children:"banana"}),s.jsx("p",{children:"🍌"})]})},{value:"orange",label:s.jsxs("div",{children:[s.jsx("p",{children:"orange"}),s.jsx("p",{children:"🍊"})]})}];function O(){return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"RadioGroup",sourceName:"RadioGroup"}),s.jsx(r,{children:"Radio selection only on can be selected"}),s.jsxs(p,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(l,{options:e,onValueChange:a=>console.log("you choose: ",a)}),s.jsx(t,{content:j})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"direction"}),s.jsx(l,{options:e,className:"pb-3 mb-3 border-b",direction:"horizontal",onValueChange:a=>console.log("you choose: ",a)}),s.jsx(l,{options:e,direction:"vertical",onValueChange:a=>console.log("you choose: ",a)}),s.jsx(t,{content:d})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"disabled"}),s.jsx(l,{options:m,onValueChange:a=>console.log("you choose: ",a)}),s.jsx(t,{content:g})]}),s.jsxs(p,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"custom"}),s.jsx(l,{className:"[&>label_button]:self-baseline [&_button]:mt-[6px]",options:x,onValueChange:a=>console.log("you choose: ",a)}),s.jsx(t,{content:u})]}),s.jsx(n,{as:"h2",className:"mb-2",children:"API"}),s.jsx(n,{as:"h4",className:"mb-2",children:"RadioGroup"}),s.jsx(o,{rows:h}),s.jsx(n,{as:"h4",className:"my-2",children:"CommonOption"}),s.jsx(o,{rows:i})]})}export{O as default};
