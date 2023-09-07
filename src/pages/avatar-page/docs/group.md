```typescript
import Avatar from 'your path';
const IMG_URL = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200';

export default Demo() {
  return (
    <AvatarGroup>
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
    </AvatarGroup>
    <AvatarGroup className="mt-3" direction="vertical">
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar src={IMG_URL} />
      <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
    </AvatarGroup>
  )
}
```
