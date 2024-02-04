```ts
import Input from 'your path';
import { User, Search } from 'lucide-react'

export default function Demo() {
  return (
    <div className="w-[400px] space-y-3">
      <Input placeholder="icon prefix..." prefix={<User size={18} />} />
      <Input placeholder="text prefix..." prefix={<span>+86</span>} />
      <Input placeholder="icon suffix..." suffix={<Search size={18} />} />
    </div>
  )
}
```
