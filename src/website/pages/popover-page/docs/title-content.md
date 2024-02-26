```ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  return (
    <div>
      <Popover
        title={<p className="text-brand-500 font-bold">custom title</p>}
        content={<p className="text-sm text-danger-500">use as custom contents</p>}>
        <Button>popover</Button>
      </Popover>
    </div>
  )
}
```
