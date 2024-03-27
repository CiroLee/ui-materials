import { useState } from 'react';
import { RiMoneyCnyBoxLine, RiBarChartLine } from '@remixicon/react';
import Checkbox from '@ui/Checkbox';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import NavTitle from '@site/components/NavTitle';
import InputNumber from '@ui/InputNumber';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as prefixHtml } from './docs/prefix.md';
import { html as minMaxHtml } from './docs/min-max.md';
import { html as stepHtml } from './docs/step.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as statusHtml } from './docs/status.md';
import { html as keyboardHtml } from './docs/keyboard.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
export default function InputNumberPage() {
  const [val, setVal] = useState<number | null>(null);
  const [keyboard, setKeyboard] = useState<boolean>(true);
  return (
    <>
      <NavTitle title="InputNumber" sourceName="InputNumber" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <InputNumber className="max-w-[400px]" value={val} onChange={setVal} />
        <p className="mt-2">{val}</p>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="max-w-[400px] flex flex-col space-y-3">
          <InputNumber size="tiny" placeholder="tiny" />
          <InputNumber size="small" placeholder="small" />
          <InputNumber size="medium" placeholder="medium" />
          <InputNumber size="large" placeholder="large" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          prefix
        </Heading>
        <div className="max-w-[400px] flex flex-col space-y-3">
          <InputNumber prefix={<RiMoneyCnyBoxLine size={18} />} />
          <InputNumber prefix={<RiBarChartLine size={18} />} />
        </div>
        <CodeView content={prefixHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          min and max
        </Heading>
        <InputNumber className="max-w-[400px]" min={2} max={20} />
        <CodeView content={minMaxHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          step
        </Heading>
        <InputNumber
          className="max-w-[400px]"
          step={2}
          onStep={(value, option) => {
            console.log('value:', value, 'option:', option);
          }}
        />
        <CodeView content={stepHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <InputNumber className="max-w-[400px]" disabled value={10} prefix={<RiMoneyCnyBoxLine size={18} />} />
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          status
        </Heading>
        <div className="flex flex-col space-y-3 max-w-[400px]">
          <InputNumber status="error" prefix={<RiMoneyCnyBoxLine size={18} />} />
          <InputNumber status="warn" prefix={<RiMoneyCnyBoxLine size={18} />} />
          <InputNumber status="readonly" prefix={<RiMoneyCnyBoxLine size={18} />} value={666} />
        </div>
        <CodeView content={statusHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          keyboard
        </Heading>
        <Checkbox checked={keyboard} onCheckedChange={setKeyboard}>
          <span>keyboard enabled:{String(keyboard)}</span>
        </Checkbox>
        <InputNumber className="mt-2 max-w-[400px]" keyboard={keyboard} />
        <CodeView content={keyboardHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
