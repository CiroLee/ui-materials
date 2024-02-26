```typescript
import Switch from 'your path/Switch';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Switch disabled />
      <Switch checked disabled />
    </div>
  )
}
```
