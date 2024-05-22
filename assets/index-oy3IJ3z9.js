import{r as p,d as v,j as e}from"./index-DS6qm14V.js";import{N as z,D as C,S as m,A as B}from"./index-Dlsx_GZD.js";import{$ as D,b as h,_ as b}from"./index-DxDs9eJJ.js";import{H as d,C as u,a as E,B as $}from"./index-B3S6f_Ni.js";const P="Progress",x=100,[S,re]=D(P),[A,H]=S(P),w=p.forwardRef((s,r)=>{const{__scopeProgress:t,value:a,max:o,getValueLabel:c=k,...g}=s,i=N(o)?o:x,l=y(a,i)?a:null,V=f(l)?c(l,i):void 0;return p.createElement(A,{scope:t,value:l,max:i},p.createElement(h.div,b({"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":f(l)?l:void 0,"aria-valuetext":V,role:"progressbar","data-state":j(l,i),"data-value":l??void 0,"data-max":i},g,{ref:r})))});w.propTypes={max(s,r,t){const a=s[r],o=String(a);return a&&!N(a)?new Error(M(o,t)):null},value(s,r,t){const a=s[r],o=String(a),c=N(s.max)?s.max:x;return a!=null&&!y(a,c)?new Error(q(o,t)):null}};const I="ProgressIndicator",R=p.forwardRef((s,r)=>{var t;const{__scopeProgress:a,...o}=s,c=H(I,a);return p.createElement(h.div,b({"data-state":j(c.value,c.max),"data-value":(t=c.value)!==null&&t!==void 0?t:void 0,"data-max":c.max},o,{ref:r}))});function k(s,r){return`${Math.round(s/r*100)}%`}function j(s,r){return s==null?"indeterminate":s===r?"complete":"loading"}function f(s){return typeof s=="number"}function N(s){return f(s)&&!isNaN(s)&&s>0}function y(s,r){return f(s)&&!isNaN(s)&&s<=r&&s>=0}function M(s,r){return`Invalid prop \`max\` of value \`${s}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${x}\`.`}function q(s,r){return`Invalid prop \`value\` of value \`${s}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${x} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const G=w,T=R,L=v({base:"size-full transition-transform duration-300 ease rounded-[inherit]",variants:{color:{primary:"bg-brand-500",info:"bg-info-500",success:"bg-success-500",warn:"bg-warn-500",danger:"bg-danger-500"},striped:{true:"bg-striped-gradient bg-[length:1.25rem_1.25rem]"}},defaultVariants:{size:"medium",color:"primary"}},{twMerge:!1}),O=v({base:"overflow-hidden relative bg-black/10",variants:{size:{small:"h-[6px] rounded-[3px]",medium:"h-[8px] rounded-[4px]",large:"h-[12px] rounded-[6px]"}},defaultVariants:{size:"medium"}}),_=p.forwardRef((s,r)=>{const{percent:t=0,size:a,color:o,striped:c,className:g,style:i}=s;return e.jsx(G,{ref:r,value:t,className:O({size:a,class:g}),style:{transform:"translateZ(0)",...i},children:e.jsx(T,{className:L({color:o,striped:c}),style:{transform:`translateX(-${100-t}%)`}})})});_.displayName="Progress";const n=_,F=`\`\`\`ts
import Progress from 'your path/Progress'

export default function Demo() {
  return (
    <Progress percent={65} className="w-3/4" />
  )
}
\`\`\`
`,X=`\`\`\`ts
import Progress from 'your path/Progress';

export default function Demo() {
    return (
      <div className="space-y-3">
        <Progress percent={65} size="small" className="w-3/4" />
        <Progress percent={65} size="medium" className="w-3/4" />
        <Progress percent={65} size="large" className="w-3/4" />
      </div>
    )
}
\`\`\`
`,U=`\`\`\`ts
import Progress from 'your path/Progress';

export default function Demo() {
    return (
     <div className="space-y-3">
       <Progress percent={65} colors="primary" className="w-3/4" />
       <Progress percent={65} colors="success" className="w-3/4" />
       <Progress percent={65} colors="info" className="w-3/4" />
       <Progress percent={65} colors="warn" className="w-3/4" />
       <Progress percent={65} colors="danger" className="w-3/4" />
      </div>
    )
}
\`\`\`
`,Z=`\`\`\`ts
import Progress from 'your path/Progress';

export default function Demo() {
  return (
    <div className="space-y-3">
      <Progress percent={65} striped colors="primary" className="w-3/4" />
      <Progress percent={65} striped colors="success" className="w-3/4" />
      <Progress percent={65} striped colors="warn" className="w-3/4" />
      <Progress percent={65} striped colors="danger" className="w-3/4" />
    </div>
  )
}
\`\`\`
`,J=`\`\`\`ts
import { useState } from 'react';
import Progress from 'your path/Progress';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [percent, setPercent] = useState(10);
  const handleChangePercent = (value: number) => {
    const newVal = value + percent;
      if (newVal > 100) {
        setPercent(100);
      } else if (newVal < 0) {
        setPercent(0);
      } else {
        setPercent(newVal);
      }
};
  return (
    <div className="space-y-3">
    <div className="flex items-center">
        <Progress percent={percent} striped colors="primary" className="w-3/4 mr-2" />
        <span>{percent}%</span>
    </div>
    <ButtonGroup>
        <Button outline onClick={() => handleChangePercent(-10)}>-</Button>
        <Button outline onClick={() => handleChangePercent(10)}>+</Button>
    </ButtonGroup>
    </div>
  )
}
\`\`\`
`,K=`\`\`\`ts
import Progress from 'your path/Progress';

export default function Demo() {
  return (
    <Progress
      percent={65}
      className="w-3/4 bg-pink-400/20 h-[16px] rounded-[8px] [&_div]:bg-blue-600 [&_div]:rounded-none"
    />
  )
}
\`\`\`
`,Q=[{prop:"percent",desc:"percentage of the progress",type:"number",required:!1,default:"-"},{prop:"size",desc:"size of the progress",type:"tag: small | medium | large",required:!1,default:"medium"},{prop:"colors",desc:"color of the progress",type:"tag: primary | success | info | warn | danger",required:!1,default:"primary"},{prop:"striped",type:"boolean",desc:"whether the progress indicator is striped style",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CSSProperties",required:!1,default:"-"}];function ae(){const[s,r]=p.useState(10),t=a=>{const o=a+s;o>100?r(100):o<0?r(0):r(o)};return e.jsxs(e.Fragment,{children:[e.jsx(z,{title:"Progress",sourceName:"Progress"}),e.jsx(C,{children:"Display a progress bar"}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h2",className:"mb-2",children:"basic"}),e.jsx(n,{percent:65,className:"w-3/4"}),e.jsx(u,{content:F})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h2",className:"mb-2",children:"size"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{percent:65,size:"small",className:"w-3/4"}),e.jsx(n,{percent:65,size:"medium",className:"w-3/4"}),e.jsx(n,{percent:65,size:"large",className:"w-3/4"})]}),e.jsx(u,{content:X})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h2",className:"mb-2",children:"color"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{percent:65,color:"primary",className:"w-3/4"}),e.jsx(n,{percent:65,color:"success",className:"w-3/4"}),e.jsx(n,{percent:65,color:"info",className:"w-3/4"}),e.jsx(n,{percent:65,color:"warn",className:"w-3/4"}),e.jsx(n,{percent:65,color:"danger",className:"w-3/4"})]}),e.jsx(u,{content:U})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h2",className:"mb-2",children:"striped"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{percent:65,striped:!0,color:"primary",className:"w-3/4"}),e.jsx(n,{percent:65,striped:!0,color:"success",className:"w-3/4"}),e.jsx(n,{percent:65,striped:!0,color:"info",className:"w-3/4"}),e.jsx(n,{percent:65,striped:!0,color:"warn",className:"w-3/4"}),e.jsx(n,{percent:65,striped:!0,color:"danger",className:"w-3/4"})]}),e.jsx(u,{content:Z})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h2",className:"mb-2",children:"dynamic"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(n,{percent:s,striped:!0,color:"primary",className:"w-3/4 mr-2"}),e.jsxs("span",{children:[s,"%"]})]}),e.jsxs(E,{children:[e.jsx($,{outline:!0,onClick:()=>t(-10),children:"-"}),e.jsx($,{outline:!0,onClick:()=>t(10),children:"+"})]})]}),e.jsx(u,{content:J})]}),e.jsxs(m,{className:"mb-4",children:[e.jsx(d,{as:"h2",className:"mb-2",children:"custom"}),e.jsx(n,{percent:65,className:"w-3/4 bg-pink-400/20 h-[16px] rounded-[8px] [&_div]:bg-blue-600 [&_div]:rounded-none"}),e.jsx(u,{content:K})]}),e.jsx(d,{as:"h2",className:"mb-4",children:"API"}),e.jsx(B,{rows:Q})]})}export{ae as default};
