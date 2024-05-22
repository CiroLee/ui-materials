import{d as O,r as o,j as e,k as $}from"./index-DS6qm14V.js";import{N as J,D as K,S as s,A as Q}from"./index-Dlsx_GZD.js";import{B as t,H as n,C as l,a as p}from"./index-B3S6f_Ni.js";import{R as U}from"./index-D2p96pFu.js";import{a as W}from"./CheckboxGroup-D0ppv6B2.js";import{P as X}from"./index-C3amgoJL.js";import"./index-Dxzn9o8H.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-DMTVrYN4.js";import"./index-Dz-xE_2J.js";import"./index-BBltJE_X.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const D=O({slots:{base:"modal bg-white rounded-large py-4 shadow-[color:rgba(0,0,0,0.04)] shadow-[0_10px_15px_-4px,0_-10px_15px_-4px,10px_0_15px_-4px,-10px_0_15px_-4px] relative overflow-hidden",title:"px-4 font-bold overflow-hidden pr-6 ellipsis",commonClose:"absolute top-4 right-4",defaultCloseIcon:`size-[24px] rounded-small flex flex-center after:absolute after:rotate-45 after:w-[1px] after:h-[16px] after:rounded-[1px] after:bg-gray-400 before:absolute 
    before:-rotate-45 before:w-[1px] before:h-[16px] before:rounded-[1px] before:bg-gray-400 transition-colors hover:bg-gray-300/40 hover:after:bg-gray-600 hover:before:bg-gray-600`,content:"modal__content px-4 my-4 max-h-[65vh] overflow-auto last:mb-0",footer:"px-4 flex gap-3"},variants:{size:{small:{base:"w-[60vw] md:w-[32vw]"},medium:{base:"w-[70vw] md:w-[50vw]"},large:{base:"w-[94vw] md:w-[80vw]"}},footerAlign:{start:{footer:"justify-start"},end:{footer:"justify-end"},center:{footer:"justify-center"}}},defaultVariants:{size:"medium",footerAlign:"end"}});function Y({title:h}){const{title:i}=D();return e.jsx("div",{className:i(),children:h})}const L=o.forwardRef((h,i)=>{const{show:v,size:f,title:u,closeIcon:d,enableEsc:C=!0,maskClosable:k=!0,backdrop:x="translucent",footerAlign:B,footer:w,cancelText:G="取消",confirmText:N="确定",children:z,onClose:r,onConfirm:g,className:A,style:m}=h,{base:I,commonClose:c,defaultCloseIcon:T,content:b,footer:R}=D(),j=()=>{r(),g?.()},_=o.useMemo(()=>x==="transparent"?"[&_.popup-mask]:bg-transparent":"",[x]),y=F=>{F.key==="Escape"&&C&&r()};return o.useEffect(()=>(document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}),[C]),e.jsx(X,{placement:"center",className:_,isBlur:x==="blur",show:v,ref:i,maskClosable:k,onClose:r,children:e.jsxs("div",{className:I({size:f,class:A}),style:m,children:[d===void 0?e.jsx("div",{className:c({class:T()}),onClick:r}):d===null?null:e.jsx("div",{className:c(),onClick:r,children:d}),o.isValidElement(u)?e.jsx(e.Fragment,{children:u}):u?e.jsx(Y,{title:u}):null,e.jsx("div",{className:b(),children:z}),w===void 0?e.jsxs("div",{className:R({footerAlign:B}),children:[e.jsx(t,{type:"text",outline:!0,onClick:r,children:G}),e.jsx(t,{onClick:j,children:N})]}):w===null?null:e.jsx(e.Fragment,{children:w})]})})});L.displayName="Modal";const a=L,Z=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';

export default function Demo() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button onClick={()=>setShow(true)}>open a modal</Button>
      <Modal show={show} title="title" onClose={() => setShow(false)}>
        <p className="my-2">this is text...</p>
        <p className="my-2">this is text...</p>
      </Modal>
    </>
  )
}
\`\`\`
`,ee=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [show, setShow] = useState(false)
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setModalSize('small');
           }}>
            small
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setModalSize('medium');
          }}>
            medium
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setModalSize('large');
        }}>
            large
        </Button>
        </ButtonGroup>
        <Modal show={show} title="title" size={modalSize} onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
\`\`\`
`,te=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [modalBackdrop, setModalBackdrop] = useState<'translucent' | 'blur' | 'transparent'>('translucent');
  const [show, setShow] = useState(false)
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setModalBackdrop('translucent');
           }}>
            small
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setModalBackdrop('blur');
          }}>
            medium
        </Button>
        <Button
          onClick={() => {
           setShow(true);
           setModalBackdrop('transparent');
        }}>
            large
        </Button>
        </ButtonGroup>
        <Modal show={show} title="title" backdrop={modalBackdrop} onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
