```ts
import { useToast } from 'your path';
import Button from 'your path';
import { Check, Send } from 'lucide-react';
const text = 'this is a toast message';

export default function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-3">
      <Button
        onClick={() => {
          toast(text, {
            icon: <Check size={18} className="text-green-500" />,
          });
        }}>
            info
      </Button>
      <Button
        onClick={() => {
          toast(text, {
            icon: <Send size={18} className="text-blue-500" />,
            });
        }}>
            success
      </Button>
    </div>
  );
}
```
