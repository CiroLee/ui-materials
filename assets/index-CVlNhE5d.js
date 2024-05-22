import{d as S,r as a,j as e,i as L}from"./index-DS6qm14V.js";import{H as t,C as l,a as q,B as f}from"./index-B3S6f_Ni.js";import{N as R,D as V,S as m,A}from"./index-Dlsx_GZD.js";const M=S({slots:{base:"relative inline-block overflow-hidden",svg:"stroke-2",indicator:"transition-all",tracker:"stroke-black/10"},variants:{size:{small:{base:"w-[32px] h-[32px]"},medium:{base:"w-[56px] h-[56px]"},large:{base:"w-[80px] h-[80px]"}},color:{primary:{indicator:"stroke-brand-500"},info:{indicator:"stroke-info-500"},success:{indicator:"stroke-success-500"},warn:{indicator:"stroke-warn-500"},danger:{indicator:"stroke-danger-500"}}},defaultVariants:{size:"medium",color:"primary"}}),x=a.forwardRef((c,o)=>{const{percent:r=0,size:d,color:i,svgClassName:h,indicatorClassName:C,trackerClassName:j,className:N,style:P,children:k}=c,{svg:b,indicator:y,base:v,tracker:w}=M(),u=a.useRef(null),[n,z]=a.useState(0),D=()=>{const p=2*Math.PI*10;z(p)},B=a.useCallback(()=>{const p=r<0?0:r>100?100:r,g=n-n*p/100;return g>=n?n:g},[r,n]);return a.useEffect(()=>{u.current&&D()},[]),e.jsxs("div",{className:v({size:d,class:N}),style:P,ref:o,children:[e.jsxs("svg",{ref:u,viewBox:"0 0 24 24",fill:"none",className:b({size:d,class:h}),children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",strokeLinecap:"round",transform:"rotate(-90 12 12)",className:w({class:j})}),e.jsx("circle",{cx:"12",cy:"12",r:"10",transform:"rotate(-90 12 12)",strokeLinecap:"round",className:y({color:i,class:C}),strokeDashoffset:B(),strokeDasharray:`${n} ${n}`})]}),e.jsx("div",{className:"absolute inset-0 flex flex-center",children:k})]})});x.displayName="CircleProgress";const s=x,E=`\`\`\`ts
import CircleProgress from 'your path/CircleProgress';

export default function Demo() {
    return (
      <CircleProgress percent={20} />
    )
}
\`\`\`
`,G=`\`\`\`ts
import CircleProgress from 'your path/CircleProgress';

export default function Demo() {
    return (
      <div className="flex items-center [&_div]:mr-3">
        <CircleProgress percent={20} size="small" />
        <CircleProgress percent={20} size="medium" />
        <CircleProgress percent={20} size="large" />
      </div>
    )
}
\`\`\`
`,_=`\`\`\`ts
import CircleProgress from 'your path/CircleProgress';

export default function Demo() {
    return (
      <div className="flex items-center [&_div]:mr-3">
        <CircleProgress percent={20} color="primary" />
        <CircleProgress percent={20} color="success" />
        <CircleProgress percent={20} color="info" />
        <CircleProgress percent={20} color="warn" />
        <CircleProgress percent={20} color="danger" />
      </div>
    )
}
\`\`\`
`,$=`\`\`\`ts
import { useState } from 'react';
import CircleProgress from 'your path/CircleProgress';

export default function Demo() {
  const [percent, setPercent] = useState(20);
  const handlePercentChange = (value: number) => {
    const newVal = value + percent;
    if (newVal < 0) {
      setPercent(0);
    } else if (newVal > 100) {
      setPercent(100);
    } else {
      setPercent(newVal);
    }
  };
    return (
    <div>
      <CircleProgress percent={percent} size="large">
      <span>{percent}%</span>
      </CircleProgress>
      <ButtonGroup>
        <Button outline onClick={() => handlePercentChange(-10)}>-</Button>
        <Button outline onClick={() => handlePercentChange(10)}>+</Button>
      </ButtonGroup>
    </div>
    )
}
\`\`\`
`,H=`\`\`\`ts
import CircleProgress from 'your path/CircleProgress';
import { RiALertLine } from '@remixicon/react';

export default function Demo() {
    return (
      <CircleProgress
        percent={60}
        className="square-[110px]"
        trackerClassName="stroke-[rgba(45,117,117,0.5)]"
        indicatorClassName="stroke-[#2558d0]"
        svgClassName="stroke-[3]">
        <RiALertLine size={32} color="red" />
      </CircleProgress>
    )
}
\`\`\`
`,I=[{prop:"percent",desc:"percentage of the progress, min is 0 and max is 100",type:"number",required:!1,default:"-"},{prop:"size",desc:"size of progress",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"color",desc:"color of progress",type:"tag: primary | success | info | warn | danger",required:!1,default:"primary"},{prop:"indicatorClassName",desc:"custom indicator className",type:"string",required:!1,default:"-"},{prop:"svgClassName",desc:"custom svg wrapper className",type:"string",required:!1,default:"-"},{prop:"trackerClassName",desc:"custom tracker bar className",type:"string",required:!1,default:"-"},{prop:"className",desc:"root wrapper className",type:"string",required:!1,default:"-"},{prop:"style",desc:"root wrapper style",type:"React.CSSProperties",required:!1,default:"-"}];function J(){const[c,o]=a.useState(20),r=d=>{const i=d+c;i<0?o(0):i>100?o(100):o(i)};return e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"CircleProgress",sourceName:"CircleProgress"}),e.jsx(V,{children:"A component to display progress width circle shape"}),e.jsxs(m,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(s,{percent:20}),e.jsx(l,{content:E})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"size"}),e.jsxs("div",{className:"flex items-center [&_div]:mr-3",children:[e.jsx(s,{percent:20,size:"small"}),e.jsx(s,{percent:20,size:"medium"}),e.jsx(s,{percent:20,size:"large"})]}),e.jsx(l,{content:G})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"color"}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(s,{percent:20,color:"primary"}),e.jsx(s,{percent:20,color:"success"}),e.jsx(s,{percent:20,color:"info"}),e.jsx(s,{percent:20,color:"warn"}),e.jsx(s,{percent:20,color:"danger"})]}),e.jsx(l,{content:_})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"dynamic"}),e.jsx(s,{percent:c,size:"large",children:e.jsxs("span",{children:[c,"%"]})}),e.jsxs(q,{children:[e.jsx(f,{outline:!0,onClick:()=>r(-10),children:"-"}),e.jsx(f,{outline:!0,onClick:()=>r(10),children:"+"})]}),e.jsx(l,{content:$})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(t,{as:"h4",className:"mb-2",children:"custom"}),e.jsx(s,{percent:60,className:"w-[110px] h-[110px]",trackerClassName:"stroke-[rgba(45,117,117,0.5)]",indicatorClassName:"stroke-[#2558d0]",svgClassName:"stroke-[3]",children:e.jsx(L,{size:34,color:"red"})}),e.jsx(l,{content:H})]}),e.jsx(t,{as:"h2",className:"mb-4",children:"API"}),e.jsx(A,{rows:I})]})}export{J as default};
