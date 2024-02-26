```typescript
import Checkbox from 'your path/Button';
import { RiUserLine, RiUpload2Line, RiLoader2Line } from '@remixicon/react';
export default function Demo() {
  return (
    <div className="flex items-center [&_button:not(:first-child)]:ml-2">
      <Button type="primary">
        <RiUserLine size={16} className="mr-1" />
        <span>RiUserLine</span>
      </Button>
      <Button type="primary" shape="square">
        <RiUserLine size={16} />
      </Button>
      <Button type="primary">
        <span>upload</span>
        <RiUpload2Line size={16} className="ml-1" />
      </Button>
      <Button type="primary" loading>
        <RiLoader2Line size={16} className="mr-1 animate-spin" />
        <span>Loading</span>
      </Button>
    </div>
  )
}
```
