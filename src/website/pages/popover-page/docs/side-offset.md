```ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  return (
    <div className="flex gap-3">
      <Popover title="title" sideOffset={20} content="this is popover texts and it is long">
        <Button>popover</Button>
      </Popover>
    </div>
  )
}
```
