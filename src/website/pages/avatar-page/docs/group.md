```typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
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
