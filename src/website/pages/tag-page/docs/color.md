```typescript
import Tag from 'your path/Tag';

export default function Demo() {
  return (
    <div className="flex items-center [&>div]:mr-2">
      <Tag color="default">default</Tag>
      <Tag color="primary">primary</Tag>
      <Tag color="success">success</Tag>
      <Tag color="warn">warn</Tag>
      <Tag color="danger">danger</Tag>
      <Tag className="text-white bg-[#e64980]">#e64980</Tag>
      <Tag className="text-white bg-[#212529]">#212529</Tag>
    </div>
  )
}
```
