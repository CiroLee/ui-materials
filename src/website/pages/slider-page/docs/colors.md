```ts
import Slider from 'your path/Slider';

export default function Demo() {
  return (
    <div className="space-y-3 w-[76%]">
      <Slider colors="primary" defaultValue={[10]} />
      <Slider colors="info" defaultValue={[10]} />
      <Slider colors="success" defaultValue={[10]} />
      <Slider colors="warn" defaultValue={[10]} />
      <Slider colors="danger" defaultValue={[10]} />
    </div>
  )
}
```
