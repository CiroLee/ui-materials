```ts
import InputNumber from 'your path/InputNumber';
import { PiggyBank, BarChart3 } from 'lucide-react';

export default function Demo() {
  return (
    <>
      <div className="w-[400px] flex flex-col space-y-3">
        <InputNumber prefix={<PiggyBank size={18} />} />
        <InputNumber prefix={<BarChart3 size={18} />} />
      </div>
    </>
  )
}
```
