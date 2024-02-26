```ts
import { useState } from 'react';
import InputNumber from 'your path/InputNumber';
export default function Demo() {
  const [val, setVal] = useState<number | null>(null);
  return (
    <>
      <InputNumber className="w-[400px]" value={val} onChange={setVal} />
      <p className="mt-2">{val}</p>
    </>
  )
}
```
