```ts
import Progress from 'your path'

export default function Demo() {
  return (
    <Progress
      percent={65}
      className="w-3/4 bg-pink-400/20 h-[16px] rounded-[8px] [&_div]:bg-blue-600 [&_div]:rounded-none"
    />
  )
}
```
