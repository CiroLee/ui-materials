import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Code from '@ui/Code';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as colorHtml } from './docs/color.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';

export default function CodePage() {
  return (
    <>
      <NavTitle title="Code" sourceName="Code" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Code>npm install tailwindcss -D</Code>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="inline-flex flex-col gap-y-3">
          <Code size="tiny">npm install tailwindcss -D</Code>
          <Code size="small">npm install tailwindcss -D</Code>
          <Code size="medium">npm install tailwindcss -D</Code>
          <Code size="large">npm install tailwindcss -D</Code>
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          color
        </Heading>
        <div className="flex flex-wrap gap-3">
          <Code color="default">npm install tailwindcss -D</Code>
          <Code color="primary">npm install tailwindcss -D</Code>
          <Code color="success">npm install tailwindcss -D</Code>
          <Code color="info">npm install tailwindcss -D</Code>
          <Code color="warn">npm install tailwindcss -D</Code>
          <Code color="error">npm install tailwindcss -D</Code>
        </div>
        <CodeView content={colorHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
