```typescript
import RadioGroup, { type RadioOption } from 'your path';

export default function Demo() {
const options: RadioOption[] = [
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
    <RadioGroup
      options={options}
      className="pb-3 mb-3 border-b"
      direction="horizontal"
      onValueChange={(v) => console.log('you choose: ', v)}
    />
    <RadioGroup options={options} direction="vertical" onValueChange={(v) => console.log('you choose: ', v)} />
  )
}
```
