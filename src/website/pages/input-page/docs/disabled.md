```ts
import { useState } from 'react'
import Input from 'your path/Input';
import Checkbox from 'your path/Checkbox';

export default function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="space-y-2 w-[400px]">
      <Checkbox checked={disabled} onCheckedChange={setDisabled}>
        <span>disabled: {`${disabled}`}</span>
      </Checkbox>
      <Input disabled={!!disabled} placeholder="input sth..." prefix={<span>$</span>} />
    </div>
  )
}
```
