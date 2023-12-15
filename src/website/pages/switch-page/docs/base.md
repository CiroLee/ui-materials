```typescript
import { useState } from 'react';
import Switch from 'your path';

export default Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Switch checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}
```
