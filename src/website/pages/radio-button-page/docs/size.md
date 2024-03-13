```ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
export default function Demo() {
  return (
    <div className="flex flex-col gap-y-2">
      <p>tiny</p>
      <RadioButtonGroup
        size="tiny"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>small</p>
      <RadioButtonGroup
        size="small"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>tiny</p>
      <RadioButtonGroup
        size="medium"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>tiny</p>
      <RadioButtonGroup
        size="large"
        options={options}
        onValueChange={handleOnValueChange}
      />
    </div>
  )
}
```
