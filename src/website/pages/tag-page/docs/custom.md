```typescript
import Tag from 'your path';
import { Smile } from 'lucide-react';
import Avatar from '@ui/Avatar';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag color="primary">
        <Smile size={12} className="mr-1" />
          <span className="h-full">icon smile</span>
      </Tag>
      <Tag shape="pill">
        <Avatar src={IMG_URL} className="w-[12px] h-[12px] mr-1" />
        <span className="h-full">avatar</span>
      </Tag>
    </div>
  )
}
```
