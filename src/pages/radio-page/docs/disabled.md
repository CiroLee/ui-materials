```typescript
import RadioGroup, { type RadioOption } from 'your path';

export default Demo() {
const options: RadioOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
  {
    value: 'banana',
    label: 'banana',
  },
  {
    value: 'orange',
    label: 'orange',
    disabled: true,
  },
];
  return (
    <RadioGroup options={options} onValueChange={(v) => console.log('you choose: ', v)} />
  )
}
```
