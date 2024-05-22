import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Code from '@ui/Code';
import CodeView from '@site/components/CodeView';
import baseMd from './docs/base.md?raw';
import sizeMd from './docs/size.md?raw';
import colorMd from './docs/color.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function CodePage() {
  return (
    <>
      <NavTitle title="Code" sourceName="Code" />
      <Description>A component to emphasize short code style</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Code>npm install tailwindcss -D</Code>
        <CodeView content={baseMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="inline-flex flex-col gap-2">
          <div>
            <p>tiny:</p>
            <Code size="tiny">npm install tailwindcss -D</Code>
          </div>
          <div>
            <p>small:</p>
            <Code size="small">npm install tailwindcss -D</Code>
          </div>
          <div>
            <p>medium:</p>
            <Code size="medium">npm install tailwindcss -D</Code>
          </div>
          <div>
            <p>large:</p>
            <Code size="large">npm install tailwindcss -D</Code>
          </div>
        </div>
        <CodeView content={sizeMd} />
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
          <Code color="danger">npm install tailwindcss -D</Code>
        </div>
        <CodeView content={colorMd} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
