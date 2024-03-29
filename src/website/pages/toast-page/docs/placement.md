```ts
import { useToast, type ToastPlacement  } from 'your path/Toast';
import Button from 'your path/Button';
import RadioGroup, { type CommonOption } from 'your path/RadioGroup';
const text = 'this is a toast message';

const placementOption: CommonOption[] = [
  {
    label: 'topLeft',
    value: 'topLeft',
  },
  {
    label: 'topCenter',
    value: 'topCenter',
  },
  {
    label: 'topRight',
    value: 'topRight',
  },
  {
    label: 'bottomLeft',
    value: 'bottomLeft',
  },
  {
    label: 'bottomCenter',
    value: 'bottomCenter',
  },
  {
    label: 'bottomRight',
    value: 'bottomRight',
  },
  {
    label: 'center',
    value: 'center',
  },
];

export default function Demo() {
  const { toast } = useToast();
  return (
    <RadioGroup
      className="w-[440px] grid grid-cols-3 gap-3 mb-3"
      value={placement}
      options={placementOption}
      onValueChange={setPlacement}
    />
    <Button
      onClick={() => {
        toast(text, { placement: placement as ToastPlacement });
    }}>
      show toast
    </Button>
  );
}
```
