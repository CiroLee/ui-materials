```ts
import { useToast } from 'your path';
import Button from 'your path';
const text = 'this is a toast message';

export default function Demo() {
  const { toast, closeToast } = useToast();
  return (
    <Button
      onClick={() => {
        toast(text, {
          autoClose: false,
          icon: <AlertTriangle size={18} className="text-red-500" />,
          action: (
           <Button size="tiny" outline type="text" onClick={closeToast}>
             action
           </Button>
          ),
        });
    }}>
      show toast
    </Button>
  );
}
```
