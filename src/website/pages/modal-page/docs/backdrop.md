```ts
import { useState } from 'react';
import Modal from 'your path';
import Button, { ButtonGroup } from 'your path';

export default function Demo() {
  const [modalBackdrop, setModalBackdrop] = useState<'translucent' | 'blur' | 'transparent'>('translucent');
  const [show, setShow] = useState(false)
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setModalBackdrop('translucent');
           }}>
            small
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setModalBackdrop('blur');
          }}>
            medium
        </Button>
        <Button
          onClick={() => {
           setShow(true);
           setModalBackdrop('transparent');
        }}>
            large
        </Button>
        </ButtonGroup>
        <Modal show={show} title="title" backdrop={modalBackdrop} onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
```
