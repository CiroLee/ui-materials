```typescript
import Tag from 'your path/Tag';
import { RiUserSmileLine } from '@remixicon/react';
import Avatar from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag color="primary">
        <RiUserSmileLine size={12} className="mr-1" />
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
