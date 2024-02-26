```typescript
import Switch from 'your path/Switch';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Switch size="tiny" />
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </div>
  )
}
```
