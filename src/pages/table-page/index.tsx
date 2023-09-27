import { useState } from 'react';
import ShowBox from '@/components/ShowBox';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';
import Switch from '@/packages/ui/Switch';
import CodeView from '@/components/CodeView';
import { html as useHtml } from './docs/use.md';
export default function TablePage() {
  const [border, setBorder] = useState(true);
  return (
    <>
      <h2 className="mb-2">Table</h2>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
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
        <CodeView content={useHtml} />
      </ShowBox>
      <h2 className="mb-2">API</h2>
      <Table border>
        <TableHeader>
          <TableHeaderCell>prop</TableHeaderCell>
          <TableHeaderCell>desc</TableHeaderCell>
          <TableHeaderCell>type</TableHeaderCell>
          <TableHeaderCell>default</TableHeaderCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableDataCell>border</TableDataCell>
            <TableDataCell>show table border</TableDataCell>
            <TableDataCell>boolean</TableDataCell>
            <TableDataCell>false</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>headerFixed</TableDataCell>
            <TableDataCell>fix table header</TableDataCell>
            <TableDataCell>boolean</TableDataCell>
            <TableDataCell>false</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>className</TableDataCell>
            <TableDataCell>-</TableDataCell>
            <TableDataCell>string</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell></TableDataCell>
            <TableDataCell>-</TableDataCell>
            <TableDataCell>string</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
