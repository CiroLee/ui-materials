```ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
import { RiTempColdLine } from '@remixicon/react';
export default function Demo() {
  return (
    <div className="flex gap-4">
      <Counter
        className={clsx(countStyle, 'w-[170px]')}
        from={-12}
        to={42}
        prefix={<RiTempColdLine className="mr-1" size={24} />}
      />
      <Counter
        className={clsx(countStyle, 'w-[170px]')}
        from={0}
        to={100}
        suffix={<span className="text-sm ml-2">元</span>}
      />
    </div>
  )
}
```
