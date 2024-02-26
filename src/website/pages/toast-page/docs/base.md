```ts
import { useToast } from 'your path/Toast';
import Button from 'your path/Button';
const text = 'this is a toast message';

export default function Demo() {
  const { toast, closeToast } = useToast();
  return (
    <Button onClick={() => toast(text)}>Show Toast</Button>
  );
}
```
