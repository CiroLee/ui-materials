```typescript
import { useState } from 'react';
import Switch from 'your path/Switch';
import Popover from 'your path/Popover';
import Button from 'your path/Button';


export default function Demo() {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <div className="flex items-center mb-2">
        <Switch checked={disabled} onCheckedChange={setDisabled} />
        <span className="text-zinc-500 ml-2">disabled: {String(disabled)}</span>
      </div>
      <Popover title="title" content="this is popover texts and it is long" disabled={disabled} side="right">
        <Button>popover</Button>
      </Popover>
    </div>
  )
}
```
