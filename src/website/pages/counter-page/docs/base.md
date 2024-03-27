```ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
const countStyle =
'bg-white w-[140px] text-[42px] inline-flex rounded-3 justify-center items-end font-bold border p-6 [&_div]:leading-[1]';
export default function Demo() {
  return (
    <Counter className={countStyle} to={100} />
  )
}
```
