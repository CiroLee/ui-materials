import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Popover from '@ui/Popover';
import Button from '@ui/Button';
import Switch from '@ui/Switch';
import { useState } from 'react';
import type { Align, Side } from '@/packages/types/common';
import CodeView from '@site/components/CodeView';
import baseHtml from './docs/base.md?raw';
import disabledHtml from './docs/disabled.md?raw';
import placementHtml from './docs/placement.md?raw';
import arrowHtml from './docs/arrow.md?raw';
import sideOffsetHtml from './docs/side-offset.md?raw';
import titleContentHtml from './docs/title-content.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import NavTitle from '@site/components/NavTitle';
import Description from '@site/components/Description';

const placements: { side: Side; align: Align }[] = [
  {
    side: 'top',
    align: 'start',
  },
  {
    side: 'top',
    align: 'center',
  },
  {
    side: 'top',
    align: 'end',
  },
  {
    side: 'right',
    align: 'start',
  },
  {
    side: 'right',
    align: 'center',
  },
  {
    side: 'right',
    align: 'end',
  },
  {
    side: 'bottom',
    align: 'start',
  },
  {
    side: 'bottom',
    align: 'center',
  },
  {
    side: 'bottom',
    align: 'end',
  },
  {
    side: 'left',
    align: 'start',
  },
  {
    side: 'left',
    align: 'center',
  },
  {
    side: 'left',
    align: 'end',
  },
];
export default function PopoverPage() {
  const [status, setStatus] = useState(false);
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <NavTitle title="Popover" sourceName="Popover" />
      <Description>A component to display information by floating style, offen trigger by a button</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Popover
          title="title"
          content="this is popover texts and it is long"
          side="top"
          align="start"
          onOpenChange={setStatus}>
          <Button type="primary">popover</Button>
        </Popover>
        <p className="mt-2 text-zinc-500">status: {String(status)}</p>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          placement(side & align)
        </Heading>
        <div className="inline-grid grid-cols-3 grid-rows-4 gap-3">
          {placements.map((item, index) => (
            <Popover key={index} title="title" content="this is popover contents" side={item.side} align={item.align}>
              <Button type="primary">
                {item.side}-{item.align}
              </Button>
            </Popover>
          ))}
        </div>
        <CodeView content={placementHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <div>
          <div className="flex items-center mb-2">
            <Switch checked={disabled} onCheckedChange={setDisabled} />
            <span className="text-zinc-500 ml-2">disabled: {String(disabled)}</span>
          </div>
          <Popover title="title" content="this is popover texts and it is long" disabled={disabled} side="right">
            <Button type="primary">popover</Button>
          </Popover>
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          Arrow
        </Heading>
        <div className="flex gap-3">
          <Popover title="title" content="this is popover texts and it is long">
            <Button type="primary">with arrow</Button>
          </Popover>
          <Popover title="title" showArrow={false} content="this is popover texts and it is long">
            <Button type="primary">without arrow</Button>
          </Popover>
        </div>
        <CodeView content={arrowHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          sideOffset
        </Heading>
        <Popover title="title" sideOffset={20} content="this is popover texts and it is long">
          <Button type="primary">popover</Button>
        </Popover>
        <CodeView content={sideOffsetHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          title & content
        </Heading>
        <Popover
          title={<p className="text-brand-500 font-bold">custom title</p>}
          content={<p className="text-sm text-danger-500">use as custom contents</p>}>
          <Button type="primary">popover</Button>
        </Popover>
        <CodeView content={titleContentHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
