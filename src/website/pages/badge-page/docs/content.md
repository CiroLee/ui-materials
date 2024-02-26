```typescript
import Checkbox from 'your path/Badge';
import { RiNotification2Line, Check } from '@remixicon/react';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge content={<RiNotification2Line size={12} />}>
        <Avatar shape="round" src={IMG_URL} />
      </Badge>
        <Badge content={<RiCheckLine size={12} />} bgColor="#5bce5b">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge size="small" placement="bottom-right" bgColor="#5bce5b">
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
```
