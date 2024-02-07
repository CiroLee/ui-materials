```ts
import Textarea from 'your path';

export default function Demo() {
  return (
    <div className="flex flex-col space-y-3 [&_textarea]:w-[400px]">
      <Textarea placeholder="resize both" resize="both" />
      <Textarea placeholder="resize horizontal" resize="horizontal" />
      <Textarea placeholder="resize vertical" resize="vertical" />
      <Textarea placeholder="resize none" resize="none" />
    </div>
  )
}
```
