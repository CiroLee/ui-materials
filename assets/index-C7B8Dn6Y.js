var B=Object.defineProperty;var I=(n,a,l)=>a in n?B(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l;var C=(n,a,l)=>(I(n,typeof a!="symbol"?a+"":a,l),l);import{d as A,r as i,j as s,J as F,a as H}from"./index-COZO8Rzb.js";import{N as Y,S as g,A as R}from"./index-CJvfj1Kn.js";import{c as q,H as h,C as u,B as y}from"./index-CaQzaSfZ.js";import{S as $}from"./index-7dX-Kikt.js";import{T as f}from"./index-DlQNMR_b.js";import{D as L}from"./index-BVOm_AMB.js";import"./index-BdZm8eSK.js";import"./index-BBEZAuME.js";import"./index-CR97gBd8.js";import"./index-BaEBlOYj.js";import"./index-DZMYs03R.js";import"./index-G4FVeZ_f.js";import"./index-ByhUHD7A.js";class V{constructor(){C(this,"grid",42)}generate(a){const{month:l,year:t,startWeekOnSunday:c}=a,p=this.getFirstDayOfMonth(l,t),x=this.getDaysInMonth(l,t),w=c?p.getDay():(p.getDay()+6)%7,j=[];for(let o=0;o<this.grid;o++)j.push(new Date(t,l-1,1+(o-w)));return{list:j,total:x}}getFirstDayOfMonth(a,l){return new Date(l,a-1,1)}getDaysInMonth(a,l){return new Date(l,a,0).getDate()}}const P=new V,E=A({slots:{base:"border rounded-medium relative p-[16px]",weekHead:"flex h-[32px] items-center mb-2",weekItem:"flex-1 text-end pr-[8px]",content:"grid grid-rows-6 grid-cols-7 relative",contentItem:"w-full max-h-[140px] min-h-[120px] overflow-hidden p-[8px] cursor-pointer border-t hover:bg-gray-200/40",unActive:"size-[30px] inline-flex rounded-full flex-center",active:"bg-brand-500 text-white",notInCurrentMonth:"text-zinc-300"}}),D=["日","一","二","三","四","五","六"];function J(n,a){return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate()}function G(n,a){return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}const N=i.forwardRef((n,a)=>{const{defaultValue:l=new Date,headerContent:t,cellContent:c,startWeekOnSunday:p=!0,className:x,style:w}=n,{base:j,weekHead:o,weekItem:v,content:b,contentItem:S,unActive:M,active:O,notInCurrentMonth:T}=E(),[r,_]=i.useState(l),z=i.useMemo(()=>{const{list:e}=P.generate({year:r.getFullYear(),month:r.getMonth()+1,startWeekOnSunday:p});return e},[r,p]),W=i.useMemo(()=>{if(!p){const e=[...D],d=e.shift();return[...e,d]}return D},[p]),k=e=>{var d;_(e),(d=n.onChange)==null||d.call(n,e)};return s.jsxs("div",{ref:a,className:j({class:x}),style:w,children:[t?t({onChange:k,value:r}):null,s.jsx("div",{className:o(),children:W.map(e=>s.jsx("div",{className:v(),children:e},e))}),s.jsxs("ul",{className:b(),children:[z.map(e=>s.jsxs("li",{className:S({class:q({[T()]:!G(r,e)})}),onClick:()=>k(e),children:[s.jsx("p",{className:"text-end",children:s.jsx("span",{className:M({class:q({[O()]:J(r,e)})}),children:e.getDate()})}),c?s.jsx("div",{className:"overflow-y-auto h-full mt-1",children:c(e)}):null]},e.getTime())),s.jsx("div",{className:"absolute absolute-center text-zinc-200/55 text-[14vw] font-bold -z-[1]",children:r.getMonth()+1})]})]})});N.displayName="Calendar";const m=N,K=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Calendar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Calendar&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Calendar</span> /&gt;</span></span>
}
</code></pre>
`,Q=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Calendar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Calendar&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Button&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">dateChangeHandler</span> = (<span class="hljs-params">date: <span class="hljs-built_in">Date</span>, <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;prev&#x27;</span> | <span class="hljs-string">&#x27;next&#x27;</span></span>) =&gt; {
    <span class="hljs-keyword">const</span> newDate = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(date);
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">type</span> === <span class="hljs-string">&#x27;prev&#x27;</span>) {
      newDate.<span class="hljs-title function_">setMonth</span>(date.<span class="hljs-title function_">getMonth</span>() - <span class="hljs-number">1</span>);
    } <span class="hljs-keyword">else</span> {
      newDate.<span class="hljs-title function_">setMonth</span>(date.<span class="hljs-title function_">getMonth</span>() + <span class="hljs-number">1</span>);
    }
    <span class="hljs-keyword">return</span> newDate;
  };
    <span class="hljs-keyword">return</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Calendar</span>
            <span class="hljs-attr">headerContent</span>=<span class="hljs-string">{({</span> <span class="hljs-attr">onChange</span>, <span class="hljs-attr">value</span> }) =&gt;</span> {
              return (
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex justify-end items-center mb-2&quot;</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
                        <span class="hljs-attr">outline</span>
                        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>
                        <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>
                        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
                        const newDate = dateChangeHandler(value, &#x27;prev&#x27;);
                        onChange(newDate);
                        }}&gt;
                        <span class="hljs-tag">&lt;<span class="hljs-name">ChevronLeft</span> <span class="hljs-attr">strokeWidth</span>=<span class="hljs-string">{1.5}</span> /&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;mx-2 text-lg&quot;</span>&gt;</span>{value.toLocaleDateString()}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
                        <span class="hljs-attr">outline</span>
                        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>
                        <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>
                        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
                        const newDate = dateChangeHandler(value, &#x27;next&#x27;);
                        onChange(newDate);
                        }}&gt;
                        <span class="hljs-tag">&lt;<span class="hljs-name">ChevronRight</span> <span class="hljs-attr">strokeWidth</span>=<span class="hljs-string">{1.5}</span> /&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
                        <span class="hljs-attr">outline</span>
                        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>
                        <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ml-2&quot;</span>
                        <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
                        onChange(new Date());
                        }}&gt;
                        Today
                    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              );
            }}
        /&gt;</span>
    )
}
</code></pre>
`,U=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Calendar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Calendar&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Tooltip</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Tooltip&#x27;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Calendar</span>
      <span class="hljs-attr">cellContent</span>=<span class="hljs-string">{(date)</span> =&gt;</span> {
        if (date.getDate() === 10) {
          return (
            <span class="hljs-tag">&lt;&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;deadline TODAY&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;whitespace-nowrap text-sm ellipsis&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;size-[8px] rounded-[4px] bg-warn-500 inline-block&quot;</span> /&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ml-2&quot;</span>&gt;</span>deadline TODAY<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;salary day&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;whitespace-nowrap text-sm ellipsis&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;size-[8px] rounded-[4px] bg-success-500 inline-block&quot;</span> /&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ml-2&quot;</span>&gt;</span>salary day<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;shopping after work&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;whitespace-nowrap text-sm ellipsis&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;size-[8px] rounded-[4px] bg-success-500 inline-block&quot;</span> /&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ml-2&quot;</span>&gt;</span>shopping after work<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
            <span class="hljs-tag">&lt;/&gt;</span></span>
          );
        }
      }}
    /&gt;
  )
}
</code></pre>
`,X=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Calendar</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Calendar&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Switch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Switch&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [startWeekOnSunday, setStartWeekOnSunday] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;flex items-center mb-2&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{startWeekOnSunday}</span> <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{setStartWeekOnSunday}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ml-2&quot;</span>&gt;</span>: {\`\${startWeekOnSunday}\`}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Calendar</span> <span class="hljs-attr">startWeekOnSunday</span>=<span class="hljs-string">{startWeekOnSunday}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre>
`,Z=[{prop:"defaultValue",desc:"default date to show, if unset will show current date",type:"Date",required:!1,default:"new Date()"},{prop:"startWeekOnSunday",desc:"whether to start the week on Sunday, default is true",type:"boolean",required:!1,default:"true"},{prop:"headerContent",desc:"custom header content",type:"({ value, onChange }: {value: Date, onChange: (date: Date) => void}) => React.ReactNode",required:!1,default:"-"},{prop:"cellContent",desc:"custom cell content, using for add custom content to cell",type:"(value: Date) => React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onChange",desc:"triggered when date changes",type:"(date: Date) => void",required:!1,default:"-"}];function gs(){const[n,a]=i.useState(!0),l=(t,c)=>{const p=new Date(t);return c==="prev"?p.setMonth(t.getMonth()-1):p.setMonth(t.getMonth()+1),p};return s.jsxs(s.Fragment,{children:[s.jsx(Y,{title:"Calendar",sourceName:"Calendar"}),s.jsx(L,{children:"A component to display calendar information"}),s.jsxs(g,{className:"mb-4",children:[s.jsx(h,{as:"h4",className:"mb-2",children:"basic"}),s.jsx(m,{onChange:t=>{console.log("your have choose: ",t.toLocaleDateString())}}),s.jsx(u,{content:K})]}),s.jsxs(g,{className:"mb-4",children:[s.jsx(h,{as:"h4",className:"mb-2",children:"headerContent"}),s.jsx(m,{headerContent:({onChange:t,value:c})=>s.jsxs("div",{className:"flex justify-end items-center mb-2",children:[s.jsx(y,{outline:!0,size:"small",shape:"square",onClick:()=>{const p=l(c,"prev");t(p)},children:s.jsx(F,{})}),s.jsx("span",{className:"mx-2 text-lg",children:c.toLocaleDateString()}),s.jsx(y,{outline:!0,size:"small",shape:"square",onClick:()=>{const p=l(c,"next");t(p)},children:s.jsx(H,{})}),s.jsx(y,{outline:!0,size:"small",className:"ml-2",onClick:()=>{t(new Date)},children:"Today"})]})}),s.jsx(u,{content:Q})]}),s.jsxs(g,{className:"mb-4",children:[s.jsx(h,{as:"h4",className:"mb-2",children:"startWeekOnSunday"}),s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsx($,{checked:n,onCheckedChange:a}),s.jsxs("span",{className:"ml-2",children:[": ",`${n}`]})]}),s.jsx(m,{startWeekOnSunday:n}),s.jsx(u,{content:X})]}),s.jsxs(g,{className:"mb-4",children:[s.jsx(h,{as:"h4",className:"mb-2",children:"cellContent"}),s.jsx(m,{cellContent:t=>{if(t.getDate()===10)return s.jsxs(s.Fragment,{children:[s.jsx(f,{title:"deadline TODAY",children:s.jsxs("div",{className:"whitespace-nowrap text-sm ellipsis",children:[s.jsx("span",{className:"size-[8px] rounded-[4px] bg-warn-500 inline-block"}),s.jsx("span",{className:"ml-2",children:"deadline TODAY"})]})}),s.jsx(f,{title:"salary day",children:s.jsxs("div",{className:"whitespace-nowrap text-sm ellipsis",children:[s.jsx("span",{className:"size-[8px] rounded-[4px] bg-success-500 inline-block"}),s.jsx("span",{className:"ml-2",children:"salary day"})]})}),s.jsx(f,{title:"shopping after work",children:s.jsxs("div",{className:"whitespace-nowrap text-sm ellipsis",children:[s.jsx("span",{className:"size-[8px] rounded-[4px] bg-success-500 inline-block"}),s.jsx("span",{className:"ml-2",children:"shopping after work"})]})})]})}}),s.jsx(u,{content:U})]}),s.jsx(h,{as:"h2",className:"mb-4",children:"API"}),s.jsx(R,{rows:Z})]})}export{gs as default};
