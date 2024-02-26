```typescript
import Checkbox from 'your path/Checkbox';

export default function Demo() {
  return (
    <div className="flex items-center [&>*]:mr-2">
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox checked disabled>disabled</Checkbox>
    </div>
  )
}
```
