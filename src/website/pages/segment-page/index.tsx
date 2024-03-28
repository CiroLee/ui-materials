import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Segment from '@/packages/ui/Segment';
import { RiImageCircleLine, RiFileLine, RiVideoLine } from '@remixicon/react';
import type { CommonOption } from '@/packages/types/components';
import CodeView from '@site/components/CodeView';
import { html as baseContent } from './docs/base.md';
import { html as sizeContent } from './docs/size.md';
import { html as evenlyContent } from './docs/evenly.md';
import { html as withIconContent } from './docs/with-icon.md';
import { html as colorsContent } from './docs/colors.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

const options: CommonOption[] = [
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
    label: 'beef',
    value: 'beef',
    disabled: true,
  },
];
const iconOptions: CommonOption[] = [
  {
    label: (
      <>
        <RiImageCircleLine size={18} />
        <span>Photo</span>
      </>
    ),
    value: 'photo',
  },
  {
    label: (
      <>
        <RiFileLine size={18} />
        <span>File</span>
      </>
    ),
    value: 'file',
  },
  {
    label: (
      <>
        <RiVideoLine size={18} />
        <span>Video</span>
      </>
    ),
    value: 'video',
  },
];
export default function SegmentPage() {
  return (
    <>
      <NavTitle title="Segment" sourceName="Segment" />
      <Description>A component allows to navigte between sections in a view</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Segment
          options={options}
          defaultValue="orange"
          onSegmentChange={(val) => {
            console.log('segment, you choose: ', val);
          }}
        />
        <CodeView content={baseContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex items-center flex-wrap gap-3">
          <div>
            <p className="text-sm mb-1 ml-1">tiny:</p>
            <Segment size="tiny" options={options} />
          </div>
          <div>
            <p className="text-sm mb-1 ml-1">small:</p>
            <Segment size="small" options={options} />
          </div>
          <div>
            <p className="text-sm mb-1 ml-1">medium:</p>
            <Segment size="medium" options={options} />
          </div>
          <div>
            <p className="text-sm mb-1 ml-1">large:</p>
            <Segment size="large" options={options} />
          </div>
        </div>
        <CodeView content={sizeContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          layout evenly
        </Heading>
        <Segment options={options} className="[&_.segment-item]:w-[100px] mb-3 mr-3" />
        <Segment options={options} className="w-[408px] [&_.segment-item]:flex-1" />
        <CodeView content={evenlyContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          with icon
        </Heading>
        <Segment options={iconOptions} className="[&_.segment-item]:w-[80px]" />
        <CodeView content={withIconContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          colors
        </Heading>
        <div className="flex flex-wrap gap-3">
          <Segment colors="default" options={options} />
          <Segment colors="primary" options={options} />
          <Segment colors="info" options={options} />
          <Segment colors="success" options={options} />
          <Segment colors="warn" options={options} />
          <Segment colors="danger" options={options} />
        </div>
        <CodeView content={colorsContent} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
