```typescript
import Avatar from 'your path';

export default function Demo() {
  return (
    <div className="flex items-end [&>*]:mr-4">
      <Avatar text="T" size="tiny" className="bg-purple-500 text-white" />
      <Avatar text="S" size="small" className="bg-orange-500 text-white" />
      <Avatar text="M" size="medium" className="bg-blue-500 text-white" />
      <Avatar text="L" size="large" className="bg-red-500 text-white text-[22px]" />
      <Avatar text="A" shape="round" size="large" className="bg-green-500 text-white text-[22px]" />
    </div>
  )
}
```
