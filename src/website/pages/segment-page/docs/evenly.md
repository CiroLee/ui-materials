```ts
import Segment from 'your path/Segment';

export default function Demo() {
  return (
    <Segment options={options} className="[&_.segment-item]:w-[100px] mb-3" />
    <Segment options={options} className="w-[408px] [&_.segment-item]:flex-1" />
  )
}
```
