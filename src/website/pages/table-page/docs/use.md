```typescript
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
```
