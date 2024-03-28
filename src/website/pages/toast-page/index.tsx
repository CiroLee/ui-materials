import { useState } from 'react';
import { RiCheckLine, RiSendPlaneLine, RiAlertLine } from '@remixicon/react';
import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Button from '@ui/Button';
import Heading from '@ui/Heading';
import RadioGroup from '@ui/RadioGroup';
import type { CommonOption } from '@/packages/types/components';
import { useToast, type ToastPlacement } from '@ui/Toast';
import CodeView from '@site/components/CodeView';
import { html as preHtml } from './docs/pre.md';
import { html as baseHtml } from './docs/base.md';
import { html as placementHtml } from './docs/placement.md';
import { html as iconsHtml } from './docs/icons.md';
import { html as actionHtml } from './docs/action.md';
import ApiTable from '@site/components/ApiTable';
import { toastOptionsRows, hookRows } from './api';

const text = 'this is a toast message';

const placementOption: CommonOption[] = [
  {
    label: 'topLeft',
    value: 'topLeft',
  },
  {
    label: 'topCenter',
    value: 'topCenter',
  },
  {
    label: 'topRight',
    value: 'topRight',
  },
  {
    label: 'bottomLeft',
    value: 'bottomLeft',
  },
  {
    label: 'bottomCenter',
    value: 'bottomCenter',
  },
  {
    label: 'bottomRight',
    value: 'bottomRight',
  },
  {
    label: 'center',
    value: 'center',
  },
];

export default function ToastPage() {
  const { toast, closeToast } = useToast();
  const [placement, setPlacement] = useState('topCenter');

  return (
    <>
      <NavTitle title="Toast" sourceName="Toast" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Button onClick={() => toast(text)}>Show Toast</Button>
        <CodeView content={preHtml} />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          placement
        </Heading>
        <RadioGroup
          className="w-[440px] grid grid-cols-3 gap-3 mb-3"
          value={placement}
          options={placementOption}
          onValueChange={setPlacement}
        />
        <Button
          onClick={() => {
            toast(text, { placement: placement as ToastPlacement });
          }}>
          show toast
        </Button>
        <CodeView content={placementHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          with icons
        </Heading>
        <div className="flex gap-3">
          <Button
            onClick={() => {
              toast(text, {
                icon: <RiCheckLine size={18} className="text-green-500" />,
              });
            }}>
            info
          </Button>
          <Button
            onClick={() => {
              toast(text, {
                icon: <RiSendPlaneLine size={18} className="text-blue-500" />,
              });
            }}>
            success
          </Button>
        </div>
        <CodeView content={iconsHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          action
        </Heading>
        <Button
          onClick={() => {
            toast(text, {
              autoClose: false,
              icon: <RiAlertLine size={18} className="text-red-500" />,
              action: (
                <Button size="tiny" outline type="text" onClick={closeToast}>
                  action
                </Button>
              ),
            });
          }}>
          show toast
        </Button>
        <CodeView content={actionHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        hooks
      </Heading>
      <ApiTable rows={hookRows} />
      <Heading as="h4" className="my-2">
        ToastOptions
      </Heading>
      <ApiTable rows={toastOptionsRows} />
    </>
  );
}
