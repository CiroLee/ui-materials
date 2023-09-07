```typescript
import Avatar from 'your path';
const IMG_URL = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200';

export default Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar size="large" src={IMG_URL} />
      <Avatar size="large" shape="round" src={IMG_URL} />
    </div>
  )
}
```
