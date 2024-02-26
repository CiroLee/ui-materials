```ts
import { useState } from 'react';
import Modal from 'your path/Modal';
import Button from 'your path/Button';
import RadioGroup from 'your path/RadioGroup';

type FooterALign = 'start' | 'center' | 'end';

export default function Demo() {
  const [show, setShow] = useState(false)
  const [footerAlign, setFooterAlign] = useState<FooterALign>('end');
  return (
    <>
      <RadioGroup
        value="end"
        options={[
          { value: 'start', label: 'align:left' },
          { value: 'center', label: 'align:center' },
          { value: 'end', label: 'align:end' },
        ]}
        onValueChange={(value) => setFooterAlign(value as FooterALign)}></RadioGroup>
      <Button className="mt-4" onClick={() => setModal6(true)}>
          open modal
      </Button>
      <Modal
        show={modal6}
        title="title"
        cancelText="cancel"
        confirmText="confirm"
        footerAlign={footerAlign}
        onClose={() => setModal6(false)}>
        <p className="my-2">this is text...</p>
        <p className="my-2">this is text...</p>
      </Modal>
    </>
  )
}
```
