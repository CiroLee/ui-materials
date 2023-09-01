```typescript
import Switch from 'your path';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';

export default Demo() {
  return (
    <Switch
      checkedThumb={
        <div className="w-full h-full flex justify-center items-center">
          <CheckIcon />
        </div>
      }
      unCheckedThumb={
        <div className="w-full h-full flex justify-center items-center">
          <Cross2Icon width="12px" height="12px" />
        </div>
      }
    />
  )
}
```
