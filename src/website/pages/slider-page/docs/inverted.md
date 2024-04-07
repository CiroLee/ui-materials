```ts
import { useState } from 'react';
import Slider from 'your path/Slider';
import Switch from 'your path/Switch';

export default function Demo() {
  const [inverted, setInverted] = useState(false);
  return (
    <div className="flex items-center mb-2">
      <span className="mr-2">inverted:</span>
      <Switch size="small" checked={inverted} onCheckedChange={setInverted} />
    </div>
    <Slider className="w-[76%]" inverted={inverted} defaultValue={[10]} min={0} max={100} />
  )
}
```
