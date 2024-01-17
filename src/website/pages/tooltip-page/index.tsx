import Button from '@ui/Button';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Tooltip from '@ui/Tooltip';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as placementHtml } from './docs/placement.md';
import { html as arrowHtml } from './docs/arrow.md';
import { html as sideOffsetHtml } from './docs/side-offset.md';
import { html as customHtml } from './docs/custom.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import type { Align, Side } from '@/packages/types/common';
import NavTitle from '@site/components/NavTitle';

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

export default function TooltipPage() {
  return (
    <>
      <NavTitle title="Tooltip" sourceName="Tooltip" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Tooltip title="tooltip">
          <Button>Hover me</Button>
        </Tooltip>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          placement(side & align)
        </Heading>
        <div className="inline-grid grid-cols-3 grid-rows-4 gap-3">
          {placements.map((item, index) => (
            <Tooltip key={index} title="tooltip text" align={item.align} side={item.side}>
              <Button>
                {item.side}-{item.align}
              </Button>
            </Tooltip>
          ))}
        </div>
        <CodeView content={placementHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          Arrow
        </Heading>
        <div className="flex gap-3">
          <Tooltip title="tooltip" showArrow>
            <Button>with arrow</Button>
          </Tooltip>
          <Tooltip title="tooltip" showArrow={false}>
            <Button>without arrow</Button>
          </Tooltip>
        </div>
        <CodeView content={arrowHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          sideOffset
        </Heading>
        <Tooltip title="tooltip" sideOffset={20} side="right">
          <Button>hover me</Button>
        </Tooltip>
        <CodeView content={sideOffsetHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom title
        </Heading>
        <Tooltip title={<span className="font-bold text-danger-500">custom title</span>}>
          <Button>hover me</Button>
        </Tooltip>
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
