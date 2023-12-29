import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import CodeView from '@site/components/CodeView';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import { html as HeadingHtml } from './docs/heading.md';
import SourceButton from '@/website/components/SourceButton';
export default function HeadingPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading as="h2" className="mb-4">
          Heading
        </Heading>
        <SourceButton name="Heading" />
      </div>
      <ShowBox className="mb-4 [&_*]:mb-2">
        <Heading as="h1">h1 Heading</Heading>
        <Heading as="h2">h2 Heading</Heading>
        <Heading as="h3">h3 Heading</Heading>
        <Heading as="h4">h4 Heading</Heading>
        <Heading as="h5">h5 Heading</Heading>
        <Heading as="h6">h6 Heading</Heading>
      </ShowBox>
      <CodeView content={HeadingHtml} />
      <Heading as="h2" className="my-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
