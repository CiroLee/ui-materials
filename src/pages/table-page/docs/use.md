```typescript
import { useState } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from 'your path';

export default Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="mb-2 flex items-center">
        <span className="mb-1 mr-2">border:</span>
        <Switch size="small" checked={border} onCheckedChange={setBorder} />
      </div>
      <Table border={border}>
        <TableHeader>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Desc</TableHeaderCell>
          <TableHeaderCell>Link</TableHeaderCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableDataCell>Radix</TableDataCell>
            <TableDataCell>Headless UI</TableDataCell>
            <TableDataCell>
              <a className="text-blue-500" href="https://www.radix-ui.com" target="_black">
                https://www.radix-ui.com
              </a>
            </TableDataCell>
           </TableRow>
        <TableRow>
          <TableDataCell>tailwindcss</TableDataCell>
            <TableDataCell>atom css</TableDataCell>
              <TableDataCell>
                <a className="text-blue-500" href="https://tailwindcss.com" target="_black">
                  https://tailwindcss.com
                </a>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>framer-motion</TableDataCell>
            <TableDataCell>react motion library</TableDataCell>
            <TableDataCell>
              <a className="text-blue-500" href="https://www.framer.com/motion" target="_black">
                https://www.framer.com/motion
              </a>
            </TableDataCell>
          </TableRow>
          </TableBody>
       </Table>
    </div>
  )
}
```
