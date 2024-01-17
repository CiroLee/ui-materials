import ShowBox from '@site/components/ShowBox';
import Kbd from '@ui/Kbd';
import Heading from '@ui/Heading';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as keyHtml } from './docs/keys.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import NavTitle from '@site/components/NavTitle';
export default function KbdPage() {
  return (
    <>
      <NavTitle title="Kbd" sourceName="Kbd" />
      <ShowBox className="mb-4 [&>div]:mr-2">
        <Kbd keys={['command']} />
        <Kbd keys={['command']}>K</Kbd>
        <Kbd keys={['command', 'shift']}>T</Kbd>
        <Kbd keys={['option', 'command']}>D</Kbd>
      </ShowBox>
      <CodeView content={baseHtml} />
      <Heading as="h4" className="my-4">
        KbdKey
      </Heading>
      <CodeView content={keyHtml} />
      <Heading as="h4" className="my-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
