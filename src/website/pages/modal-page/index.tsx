import { useState } from 'react';
import { RiShutDownLine } from '@remixicon/react';
import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Button, { ButtonGroup } from '@ui/Button';
import RadioGroup from '@ui/RadioGroup';
import { CheckboxGroup } from '@ui/Checkbox';
import Modal from '@ui/Modal';
import CodeView from '@/website/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as backdropHtml } from './docs/backdrop.md';
import { html as titleHtml } from './docs/title.md';
import { html as closeIconHtml } from './docs/close-icon.md';
import { html as footerAlignHtml } from './docs/align.md';
import { html as footerHtml } from './docs/footer.md';
import { html as eventHtml } from './docs/event.md';
import { html as scrollContentHtml } from './docs/scroll-content.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

type FooterALign = 'start' | 'center' | 'end';
export default function ModalPage() {
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [modalBackdrop, setModalBackdrop] = useState<'translucent' | 'blur' | 'transparent'>('translucent');
  const [showTitle, setShowTitle] = useState(true);
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [footerAlign, setFooterAlign] = useState<FooterALign>('end');
  const [closable, setClosable] = useState<string[]>([]);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);

  return (
    <>
      <NavTitle title="Modal" sourceName="Modal" />
      <Description>Modal dialog displayed above the page</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Button onClick={() => setModal1(true)}>open a modal</Button>
        <Modal show={modal1} title="title" onClose={() => setModal1(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
      </ShowBox>
      <CodeView content={baseHtml} />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <ButtonGroup>
          <Button
            onClick={() => {
              setModal2(true);
              setModalSize('small');
            }}>
            small
          </Button>
          <Button
            onClick={() => {
              setModal2(true);
              setModalSize('medium');
            }}>
            medium
          </Button>
          <Button
            onClick={() => {
              setModal2(true);
              setModalSize('large');
            }}>
            large
          </Button>
        </ButtonGroup>
        <Modal show={modal2} title="title" size={modalSize} onClose={() => setModal2(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          backdrop
        </Heading>
        <ButtonGroup>
          <Button
            onClick={() => {
              setModal3(true);
              setModalBackdrop('translucent');
            }}>
            translucent
          </Button>
          <Button
            onClick={() => {
              setModal3(true);
              setModalBackdrop('blur');
            }}>
            blur
          </Button>
          <Button
            onClick={() => {
              setModal3(true);
              setModalBackdrop('transparent');
            }}>
            transparent
          </Button>
        </ButtonGroup>
        <Modal show={modal3} title="title" backdrop={modalBackdrop} onClose={() => setModal3(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
        <CodeView content={backdropHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          title
        </Heading>
        <ButtonGroup>
          <Button
            onClick={() => {
              setModal4(true);
              setShowTitle(false);
            }}>
            without title
          </Button>
          <Button
            onClick={() => {
              setModal4(true);
              setShowTitle(true);
            }}>
            custom title
          </Button>
        </ButtonGroup>
        <Modal
          show={modal4}
          title={
            showTitle ? (
              <Heading as="h4" className="px-4 text-brand-500 text-center">
                custom title
              </Heading>
            ) : null
          }
          onClose={() => setModal4(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
        <CodeView content={titleHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          closeIcon
        </Heading>
        <ButtonGroup>
          <Button
            onClick={() => {
              setModal5(true);
              setShowCloseIcon(false);
            }}>
            without closeIcon
          </Button>
          <Button
            onClick={() => {
              setModal5(true);
              setShowCloseIcon(true);
            }}>
            custom closeIcon
          </Button>
        </ButtonGroup>
        <Modal
          show={modal5}
          title="title"
          closeIcon={
            showCloseIcon ? (
              <div className="size-[24px] rounded flex flex-center transition-colors group hover:bg-gray-200/40">
                <RiShutDownLine className="text-gray-300 group-hover:text-red-500" size={16} />
              </div>
            ) : null
          }
          onClose={() => setModal5(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
        <CodeView content={closeIconHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          footerAlign
        </Heading>
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
        <CodeView content={footerAlignHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom footer
        </Heading>
        <ButtonGroup>
          <Button
            onClick={() => {
              setModal7(true);
              setShowFooter(false);
            }}>
            without footer
          </Button>
          <Button
            onClick={() => {
              setModal7(true);
              setShowFooter(true);
            }}>
            custom footer
          </Button>
        </ButtonGroup>
        <Modal
          show={modal7}
          title="title"
          onClose={() => setModal7(false)}
          footer={
            showFooter ? (
              <div className="px-4 flex justify-end">
                <Button outline className="mr-2">
                  close
                </Button>
                <ButtonGroup>
                  <Button onClick={() => setModal7(false)}>cancel</Button>
                  <Button onClick={() => setModal7(false)}>submit</Button>
                </ButtonGroup>
              </div>
            ) : null
          }>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
        <CodeView content={footerHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          keyboard Escape and maskClosable
        </Heading>
        <CheckboxGroup
          className="flex gap-3"
          onCheckedChange={(list) => {
            setClosable(list as string[]);
          }}
          options={[
            { value: 'escape', label: 'escape to close' },
            { value: 'maskable', label: 'click mask to close' },
          ]}></CheckboxGroup>
        <Button className="mt-4" onClick={() => setModal8(true)}>
          open modal
        </Button>
        <Modal
          show={modal8}
          enableEsc={closable.includes('escape')}
          maskClosable={closable.includes('maskable')}
          title="title"
          onClose={() => setModal8(false)}>
          <p className="my-2">this is text...</p>
          <p className="my-2">this is text...</p>
        </Modal>
        <CodeView content={eventHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          scroll content
        </Heading>
        <Button className="mt-4" onClick={() => setModal9(true)}>
          open modal
        </Button>
        <Modal title="title" show={modal9} onClose={() => setModal9(false)}>
          {new Array(30).fill(0).map((_, index) => (
            <p key={index}>this is text {index} ...</p>
          ))}
        </Modal>
        <CodeView content={scrollContentHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
