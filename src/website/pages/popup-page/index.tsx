import { useState } from 'react';
import ShowBox from '@site/components/ShowBox';
import ApiTable from '@site/components/ApiTable';
import { popupRows } from './api';
import Popup from '@/packages/ui/Popup';
import Button from '@/packages/ui/Button';
import Switch from '@/packages/ui/Switch';
import CodeView from '@site/components/CodeView';
import { html as useHtml } from './docs/use.md';
export default function PopupPage() {
  const [showCenter, setShowCenter] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  const [blur, setBlur] = useState(false);
  return (
    <>
      <h2>Popup</h2>
      <ShowBox className="my-4">
        <p className="mb-3 flex items-center">
          <span>blur mask:</span>
          <Switch className="ml-2" checked={blur} onCheckedChange={setBlur} />
        </p>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button onClick={() => setShowCenter(true)}>center</Button>
          <Button onClick={() => setShowLeft(true)}>left</Button>
          <Button onClick={() => setShowRight(true)}>right</Button>
          <Button onClick={() => setShowTop(true)}>top</Button>
          <Button onClick={() => setShowBottom(true)}>bottom</Button>
        </div>
        <Popup placement="center" isBlur={blur} show={showCenter} maskClosable onClose={() => setShowCenter(false)}>
          <div className="w-[300px] h-[200px] bg-white p-6 rounded-md">
            <p>this is center box content</p>
          </div>
        </Popup>
        <Popup placement="left" isBlur={blur} show={showLeft} maskClosable onClose={() => setShowLeft(false)}>
          <div className="w-[300px] h-[100vh] bg-white p-4">
            <p>this is left box content</p>
          </div>
        </Popup>
        <Popup placement="right" isBlur={blur} show={showRight} maskClosable onClose={() => setShowRight(false)}>
          <div className="w-[300px] h-[100vh] bg-white p-4">
            <p>this is right box content</p>
          </div>
        </Popup>
        <Popup placement="top" isBlur={blur} show={showTop} maskClosable onClose={() => setShowTop(false)}>
          <div className="w-[100vw] h-[200px] bg-white p-4">
            <p>this is top box content</p>
          </div>
        </Popup>
        <Popup placement="bottom" isBlur={blur} show={showBottom} maskClosable onClose={() => setShowBottom(false)}>
          <div className="w-[100vw] h-[200px] bg-white p-4">
            <p>this is bottom box content</p>
          </div>
        </Popup>
        <CodeView content={useHtml} />
      </ShowBox>
      <h2 className="mb-2">API</h2>
      <ApiTable rows={popupRows} />
    </>
  );
}
