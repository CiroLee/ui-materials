```ts
import { useState } from 'react';
import Loading from 'your path/Loading';
import Button from 'your path/Button';

export default function Demo() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}>
        show loading...
      </Button>
      <Loading show={loading} />
    </>
  )
}
```
