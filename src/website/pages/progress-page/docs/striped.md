```ts
import Progress from 'your path/Progress';

export default function Demo() {
  return (
    <div className="space-y-3">
      <Progress percent={65} striped colors="primary" className="w-3/4" />
      <Progress percent={65} striped colors="success" className="w-3/4" />
      <Progress percent={65} striped colors="warn" className="w-3/4" />
      <Progress percent={65} striped colors="danger" className="w-3/4" />
    </div>
  )
}
```
