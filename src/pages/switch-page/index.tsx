import { useState } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';
import ShowBox from '@/components/ShowBox';
import Switch from '@/packages/ui/Switch';
import { Check, X } from 'lucide-react';
import CodeView from '@/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as customHtml } from './docs/custom.md';
export default function SwitchPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h2 className="mb-4">Switch</h2>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <p className="mb-1">switch: {checked ? 'on' : 'off'}</p>
        <Switch checked={checked} onCheckedChange={setChecked} />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">size</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Switch size="small" />
          <Switch size="medium" />
          <Switch size="large" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">disabled</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Switch disabled />
          <Switch checked disabled />
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox>
        <h4 className="mb-2">custom thumb inner</h4>
        <Switch
          checkedThumb={
            <div className="w-full h-full flex justify-center items-center">
              <Check size={12} />
            </div>
          }
          unCheckedThumb={
            <div className="w-full h-full flex justify-center items-center">
              <X size={12} />
            </div>
          }
        />
        <CodeView content={customHtml} />
      </ShowBox>
      <h2 className="mb-2">API</h2>
      <Table border>
        <TableHeader>
          <TableHeaderCell>prop</TableHeaderCell>
          <TableHeaderCell>desc</TableHeaderCell>
          <TableHeaderCell>type</TableHeaderCell>
          <TableHeaderCell>required</TableHeaderCell>
          <TableHeaderCell>default</TableHeaderCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableDataCell>defaultChecked</TableDataCell>
            <TableDataCell>default checked status</TableDataCell>
            <TableDataCell>boolean</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>checked</TableDataCell>
            <TableDataCell>checked</TableDataCell>
            <TableDataCell>boolean</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>size</TableDataCell>
            <TableDataCell>size of switch</TableDataCell>
            <TableDataCell>enum: small | medium | large</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>medium</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>checkedThumb</TableDataCell>
            <TableDataCell>checked tracker element</TableDataCell>
            <TableDataCell>React.ReactNode</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>unCheckedThumb</TableDataCell>
            <TableDataCell>unchecked tracker element</TableDataCell>
            <TableDataCell>React.ReactNode</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>className</TableDataCell>
            <TableDataCell></TableDataCell>
            <TableDataCell>string</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>style</TableDataCell>
            <TableDataCell></TableDataCell>
            <TableDataCell>React.CSSProperties</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
