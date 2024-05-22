import{r as t,d as V,j as e,A as z,m as K}from"./index-DS6qm14V.js";import{H as m,B as b,C as x}from"./index-B3S6f_Ni.js";import{N as G,D as L,S as $,A as U}from"./index-Dlsx_GZD.js";import{$ as Z,a as R,b as J,_ as u,c as Q}from"./index-DxDs9eJJ.js";import{a as W,$ as j}from"./index-BFn4IUUH.js";import{$ as S,a as X,b as Y,c as ee,d as te,e as oe,f as ne}from"./index-C9GaUZ8r.js";import{h as re,R as se,$ as ce,a as ae}from"./Combination--BUSbBbP.js";import{$ as ie}from"./index-BBltJE_X.js";import{$ as A}from"./index-DV0JX9yz.js";import{S as le}from"./index-WaRToqb7.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";const _="Popover",[B,Je]=Z(_,[S]),O=S(),[pe,P]=B(_),de=o=>{const{__scopePopover:l,children:s,open:c,defaultOpen:n,onOpenChange:r,modal:a=!1}=o,i=O(l),p=t.useRef(null),[d,g]=t.useState(!1),[v=!1,f]=W({prop:c,defaultProp:n,onChange:r});return t.createElement(X,i,t.createElement(pe,{scope:l,contentId:ie(),triggerRef:p,open:v,onOpenChange:f,onOpenToggle:t.useCallback(()=>f(y=>!y),[f]),hasCustomAnchor:d,onCustomAnchorAdd:t.useCallback(()=>g(!0),[]),onCustomAnchorRemove:t.useCallback(()=>g(!1),[]),modal:a},s))},fe="PopoverTrigger",ue=t.forwardRef((o,l)=>{const{__scopePopover:s,...c}=o,n=P(fe,s),r=O(s),a=R(l,n.triggerRef),i=t.createElement(J.button,u({type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":k(n.open)},c,{ref:a,onClick:j(o.onClick,n.onOpenToggle)}));return n.hasCustomAnchor?i:t.createElement(Y,u({asChild:!0},r),i)}),D="PopoverPortal",[me,be]=B(D,{forceMount:void 0}),he=o=>{const{__scopePopover:l,forceMount:s,children:c,container:n}=o,r=P(D,l);return t.createElement(me,{scope:l,forceMount:s},t.createElement(A,{present:s||r.open},t.createElement(ee,{asChild:!0,container:n},c)))},w="PopoverContent",ge=t.forwardRef((o,l)=>{const s=be(w,o.__scopePopover),{forceMount:c=s.forceMount,...n}=o,r=P(w,o.__scopePopover);return t.createElement(A,{present:c||r.open},r.modal?t.createElement(ve,u({},n,{ref:l})):t.createElement(xe,u({},n,{ref:l})))}),ve=t.forwardRef((o,l)=>{const s=P(w,o.__scopePopover),c=t.useRef(null),n=R(l,c),r=t.useRef(!1);return t.useEffect(()=>{const a=c.current;if(a)return re(a)},[]),t.createElement(se,{as:Q,allowPinchZoom:!0},t.createElement(F,u({},o,{ref:n,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:j(o.onCloseAutoFocus,a=>{var i;a.preventDefault(),r.current||(i=s.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:j(o.onPointerDownOutside,a=>{const i=a.detail.originalEvent,p=i.button===0&&i.ctrlKey===!0,d=i.button===2||p;r.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:j(o.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})))}),xe=t.forwardRef((o,l)=>{const s=P(w,o.__scopePopover),c=t.useRef(!1),n=t.useRef(!1);return t.createElement(F,u({},o,{ref:l,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var a;if((a=o.onCloseAutoFocus)===null||a===void 0||a.call(o,r),!r.defaultPrevented){var i;c.current||(i=s.triggerRef.current)===null||i===void 0||i.focus(),r.preventDefault()}c.current=!1,n.current=!1},onInteractOutside:r=>{var a,i;(a=o.onInteractOutside)===null||a===void 0||a.call(o,r),r.defaultPrevented||(c.current=!0,r.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const p=r.target;((i=s.triggerRef.current)===null||i===void 0?void 0:i.contains(p))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&n.current&&r.preventDefault()}}))}),F=t.forwardRef((o,l)=>{const{__scopePopover:s,trapFocus:c,onOpenAutoFocus:n,onCloseAutoFocus:r,disableOutsidePointerEvents:a,onEscapeKeyDown:i,onPointerDownOutside:p,onFocusOutside:d,onInteractOutside:g,...v}=o,f=P(w,s),y=O(s);return ce(),t.createElement(ae,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:n,onUnmountAutoFocus:r},t.createElement(te,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:g,onEscapeKeyDown:i,onPointerDownOutside:p,onFocusOutside:d,onDismiss:()=>f.onOpenChange(!1)},t.createElement(oe,u({"data-state":k(f.open),role:"dialog",id:f.contentId},y,v,{ref:l,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))}),$e=t.forwardRef((o,l)=>{const{__scopePopover:s,...c}=o,n=O(s);return t.createElement(ne,u({},n,c,{ref:l}))});function k(o){return o?"open":"closed"}const Pe=de,ye=ue,we=he,je=ge,Oe=$e,Ce={"top-start":{base:"origin-bottom-left"},"top-center":{base:"origin-bottom"},"top-end":{base:"origin-bottom-right"},"right-start":{base:"origin-top-left"},"right-center":{base:"origin-left"},"right-end":{base:"origin-bottom-left"},"bottom-start":{base:"origin-top-left"},"bottom-center":{base:"origin-top"},"bottom-end":{base:"origin-top-right"},"left-start":{base:"origin-top-right"},"left-center":{base:"origin-right"},"left-end":{base:"origin-top-right"}},Ne=V({slots:{base:"p-3 rounded-large bg-white drop-shadow-around",title:"font-bold",content:"text-sm text-zinc-400"},variants:{placement:Ce},defaultVariants:{placement:"bottom-center"}}),Ee={open:{opacity:1,scale:1},closed:{opacity:0,scale:.8}},I=t.forwardRef((o,l)=>{const{isOpen:s,disabled:c,title:n,content:r,sideOffset:a=5,showArrow:i=!0,align:p="center",side:d="bottom",onOpenChange:g,children:v,className:f,style:y}=o,[N,C]=t.useState(!1),{base:M,title:q,content:T}=Ne(),H=E=>{c||(C(E),g?.(E))};return t.useEffect(()=>{c&&C(!1),C(!!s)},[s,c]),e.jsxs(Pe,{onOpenChange:H,children:[e.jsx(ye,{asChild:!0,children:v}),e.jsx(z,{children:N?e.jsx(we,{forceMount:!0,children:e.jsx(je,{className:"outline-0",ref:l,sideOffset:a,align:p,side:d,children:e.jsxs(K.div,{className:M({placement:`${d}-${p}`,class:f}),style:y,initial:"closed",animate:N?"open":"closed",exit:"closed",variants:Ee,children:[t.isValidElement(n)?n:n?e.jsx("div",{className:q(),children:n}):null,t.isValidElement(r)?r:r?e.jsx("div",{className:T(),children:r}):null,i?e.jsx(Oe,{className:"fill-white"}):null]})})}):null})]})});I.displayName="Popover";const h=I,Re=`\`\`\`ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <Popover
        title="title"
        content="this is popover texts and it is long"
        side="top"
        align="start"
        onOpenChange={setStatus}>
        <Button>popover</Button>
      </Popover>
      <p className="mt-2 text-zinc-500">status: {String(status)}</p>
    </div>
  )
}
\`\`\`
`,Se=`\`\`\`typescript
import { useState } from 'react';
import Switch from 'your path/Switch';
import Popover from 'your path/Popover';
import Button from 'your path/Button';


export default function Demo() {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <div className="flex items-center mb-2">
        <Switch checked={disabled} onCheckedChange={setDisabled} />
        <span className="text-zinc-500 ml-2">disabled: {String(disabled)}</span>
      </div>
      <Popover title="title" content="this is popover texts and it is long" disabled={disabled} side="right">
        <Button>popover</Button>
      </Popover>
    </div>
  )
}
\`\`\`
`,Ae=`\`\`\`ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';
import type { Side, Align } from 'your path';
const placements: { side: Side; align: Align }[] = [
  {
    side: 'top',
    align: 'start',
  },
  {
    side: 'top',
    align: 'center',
  },
  {
    side: 'top',
    align: 'end',
  },
  {
    side: 'right',
    align: 'start',
  },
  {
    side: 'right',
    align: 'center',
  },
  {
    side: 'right',
    align: 'end',
  },
  {
    side: 'bottom',
    align: 'start',
  },
  {
    side: 'bottom',
    align: 'center',
  },
  {
    side: 'bottom',
    align: 'end',
  },
  {
    side: 'left',
    align: 'start',
  },
  {
    side: 'left',
    align: 'center',
  },
  {
    side: 'left',
    align: 'end',
  },
];
export default function Demo() {
  return (
    <div className="w-[440px] grid grid-cols-3 grid-rows-4 gap-3">
      {placements.map((item, index) => (
        <Popover key={index} title="title" content="this is popover contents" side={item.side} align={item.align}>
            <Button>
            {item.side}-{item.align}
            </Button>
        </Popover>
      ))}
    </div>
  )
}
\`\`\`
`,_e=`\`\`\`ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  return (
    <div className="flex gap-3">
      <Popover title="title" content="this is popover texts and it is long">
        <Button>with arrow</Button>
        </Popover>
        <Popover title="title" showArrow={false} content="this is popover texts and it is long">
        <Button>without arrow</Button>
      </Popover>
    </div>
  )
}
\`\`\`
`,Be=`\`\`\`ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  return (
    <div className="flex gap-3">
      <Popover title="title" sideOffset={20} content="this is popover texts and it is long">
        <Button>popover</Button>
      </Popover>
    </div>
  )
}
\`\`\`
`,De=`\`\`\`ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  return (
    <div>
      <Popover
        title={<p className="text-brand-500 font-bold">custom title</p>}
        content={<p className="text-sm text-danger-500">use as custom contents</p>}>
        <Button>popover</Button>
      </Popover>
    </div>
  )
}
\`\`\`
`,Fe=[{prop:"isOpen",desc:"whether the popover is open default",type:"boolean",default:"false",required:!1},{prop:"disabled",desc:"whether the popover is disabled",type:"boolean",required:!1,default:!1},{prop:"title",desc:"popover title",type:"React.ReactNode",required:!1,default:"-"},{prop:"content",desc:"popover content",type:"React.ReactNode",required:!1,default:"-"},{prop:"sideOffset",desc:"popover offset from the trigger",type:"number",required:!1,default:"5"},{prop:"showArrow",desc:"whether to show the arrow",type:"boolean",required:!1,default:"true"},{prop:"align",desc:"popover alignment",type:"tag: start | center | end",required:!1,default:"center"},{prop:"side",desc:"popover side",type:"tag: top | bottom | left | right",required:!1,default:"bottom"},{prop:"onOpenChange",desc:"callback when popover open status changed",type:"(open: boolean) => void",required:!1,default:"-"},{prop:"children",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],ke=[{side:"top",align:"start"},{side:"top",align:"center"},{side:"top",align:"end"},{side:"right",align:"start"},{side:"right",align:"center"},{side:"right",align:"end"},{side:"bottom",align:"start"},{side:"bottom",align:"center"},{side:"bottom",align:"end"},{side:"left",align:"start"},{side:"left",align:"center"},{side:"left",align:"end"}];function Qe(){const[o,l]=t.useState(!1),[s,c]=t.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(G,{title:"Popover",sourceName:"Popover"}),e.jsx(L,{children:"A component to display information by floating style, offen trigger by a button"}),e.jsxs($,{className:"mb-4",children:[e.jsx(m,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(h,{title:"title",content:"this is popover texts and it is long",side:"top",align:"start",onOpenChange:l,children:e.jsx(b,{type:"primary",children:"popover"})}),e.jsxs("p",{className:"mt-2 text-zinc-500",children:["status: ",String(o)]}),e.jsx(x,{content:Re})]}),e.jsxs($,{className:"mb-4",children:[e.jsx(m,{as:"h4",className:"mb-2",children:"placement(side & align)"}),e.jsx("div",{className:"inline-grid grid-cols-3 grid-rows-4 gap-3",children:ke.map((n,r)=>e.jsx(h,{title:"title",content:"this is popover contents",side:n.side,align:n.align,children:e.jsxs(b,{type:"primary",children:[n.side,"-",n.align]})},r))}),e.jsx(x,{content:Ae})]}),e.jsxs($,{className:"mb-4",children:[e.jsx(m,{as:"h4",className:"mb-2",children:"disabled"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx(le,{checked:s,onCheckedChange:c}),e.jsxs("span",{className:"text-zinc-500 ml-2",children:["disabled: ",String(s)]})]}),e.jsx(h,{title:"title",content:"this is popover texts and it is long",disabled:s,side:"right",children:e.jsx(b,{type:"primary",children:"popover"})})]}),e.jsx(x,{content:Se})]}),e.jsxs($,{className:"mb-4",children:[e.jsx(m,{as:"h4",className:"mb-2",children:"Arrow"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(h,{title:"title",content:"this is popover texts and it is long",children:e.jsx(b,{type:"primary",children:"with arrow"})}),e.jsx(h,{title:"title",showArrow:!1,content:"this is popover texts and it is long",children:e.jsx(b,{type:"primary",children:"without arrow"})})]}),e.jsx(x,{content:_e})]}),e.jsxs($,{className:"mb-4",children:[e.jsx(m,{as:"h4",className:"mb-2",children:"sideOffset"}),e.jsx(h,{title:"title",sideOffset:20,content:"this is popover texts and it is long",children:e.jsx(b,{type:"primary",children:"popover"})}),e.jsx(x,{content:Be})]}),e.jsxs($,{className:"mb-4",children:[e.jsx(m,{as:"h4",className:"mb-2",children:"title & content"}),e.jsx(h,{title:e.jsx("p",{className:"text-brand-500 font-bold",children:"custom title"}),content:e.jsx("p",{className:"text-sm text-danger-500",children:"use as custom contents"}),children:e.jsx(b,{type:"primary",children:"popover"})}),e.jsx(x,{content:De})]}),e.jsx(m,{as:"h2",className:"mb-4",children:"API"}),e.jsx(U,{rows:Fe})]})}export{Qe as default};
