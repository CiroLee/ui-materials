```ts
import CircleProgress from 'your path';

export default function Demo() {
    return (
      <div className="flex items-center [&_div]:mr-3">
        <CircleProgress percent={20} colors="primary" />
        <CircleProgress percent={20} colors="success" />
        <CircleProgress percent={20} colors="warn" />
        <CircleProgress percent={20} colors="danger" />
      </div>
    )
}
```
