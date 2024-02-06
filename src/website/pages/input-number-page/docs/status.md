```ts
import InputNumber from 'your path';
import { PiggyBank } from 'lucide-react';

export default function Demo() {
  return (
    <>
      <div className="flex flex-col space-y-3 w-[400px]">
        <InputNumber status="error" prefix={<PiggyBank size={18} />} />
        <InputNumber status="warn" prefix={<PiggyBank size={18} />} />
        <InputNumber status="readonly" prefix={<PiggyBank size={18} />} value={666} />
      </div>
    </>
  )
}
```
