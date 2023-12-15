```typescript
import Button from 'your path';

export default Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button outline>primary</Button>
      <Button outline type="success">success</Button>
      <Button outline type="warn">warn</Button>
      <Button outline type="danger">danger</Button>
      <Button outline type="text">text</Button>
    </div>
  )
}
```
