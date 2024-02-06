```ts
import InputNumber from 'your path';

export default function Demo() {
  return (
    <>
      <div className="w-[400px] flex flex-col space-y-3">
        <InputNumber size="tiny" placeholder="tiny" />
        <InputNumber size="small" placeholder="small" />
        <InputNumber size="medium" placeholder="medium" />
        <InputNumber size="large" placeholder="large" />
      </div>
    </>
  )
}
```
