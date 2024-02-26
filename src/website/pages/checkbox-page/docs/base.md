```typescript
import Checkbox from 'your path/Checkbox';

export default function Demo() {
  return (
    <Checkbox
      checked
      value="apple"
      onCheckedChange={(checked, value) => console.log(checked, value)}
    >
      apple
    </Checkbox>
  )
}
```
