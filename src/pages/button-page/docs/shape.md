```typescript
import Button from 'your path';

export default Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button shape="default">default</Button>
      <Button shape="round">round</Button>
      <Button shape="circle">C</Button>
      <Button shape="square">S</Button>
    </div>
  )
}
```
