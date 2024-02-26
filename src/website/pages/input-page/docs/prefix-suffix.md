```ts
import Input from 'your path/Input';
import { RiUserLine, RiSearchLine } from '@remixicon/react'

export default function Demo() {
  return (
    <div className="w-[400px] space-y-3">
      <Input placeholder="icon prefix..." prefix={<RiUserLine size={18} />} />
      <Input placeholder="text prefix..." prefix={<span>+86</span>} />
      <Input placeholder="icon suffix..." suffix={<RiSearchLine size={18} />} />
    </div>
  )
}
```
