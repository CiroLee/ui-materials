import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Description from '@site/components/Description';
import Heading from '@ui/Heading';
import Resizable from '@ui/Resizable';
import { RiShareBoxLine } from '@remixicon/react';
import Link from '@ui/Link';
import CodeView from '@/website/components/CodeView';
import { html as usageContent } from './docs/usage.md';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';

export default function ResizablePage() {
  return (
    <>
      <NavTitle title="Resizable" sourceName="Resizable" />
      <Description>A component makes children resizable horizontal</Description>
      <p className="mb-4">
        Note: this component is based on{' '}
        <Link
          isBlank
          href="https://github.com/bvaughn/react-resizable-panels"
          anchorIcon={<RiShareBoxLine className="ml-1" size={16} />}>
          react-resizable-panels
        </Link>
      </p>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          usage
        </Heading>
        <Resizable autoSavedId="r1">
          <div className="bg-diagonal h-[200px] border border-zinc-200 rounded-md"></div>
        </Resizable>
        <CodeView content={usageContent} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
