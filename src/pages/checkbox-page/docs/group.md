```typescript
import {type CheckboxProps, CheckboxGroup } from 'your path';

export default Demo() {
  const checkboxGroup: CheckboxProps[] = [
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
    <CheckboxGroup
      value="orange"
      className="flex [&>label]:mr-2"
      options={checkboxGroup}
      onCheckedChange={(list) => console.log('what you choose:', list)}
    />
  )
}
```
