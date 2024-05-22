import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui//Heading';
import Description from '@site/components/Description';
import BrowserFrame from '@ui/BrowserFrame';
import CodeView from '@site/components/CodeView';
import typeMd from './docs/type.md?raw';
import titleMd from './docs/type.md?raw';
import urlMd from './docs/url.md?raw';
import frameMd from './docs/frame.md?raw';
import customMd from './docs/custom.md?raw';
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
        <CodeView content={typeMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          title
        </Heading>
        <BrowserFrame frameType="macos" title="macOS" />
        <CodeView content={titleMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          show url
        </Heading>
        <BrowserFrame showUrl url="https://www.google.com" />
        <CodeView content={urlMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          use as iframe
        </Heading>
        <BrowserFrame showUrl asIframe url="https://cirolee.github.io/ui-materials" />
        <CodeView content={frameMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom children
        </Heading>
        <BrowserFrame>
          <p className="p-4">custom content</p>
        </BrowserFrame>
        <CodeView content={customMd} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
