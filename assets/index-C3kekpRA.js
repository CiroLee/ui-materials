import{r as s,j as e}from"./index-DS6qm14V.js";import{B as o,C as f,H as b}from"./index-B3S6f_Ni.js";import{N as x,D as C,S,A as B}from"./index-Dlsx_GZD.js";import{P as n}from"./index-C3amgoJL.js";import{S as j}from"./index-WaRToqb7.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";const g=[{prop:"show",desc:"whether show popup",type:"boolean",required:!1,default:!1},{prop:"isBlur",desc:"whether mask is blur",type:"boolean",required:!1,default:!1},{prop:"maskClosable",desc:"whether click mask to close the popup",type:"boolean",required:!1,default:!1},{prop:"placement",desc:"content placement",type:"tag: top | bottom | left | right | center",required:!1,default:"bottom"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"},{prop:"onClose",desc:"popup close callback",type:"() => void",required:!0,default:"-"}],k=`\`\`\`typescript
import { useState } from 'react';
import Switch from 'your path/Switch';
import Popup from 'your path/Popup';
import Button from 'your path/Button';

export default function Demo() {
  const [showCenter, setShowCenter] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  const [blur, setBlur] = useState(false);
  return (
    <div className="mt-4">
      <p className="mb-3 flex items-center">
        <span>blur mask:</span>
        <Switch className="ml-2" checked={blur} onCheckedChange={setBlur} />
      </p>
      <div className="[&_button:not(:first-child)]:ml-2">
        <Button onClick={() => setShowCenter(true)}>center</Button>
        <Button onClick={() => setShowLeft(true)}>left</Button>
        <Button onClick={() => setShowRight(true)}>right</Button>
        <Button onClick={() => setShowTop(true)}>top</Button>
        <Button onClick={() => setShowBottom(true)}>bottom</Button>
      </div>
      <Popup placement="center" isBlur={blur} show={showCenter} maskClosable onClose={() => setShowCenter(false)}>
        <div className="w-[300px] h-[200px] bg-white p-6 rounded-md">
          <p>this is center box content</p>
        </div>
      </Popup>
      <Popup placement="left" isBlur={blur} show={showLeft} maskClosable onClose={() => setShowLeft(false)}>
        <div className="w-[300px] h-[100vh] bg-white p-4">
          <p>this is left box content</p>
        </div>
      </Popup>
      <Popup placement="right" isBlur={blur} show={showRight} maskClosable onClose={() => setShowRight(false)}>
        <div className="w-[300px] h-[100vh] bg-white p-4">
          <p>this is right box content</p>
        </div>
      </Popup>
      <Popup placement="top" isBlur={blur} show={showTop} maskClosable onClose={() => setShowTop(false)}>
        <div className="w-[100vw] h-[200px] bg-white p-4">
          <p>this is top box content</p>
        </div>
      </Popup>
      <Popup placement="bottom" isBlur={blur} show={showBottom} maskClosable onClose={() => setShowBottom(false)}>
        <div className="w-[100vw] h-[200px] bg-white p-4">
          <p>this is bottom box content</p>
        </div>
      </Popup>
    </div>
  );
}
\`\`\`
`;function D(){const[h,l]=s.useState(!1),[c,a]=s.useState(!1),[u,r]=s.useState(!1),[m,p]=s.useState(!1),[d,i]=s.useState(!1),[t,w]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Popup",sourceName:"Popup"}),e.jsx(C,{children:"Base component to show content above page with mask"}),e.jsxs(S,{className:"my-4",children:[e.jsxs("p",{className:"mb-3 flex items-center",children:[e.jsx("span",{children:"blur mask:"}),e.jsx(j,{className:"ml-2",checked:t,onCheckedChange:w})]}),e.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[e.jsx(o,{onClick:()=>l(!0),children:"center"}),e.jsx(o,{onClick:()=>a(!0),children:"left"}),e.jsx(o,{onClick:()=>r(!0),children:"right"}),e.jsx(o,{onClick:()=>p(!0),children:"top"}),e.jsx(o,{onClick:()=>i(!0),children:"bottom"})]}),e.jsx(n,{placement:"center",isBlur:t,show:h,maskClosable:!0,onClose:()=>l(!1),children:e.jsx("div",{className:"w-[300px] h-[200px] bg-white p-6 rounded-md",children:e.jsx("p",{children:"this is center box content"})})}),e.jsx(n,{placement:"left",isBlur:t,show:c,maskClosable:!0,onClose:()=>a(!1),children:e.jsx("div",{className:"w-[300px] h-[100vh] bg-white p-4",children:e.jsx("p",{children:"this is left box content"})})}),e.jsx(n,{placement:"right",isBlur:t,show:u,maskClosable:!0,onClose:()=>r(!1),children:e.jsx("div",{className:"w-[300px] h-[100vh] bg-white p-4",children:e.jsx("p",{children:"this is right box content"})})}),e.jsx(n,{placement:"top",isBlur:t,show:m,maskClosable:!0,onClose:()=>p(!1),children:e.jsx("div",{className:"w-[100vw] h-[200px] bg-white p-4",children:e.jsx("p",{children:"this is top box content"})})}),e.jsx(n,{placement:"bottom",isBlur:t,show:d,maskClosable:!0,onClose:()=>i(!1),children:e.jsx("div",{className:"w-[100vw] h-[200px] bg-white p-4",children:e.jsx("p",{children:"this is bottom box content"})})}),e.jsx(f,{content:k})]}),e.jsx(b,{as:"h2",className:"mb-2",children:"API"}),e.jsx(B,{rows:g})]})}export{D as default};
