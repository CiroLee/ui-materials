import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Textarea from '@ui/Textarea';
import CodeView from '@site/components/CodeView';
import baseHtml from './docs/base.md?raw';
import rowsHtml from './docs/rows.md?raw';
import disabledHtml from './docs/disabled.md?raw';
import resizeHtml from './docs/resize.md?raw';
import statusHtml from './docs/status.md?raw';
import clearHtml from './docs/clear.md?raw';
import countHtml from './docs/count.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function TextareaPage() {
  return (
    <>
      <NavTitle title="Textarea" sourceName="Textarea" />
      <Description>A form component used to input multi-line input</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Textarea className="w-[82vw] md:w-[400px]" placeholder="textarea" />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          rows
        </Heading>
        <Textarea className="w-[82vw] md:w-[400px]" rows={5} placeholder="rows=5" />
        <CodeView content={rowsHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <Textarea className="w-[82vw] md:w-[400px]" disabled placeholder="disabled" />
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          resize
        </Heading>
        <div className="flex flex-col space-y-3 [&_textarea]:w-[82vw] md:w-[400px]">
          <Textarea placeholder="resize both" resize="both" />
          <Textarea placeholder="resize horizontal" resize="horizontal" />
          <Textarea placeholder="resize vertical" resize="vertical" />
          <Textarea placeholder="resize none" resize="none" />
        </div>
        <CodeView content={resizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          status
        </Heading>
        <div className="flex flex-col space-y-3 [&_textarea]:w-[82vw] md:w-[400px]">
          <Textarea status="error" placeholder="error" />
          <Textarea status="warn" placeholder="warn" />
          <Textarea status="readonly" value="readonly" />
        </div>
        <CodeView content={statusHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          allowClear
        </Heading>
        <Textarea className="w-[82vw] md:w-[400px]" allowClear placeholder="textarea" />
        <CodeView content={clearHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          showCount
        </Heading>
        <Textarea className="w-[82vw] md:w-[400px]" showCount allowClear placeholder="without maxLength" />
        <Textarea className="w-[82vw] md:w-[400px]" maxLength={140} showCount allowClear placeholder="with maxLength" />
        <CodeView content={countHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
