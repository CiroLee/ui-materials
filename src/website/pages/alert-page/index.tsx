import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Alert from '@ui/Alert';
import { RiBearSmileFill } from '@remixicon/react';
import CodeView from '@site/components/CodeView';
import baseMd from './docs/base.md?raw';
import alertTypeMd from './docs/type.md?raw';
import isPlainMd from './docs/isplain.md?raw';
import customMd from './docs/custom.md?raw';
import withoutIconMd from './docs/without-icon.md?raw';
import customIconMd from './docs/custom-icon.md?raw';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function AlertPage() {
  return (
    <>
      <NavTitle title="Alert" sourceName="Alert" />
      <Description>A component display a brief and important information</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Alert title="title" content="add contents here" />
        <CodeView content={baseMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          alertType
        </Heading>
        <div className="flex flex-col gap-y-4">
          <Alert title="default" alertType="default" content="add contents here" />
          <Alert title="info" alertType="info" content="add contents here" />
          <Alert title="success" alertType="success" content="add contents here" />
          <Alert title="warn" alertType="warn" content="add contents here" />
          <Alert title="error" alertType="error" content="add contents here" />
        </div>
        <CodeView content={alertTypeMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          isPlain
        </Heading>
        <Alert isPlain title="isPlain" content="add contents here" />
        <CodeView content={isPlainMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom title & content
        </Heading>
        <Alert
          title={<p className="italic font-bold">custom title</p>}
          alertType="warn"
          isPlain
          content={<Alert className="mt-2" content="nest alert" />}
        />
        <CodeView content={customMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          without icon
        </Heading>
        <Alert title="without icon" content="add contents here" showIcon={false} />
        <CodeView content={withoutIconMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom icon
        </Heading>
        <Alert title="custom icon" icon={<RiBearSmileFill className="text-[#A45117]" />} content="add contents here" />
        <CodeView content={customIconMd} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
