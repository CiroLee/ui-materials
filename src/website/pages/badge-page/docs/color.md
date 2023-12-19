```typescript
import Badge from 'your path';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Badge content="2" bgColor="#8749F5">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="2" bgColor="#ffc000">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="2" bgColor="green" textColor="purple">
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
```
