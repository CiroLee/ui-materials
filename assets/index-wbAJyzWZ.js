import{d as D,r as o,j as e,al as F,am as O,an as k}from"./index-DS6qm14V.js";import{N as q,D as I,S as l,A}from"./index-Dlsx_GZD.js";import{c as _,H as i,C as r}from"./index-B3S6f_Ni.js";const P=D({slots:{base:"bg-zinc-100 inline-flex box-border relative",item:`segment-item h-full flex flex-center select-none z-[2] transition-all text-zinc-500/70 [&:not(.disabled):not(.active)]:hover:text-zinc-600
    [&.disabled]:opacity-40 [&.disabled]:cursor-not-allowed`,indicator:"segment-indicator h-full transition-all ease-linear absolute top-0 z-[1] shadow [&.disabled]:shadow-none"},variants:{size:{tiny:{base:"h-[26px] rounded-small p-[2px] text-[13px]",item:"rounded-tiny px-[6px]",indicator:"rounded-tiny"},small:{base:"h-[34px] rounded-medium p-[3px] text-[14px]",item:"rounded-small px-[6px]",indicator:"rounded-small"},medium:{base:"h-[42px] rounded-large p-[4px]",item:"rounded-medium px-[8px]",indicator:"rounded-medium"},large:{base:"h-[50px] rounded-large p-[5px] text-[18px]",item:"rounded-medium px-[8px]",indicator:"rounded-medium"}},colors:{default:{item:"[&.active:not(.disabled)]:text-zinc-800",indicator:"bg-white [&.disabled]:bg-[#f3f3f3]"},primary:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-brand-500 shadow-brand-400 [&.disabled]:opacity-40"},info:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-info-500 shadow-info-400 [&.disabled]:opacity-40"},success:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-success-500 shadow-success-400 [&.disabled]:opacity-40"},warn:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-warn-500 shadow-warn-400 [&.disabled]:opacity-40"},danger:{item:"[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white",indicator:"bg-danger-500 shadow-danger-400 [&.disabled]:opacity-40"}}},defaultVariants:{size:"medium",colors:"default"}}),b=o.forwardRef((d,h)=>{const{options:m,defaultValue:v,size:c,colors:g,className:j,style:y,onSegmentChange:w}=d,{base:N,item:S,indicator:z}=P(),[p,C]=o.useState(v??m[0].value),f=o.useRef(null),a=o.useRef(null),R=t=>{t.disabled||(C(t.value),w?.(t.value))},V=()=>{if(!a.current)return;const t=f.current?.children||[],u=m.findIndex(L=>L.value===p),x=Array.from(t)[u];a.current.style.width=`${x.offsetWidth}px`,a.current.style.transform=`translateX(${x.offsetLeft}px)`,x.classList.contains("disabled")?a.current.classList.add("disabled"):a.current.classList.remove("disabled")};return o.useEffect(()=>{V()},[p]),e.jsx("div",{ref:h,className:N({size:c,class:j}),style:y,children:e.jsxs("div",{ref:f,className:"w-full flex relative",children:[m.map((t,u)=>e.jsx("div",{className:S({size:c,colors:g,class:_(`${p===t.value?"active":""}`,{disabled:t.disabled})}),onClick:()=>R(t),children:t.label},u)),e.jsx("div",{ref:a,className:z({size:c,colors:g})})]})})});b.displayName="Segment";const n=b,E=`\`\`\`ts
import Segment from 'your path/Segment';
import type { CommonOption } from '@/packages/types/components';

const options: CommonOption[] = [
  {
    label: 'apple',
    value: 'apple',
  },
  {
    label: 'banana',
    value: 'banana',
  },
  {
    label: 'orange',
    value: 'orange',
  },
  {
    label: 'beef',
    value: 'beef',
    disabled: true,
  },
];
export default function Demo() {
  return (
    <Segment
      options={options}
      defaultValue="orange"
      onSegmentChange={(val) => {
        console.log('segment, you choose: ', val);
      }}
    />
  )
}
\`\`\`
`,$=`\`\`\`ts
import Segment from 'your path/Segment';

export default function Demo() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      <div>
        <p className="text-sm mb-1 ml-1">tiny:</p>
        <Segment size="tiny" options={options} />
      </div>
      <div>
        <p className="text-sm mb-1 ml-1">small:</p>
        <Segment size="small" options={options} />
      </div>
      <div>
        <p className="text-sm mb-1 ml-1">medium:</p>
        <Segment size="medium" options={options} />
      </div>
      <div>
        <p className="text-sm mb-1 ml-1">large:</p>
        <Segment size="large" options={options} />
      </div>
    </div>
  )
}
\`\`\`
`,H=`\`\`\`ts
import Segment from 'your path/Segment';

export default function Demo() {
  return (
    <Segment options={options} className="[&_.segment-item]:w-[100px] mb-3" />
    <Segment options={options} className="w-[408px] [&_.segment-item]:flex-1" />
  )
}
\`\`\`
`,T=`\`\`\`ts
import Segment from 'your path/Segment';
import { RiImageCircleLine, RiFileLine, RiVideoLine } from '@remixicon/react';
import type { CommonOption } from '@/packages/types/components';

const iconOptions: CommonOption[] = [
  {
    label: (
      <>
        <RiImageCircleLine size={18} />
        <span>Photo</span>
      </>
    ),
    value: 'photo',
  },
  {
    label: (
      <>
        <RiFileLine size={18} />
        <span>File</span>
      </>
    ),
    value: 'file',
  },
  {
    label: (
      <>
        <RiVideoLine size={18} />
        <span>Video</span>
      </>
    ),
    value: 'video',
  },
];
export default function Demo() {
  return (
    <Segment options={iconOptions} className="[&_.segment-item]:w-[80px]" />
  )
}
\`\`\`
`,X=`\`\`\`ts
import Segment from 'your path/Segment';

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Segment colors="default" options={options} />
      <Segment colors="primary" options={options} />
      <Segment colors="info" options={options} />
      <Segment colors="success" options={options} />
      <Segment colors="warn" options={options} />
      <Segment colors="danger" options={options} />
    </div>
  )
}
\`\`\`
`,B=[{prop:"defaultValue",type:"string",desc:"default value of segment for initial",required:!1,default:"-"},{prop:"options",desc:"options of segment",type:"link: CommonOption(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/components.ts)",required:!0,default:"-"},{prop:"size",desc:"size of segment",type:"tag: tiny | small | medium | large",required:!1,default:"medium"},{prop:"colors",desc:"color theme of segment",type:"tag: default | primary | info | success | warn | danger",required:!1,default:"default"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onSegmentChange",desc:"callback when segment item changed",required:!1,type:"(value: string) => void",default:"-"}],s=[{label:"apple",value:"apple"},{label:"banana",value:"banana"},{label:"orange",value:"orange"},{label:"beef",value:"beef",disabled:!0}],W=[{label:e.jsxs(e.Fragment,{children:[e.jsx(F,{size:18}),e.jsx("span",{children:"Photo"})]}),value:"photo"},{label:e.jsxs(e.Fragment,{children:[e.jsx(O,{size:18}),e.jsx("span",{children:"File"})]}),value:"file"},{label:e.jsxs(e.Fragment,{children:[e.jsx(k,{size:18}),e.jsx("span",{children:"Video"})]}),value:"video"}];function M(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{title:"Segment",sourceName:"Segment"}),e.jsx(I,{children:"A component allows to navigte between sections in a view"}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(n,{options:s,defaultValue:"orange",onSegmentChange:d=>{console.log("segment, you choose: ",d)}}),e.jsx(r,{content:E})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex items-center flex-wrap gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1 ml-1",children:"tiny:"}),e.jsx(n,{size:"tiny",options:s})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1 ml-1",children:"small:"}),e.jsx(n,{size:"small",options:s})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1 ml-1",children:"medium:"}),e.jsx(n,{size:"medium",options:s})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm mb-1 ml-1",children:"large:"}),e.jsx(n,{size:"large",options:s})]})]}),e.jsx(r,{content:$})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"layout evenly"}),e.jsx(n,{options:s,className:"[&_.segment-item]:w-[100px] mb-3 mr-3"}),e.jsx(n,{options:s,className:"w-[408px] [&_.segment-item]:flex-1"}),e.jsx(r,{content:H})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"with icon"}),e.jsx(n,{options:W,className:"[&_.segment-item]:w-[80px]"}),e.jsx(r,{content:T})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(i,{as:"h4",className:"mb-2",children:"colors"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{colors:"default",options:s}),e.jsx(n,{colors:"primary",options:s}),e.jsx(n,{colors:"info",options:s}),e.jsx(n,{colors:"success",options:s}),e.jsx(n,{colors:"warn",options:s}),e.jsx(n,{colors:"danger",options:s})]}),e.jsx(r,{content:X})]}),e.jsx(i,{as:"h2",className:"mb-4",children:"API"}),e.jsx(A,{rows:B})]})}export{M as default};
