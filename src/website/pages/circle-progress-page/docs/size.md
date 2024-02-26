```ts
import CircleProgress from 'your path/CircleProgress';

export default function Demo() {
    return (
      <div className="flex items-center [&_div]:mr-3">
        <CircleProgress percent={20} size="small" />
        <CircleProgress percent={20} size="medium" />
        <CircleProgress percent={20} size="large" />
      </div>
    )
}
```
