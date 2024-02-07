```ts
import Textarea from 'your path';

export default function Demo() {
  return (
    <Textarea className="w-[400px]" showCount allowClear placeholder="without maxLength" />
    <Textarea className="w-[400px]" maxLength={140} showCount allowClear placeholder="with maxLength" />
  )
}
```
