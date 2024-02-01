```ts
import { useState } from 'react';
import Modal from 'your path';
import Button from 'your path';
import { CheckboxGroup } from 'your path';

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
          { value: 'escape', children: 'escape to close' },
          { value: 'maskable', children: 'click mask to close' },
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
