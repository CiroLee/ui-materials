```typescript
import {type CheckboxProps, CheckboxGroup } from 'your path';

export default function Demo() {
  const checkboxGroup: CheckboxProps[] = [
    {
      value: 'apple',
      children: (
        <div>
          <p>apple</p>
          <p>🍎</p>
        </div>
      ),
    },
    {
      value: 'banana',
      children: (
        <div>
          <p>banana</p>
          <p>🍌</p>
        </div>
      ),
    },
    {
      value: 'orange',
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
    <CheckboxGroup
      value="orange"
      className="flex [&>label]:mr-2 [&>label_button]:self-baseline [&_button]:mt-[6px]"
      options={checkboxGroup}
      onCheckedChange={(list) => console.log('what you choose:', list)}
    />
  )
}
```
