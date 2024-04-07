```ts
import Slider from 'your path/Slider';

export default function Demo() {
  return (
    <div className="space-y-3 w-[76%]">
      <Slider size="tiny" direction="vertical" defaultValue={[30]} />
      <Slider size="small" direction="vertical" defaultValue={[30]} />
      <Slider size="medium" direction="vertical" defaultValue={[30]} />
      <Slider size="large" direction="vertical" defaultValue={[30]} />
    </div>
  )
}
```
