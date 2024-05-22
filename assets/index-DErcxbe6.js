import{d as D,r as t,j as a}from"./index-DS6qm14V.js";import{N as V,D as $,S as u,A as g}from"./index-Dlsx_GZD.js";import{H as d,C as f}from"./index-B3S6f_Ni.js";const H=D({slots:{label:"flex border-b border-gray-200 relative",labelItem:"flex flex-center h-[40px] px-3 cursor-default transition-colors",indicator:"h-[2px] absolute bottom-0 transition-all [&.disabled]:bg-gray-300"},variants:{disabled:{true:{labelItem:"disabled cursor-not-allowed text-gray-300"}},active:{true:{labelItem:"active"}},colors:{info:{labelItem:"[&:not(.active):not(.disabled)]:hover:text-info-500 [&.active:not(.disabled)]:text-info-500",indicator:"bg-info-500"},primary:{labelItem:"[&:not(.active):not(.disabled)]:hover:text-brand-400 [&.active:not(.disabled)]:text-brand-500",indicator:"bg-brand-500"},success:{labelItem:"[&:not(.active):not(.disabled)]:hover:text-success-400 [&.active]:text-success-500",indicator:"bg-success-500"},warn:{labelItem:"[&:not(.active):not(.disabled)]:hover:text-warn-400 [&.active]:text-warn-500",indicator:"bg-warn-500"},danger:{labelItem:"[&:not(.active):not(.disabled)]:hover:text-danger-400 [&.active]:text-danger-500",indicator:"bg-danger-500"}}},compoundVariants:[{disabled:!0,active:!0,class:{labelItem:"text-gray-300"}}],defaultVariants:{colors:"primary"}}),_=D({base:"tab-panel hidden mt-3"}),N=t.forwardRef((s,v)=>{const{defaultKey:b,colors:x,disabled:c,children:y,className:T,style:I,onTabChange:q}=s,[p,w]=t.useState(""),[P,R]=t.useState([]),m=t.useRef(null),j=t.useRef(null),i=t.useRef(null),{label:A,labelItem:C,indicator:S}=H({colors:x}),E=()=>{const e=m.current?.children;return e?Array.from(e).map(r=>{const l=r;return{label:l.dataset.label||"",value:l.dataset.value||"",disabled:l.dataset.disabled==="true"}}):[]},K=()=>{if(b)w(b);else{const e=m.current?.children;e&&w(e[0].dataset.value||"")}},L=e=>{const o=m.current?.children;o&&Array.from(o).forEach(r=>{const l=r;l.dataset.value===e?l.classList.remove("hidden"):l.classList.add("hidden")})};t.useEffect(()=>{K(),R(E())},[]),t.useEffect(()=>{k(p),L(p)},[p]);const k=e=>{if(!j.current||!i.current||!P.length)return;const o=j.current.children,r=Array.from(o).find(l=>l.dataset.value===e);i.current.style.width=`${r.offsetWidth}px`,i.current.style.transform=`translateX(${r.offsetLeft}px)`,r.dataset.disabled==="true"||c?i.current.classList.add("disabled"):i.current.classList.remove("disabled")},M=e=>{e.disabled||c||(w(e.value),q?.(e.value))};return a.jsxs("div",{ref:v,className:T,style:I,children:[a.jsxs("div",{ref:j,className:A(),children:[P.map(e=>a.jsx("div",{"data-value":e.value,"data-disabled":e.disabled,className:C({disabled:e.disabled||c,active:e.value===p}),onClick:()=>M(e),children:e.label},e.value)),a.jsx("div",{ref:i,className:S()})]}),a.jsx("div",{ref:m,children:y})]})});N.displayName="Tabs";function n(s){const{value:v,label:b,disabled:x,children:c,className:y,style:T}=s;return a.jsx("div",{className:_({class:y}),style:T,"data-disabled":x,"data-value":v,"data-label":b,children:c})}n.displayName="TabPanel";const h=N,B=`\`\`\`typescript
import Tabs, { TabPanel } from 'your path/Tabs';

export default function Demo() {
  return (
    <Tabs>
      <TabPanel value="npm" label="npm">
        npm install tailwindcss -D
      </TabPanel>
      <TabPanel value="yarn" label="yarn">
        yarn add tailwindcss -D
      </TabPanel>
      <TabPanel value="pnpm" label="pnpm">
        pnpm add tailwindcss -D
      </TabPanel>
    </Tabs>
  )
}
\`\`\`
`,F=`\`\`\`typescript
import Tabs, { TabPanel } from 'your path/Tabs';

export default function Demo() {
  return (
    <Tabs>
      <TabPanel value="npm" label="npm">
        npm install tailwindcss -D
      </TabPanel>
      <TabPanel value="yarn" label="yarn">
        yarn add tailwindcss -D
      </TabPanel>
      <TabPanel value="pnpm" label="pnpm" disabled>
        pnpm add tailwindcss -D
      </TabPanel>
    </Tabs>
  )
}
\`\`\`
`,O=`\`\`\`typescript
import Tabs, { TabPanel } from 'your path/Tabs';

export default function Demo() {
  return (
    <Tabs disabled>
      <TabPanel value="npm" label="npm">
        npm install tailwindcss -D
      </TabPanel>
      <TabPanel value="yarn" label="yarn">
        yarn add tailwindcss -D
      </TabPanel>
      <TabPanel value="pnpm" label="pnpm">
        pnpm add tailwindcss -D
      </TabPanel>
    </Tabs>
  )
}
\`\`\`
`,W=`\`\`\`typescript
import Tabs, { TabPanel } from 'your path/Tabs';

const colors = ['info', 'primary', 'success', 'warn', 'danger'] as const;
export default function Demo() {
  return (
    <div className="flex gap-4 flex-wrap">
      {colors.map((color) => (
        <Tabs key={color} colors={color} className="w-[200px]">
          <TabPanel value="npm" label="npm">
            npm install tailwindcss -D
          </TabPanel>
          <TabPanel value="yarn" label="yarn">
            yarn add tailwindcss -D
          </TabPanel>
          <TabPanel value="pnpm" label="pnpm">
            pnpm add tailwindcss -D
          </TabPanel>
        </Tabs>
      ))}
    </div>
  )
}
\`\`\`
`,X=[{prop:"defaultKey",desc:"default active key",type:"string",required:!1,default:"-"},{prop:"disabled",desc:"whether whole tabs disabled",type:"boolean",required:!1,default:"false"},{prop:"colors",desc:"tab colors",type:"tag: info | primary | success | warn | danger",default:"primary",required:!1},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onTabChange",desc:"tab change callback",type:"(value: string) => void",required:!1,default:"-"}],z=[{prop:"label",desc:"tab item label",type:"string",required:!0,default:"-"},{prop:"value",desc:"tab item value ",type:"string",required:!0,default:"-"},{prop:"disabled",desc:"whether tab item disabled",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}],G=["info","primary","success","warn","danger"];function Y(){return a.jsxs(a.Fragment,{children:[a.jsx(V,{title:"Tabs",sourceName:"Tabs"}),a.jsx($,{children:"Tabs simply used to alternate between views within the same context"}),a.jsxs(u,{className:"mb-4",children:[a.jsx(d,{as:"h4",className:"mb-2",children:"basic"}),a.jsxs(h,{onTabChange:s=>{console.log(s)},children:[a.jsx(n,{value:"npm",label:"npm",children:"npm install tailwindcss -D"}),a.jsx(n,{value:"yarn",label:"yarn",children:"yarn add tailwindcss -D"}),a.jsx(n,{value:"pnpm",label:"pnpm",children:"pnpm add tailwindcss -D"})]}),a.jsx(f,{content:B})]}),a.jsxs(u,{className:"mb-4",children:[a.jsx(d,{as:"h4",className:"mb-2",children:"disabled"}),a.jsxs(h,{children:[a.jsx(n,{value:"npm",label:"npm",children:"npm install tailwindcss -D"}),a.jsx(n,{value:"yarn",label:"yarn",children:"yarn add tailwindcss -D"}),a.jsx(n,{value:"pnpm",label:"pnpm",disabled:!0,children:"pnpm add tailwindcss -D"})]}),a.jsx(f,{content:F})]}),a.jsxs(u,{className:"mb-4",children:[a.jsx(d,{as:"h4",className:"mb-2",children:"disabled all"}),a.jsxs(h,{disabled:!0,children:[a.jsx(n,{value:"npm",label:"npm",children:"npm install tailwindcss -D"}),a.jsx(n,{value:"yarn",label:"yarn",children:"yarn add tailwindcss -D"}),a.jsx(n,{value:"pnpm",label:"pnpm",children:"pnpm add tailwindcss -D"}),a.jsx(f,{content:O})]})]}),a.jsxs(u,{className:"mb-4",children:[a.jsx(d,{as:"h4",className:"mb-2",children:"colors"}),a.jsx("div",{className:"flex gap-4 flex-wrap",children:G.map(s=>a.jsxs(h,{colors:s,className:"w-[200px]",children:[a.jsx(n,{value:"npm",label:"npm",children:"npm install tailwindcss -D"}),a.jsx(n,{value:"yarn",label:"yarn",children:"yarn add tailwindcss -D"}),a.jsx(n,{value:"pnpm",label:"pnpm",children:"pnpm add tailwindcss -D"})]},s))}),a.jsx(f,{content:W})]}),a.jsx(d,{as:"h2",className:"mb-4",children:"API"}),a.jsx(d,{as:"h4",className:"mb-2",children:"TabsProps"}),a.jsx(g,{rows:X}),a.jsx(d,{as:"h4",className:"my-2",children:"TabPanelProps"}),a.jsx(g,{rows:z})]})}export{Y as default};
