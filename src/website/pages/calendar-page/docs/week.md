```ts
import { useState } from 'react';
import Calendar from 'your path/Calendar';
import Switch from 'your path/Switch';

export default function Demo() {
  const [startWeekOnSunday, setStartWeekOnSunday] = useState(true);
  return (
    <>
      <div className="flex items-center mb-2">
        <Switch checked={startWeekOnSunday} onCheckedChange={setStartWeekOnSunday} />
        <span className="ml-2">: {`${startWeekOnSunday}`}</span>
      </div>
      <Calendar startWeekOnSunday={startWeekOnSunday} />
    </>
  )
}
```
