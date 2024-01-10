```ts
import Tooltip from 'your path';
import Button from 'your path';
import type { Side, Align } from 'your path'

const placements: { side: Side; align: Align }[] = [
  {
    side: 'top',
    align: 'start',
  },
  {
    side: 'top',
    align: 'center',
  },
  {
    side: 'top',
    align: 'end',
  },
  {
    side: 'right',
    align: 'start',
  },
  {
    side: 'right',
    align: 'center',
  },
  {
    side: 'right',
    align: 'end',
  },
  {
    side: 'bottom',
    align: 'start',
  },
  {
    side: 'bottom',
    align: 'center',
  },
  {
    side: 'bottom',
    align: 'end',
  },
  {
    side: 'left',
    align: 'start',
  },
  {
    side: 'left',
    align: 'center',
  },
  {
    side: 'left',
    align: 'end',
  },
];

export default function Demo() {
    return (
      <div className="inline-grid grid-cols-3 grid-rows-4 gap-3">
        {placements.map((item, index) => (
        <Tooltip key={index} title="tooltip text" align={item.align} side={item.side}>
            <Button>
            {item.side}-{item.align}
            </Button>
        </Tooltip>
        ))}
      </div>
    )
}
```
