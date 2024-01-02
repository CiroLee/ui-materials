```typescript
import Skeleton from 'your path';

export default function Demo() {
  return (
    <div className="mt-2 flex items-center">
      <Skeleton type="flicker" className="size-[48px] rounded-full" />
      <div className="flex flex-col justify-center">
        <Skeleton type="flicker" className="w-[200px] h-[20px] rounded-md ml-2" />
        <Skeleton type="flicker" className="w-[80px] h-[20px] rounded-md ml-2 mt-2" />
      </div>
    </div>
  )
}
```
