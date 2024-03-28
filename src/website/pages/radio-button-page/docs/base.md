```ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
import  type { CommonOption } from 'your path/types/components';
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
export default function Demo() {
  const handleOnValueChange = (value: string) => {
    console.log('you choose: ', value);
  };
  return (
    <RadioButtonGroup options={options} onValueChange={handleOnValueChange} />
  )
}
```
