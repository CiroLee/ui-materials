import{u as m,r as u,j as t,s as d,S as h,i as f}from"./index-DS6qm14V.js";import{N as x,D as b,S as i,A as l}from"./index-Dlsx_GZD.js";import{H as o,B as e,C as s}from"./index-B3S6f_Ni.js";import{R as C}from"./index-D2p96pFu.js";import"./index-Dxzn9o8H.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-DMTVrYN4.js";import"./index-Dz-xE_2J.js";import"./index-BBltJE_X.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const T=`\`\`\`ts
// first, place the ToastProvider component at the root of your app.
import { ToastProvider } from 'your path/Toast';

export default function App() {
  return (
    <ToastProvider>
        <YourApp />
    </ToastProvider>
  );
}
\`\`\`
`,g=`\`\`\`ts
import { useToast } from 'your path/Toast';
import Button from 'your path/Button';
const text = 'this is a toast message';

export default function Demo() {
  const { toast, closeToast } = useToast();
  return (
    <Button onClick={() => toast(text)}>Show Toast</Button>
  );
}
\`\`\`
`,j=`\`\`\`ts
import { useToast, type ToastPlacement  } from 'your path/Toast';
import Button from 'your path/Button';
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';
const text = 'this is a toast message';

const placementOption: CommonOption[] = [
  {
    label: 'topLeft',
    value: 'topLeft',
  },
  {
    label: 'topCenter',
    value: 'topCenter',
  },
  {
    label: 'topRight',
    value: 'topRight',
  },
  {
    label: 'bottomLeft',
    value: 'bottomLeft',
  },
  {
    label: 'bottomCenter',
    value: 'bottomCenter',
  },
  {
    label: 'bottomRight',
    value: 'bottomRight',
  },
  {
    label: 'center',
    value: 'center',
  },
];

export default function Demo() {
  const { toast } = useToast();
  return (
    <RadioGroup
      className="w-[440px] grid grid-cols-3 gap-3 mb-3"
      value={placement}
      options={placementOption}
      onValueChange={setPlacement}
    />
    <Button
      onClick={() => {
        toast(text, { placement: placement as ToastPlacement });
    }}>
      show toast
    </Button>
  );
}
\`\`\`
`,v=`\`\`\`ts
import { useToast } from 'your path/Toast';
import Button from 'your path/Button';
import { RiCheckLine, RiSendPlaneLine } from '@remixicon/react';
const text = 'this is a toast message';

export default function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-3">
      <Button
        onClick={() => {
          toast(text, {
            icon: <RiCheckLine size={18} className="text-green-500" />,
          });
        }}>
            info
      </Button>
      <Button
        onClick={() => {
          toast(text, {
            icon: <RiSendPlaneLine size={18} className="text-blue-500" />,
            });
        }}>
            success
      </Button>
    </div>
  );
}
\`\`\`
`,y=`\`\`\`ts
import { useToast } from 'your path/Toast';
import Button from 'your path/Button';
const text = 'this is a toast message';

export default function Demo() {
  const { toast, closeToast } = useToast();
  return (
    <Button
      onClick={() => {
        toast(text, {
          autoClose: false,
          icon: <AlertTriangle size={18} className="text-red-500" />,
          action: (
           <Button size="tiny" outline type="text" onClick={closeToast}>
             action
           </Button>
          ),
        });
    }}>
      show toast
    </Button>
  );
}
\`\`\`
`,N=[{prop:"duration",desc:"displayed duration of toast, unit is millisecond",type:"number",required:!1,default:"2000"},{prop:"placement",desc:"placement of toast",required:!1,type:"tag: topCenter | topLeft | topRight | bottomCenter | bottomLeft | bottomRight | center",default:"topCenter"},{prop:"icon",desc:"prefix icon of toast",required:!1,type:"React.ReactNode",default:"-"},{prop:"action",type:"React.ReactNode",desc:"suffix action of toast",required:!1,default:"-"},{prop:"autoClose",desc:"whether auto close toast after duration",type:"boolean",required:!1,default:"true"}],R=[{prop:"toast",desc:"toast function to show toast",type:"(text: string, options?: ToastOptions) => void",required:!1},{prop:"closeToast",desc:"close toast",type:"() => void",required:!1}],a="this is a toast message",B=[{label:"topLeft",value:"topLeft"},{label:"topCenter",value:"topCenter"},{label:"topRight",value:"topRight"},{label:"bottomLeft",value:"bottomLeft"},{label:"bottomCenter",value:"bottomCenter"},{label:"bottomRight",value:"bottomRight"},{label:"center",value:"center"}];function E(){const{toast:n,closeToast:c}=m(),[r,p]=u.useState("topCenter");return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Toast",sourceName:"Toast"}),t.jsx(b,{children:"A component to display message for feedback"}),t.jsxs(i,{className:"mb-4",children:[t.jsx(o,{as:"h4",className:"mb-2",children:"basic"}),t.jsx(e,{onClick:()=>n(a),children:"Show Toast"}),t.jsx(s,{content:T}),t.jsx(s,{content:g})]}),t.jsxs(i,{className:"mb-4",children:[t.jsx(o,{as:"h4",className:"mb-2",children:"placement"}),t.jsx(C,{className:"w-[440px] grid grid-cols-3 gap-3 mb-3",value:r,options:B,onValueChange:p}),t.jsx(e,{onClick:()=>{n(a,{placement:r})},children:"show toast"}),t.jsx(s,{content:j})]}),t.jsxs(i,{className:"mb-4",children:[t.jsx(o,{as:"h4",className:"mb-2",children:"with icons"}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx(e,{onClick:()=>{n(a,{icon:t.jsx(d,{size:18,className:"text-green-500"})})},children:"info"}),t.jsx(e,{onClick:()=>{n(a,{icon:t.jsx(h,{size:18,className:"text-blue-500"})})},children:"success"})]}),t.jsx(s,{content:v})]}),t.jsxs(i,{className:"mb-4",children:[t.jsx(o,{as:"h4",className:"mb-2",children:"action"}),t.jsx(e,{onClick:()=>{n(a,{autoClose:!1,icon:t.jsx(f,{size:18,className:"text-red-500"}),action:t.jsx(e,{size:"tiny",outline:!0,type:"text",onClick:c,children:"action"})})},children:"show toast"}),t.jsx(s,{content:y})]}),t.jsx(o,{as:"h2",className:"mb-2",children:"API"}),t.jsx(o,{as:"h4",className:"mb-2",children:"hooks"}),t.jsx(l,{rows:R}),t.jsx(o,{as:"h4",className:"my-2",children:"ToastOptions"}),t.jsx(l,{rows:N})]})}export{E as default};
