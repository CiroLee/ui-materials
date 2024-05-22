import{j as t}from"./index-DS6qm14V.js";import{H as e,B as n,C as i}from"./index-B3S6f_Ni.js";import{N as a,D as p,S as s,A as d}from"./index-Dlsx_GZD.js";import{T as o}from"./index-BzJDyeHR.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-C9GaUZ8r.js";import"./index-BBltJE_X.js";import"./index-DV0JX9yz.js";const m=`\`\`\`ts
import Tooltip from 'your path/Tooltip';
import Button from 'your path/Button';

export default function Demo() {
    return (
    <Tooltip title="tooltip">
      <Button>Hover me</Button>
    </Tooltip>
    )
}
\`\`\`
`,c=`\`\`\`ts
import Tooltip from 'your path/Tooltip';
import Button from 'your path/Button';
import type { Side, Align } from 'your path/types/common'

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
      <div className="inline-grid grid-cols-3 grid-rows-4 gap-3">
        {placements.map((item, index) => (
        <Tooltip key={index} title="tooltip text" align={item.align} side={item.side}>
            <Button>
            {item.side}-{item.align}
            </Button>
        </Tooltip>
        ))}
      </div>
    )
}
\`\`\`
`,u=`\`\`\`ts
import Tooltip from 'your path/Tooltip';
import Button from 'your path/Button';

export default function Demo() {
    return (
      <div className="flex gap-3">
        <Tooltip title="tooltip" showArrow>
          <Button>with arrow</Button>
         </Tooltip>
        <Tooltip title="tooltip" showArrow={false}>
          <Button>without arrow</Button>
        </Tooltip>
      </div>
    )
}
\`\`\`
`,h=`\`\`\`ts
import Tooltip from 'your path/Tooltip';
import Button from 'your path/Button';

export default function Demo() {
    return (
    <Tooltip title="tooltip" sideOffset={20} side="right>
      <Button>Hover me</Button>
    </Tooltip>
    )
}
\`\`\`
`,f=`\`\`\`ts
import Tooltip from 'your path/Tooltip';
import Button from 'your path/Button';

export default function Demo() {
    return (
    <Tooltip title={<span className="font-bold text-danger-500">custom title</span>}>
      <Button>hover me</Button>
    </Tooltip>
    )
}
\`\`\`
`,g=[{prop:"isOpen",desc:"whether Tooltip is open default",type:"boolean",required:!1,default:"-"},{prop:"title",desc:"Tooltip title",type:"React.ReactNode",required:!1,default:"-"},{prop:"side",desc:"Tooltip side",type:"tag: top | right | bottom | left",required:!1,default:"top"},{prop:"align",desc:"Tooltip align",type:"tag: start | center | end",required:!1,default:"center"},{prop:"sideOffset",desc:"Tooltip side offset",type:"number",required:!1,default:"5"},{prop:"showArrow",desc:"whether Tooltip show arrow",type:"boolean",required:!1,default:"true"},{prop:"delay",desc:"The delay in milliseconds before the Tooltip open",type:"number",required:!1,default:"200"},{prop:"onOpenChange",desc:"Callback when Tooltip open state change",type:"(open: boolean) => void",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"}],x=[{side:"top",align:"start"},{side:"top",align:"center"},{side:"top",align:"end"},{side:"right",align:"start"},{side:"right",align:"center"},{side:"right",align:"end"},{side:"bottom",align:"start"},{side:"bottom",align:"center"},{side:"bottom",align:"end"},{side:"left",align:"start"},{side:"left",align:"center"},{side:"left",align:"end"}];function H(){return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Tooltip",sourceName:"Tooltip"}),t.jsx(p,{children:"Display message when hover a element"}),t.jsxs(s,{className:"mb-4",children:[t.jsx(e,{as:"h4",className:"mb-2",children:"basic"}),t.jsx(o,{title:"tooltip",children:t.jsx(n,{children:"Hover me"})}),t.jsx(i,{content:m})]}),t.jsxs(s,{className:"mb-4",children:[t.jsx(e,{as:"h4",className:"mb-2",children:"placement(side & align)"}),t.jsx("div",{className:"inline-grid grid-cols-3 grid-rows-4 gap-3",children:x.map((l,r)=>t.jsx(o,{title:"tooltip text",align:l.align,side:l.side,children:t.jsxs(n,{children:[l.side,"-",l.align]})},r))}),t.jsx(i,{content:c})]}),t.jsxs(s,{className:"mb-4",children:[t.jsx(e,{as:"h4",className:"mb-2",children:"Arrow"}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx(o,{title:"tooltip",showArrow:!0,children:t.jsx(n,{children:"with arrow"})}),t.jsx(o,{title:"tooltip",showArrow:!1,children:t.jsx(n,{children:"without arrow"})})]}),t.jsx(i,{content:u})]}),t.jsxs(s,{className:"mb-4",children:[t.jsx(e,{as:"h4",className:"mb-2",children:"sideOffset"}),t.jsx(o,{title:"tooltip",sideOffset:20,side:"right",children:t.jsx(n,{children:"hover me"})}),t.jsx(i,{content:h})]}),t.jsxs(s,{className:"mb-4",children:[t.jsx(e,{as:"h4",className:"mb-2",children:"custom title"}),t.jsx(o,{title:t.jsx("span",{className:"font-bold text-danger-500",children:"custom title"}),children:t.jsx(n,{children:"hover me"})}),t.jsx(i,{content:f})]}),t.jsx(e,{as:"h2",className:"mb-4",children:"API"}),t.jsx(d,{rows:g})]})}export{H as default};
