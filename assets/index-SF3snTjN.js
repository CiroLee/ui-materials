import{j as e,d,h as x}from"./index-DS6qm14V.js";import{N as p,D as f,S as t,A as h}from"./index-Dlsx_GZD.js";import{H as l,C as n}from"./index-B3S6f_Ni.js";const u=d({base:"relative",variants:{type:{flicker:"bg-skeleton-flicker bg-[size:400%_100%] animate-flicker",shimmer:"bg-black/[0.08] animate-shimmer "}},defaultVariants:{type:"flicker"}},{twMerge:!0});function s(r){const{type:i,children:c,className:m,style:o}=r;return e.jsx("div",{className:u({type:i,class:m}),style:o,children:c})}const a=`\`\`\`typescript
import Skeleton from 'your path/Skeleton';

export default function Demo() {
  return (
    <div className="mt-2 flex items-center">
      <Skeleton type="flicker" className="size-[48px] rounded-full" />
      <div className="flex flex-col justify-center">
        <Skeleton type="flicker" className="w-[200px] h-[20px] rounded-md ml-2" />
        <Skeleton type="flicker" className="w-[80px] h-[20px] rounded-md ml-2 mt-2" />
      </div>
    </div>
  )
}
\`\`\`
`,k=`\`\`\`typescript
import { RiImageLine } from '@remixicon/react';
import Skeleton from 'your path/Skeleton';

export default function Demo() {
  return (
    <Skeleton type="flicker" className="size-[48px] flex flex-center rounded-md">
      <RiImageLine size="24px" className="text-black/20" />
    </Skeleton>
  )
}
\`\`\`
`,j=[{prop:"type",desc:"type of skeleton",type:"tag: flicker | shimmer",required:!1,default:"flicker"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}];function b(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Skeleton",sourceName:"Skeleton"}),e.jsx(f,{children:"Display a placeholder while content is loading"}),e.jsxs(t,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"type: flicker"}),e.jsxs("div",{className:"mt-2 flex items-center",children:[e.jsx(s,{type:"flicker",className:"size-[48px] rounded-full"}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx(s,{type:"flicker",className:"w-[200px] h-[20px] rounded-md ml-2"}),e.jsx(s,{type:"flicker",className:"w-[80px] h-[20px] rounded-md ml-2 mt-2"})]})]}),e.jsx(n,{content:a})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"type: shimmer"}),e.jsxs("div",{className:"mt-2 flex items-center",children:[e.jsx(s,{type:"shimmer",className:"size-[48px] rounded-full"}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx(s,{type:"shimmer",className:"w-[200px] h-[20px] rounded-md ml-2"}),e.jsx(s,{type:"shimmer",className:"w-[80px] h-[20px] rounded-md ml-2 mt-2"})]})]}),e.jsx(n,{content:a})]}),e.jsxs(t,{className:"mb-4",children:[e.jsx(l,{as:"h4",className:"mb-2",children:"width children"}),e.jsx(s,{type:"flicker",className:"size-[48px] flex flex-center rounded-md",children:e.jsx(x,{size:"24px",className:"text-black/20"})}),e.jsx(n,{content:k})]}),e.jsx(l,{as:"h2",className:"my-4",children:"API"}),e.jsx(h,{rows:j})]})}export{b as default};
