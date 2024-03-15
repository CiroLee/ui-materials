```ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';
import type { Size } from 'your path/types/common';

const fullscreenOptions = [
  { label: 'fullscreen', value: 'fullscreen' },
  { label: 'non-fullscreen', value: 'container' },
];

export default function Demo() {
  const [loading, setLoading] = useState(false);
 const [fullscreen, setFullscreen] = useState<string>('container');
  return (
    <>
      <RadioGroup
        className="mb-2"
        options={fullscreenOptions}
        value={size}
        onValueChange={setFullscreen}
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
      <Loading show={loading} fullscreen={fullscreen} text="loading..." />
    </>
  )
}
```
