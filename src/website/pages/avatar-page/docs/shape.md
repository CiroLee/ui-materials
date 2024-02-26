```typescript
import Checkbox from 'your path/Avatar';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar size="large" src={IMG_URL} />
      <Avatar size="large" shape="round" src={IMG_URL} />
    </div>
  )
}
```
