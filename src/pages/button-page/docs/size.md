```typescript
import Button from 'your path';

export default Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button size="tiny">tiny</Button>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
    </div>
  )
}
```
