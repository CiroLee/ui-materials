```ts
import { useState } from 'react'
import Popover from 'your path';
import Button from 'your path';

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
