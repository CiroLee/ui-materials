```typescript
import Avatar from 'your path';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';

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
