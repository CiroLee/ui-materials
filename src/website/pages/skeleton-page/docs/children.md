```typescript
import { Image } from 'lucide-react';
import Skeleton from 'your path';

export default function Demo() {
  return (
    <Skeleton type="flicker" className="size-[48px] flex flex-center rounded-md">
      <Image size="24px" className="text-black/20" />
    </Skeleton>
  )
}
```
