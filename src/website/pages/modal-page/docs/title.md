```ts
import { useState } from 'react';
import Modal from 'your path';
import Heading from 'your path';
import Button, { ButtonGroup } from 'your path';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [showTitle, setShowTitle] = useState(true);
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setShowTitle(false);
        }}>
            without title
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setShowTitle(true);
        }}>
            custom title
        </Button>
        </ButtonGroup>
        <Modal
          show={show}
          title={
            showTitle ? (
              <Heading as="h4" className="px-4 text-brand-500 text-center">
                custom title
              </Heading>
            ) : null
          }
          onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
```
