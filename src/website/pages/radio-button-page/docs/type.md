```ts
import RadioButtonGroup from 'your path/RadioButtonGroup';
export default function Demo() {
  return (
    <div className="flex flex-col gap-y-2">
      <p>type:outline</p>
      <RadioButtonGroup
        type="outline"
        options={options}
        onValueChange={handleOnValueChange}
      />
      <p>type:solid</p>
      <RadioButtonGroup
        type="solid"
        options={options}
        onValueChange={handleOnValueChange}
      />
    </div>
  )
}
```
