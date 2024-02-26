```typescript
import Switch from 'your path/Switch';
import { RiCheckLine, RiCloseLine } from '@remixicon/react';

export default function Demo() {
  return (
    <Switch
      checkedThumb={
        <div className="w-full h-full flex justify-center items-center">
            <RiCheckLine size={12} />
        </div>
        }
        unCheckedThumb={
        <div className="w-full h-full flex justify-center items-center">
            <RiCloseLine size={12} />
        </div>
        }
    />
  )
}
```
