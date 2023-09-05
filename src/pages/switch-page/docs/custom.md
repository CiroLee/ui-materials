```typescript
import Switch from 'your path';
import { Check, X } from 'lucide-react';

export default Demo() {
  return (
    <Switch
      checkedThumb={
        <div className="w-full h-full flex justify-center items-center">
            <Check size={12} />
        </div>
        }
        unCheckedThumb={
        <div className="w-full h-full flex justify-center items-center">
            <X size={12} />
        </div>
        }
    />
  )
}
```
