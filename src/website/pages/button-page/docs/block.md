```typescript
import Button from 'your path';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button shape="pill" block>button</Button>
      <Button block>button</Button>
      <Button outline block>button</Button>
    </div>
  )
}
```
