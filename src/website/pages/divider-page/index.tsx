import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Divider from '@ui/Divider';
import ShowBox from '@site/components/ShowBox';
import Description from '@site/components/Description';
import CodeView from '@site/components/CodeView';
import baseContent from './docs/base.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';

export default function DividerPage() {
  return (
    <>
      <NavTitle title="Divider" sourceName="Divider" />
      <Description>A component used to separate content</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <div className="w-fit">
          <p>Divider is used to separate content</p>
          <Divider className="my-3" />
          <div className="h-[24px] relative flex items-center">
            <span>home</span>
            <Divider direction="vertical" className="mx-3" />
            <span>about</span>
            <Divider direction="vertical" className="mx-3" />
            <span>sponsor</span>
            <Divider direction="vertical" className="mx-3" />
          </div>
        </div>
        <CodeView content={baseContent} />
      </ShowBox>
      <Heading as="h2">API</Heading>
      <ApiTable rows={rows} />
    </>
  );
}
