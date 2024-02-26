```ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Checkbox from 'your path/Button';
import { CheckboxGroup } from 'your path/Checkbox';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [closable, setClosable] = useState<string[]>([]);
  return (
    <>
      <CheckboxGroup
        className="flex gap-3"
        onCheckedChange={(list) => {
          setClosable(list as string[]);
        }}
        options={[
          { value: 'escape', label: 'escape to close' },
          { value: 'maskable', label: 'click mask to close' },
        ]} />
        <Button className="mt-4" onClick={() => setShow(true)}>
          open modal
        </Button>
        <Modal
          show={show}
          enableEsc={closable.includes('escape')}
          maskClosable={closable.includes('maskable')}
          title="title"
          onClose={() => setShow(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
    </>
  )
}
```
