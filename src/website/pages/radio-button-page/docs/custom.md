```ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
import  type { CommonOption } from 'your path/types/components';
import { RiBankCardLine, RiAlipayLine, RiWechatPayLine } from '@remixicon/react';
const options: CommonOption[] = [
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
export default function Demo() {
  const handleOnValueChange = (value: string) => {
    console.log('you choose: ', value);
  };
  return (
    <RadioButtonGroup className="[&_button]:w-[100px] [&_button]:h-[80px]" options={options} onValueChange={handleOnValueChange} />
  )
}
```
