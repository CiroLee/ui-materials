import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import CodeView from '@site/components/CodeView';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import { html as HeadingHtml } from './docs/heading.md';
export default function HeadingPage() {
  return (
    <>
      <Heading as="h2" className="mb-4">
        Heading
      </Heading>
      <ShowBox className="mb-4">
        <Heading as="h1">Heading</Heading>
        <Heading as="h2">Heading</Heading>
        <Heading as="h3">Heading</Heading>
        <Heading as="h4">Heading</Heading>
        <Heading as="h5">Heading</Heading>
        <Heading as="h6">Heading</Heading>
      </ShowBox>
      <CodeView content={HeadingHtml} />
      <Heading as="h2" className="my-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
