```ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [show, setShow] = useState(false)
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setModalSize('small');
           }}>
            small
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setModalSize('medium');
          }}>
            medium
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setModalSize('large');
        }}>
            large
        </Button>
        </ButtonGroup>
        <Modal show={show} title="title" size={modalSize} onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
```
