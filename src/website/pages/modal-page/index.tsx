import { useState } from 'react';
import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Button from '@ui/Button';
import Modal from '@ui/Modal';
export default function ModalPage() {
  const [modal1, setModal1] = useState(false);
  return (
    <>
      <NavTitle title="Modal" sourceName="Modal" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Button onClick={() => setModal1(true)}>open a modal</Button>
      </ShowBox>
      <Modal show={modal1} title="title" onClose={() => setModal1(false)} />
    </>
  );
}
