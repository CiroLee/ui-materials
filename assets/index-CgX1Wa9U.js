import{d as w,r as d,j as e,v as g,w as T,x as P,z as v,Q as D,N as R}from"./index-DS6qm14V.js";import{N as I,D as q,S as l,A as S}from"./index-Dlsx_GZD.js";import{H as a,C as o}from"./index-B3S6f_Ni.js";const p=w({slots:{base:"ui-alert border rounded-medium p-[12px] flex text-[#252521] relative",icon:"",left:"ui-alert__left pr-[8px]",right:"ui-alert__right flex-1 overflow-hidden",title:"ui-alert__title font-bold ellipsis"},variants:{alertType:{default:{base:"border-brand-500 bg-brand-100",icon:"text-brand-600"},success:{base:"border-success-500 bg-success-100",icon:"text-success-600"},info:{base:"border-info-500 bg-info-100",icon:"text-info-600"},warn:{base:"border-warn-500 bg-warn-100",icon:"text-warn-600"},error:{base:"border-danger-500 bg-danger-100",icon:"text-danger-600"}},isPlain:{true:{base:"border-[#D1D6D8] bg-transparent",icon:"text-black"}}},defaultVariants:{alertType:"default"}});function F(i){const{icon:c,alertType:t,isPlain:s}=i,{icon:r}=p();if(c)return e.jsx(e.Fragment,{children:c});switch(t){case"default":return e.jsx(D,{className:r({alertType:t,isPlain:s})});case"info":return e.jsx(v,{className:r({alertType:t,isPlain:s})});case"success":return e.jsx(P,{className:r({alertType:t,isPlain:s})});case"warn":return e.jsx(T,{className:r({alertType:t,isPlain:s})});case"error":return e.jsx(g,{className:r({alertType:t,isPlain:s})})}}const x=d.forwardRef((i,c)=>{const{title:t,content:s,icon:r,alertType:m="default",isPlain:u,showIcon:f=!0,className:h,style:j}=i,{base:b,left:y,right:N,title:A}=p();return e.jsxs("div",{ref:c,className:b({alertType:m,isPlain:u,class:h}),style:j,children:[f&&e.jsx("div",{className:y(),children:e.jsx(F,{alertType:m,isPlain:u,icon:r})}),e.jsxs("div",{className:N(),children:[d.isValidElement(t)?e.jsx(e.Fragment,{children:t}):t?e.jsx("p",{className:A(),children:t}):null,d.isValidElement(s)?e.jsx(e.Fragment,{children:s}):s?e.jsx("div",{children:s}):null]})]})});x.displayName="Alert";const n=x,M=`\`\`\`ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <Alert title="title" content="add content here" />
  )
}
\`\`\`
`,_=`\`\`\`ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert title="default" alertType="default" content="add contents here" />
      <Alert title="info" alertType="info" content="add contents here" />
      <Alert title="success" alertType="success" content="add contents here" />
      <Alert title="warn" alertType="warn" content="add contents here" />
      <Alert title="error" alertType="error" content="add contents here" />
    </div>
  )
}
\`\`\`
`,E=`\`\`\`ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <Alert title="title" content="add content here" isPlain />
  )
}
\`\`\`
`,V=`\`\`\`ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <Alert
      title={<p className="italic font-bold">custom title</p>}
      alertType="warn"
      isPlain
      content={<Alert className="mt-2" content="nest alert" />}
    />
}
\`\`\`
`,B=`\`\`\`ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <Alert title="title" content="add content here" showIcon={false} />
  )
}
\`\`\`
`,C=`\`\`\`ts
import Alert from 'your path/Alert'；
import { RiBearSmileFill } from '@remixicon/react';
export default function Demo() {
  return (
     <Alert title="custom icon" icon={<RiBearSmileFill className="text-[#A45117]" />} content="add contents here" />
  )
}
\`\`\`
`,H=[{prop:"alertType",desc:"alert type",type:"tag:default | info | success | warn | danger",required:!1,default:"default"},{prop:"title",desc:"alert title",type:"React.ReactNode",required:!1,default:"-"},{prop:"content",desc:"alert content",type:"React.ReactNode",required:!1},{prop:"icon",desc:"alert icon",type:"React.ReactNode",required:!1,default:"-"},{prop:"showIcon",desc:"whether to show alert icon",type:"boolean",required:!1,default:"true"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}];function $(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{title:"Alert",sourceName:"Alert"}),e.jsx(q,{children:"A component display a brief and important information"}),e.jsxs(l,{className:"mb-4",children:[e.jsx(a,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(n,{title:"title",content:"add contents here"}),e.jsx(o,{content:M})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(a,{as:"h4",className:"mb-2",children:"alertType"}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(n,{title:"default",alertType:"default",content:"add contents here"}),e.jsx(n,{title:"info",alertType:"info",content:"add contents here"}),e.jsx(n,{title:"success",alertType:"success",content:"add contents here"}),e.jsx(n,{title:"warn",alertType:"warn",content:"add contents here"}),e.jsx(n,{title:"error",alertType:"error",content:"add contents here"})]}),e.jsx(o,{content:_})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(a,{as:"h4",className:"mb-2",children:"isPlain"}),e.jsx(n,{isPlain:!0,title:"isPlain",content:"add contents here"}),e.jsx(o,{content:E})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(a,{as:"h4",className:"mb-2",children:"custom title & content"}),e.jsx(n,{title:e.jsx("p",{className:"italic font-bold",children:"custom title"}),alertType:"warn",isPlain:!0,content:e.jsx(n,{className:"mt-2",content:"nest alert"})}),e.jsx(o,{content:V})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(a,{as:"h4",className:"mb-2",children:"without icon"}),e.jsx(n,{title:"without icon",content:"add contents here",showIcon:!1}),e.jsx(o,{content:B})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(a,{as:"h4",className:"mb-2",children:"custom icon"}),e.jsx(n,{title:"custom icon",icon:e.jsx(R,{className:"text-[#A45117]"}),content:"add contents here"}),e.jsx(o,{content:C})]}),e.jsx(a,{as:"h2",className:"mb-4",children:"API"}),e.jsx(S,{rows:H})]})}export{$ as default};
