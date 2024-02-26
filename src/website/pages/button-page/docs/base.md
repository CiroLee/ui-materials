```typescript
import Checkbox from 'your path/Button';

export default function Demo() {
  return (
    <div className="[&_button:not(:first-child)]:ml-2">
      <Button>primary</Button>
      <Button type="success">success</Button>
      <Button type="info">infomation</Button>
      <Button type="warn">warn</Button>
      <Button type="danger">danger</Button>
      <Button type="text">text</Button>
      <Button disabled outline type="primary">
        disabled
      </Button>
    </div>
  )
}
```
