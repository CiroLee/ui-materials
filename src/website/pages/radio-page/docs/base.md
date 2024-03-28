```typescript
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';

export default function Demo() {
const options: CommonOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
    {
    value: 'banana',
    label: 'banana',
  },
]
  return (
    <RadioGroup options={options} onValueChange={(v) => console.log('you choose: ', v)} />
  )
}
```
