import{j as e}from"./index-DS6qm14V.js";import{N as a,D as r,S as n,g as s,A as t}from"./index-Dlsx_GZD.js";import{H as i,C as o}from"./index-B3S6f_Ni.js";const c=`\`\`\`ts
import Divider from 'your path/Divider';

export default function Demo() {
  return (
    <div className="w-fit">
      <p>Divider is used to separate content</p>
      <Divider className="my-3" />
      <div className="h-[24px] relative flex items-center">
        <span>home</span>
        <Divider direction="vertical" className="mx-3" />
        <span>about</span>
        <Divider direction="vertical" className="mx-3" />
        <span>sponsor</span>
        <Divider direction="vertical" className="mx-3" />
      </div>
    </div>
  )
}
\`\`\`
`,d=[{prop:"direction",desc:"direction of divider component",type:"tag: horizontal | vertical",required:!1,default:"horizontal"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function x(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Divider",sourceName:"Divider"}),e.jsx(r,{children:"A component used to separate content"}),e.jsxs(n,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"basic"}),e.jsxs("div",{className:"w-fit",children:[e.jsx("p",{children:"Divider is used to separate content"}),e.jsx(s,{className:"my-3"}),e.jsxs("div",{className:"h-[24px] relative flex items-center",children:[e.jsx("span",{children:"home"}),e.jsx(s,{direction:"vertical",className:"mx-3"}),e.jsx("span",{children:"about"}),e.jsx(s,{direction:"vertical",className:"mx-3"}),e.jsx("span",{children:"sponsor"}),e.jsx(s,{direction:"vertical",className:"mx-3"})]})]}),e.jsx(o,{content:c})]}),e.jsx(i,{as:"h2",children:"API"}),e.jsx(t,{rows:d})]})}export{x as default};
