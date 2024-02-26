```ts
import Tooltip from 'your path/Tooltip';
import Button from 'your path/Button';

export default function Demo() {
    return (
      <div className="flex gap-3">
        <Tooltip title="tooltip" showArrow>
          <Button>with arrow</Button>
         </Tooltip>
        <Tooltip title="tooltip" showArrow={false}>
          <Button>without arrow</Button>
        </Tooltip>
      </div>
    )
}
```
