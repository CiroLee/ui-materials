```typescript
import Checkbox from 'your path/Avatar';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4 text-gray-600 text-sm">
      <div className="flex flex-col items-center justify-center">
        <Avatar size="tiny" src={IMG_URL} />
        <p>tiny</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="small" src={IMG_URL} />
        <p>small</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="medium" src={IMG_URL} />
        <p>medium</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="large" src={IMG_URL} />
        <p>large</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Avatar size="large" />
        <p>fallback</p>
      </div>
    </div>
  )
}
```
