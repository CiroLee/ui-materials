```ts
import Divider from 'your path/Divider';

export default function Demo() {
  return (
    <div className="w-fit">
      <p>Divider is used to separate content</p>
      <Divider className="my-3" />
      <div className="h-[24px] relative flex items-center">
        <span>home</span>
        <Divider direction="vertical" className="mx-3" />
        <span>about</span>
        <Divider direction="vertical" className="mx-3" />
        <span>sponsor</span>
        <Divider direction="vertical" className="mx-3" />
      </div>
    </div>
  )
}
```
