```ts
import { useState } from 'react'
import Popover from 'your path/Popover';
import Button from 'your path/Button';

export default function Demo() {
  return (
    <div className="flex gap-3">
      <Popover title="title" content="this is popover texts and it is long">
        <Button>with arrow</Button>
        </Popover>
        <Popover title="title" showArrow={false} content="this is popover texts and it is long">
        <Button>without arrow</Button>
      </Popover>
    </div>
  )
}
```
