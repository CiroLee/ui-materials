```typescript
import Kbd from 'your path';
export default function Demo() {
  return (
      <div className="mb-4 [&>div]:mr-2">
        <Kbd keys={['command']} />
        <Kbd keys={['command']}>K</Kbd>
        <Kbd keys={['command', 'shift']}>T</Kbd>
        <Kbd keys={['option', 'command']}>D</Kbd>
      </div>
  );
}
```
