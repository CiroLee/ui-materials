```ts
import CircleProgress from 'your path/CircleProgress';

export default function Demo() {
    return (
      <div className="flex items-center [&_div]:mr-3">
        <CircleProgress percent={20} color="primary" />
        <CircleProgress percent={20} color="success" />
        <CircleProgress percent={20} color="info" />
        <CircleProgress percent={20} color="warn" />
        <CircleProgress percent={20} color="danger" />
      </div>
    )
}
```
