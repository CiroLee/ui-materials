```ts
import { useToast } from 'your path/Toast';
import Button from 'your path/Button';
import { RiCheckLine, RiSendPlaneLine } from '@remixicon/react';
const text = 'this is a toast message';

export default function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-3">
      <Button
        onClick={() => {
          toast(text, {
            icon: <RiCheckLine size={18} className="text-green-500" />,
          });
        }}>
            info
      </Button>
      <Button
        onClick={() => {
          toast(text, {
            icon: <RiSendPlaneLine size={18} className="text-blue-500" />,
            });
        }}>
            success
      </Button>
    </div>
  );
}
```
