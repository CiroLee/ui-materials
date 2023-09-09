import { useState } from 'react';
import ShowBox from '@/components/ShowBox';
import ApiTable, { type ApiTableRow } from '@/components/ApiTable';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';
import Switch from '@/packages/ui/Switch';
import CodeView from '@/components/CodeView';
import { html as useHtml } from './docs/use.md';

const rows: ApiTableRow[] = [
  {
    prop: 'border',
    desc: 'whether show table border',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    default: '-',
  },
];
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
      <ApiTable rows={rows} />
    </>
  );
}
