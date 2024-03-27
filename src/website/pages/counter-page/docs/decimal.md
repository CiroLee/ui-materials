```ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
export default function Demo() {
  return (
    <Counter className={clsx(countStyle, 'w-[200px]')} from={0} to={100} decimal={2} />
  )
}
```
