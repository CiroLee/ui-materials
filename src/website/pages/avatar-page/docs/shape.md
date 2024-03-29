```typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar size="large" src={IMG_URL} />
      <Avatar size="large" shape="round" src={IMG_URL} />
    </div>
  )
}
```
