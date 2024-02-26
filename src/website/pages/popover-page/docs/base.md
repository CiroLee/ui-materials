```ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <Popover
        title="title"
        content="this is popover texts and it is long"
        side="top"
        align="start"
        onOpenChange={setStatus}>
        <Button>popover</Button>
      </Popover>
      <p className="mt-2 text-zinc-500">status: {String(status)}</p>
    </div>
  )
}
```
