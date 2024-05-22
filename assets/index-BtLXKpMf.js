import{d as q,r as x,j as e,ao as I}from"./index-DS6qm14V.js";import{N as S,D as B,S as l,A as f}from"./index-Dlsx_GZD.js";import{H as s,C as i}from"./index-B3S6f_Ni.js";const D=q({slots:{base:"tree",node:"tree-node relative h-[32px] overflow-hidden transition-all",item:"tree-item relative h-[32px] flex items-center hover:bg-zinc-100/60 hover:cursor-default transition-all",icon:"transition-transform"},variants:{expended:{true:{node:"h-fit",icon:"rotate-90"}},branch:{true:{node:"before:w-px before:h-[calc(100%_-_32px)] before:bg-zinc-200 before:absolute before:left-[0.7em] before:top-[32px]"}},disabled:{true:{item:"text-zinc-300 hover:cursor-not-allowed"}}},defaultVariants:{expended:!1,branch:!1,disabled:!1}}),u=x.forwardRef((a,o)=>{const{options:b,showBranchLine:T,defaultExpendedIds:j=[],className:N,style:v,onSelectedChange:c}=a,{base:y,item:w,node:g,icon:O}=D(),[r,h]=x.useState(j),E=(n,t)=>{if(t.disabled)return;let p=!1;r.includes(t.id)?(h([...r.filter(C=>t.id!==C)]),p=!1):(h([...r,t.id]),p=!0),t.children?.length?c?.(t,p):c?.(t,!1)};return e.jsx("div",{ref:o,className:y({class:N}),style:v,children:b.map(n=>e.jsxs("div",{className:g({expended:r.includes(n.id),branch:T}),children:[e.jsxs("div",{className:w({disabled:n.disabled}),onClick:t=>E(t,n),children:[n.children?.length?e.jsx(I,{size:24,className:O({expended:r.includes(n.id)})}):null,e.jsx("span",{className:"only:px-2 pr-2",children:n.label})]}),n.children&&n.children.length?e.jsx(u,{className:"pl-4",options:n.children,onSelectedChange:c},`child-${n.id}`):null]},n.id))})});u.displayName="Tree";const d=u,P=`\`\`\`ts
import Tree, { type TreeOption } from 'your path/Tree';

const commonTreeOptions: TreeOption[] = [
  {
    id: 'tree-1',
    value: 'item-1',
    label: 'item-1',
    children: [
      {
        id: 'item-1.1',
        label: 'item-1.1',
        value: 'item-1.1',
      },
    ],
  },
  {
    id: 'tree-2',
    value: 'item-2',
    label: 'item-2',
    children: [
      {
        id: 'tree-2-1',
        value: 'item-2-1.1',
        label: 'item-2-1.2',
      },
      {
        id: 'tree-2-2',
        value: 'item-2-2.1',
        label: 'item-2-2.2',
      },
    ],
  },
];
export default function Demo() {
  return (
    <Tree
      options={commonTreeOptions}
      onSelectedChange={(detail, isExpended) => {
        console.log('you selection is: ', detail, 'current node isExpended: ', isExpended);
      }}
    />
  )
}
\`\`\`
`,R=`\`\`\`ts
import Tree from 'your path/Tree';

export default function Demo() {
  return (
    <Tree options={commonTreeOptions} showBranchLine />
  )
}
\`\`\`
`,k=`\`\`\`ts
import Tree, { type TreeOption } from 'your path/Tree';

const disabledOptions: TreeOption[] = [
  {
    id: 'tree-3',
    label: 'item-3',
    value: 'item-3',
    children: [
      {
        id: 'tree-child-3',
        label: 'tree-child-3',
        disabled: true,
        children: [
          {
            id: 'tree-child-3.1',
            label: 'tree-child-3.1',
            value: 'tree-child-3.1',
          },
        ],
      },
    ],
  },
];
export default function Demo() {
  return (
    <Tree
      options={disabledOptions}
    />
  )
}
\`\`\`
`,z=`\`\`\`ts
import Tree from 'your path/Tree';

export default function Demo() {
  return (
    <Tree options={commonTreeOptions} defaultExpendedIds={['tree-1', 'tree-2']} />
  )
}
\`\`\`
`,A=[{prop:"options",type:"TreeOption[]",desc:"tree options",required:!0,default:"-"},{prop:"defaultExpendedIds",desc:"default expended tree node ids",type:"string[]",required:!1,default:"-"},{prop:"isBranch",desc:"whether to show branch line",type:"boolean",required:!1,default:"false"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onSelectedChange",desc:"callback when click tree node",type:"(detail: TreeOption, isExpended: boolean) => void",required:!1,default:"-"}],L=[{prop:"id",desc:"tree node unique id",type:"string",required:!0,default:"-"},{prop:"label",desc:"display content of tree node",type:"React.ReactNode",required:!1,default:"-"},{prop:"value",desc:"value of tree node",type:"string",required:!1,default:"-"},{prop:"disabled",desc:"if current node is disabled",type:"boolean",required:!1,default:"-"},{prop:"children",desc:"children node of tree",type:"TreeOption[]",required:!1,default:"-"}],m=[{id:"tree-1",value:"item-1",label:"item-1",children:[{id:"item-1.1",label:"item-1.1",value:"item-1.1"}]},{id:"tree-2",value:"item-2",label:"item-2",children:[{id:"tree-2-1",value:"item-2-1.1",label:"item-2-1.2"},{id:"tree-2-2",value:"item-2-2.1",label:"item-2-2.2"}]}],H=[{id:"tree-3",label:"item-3",value:"item-3",children:[{id:"tree-child-3",label:"tree-child-3",disabled:!0,children:[{id:"tree-child-3.1",label:"tree-child-3.1",value:"tree-child-3.1"}]}]}];function F(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Tree",sourceName:"Tree"}),e.jsx(B,{children:"A component used to show a tree hierarchy"}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"basic"}),e.jsx(d,{className:"max-w-[200px]",options:m,onSelectedChange:(a,o)=>{console.log("you selection is: ",a,"current node isExpended: ",o)}}),e.jsx(i,{content:P})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"showBranchLine"}),e.jsx(d,{className:"max-w-[200px]",options:m,showBranchLine:!0}),e.jsx(i,{content:R})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"disabled"}),e.jsx(d,{className:"max-w-[200px]",options:H}),e.jsx(i,{content:k})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(s,{as:"h4",className:"mb-2",children:"defaultExpendedIds"}),e.jsx(d,{className:"max-w-[200px]",options:m,defaultExpendedIds:["tree-1","tree-2"]}),e.jsx(i,{content:z})]}),e.jsx(s,{as:"h2",className:"mb-4",children:"API"}),e.jsx(s,{as:"h4",className:"mb-2",children:"Props"}),e.jsx(f,{rows:A}),e.jsx(s,{as:"h4",className:"my-2",children:"TreeOption"}),e.jsx(f,{rows:L})]})}export{F as default};
