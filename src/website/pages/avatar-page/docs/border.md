```typescript
import Checkbox from 'your path/Avatar';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar bordered src={IMG_URL} />
      <Avatar bordered color="#8749F5" src={IMG_URL} />
      <Avatar bordered shape="round" color="#65ca16" src={IMG_URL} />
    </div>
  )
}
```
