```ts
import { useState } from 'react';
import InputNumber from 'your path/InputNumber';


export default function Demo() {
  const [keyboard, setKeyboard] = useState<boolean>(true);
  return (
    <>
      <Checkbox checked={keyboard} onCheckedChange={setKeyboard}>
          <span>keyboard enabled:{String(keyboard)}</span>
      </Checkbox>
      <InputNumber className="mt-2 w-[400px]" keyboard={keyboard} />
    </>
  )
}
```
