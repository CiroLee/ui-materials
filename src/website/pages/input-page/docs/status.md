```ts
import Input from 'your path/Input';
import { RIUserLine } from '@remixicon/react';
export default function Demo() {

  return (
    <div className="w-[400px] space-y-3">
      <Input status="error" placeholder="error" prefix={<RiUserLine size={18} />} />
      <Input status="warn" placeholder="warn" prefix={<RiUserLine size={18} />} />
      <Input status="readonly" placeholder="readonly" value="readonly..." />
    </div>
  )
}
```
