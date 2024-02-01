```ts
import { useState } from 'react';
import Modal from 'your path';
import Button from 'your path';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [showFooter, setShowFooter] = useState(true);

  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setShowFooter(false);
        }}>
            without footer
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setShowFooter(true);
        }}>
            custom footer
        </Button>
        </ButtonGroup>
        <Modal
          show={modal7}
          title="title"
          onClose={() => setShow(false)}
          footer={
            showFooter ? (
              <div className="px-4 flex justify-end">
                <Button outline className="mr-2">
                  close
                </Button>
                <ButtonGroup>
                  <Button onClick={() => setShow(false)}>cancel</Button>
                  <Button onClick={() => setShow(false)}>submit</Button>
                </ButtonGroup>
              </div>
            ) : null
          }>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
```
