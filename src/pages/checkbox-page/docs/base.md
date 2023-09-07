```typescript
import Checkbox from 'your path';

export default Demo() {
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
