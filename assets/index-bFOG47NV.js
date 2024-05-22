import{r as t,j as e}from"./index-DS6qm14V.js";import{H as n,C as b}from"./index-B3S6f_Ni.js";import{N as m,D as h,S as x,T as p,a as T,b as a,c as u,d as j,e as l,A as f}from"./index-Dlsx_GZD.js";import{S as d}from"./index-WaRToqb7.js";import"./index-DxDs9eJJ.js";import"./index-BFn4IUUH.js";import"./index-MDj1YPAE.js";import"./index-BVjPIHQF.js";const w=`\`\`\`typescript
import { useState } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from 'your path/Table';

export default function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="mb-2 flex items-center">
        <span className="mb-1 mr-2">border:</span>
        <Switch size="small" checked={border} onCheckedChange={setBorder} />
      </div>
      <Table border={border} headerFixed className="h-[220px]">
        <TableHeader>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Desc</TableHeaderCell>
          <TableHeaderCell>Link</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {new Array(10).fill(0).map((_, index) => (
              <TableRow key={index}>
                <TableDataCell>Radix</TableDataCell>
                <TableDataCell>Headless UI</TableDataCell>
                <TableDataCell>
                  <a className="text-blue-500" href="https://www.radix-ui.com" target="_black">
                    https://www.radix-ui.com
                  </a>
                </TableDataCell>
              </TableRow>
          ))}
          </TableBody>
       </Table>
    </div>
  )
}
\`\`\`
`,C=[{prop:"border",desc:"whether show table border",type:"boolean",required:!1,default:!1},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"string",required:!1,default:"-"}];function R(){const[s,i]=t.useState(!0),[r,c]=t.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Table",sourceName:"Table"}),e.jsx(h,{children:"A table component used for presenting data"}),e.jsxs(x,{className:"mb-4",children:[e.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),e.jsxs("div",{className:"mb-2 flex items-center",children:[e.jsx("span",{className:"mb-1 mr-2",children:"border:"}),e.jsx(d,{size:"small",checked:s,onCheckedChange:i})]}),e.jsxs("div",{className:"mb-2 flex items-center",children:[e.jsx("span",{className:"mb-1 mr-2",children:"headerFixed:"}),e.jsx(d,{size:"small",checked:r,onCheckedChange:c})]}),e.jsxs(p,{border:s,headerFixed:r,className:"h-[220px]",children:[e.jsxs(T,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Desc"}),e.jsx(a,{children:"Link"})]}),e.jsx(u,{children:new Array(10).fill(0).map((N,o)=>e.jsxs(j,{children:[e.jsx(l,{children:"Radix"}),e.jsx(l,{children:"Headless UI"}),e.jsx(l,{children:e.jsx("a",{className:"text-blue-500",href:"https://www.radix-ui.com",target:"_black",children:"https://www.radix-ui.com"})})]},o))})]}),e.jsx(b,{content:w})]}),e.jsx(n,{as:"h2",className:"mb-2",children:"API"}),e.jsx(f,{rows:C})]})}export{R as default};
