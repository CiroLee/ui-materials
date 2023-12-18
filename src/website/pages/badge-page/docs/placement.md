```typescript
import Badge from 'your path';

export default Demo() {
  return (
    <div className="flex gap-4">
      <Badge className="px-1" content="99+" placement="top-right">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="9" placement="bottom-right">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="9" placement="top-left">
        <Avatar src={IMG_URL} />
      </Badge>
      <Badge content="9" placement="bottom-left">
        <Avatar src={IMG_URL} />
      </Badge>
    </div>
  )
}
```
