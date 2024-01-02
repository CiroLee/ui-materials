```typescript
import Skeleton from 'your path';

export default function Demo() {
  return (
    <div className="mt-2 flex items-center">
      <Skeleton type="shimmer" className="size-[48px] rounded-full" />
      <div className="flex flex-col justify-center">
        <Skeleton type="shimmer" className="w-[200px] h-[20px] rounded-md ml-2" />
        <Skeleton type="shimmer" className="w-[80px] h-[20px] rounded-md ml-2 mt-2" />
      </div>
    </div>
  )
}
```
