```ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';
import type { Size } from 'your path/types/common';

const sizeOptions = [
  { label: 'tiny', value: 'tiny' },
  { label: 'small', value: 'small' },
  { label: 'medium', value: 'medium' },
  { label: 'large', value: 'large' },
  { label: 'custom(100px)', value: '100' },
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<Size>('medium');
  return (
    <>
      <RadioGroup
        className="mb-2"
        options={sizeOptions}
        value={size}
        onValueChange={(value) => setSize(value)}
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
      <Loading show={loading} size={size} text="loading..." />
    </>
  )
}
```
