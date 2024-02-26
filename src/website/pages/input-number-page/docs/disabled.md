```ts
import InputNumber from 'your path/InputNumber';
import { PiggyBank } from 'lucide-react';

export default function Demo() {
  return (
    <>
      <InputNumber className="w-[400px]" disabled value={10} prefix={<PiggyBank size={18} />} />
    </>
  )
}
```
