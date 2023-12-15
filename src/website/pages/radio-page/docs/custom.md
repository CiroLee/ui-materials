```typescript
import RadioGroup, { type RadioOption } from 'your path';

export default Demo() {
const options: RadioOption[] = [
  {
    value: 'apple',
    label: (
      <div>
        <p>apple</p>
        <p>🍎</p>
      </div>
    ),
  },
  {
    value: 'banana',
    label: (
      <div>
        <p>banana</p>
        <p>🍌</p>
      </div>
    ),
  },

  {
    value: 'orange',
    label: (
      <div>
        <p>orange</p>
        <p>🍊</p>
      </div>
    ),
  },
];
  return (
    <RadioGroup
      className="[&>label_button]:self-baseline [&_button]:mt-[6px]"
      options={option}
      onValueChange={(v) => console.log('you choose: ', v)}
    />
  )
}
```
