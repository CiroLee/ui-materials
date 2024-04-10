import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui//Heading';
import Description from '@site/components/Description';
import BrowserFrame from '@ui/BrowserFrame';
import CodeView from '@site/components/CodeView';
import { html as typeContent } from './docs/type.md';
import { html as titleContent } from './docs/type.md';
import { html as urlContent } from './docs/url.md';
import { html as frameContent } from './docs/frame.md';
import { html as customContent } from './docs/custom.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
export default function BrowserFramePage() {
  return (
    <>
      <NavTitle title="BrowserFrame" sourceName="BrowserFrame" />
      <Description>Display browser frame with macos style and windows style</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          style
        </Heading>
        <BrowserFrame className="mb-4" />
        <BrowserFrame frameType="windows" />
        <CodeView content={typeContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          title
        </Heading>
        <BrowserFrame frameType="macos" title="macOS" />
        <CodeView content={titleContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          show url
        </Heading>
        <BrowserFrame showUrl url="https://www.google.com" />
        <CodeView content={urlContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          use as iframe
        </Heading>
        <BrowserFrame showUrl asIframe url="https://cirolee.github.io/ui-materials" />
        <CodeView content={frameContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom children
        </Heading>
        <BrowserFrame>
          <p className="p-4">custom content</p>
        </BrowserFrame>
        <CodeView content={customContent} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
