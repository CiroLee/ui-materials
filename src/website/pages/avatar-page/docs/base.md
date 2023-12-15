```typescript
import Avatar from 'your path';
const IMG_URL = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200';

export default Demo() {
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
