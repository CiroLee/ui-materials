```typescript
import Badge from 'your path';

export default function Demo() {
  return (
    <div className="flex gap-4">
    <Badge size="small" content="9">
        <Avatar src={IMG_URL} />
    </Badge>
    <Badge size="medium" content="9">
    <Avatar src={IMG_URL} />
    </Badge>
    <Badge size="large" content="9">
    <Avatar src={IMG_URL} />
    </Badge>
    </div>
  )
}
```
