import{r as e,j as n,H as o}from"./index-DS6qm14V.js";import{N as B,D as w,S as a,A as N}from"./index-Dlsx_GZD.js";import{H as t,B as s,C as l}from"./index-B3S6f_Ni.js";import{R as r}from"./index-D2p96pFu.js";import"./index-Dxzn9o8H.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-DMTVrYN4.js";import"./index-Dz-xE_2J.js";import"./index-BBltJE_X.js";import"./index-BVjPIHQF.js";import"./index-DV0JX9yz.js";const z=`\`\`\`ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';

export default function Demo() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading...
      </Button>
      <Loading show={loading} text="loading..." />
    </>
  )
}
\`\`\`
`,C=`\`\`\`ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';
import type { Size } from 'your path/types/common';

const sizeOptions = [
  { label: 'tiny', value: 'tiny' },
  { label: 'small', value: 'small' },
  { label: 'medium', value: 'medium' },
  { label: 'large', value: 'large' },
  { label: 'custom(100px)', value: '100' },
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<Size>('medium');
  return (
    <>
      <RadioGroup
        className="mb-2"
        options={sizeOptions}
        value={size}
        onValueChange={(value) => setSize(value)}
      />
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading
      </Button>
      <Loading show={loading} size={size} text="loading..." />
    </>
  )
}
\`\`\`
`,q=`\`\`\`ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';
import type { Backdrop } from 'your path/types/common';

const backdropOptions = [
  { label: 'translucent', value: 'translucent' },
  { label: 'blur', value: 'blur' },
  { label: 'transparent', value: 'transparent' },
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [backdrop, setBackDrop] = useState<Backdrop>('translucent');
  return (
    <>
      <RadioGroup
        className="mb-2"
        options={backdropOptions}
        value={size}
        onValueChange={(value) => setBackDrop(value)}
      />
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading
      </Button>
      <Loading show={loading} backdrop={backdrop} text="loading..." />
    </>
  )
}
\`\`\`
`,R=`\`\`\`ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';

export default function Demo() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading...
      </Button>
      <Loading show={loading} />
    </>
  )
}
\`\`\`
`,T=`\`\`\`ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';
import type { Size } from 'your path/types/common';

const fullscreenOptions = [
  { label: 'fullscreen', value: 'fullscreen' },
  { label: 'non-fullscreen', value: 'container' },
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
 const [fullscreen, setFullscreen] = useState<string>('container');
  return (
    <>
      <RadioGroup
        className="mb-2"
        options={fullscreenOptions}
        value={size}
        onValueChange={setFullscreen}
      />
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading
      </Button>
      <Loading show={loading} fullscreen={fullscreen} text="loading..." />
    </>
  )
}
\`\`\`
`,D=[{prop:"show",desc:"whether to display the Loading component",type:"boolean",required:!1,default:"-"},{prop:"size",desc:"size of the Loading icon",type:"tag: tiny | small | medium | large | number | string",required:!1,default:"medium"},{prop:"text",desc:"loading text",type:"string",required:!1,default:"-"},{prop:"backdrop",desc:"backdrop type of Loading component",type:"link: Backdrop(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/common.ts)",required:!1,default:"translucent"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}],G=[{label:"tiny",value:"tiny"},{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"},{label:"custom(100px)",value:"100"}],O=[{label:"translucent",value:"translucent"},{label:"blur",value:"blur"},{label:"transparent",value:"transparent"}],H=[{label:"fullscreen",value:"fullscreen"},{label:"non-fullscreen",value:"container"}];function Y(){const[h,u]=e.useState(!1),[b,m]=e.useState(!1),[x,c]=e.useState(!1),[L,d]=e.useState(!1),[j,p]=e.useState(!1),[g,y]=e.useState("medium"),[f,v]=e.useState("translucent"),[S,k]=e.useState("container");return n.jsxs(n.Fragment,{children:[n.jsx(B,{title:"Loading",sourceName:"Loading"}),n.jsx(w,{children:"A component to show loading status"}),n.jsxs(a,{className:"mb-4",children:[n.jsx(t,{as:"h4",className:"mb-2",children:"basic"}),n.jsx(s,{onClick:()=>{u(!0),setTimeout(()=>{u(!1)},1500)},children:"show loading"}),n.jsx(o,{show:h,text:"loading..."}),n.jsx(l,{content:z})]}),n.jsxs(a,{className:"mb-4",children:[n.jsx(t,{as:"h4",className:"mb-2",children:"size"}),n.jsx(r,{className:"mb-3 flex flex-wrap gap-3",options:G,value:g,onValueChange:i=>y(i)}),n.jsx(s,{onClick:()=>{m(!0),setTimeout(()=>{m(!1)},1500)},children:"show loading"}),n.jsx(o,{show:b,size:g,text:"loading..."}),n.jsx(l,{content:C})]}),n.jsxs(a,{className:"mb-4",children:[n.jsx(t,{as:"h4",className:"mb-2",children:"without text"}),n.jsx(s,{onClick:()=>{c(!0),setTimeout(()=>{c(!1)},1500)},children:"show loading"}),n.jsx(o,{show:x}),n.jsx(l,{content:R})]}),n.jsxs(a,{className:"mb-4",children:[n.jsx(t,{as:"h4",className:"mb-2",children:"backdrop"}),n.jsx(r,{className:"mb-2",options:O,value:f,onValueChange:i=>v(i)}),n.jsx(s,{onClick:()=>{d(!0),setTimeout(()=>{d(!1)},1500)},children:"show loading"}),n.jsx(o,{show:L,backdrop:f,text:"loading..."}),n.jsx(l,{content:q})]}),n.jsxs(a,{className:"mb-4",children:[n.jsx(t,{as:"h4",className:"mb-2",children:"fullscreen"}),n.jsx(r,{className:"mb-2",options:H,value:"container",onValueChange:k}),n.jsxs("div",{className:"relative mb-3 p-2 border border-zinc-200 rounded-2",children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),n.jsx(o,{show:j,fullscreen:S==="fullscreen",text:"loading..."})]}),n.jsx(s,{onClick:()=>{p(!0),setTimeout(()=>{p(!1)},1500)},children:"show loading"}),n.jsx(l,{content:T})]}),n.jsx(t,{as:"h2",className:"mb-4",children:"API"}),n.jsx(N,{rows:D})]})}export{Y as default};
