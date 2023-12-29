import { useState } from 'react';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import ApiTable, { type ApiTableRow } from '@site/components/ApiTable';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@ui/Table';
import Switch from '@ui/Switch';
import CodeView from '@site/components/CodeView';
import { html as useHtml } from './docs/use.md';
import SourceButton from '@/website/components/SourceButton';

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
  {
    prop: 'style',
    type: 'string',
    required: false,
    default: '-',
  },
];
export default function TablePage() {
  const [border, setBorder] = useState(true);
  const [headerFixed, setHeaderFixed] = useState(true);
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading as="h2" className="mb-4">
          Table
        </Heading>
        <SourceButton name="Source" />
      </div>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <div className="mb-2 flex items-center">
          <span className="mb-1 mr-2">border:</span>
          <Switch size="small" checked={border} onCheckedChange={setBorder} />
        </div>
        <div className="mb-2 flex items-center">
          <span className="mb-1 mr-2">headerFixed:</span>
          <Switch size="small" checked={headerFixed} onCheckedChange={setHeaderFixed} />
        </div>
        <Table border={border} headerFixed={headerFixed} className="h-[220px]">
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
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
