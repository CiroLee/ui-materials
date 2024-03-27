import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Segment from '@/packages/ui/Segment';
import type { RadioOption } from '@/packages/types/components';

const options: RadioOption[] = [
  {
    label: 'apple',
    value: 'apple',
  },
  {
    label: 'banana',
    value: 'banana',
  },
  {
    label: 'orange',
    value: 'orange',
  },
  {
    label: 'strawberry',
    value: 'strawberry',
    disabled: false,
  },
];
export default function SegmentPage() {
  return (
    <>
      <NavTitle title="Segment" sourceName="Segment" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Segment options={options} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex items-center gap-3">
          <Segment size="tiny" options={options} />
          <Segment size="small" options={options} />
        </div>
      </ShowBox>
    </>
  );
}
