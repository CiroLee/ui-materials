```ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';

export default function Demo() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button className="mt-4" onClick={() => setModal9(true)}>
          open modal
      </Button>
      <Modal title="title" show={modal9} onClose={() => setModal9(false)}>
        {new Array(30).fill(0).map((_, index) => (
          <p key={index}>this is text {index} ...</p>
        ))}
      </Modal>
    </>
  )
}
```
