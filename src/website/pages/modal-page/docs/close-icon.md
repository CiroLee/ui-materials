```ts
import { useState } from 'react';
import { RiShutDownLine } from '@remixicon/react';
import Modal from 'your path/Modal';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [show, setShow] = useState(false)
  return (
    <>
      <ButtonGroup>
        <Button
          onClick={() => {
            setShow(true);
            setShowCloseIcon(false);
        }}>
            without closeIcon
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setShowCloseIcon(true);
        }}>
            custom closeIcon
        </Button>
        </ButtonGroup>
        <Modal
          show={show}
          title="title"
          closeIcon={
            showCloseIcon ? (
              <div className="size-[24px] rounded flex flex-center transition-colors group hover:bg-gray-200/40">
                <RiShutDownLine className="text-gray-300 group-hover:text-red-500" size={16} />
              </div>
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
