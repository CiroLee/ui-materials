```ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';

export default function Demo() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button onClick={()=>setShow(true)}>open a modal</Button>
      <Modal show={show} title="title" onClose={() => setShow(false)}>
        <p className="my-2">this is text...</p>
        <p className="my-2">this is text...</p>
      </Modal>
    </>
  )
}
```
