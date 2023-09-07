```typescript
import Button from 'your path';

export default Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button size="tiny" shape="default">default</Button>
      <Button size="small" shape="round">round</Button>
      <Button size="medium" shape="circle">C</Button>
      <Button size="large" shape="square">S</Button>
    </div>
  )
}
```