\`\`\`
`,oe=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Heading from 'your path/Heading';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [showTitle, setShowTitle] = useState(true);
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setShowTitle(false);
        }}>
            without title
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setShowTitle(true);
        }}>
            custom title
        </Button>
        </ButtonGroup>
        <Modal
          show={show}
          title={
            showTitle ? (
              <Heading as="h4" className="px-4 text-brand-500 text-center">
                custom title
              </Heading>
            ) : null
          }
          onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
\`\`\`
`,ne=`\`\`\`ts
import { useState } from 'react';
import { RiShutDownLine } from '@remixicon/react';
import Modal from 'your path/Modal';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [show, setShow] = useState(false)
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setShowCloseIcon(false);
        }}>
            without closeIcon
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setShowCloseIcon(true);
        }}>
            custom closeIcon
        </Button>
        </ButtonGroup>
        <Modal
          show={show}
          title="title"
          closeIcon={
            showCloseIcon ? (
              <div className="size-[24px] rounded flex flex-center transition-colors group hover:bg-gray-200/40">
                <RiShutDownLine className="text-gray-300 group-hover:text-red-500" size={16} />
              </div>
            ) : null
          }
          onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
\`\`\`
`,se=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';

type FooterALign = 'start' | 'center' | 'end';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [footerAlign, setFooterAlign] = useState<FooterALign>('end');
  return (
    <>
      <RadioGroup
        value="end"
        options={[
          { value: 'start', label: 'align:left' },
          { value: 'center', label: 'align:center' },
          { value: 'end', label: 'align:end' },
        ]}
        onValueChange={(value) => setFooterAlign(value as FooterALign)}></RadioGroup>
      <Button className="mt-4" onClick={() => setModal6(true)}>
          open modal
      </Button>
      <Modal
        show={modal6}
        title="title"
        cancelText="cancel"
        confirmText="confirm"
        footerAlign={footerAlign}
        onClose={() => setModal6(false)}>
        <p className="my-2">this is text...</p>
        <p className="my-2">this is text...</p>
      </Modal>
    </>
  )
}
\`\`\`
`,le=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [showFooter, setShowFooter] = useState(true);

  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setShowFooter(false);
        }}>
            without footer
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setShowFooter(true);
        }}>
            custom footer
        </Button>
        </ButtonGroup>
        <Modal
          show={modal7}
          title="title"
          onClose={() => setShow(false)}
          footer={
            showFooter ? (
              <div className="px-4 flex justify-end">
                <Button outline className="mr-2">
                  close
                </Button>
                <ButtonGroup>
                  <Button onClick={() => setShow(false)}>cancel</Button>
                  <Button onClick={() => setShow(false)}>submit</Button>
                </ButtonGroup>
              </div>
            ) : null
          }>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
