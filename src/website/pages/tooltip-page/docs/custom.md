```ts
import Tooltip from 'your path';
import Button from 'your path';

export default function Demo() {
    return (
    <Tooltip title={<span className="font-bold text-danger-500">custom title</span>}>
      <Button>hover me</Button>
    </Tooltip>
    )
}
```
