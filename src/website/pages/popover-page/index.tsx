import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Popover from '@ui/Popover';
import Button from '@ui/Button';
import { useState } from 'react';
import type { Align, Side } from '@/packages/types/common';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as placementHtml } from './docs/placement.md';
import { html as arrowHtml } from './docs/arrow.md';
import { html as sideOffsetHtml } from './docs/side-offset.md';
import { html as titleContentHtml } from './docs/title-content.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';

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
  return (
    <>
      <Heading as="h2" className="mv-4">
        Popover
      </Heading>
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
          <Button>popover</Button>
        </Popover>
        <p className="mt-2 text-zinc-500">status: {String(status)}</p>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          placement(side & align)
        </Heading>
        <div className="w-[440px] grid grid-cols-3 grid-rows-4 gap-3">
          {placements.map((item, index) => (
            <Popover key={index} title="title" content="this is popover contents" side={item.side} align={item.align}>
              <Button>
                {item.side}-{item.align}
              </Button>
            </Popover>
          ))}
        </div>
        <CodeView content={placementHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          Arrow
        </Heading>
        <div className="flex gap-3">
          <Popover title="title" content="this is popover texts and it is long">
            <Button>with arrow</Button>
          </Popover>
          <Popover title="title" showArrow={false} content="this is popover texts and it is long">
            <Button>without arrow</Button>
          </Popover>
        </div>
        <CodeView content={arrowHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          sideOffset
        </Heading>
        <Popover title="title" sideOffset={20} content="this is popover texts and it is long">
          <Button>popover</Button>
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
          <Button>popover</Button>
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
