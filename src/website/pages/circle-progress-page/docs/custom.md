```ts
import CircleProgress from 'your path';
import { AlertTriangle } from 'lucide-react';

export default function Demo() {
    return (
      <CircleProgress
        percent={60}
        className="square-[110px]"
        trackerClassName="stroke-[rgba(45,117,117,0.5)]"
        indicatorClassName="stroke-[#2558d0]"
        svgClassName="stroke-[3]">
        <AlertTriangle size={32} color="red" />
      </CircleProgress>
    )
}
```
