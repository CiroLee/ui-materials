import Checkbox, { CheckboxGroup, type CheckboxType } from '@/packages/ui/Checkbox';
import ShowBox from '@/components/ShowBox';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';
import CodeView from '@/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as groupHtml } from './docs/group.md';
export default function CheckboxPage() {
  const checkboxGroup: CheckboxType[] = [
    {
      value: 'apple',
      className: '[&_button]:self-baseline [&_button]:mt-[6px]',
      children: (
        <div>
          <p>apple</p>
          <p>🍎</p>
        </div>
      ),
    },
    {
      value: 'banana',
      className: '[&_button]:self-baseline [&_button]:mt-[6px]',
      children: (
        <div>
          <p>banana</p>
          <p>🍌</p>
        </div>
      ),
    },
    {
      value: 'orange',
      className: '[&_button]:self-baseline [&_button]:mt-[6px]',
      children: (
        <div>
          <p>orange</p>
          <p>🍊</p>
        </div>
      ),
      disabled: true,
    },
  ];
  return (
    <>
      <div className="mb-4">
        <h2>Checkbox</h2>
      </div>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <Checkbox checked value="apple" onCheckedChange={(checked, value) => console.log(checked, value)}>
          apple
        </Checkbox>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">disabled</h4>
        <div className="flex items-center [&>*]:mr-2">
          <Checkbox disabled>disabled</Checkbox>
          <Checkbox checked disabled>
            disabled
          </Checkbox>
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox>
        <h4 className="mb-2">checkbox group</h4>
        <CheckboxGroup
          value="orange"
          className="flex [&>label]:mr-2"
          options={checkboxGroup}
          onCheckedChange={(list) => console.log('what you choose:', list)}
        />
        <CodeView content={groupHtml} />
      </ShowBox>
      <h2 className="mb-2">API</h2>
      <h4 className="mb-2">Checkbox</h4>
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
            <TableDataCell>value</TableDataCell>
            <TableDataCell>value to emit</TableDataCell>
            <TableDataCell>string | number</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>checked</TableDataCell>
            <TableDataCell>if checked</TableDataCell>
            <TableDataCell>boolean</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>disabled</TableDataCell>
            <TableDataCell>disabled status</TableDataCell>
            <TableDataCell>boolean</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>false</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>className</TableDataCell>
            <TableDataCell></TableDataCell>
            <TableDataCell>string</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>children</TableDataCell>
            <TableDataCell></TableDataCell>
            <TableDataCell>React.ReactNode</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
      <h4 className="my-2">CheckboxGroup</h4>
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
            <TableDataCell>value</TableDataCell>
            <TableDataCell>value to submit</TableDataCell>
            <TableDataCell>enum: string | number</TableDataCell>
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
            <TableDataCell>option</TableDataCell>
            <TableDataCell>config options</TableDataCell>
            <TableDataCell>{`Omit<CheckboxProps, 'onCheckedChange'>[]`}</TableDataCell>
            <TableDataCell>true</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>onCheckedChange</TableDataCell>
            <TableDataCell>checked change event</TableDataCell>
            <TableDataCell>{`(list: (string | number | undefined)[]) => void`}</TableDataCell>
            <TableDataCell>false</TableDataCell>
            <TableDataCell>-</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
