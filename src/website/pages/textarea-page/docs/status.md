```ts
import Textarea from 'your path';

export default function Demo() {
  return (
    <div className="flex flex-col space-y-3 [&_textarea]:w-[400px]">
      <Textarea status="error" placeholder="error" />
      <Textarea status="warn" placeholder="warn" />
      <Textarea status="readonly" value="readonly" />
    </div>
  )
}
```
