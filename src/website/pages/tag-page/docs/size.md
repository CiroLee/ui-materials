```typescript
import Tag from 'your path';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag size="tiny">tiny</Tag>
      <Tag size="small">small</Tag>
      <Tag size="medium">medium</Tag>
      <Tag size="large">large</Tag>
    </div>
  )
}
```
