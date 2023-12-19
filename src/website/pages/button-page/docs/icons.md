```typescript
import Button from 'your path';
import { User, Upload, Loader } from 'lucide-react';
export default function Demo() {
  return (
    <div className="flex items-center [&_button:not(:first-child)]:ml-2">
      <Button type="primary">
        <User size={16} className="mr-1" />
        <span>User</span>
      </Button>
      <Button type="primary" shape="square">
        <User size={16} />
      </Button>
      <Button type="primary">
        <span>Upload</span>
        <Upload size={16} className="ml-1" />
      </Button>
      <Button type="primary" loading>
        <Loader size={16} className="mr-1 animate-spin" />
        <span>Loading</span>
      </Button>
    </div>
  )
}
```
