import ShowBox from '@site/components/ShowBox';
import Kbd from '@ui/Kbd';
import CodeView from '@/website/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as keyHtml } from './docs/keys.md';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';
export default function KbdPage() {
  return (
    <>
      <h2 className="mb-4">Kbd</h2>
      <ShowBox className="mb-4 [&>div]:mr-2">
        <Kbd keys={['command']} />
        <Kbd keys={['command']}>K</Kbd>
        <Kbd keys={['command', 'shift']}>T</Kbd>
        <Kbd keys={['option', 'command']}>D</Kbd>
      </ShowBox>
      <CodeView content={baseHtml} />
      <h4 className="my-4">KbdKey</h4>
      <CodeView content={keyHtml} />
      <h4 className="my-4">API</h4>
      <ApiTable rows={rows} />
    </>
  );
}
