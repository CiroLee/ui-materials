```ts
import InputNumber from 'your path/InputNumber';
import { RiMoneyCnyBoxLine } from '@remixicon/react';

export default function Demo() {
  return (
    <>
      <InputNumber className="w-[400px]" disabled value={10} prefix={<RIMoneyCnyBoxLine size={18} />} />
    </>
  )
}
```