\`\`\`
`,ae=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Checkbox from 'your path/Button';
import { CheckboxGroup } from 'your path/Checkbox';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [closable, setClosable] = useState<string[]>([]);
  return (
    <>
      <CheckboxGroup
        className="flex gap-3"
        onCheckedChange={(list) => {
          setClosable(list as string[]);
        }}
        options={[
          { value: 'escape', label: 'escape to close' },
          { value: 'maskable', label: 'click mask to close' },
        ]} />
        <Button className="mt-4" onClick={() => setShow(true)}>
          open modal
        </Button>
        <Modal
          show={show}
          enableEsc={closable.includes('escape')}
          maskClosable={closable.includes('maskable')}
          title="title"
          onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
\`\`\`
`,re=`\`\`\`ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';

export default function Demo() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button className="mt-4" onClick={() => setModal9(true)}>
          open modal
      </Button>
      <Modal title="title" show={modal9} onClose={() => setModal9(false)}>
        {new Array(30).fill(0).map((_, index) => (
          <p key={index}>this is text {index} ...</p>
        ))}
      </Modal>
    </>
  )
}
\`\`\`
`,ie=[{prop:"show",desc:"whether to show the modal",type:"boolean",required:!1,default:"false"},{prop:"size",desc:"modal size",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"title",desc:"modal title",type:"React.ReactNode",required:!1,default:"-"},{prop:"closeIcon",desc:"close icon, if set null, will not render closeIcon",type:"tag: React.ReactNode | null",required:!1,default:"-"},{prop:"footer",desc:"modal footer, if set null, will not render footer",type:"tag: React.ReactNode | null",required:!1,default:"-"},{prop:"enableEsc",desc:"whether to enable ESC to close the modal",type:"boolean",required:!1,default:!0},{prop:"maskClosable",desc:"whether to enable click mask to close the modal",type:"boolean",required:!1,default:!0},{prop:"backdrop",desc:"mask backdrop style",type:"tag: translucent | blur | transparent",required:!1,default:"translucent"},{prop:"footerAlign",desc:"modal footer alignment",type:"tag: start | center | end",required:!1,default:"end"},{prop:"cancelText",desc:"cancel button text",type:"string",required:!1,default:"取消"},{prop:"confirmText",desc:"confirm button text",type:"string",required:!1,default:"确定"},{prop:"onClose",desc:"modal close handler",type:"() => void",required:!0,default:"-"},{prop:"onConfirm",desc:"modal confirm handler",type:"() => void",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}];function Be(){const[h,i]=o.useState("medium"),[v,f]=o.useState("translucent"),[u,d]=o.useState(!0),[C,k]=o.useState(!0),[x,B]=o.useState(!0),[w,G]=o.useState("end"),[N,z]=o.useState([]),[r,g]=o.useState(!1),[A,m]=o.useState(!1),[I,c]=o.useState(!1),[T,b]=o.useState(!1),[R,j]=o.useState(!1),[_,y]=o.useState(!1),[F,S]=o.useState(!1),[P,H]=o.useState(!1),[V,q]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(J,{title:"Modal",sourceName:"Modal"}),e.jsx(K,{children:"Modal dialog displayed above the page"}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(t,{onClick:()=>g(!0),children:"open a modal"}),e.jsxs(a,{show:r,title:"title",onClose:()=>g(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]})]}),e.jsx(l,{content:Z}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"size"}),e.jsxs(p,{children:[e.jsx(t,{onClick:()=>{m(!0),i("small")},children:"small"}),e.jsx(t,{onClick:()=>{m(!0),i("medium")},children:"medium"}),e.jsx(t,{onClick:()=>{m(!0),i("large")},children:"large"})]}),e.jsxs(a,{show:A,title:"title",size:h,onClose:()=>m(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:ee})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"backdrop"}),e.jsxs(p,{children:[e.jsx(t,{onClick:()=>{c(!0),f("translucent")},children:"translucent"}),e.jsx(t,{onClick:()=>{c(!0),f("blur")},children:"blur"}),e.jsx(t,{onClick:()=>{c(!0),f("transparent")},children:"transparent"})]}),e.jsxs(a,{show:I,title:"title",backdrop:v,onClose:()=>c(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:te})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"title"}),e.jsxs(p,{children:[e.jsx(t,{onClick:()=>{b(!0),d(!1)},children:"without title"}),e.jsx(t,{onClick:()=>{b(!0),d(!0)},children:"custom title"})]}),e.jsxs(a,{show:T,title:u?e.jsx(n,{as:"h4",className:"px-4 text-brand-500 text-center",children:"custom title"}):null,onClose:()=>b(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:oe})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"closeIcon"}),e.jsxs(p,{children:[e.jsx(t,{onClick:()=>{j(!0),k(!1)},children:"without closeIcon"}),e.jsx(t,{onClick:()=>{j(!0),k(!0)},children:"custom closeIcon"})]}),e.jsxs(a,{show:R,title:"title",closeIcon:C?e.jsx("div",{className:"size-[24px] rounded flex flex-center transition-colors group hover:bg-gray-200/40",children:e.jsx($,{className:"text-gray-300 group-hover:text-red-500",size:16})}):null,onClose:()=>j(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:ne})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"footerAlign"}),e.jsx(U,{value:"end",options:[{value:"start",label:"align:left"},{value:"center",label:"align:center"},{value:"end",label:"align:end"}],onValueChange:M=>G(M)}),e.jsx(t,{className:"mt-4",onClick:()=>y(!0),children:"open modal"}),e.jsxs(a,{show:_,title:"title",cancelText:"cancel",confirmText:"confirm",footerAlign:w,onClose:()=>y(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:se})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"custom footer"}),e.jsxs(p,{children:[e.jsx(t,{onClick:()=>{S(!0),B(!1)},children:"without footer"}),e.jsx(t,{onClick:()=>{S(!0),B(!0)},children:"custom footer"})]}),e.jsxs(a,{show:F,title:"title",onClose:()=>S(!1),footer:x?e.jsxs("div",{className:"px-4 flex justify-end",children:[e.jsx(t,{outline:!0,className:"mr-2",children:"close"}),e.jsxs(p,{children:[e.jsx(t,{onClick:()=>S(!1),children:"cancel"}),e.jsx(t,{onClick:()=>S(!1),children:"submit"})]})]}):null,children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:le})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"keyboard Escape and maskClosable"}),e.jsx(W,{className:"flex gap-3",onCheckedChange:M=>{z(M)},options:[{value:"escape",label:"escape to close"},{value:"maskable",label:"click mask to close"}]}),e.jsx(t,{className:"mt-4",onClick:()=>H(!0),children:"open modal"}),e.jsxs(a,{show:P,enableEsc:N.includes("escape"),maskClosable:N.includes("maskable"),title:"title",onClose:()=>H(!1),children:[e.jsx("p",{className:"my-2",children:"this is text..."}),e.jsx("p",{className:"my-2",children:"this is text..."})]}),e.jsx(l,{content:ae})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"scroll content"}),e.jsx(t,{className:"mt-4",onClick:()=>q(!0),children:"open modal"}),e.jsx(a,{title:"title",show:V,onClose:()=>q(!1),children:new Array(30).fill(0).map((M,E)=>e.jsxs("p",{children:["this is text ",E," ..."]},E))}),e.jsx(l,{content:re})]}),e.jsx(n,{as:"h2",className:"mb-4",children:"API"}),e.jsx(Q,{rows:ie})]})}export{Be as default};
