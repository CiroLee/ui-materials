```ts
import Counter from 'your path/Counter';
import clsx from 'clsx';
export default function Demo() {
  return (
    <div className="h-[300px] overflow-auto mb-10">
      <div className="h-[1000px] bg-zinc-100 relative">
        <Counter
          className={clsx(countStyle, 'absolute left-2 bottom-2')}
          to={100}
          isInView
          delay={1000}
          duration={3000}
          onComplete={() => console.log('complete')}
        />
      </div>
    </div>
  )
}
```
