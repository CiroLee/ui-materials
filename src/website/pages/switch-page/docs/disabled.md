```typescript
import Switch from 'your path';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Switch disabled />
      <Switch checked disabled />
    </div>
  )
}
```
