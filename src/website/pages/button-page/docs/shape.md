```typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button size="tiny" shape="default">default</Button>
      <Button size="small" shape="pill">round</Button>
      <Button size="medium" shape="circle">C</Button>
      <Button size="large" shape="square">S</Button>
    </div>
  )
}
```
