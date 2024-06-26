import ShowBox from '@site/components/ShowBox';
import { RiBankCardLine, RiAlipayLine, RiWechatPayLine } from '@remixicon/react';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import RadioButtonGroup from '@ui/RadioButtonGroup';
import { CommonOption } from '@/packages/types/components';
import CodeView from '@site/components/CodeView';
import baseHtml from './docs/base.md?raw';
import sizeHtml from './docs/size.md?raw';
import typeHtml from './docs/type.md?raw';
import customHtml from './docs/custom.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

const options: CommonOption[] = [
  {
    label: 'S',
    value: 's',
  },
  {
    label: 'M',
    value: 'm',
  },
  {
    label: 'L',
    value: 'l',
  },
  {
    label: 'XL',
    value: 'xl',
    disabled: true,
  },
];
const customOptions: CommonOption[] = [
  {
    label: (
      <div className="flex flex-col items-center">
        <RiBankCardLine size={28} />
        <p>card</p>
      </div>
    ),
    value: 'bank',
  },
  {
    label: (
      <div className="flex flex-col items-center">
        <RiAlipayLine size={28} />
        <p>alipay</p>
      </div>
    ),
    value: 'alipay',
  },
  {
    label: (
      <div className="flex flex-col items-center">
        <RiWechatPayLine size={28} />
        <p>wechat-pay</p>
      </div>
    ),
    value: 'wechat-pay',
  },
];
export default function RadioButtonGroupPage() {
  const handleOnValueChange = (value: string) => {
    console.log('you choose: ', value);
  };
  return (
    <>
      <NavTitle title="RadioButtonGroup" sourceName="RadioButtonGroup" />
      <Description>Radio selection only one can be selected but with button style</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <RadioButtonGroup options={options} onValueChange={handleOnValueChange} />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          type
        </Heading>
        <div className="flex flex-col gap-y-2">
          <p>type:outline</p>
          <RadioButtonGroup type="outline" options={options} onValueChange={handleOnValueChange} />
          <p>type:solid</p>
          <RadioButtonGroup type="solid" options={options} onValueChange={handleOnValueChange} />
        </div>
        <CodeView content={typeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex flex-col gap-y-3">
          <p>tiny</p>
          <RadioButtonGroup size="tiny" options={options} onValueChange={handleOnValueChange} />
          <p>small</p>
          <RadioButtonGroup size="small" options={options} onValueChange={handleOnValueChange} />
          <p>tiny</p>
          <RadioButtonGroup size="medium" options={options} onValueChange={handleOnValueChange} />
          <p>tiny</p>
          <RadioButtonGroup size="large" options={options} onValueChange={handleOnValueChange} />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom content
        </Heading>
        <RadioButtonGroup
          className="[&_button]:w-[100px] [&_button]:h-[80px]"
          options={customOptions}
          onValueChange={handleOnValueChange}
        />
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
