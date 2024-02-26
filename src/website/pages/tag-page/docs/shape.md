```typescript
import Tag from 'your path/Tag';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag size="medium" shape="default" color="primary">primary</Tag>
      <Tag size="medium" shape="pill" color="primary">primary</Tag>
    </div>
  )
}
```
