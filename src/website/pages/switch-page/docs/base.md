```typescript
import { useState } from 'react';
import Switch from 'your path/Switch';

export default function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Switch checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}
```
