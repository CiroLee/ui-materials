```ts
import InputNumber from 'your path/InputNumber';
import { RiMoneyCnyBoxLine } from '@remixicon/react';

export default function Demo() {
  return (
    <>
      <div className="flex flex-col space-y-3 w-[400px]">
        <InputNumber status="error" prefix={<RiMoneyCnyBoxLine size={18} />} />
        <InputNumber status="warn" prefix={<RiMoneyCnyBoxLine size={18} />} />
        <InputNumber status="readonly" prefix={<RiMoneyCnyBoxLine size={18} />} value={666} />
      </div>
    </>
  )
}
```
