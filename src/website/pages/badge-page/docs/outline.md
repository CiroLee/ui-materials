```typescript
import Badge from 'your path';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge content="2" outline={false}>
        <Avatar shape="round" src={IMG_URL} />
        </Badge>
      <Badge content="2" outline={false}>
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
```
