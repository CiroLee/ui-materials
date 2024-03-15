```ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';
import type { Backdrop } from 'your path/types/common';

const backdropOptions = [
  { label: 'translucent', value: 'translucent' },
  { label: 'blur', value: 'blur' },
  { label: 'transparent', value: 'transparent' },
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [backdrop, setBackDrop] = useState<Backdrop>('translucent');
  return (
    <>
      <RadioGroup
        className="mb-2"
        options={backdropOptions}
        value={size}
        onValueChange={(value) => setBackDrop(value)}
      />
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading
      </Button>
      <Loading show={loading} backdrop={backdrop} text="loading..." />
    </>
  )
}
```
