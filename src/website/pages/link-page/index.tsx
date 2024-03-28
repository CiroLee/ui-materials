import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Link from '@ui/Link';
import { RiShareBoxLine } from '@remixicon/react';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as colorHtml } from './docs/color.md';
import { html as blockHtml } from './docs/block.md';
import { html as blankHtml } from './docs/blank.md';
import { html as anchorIconHtml } from './docs/icon.md';
import { html as underlineHtml } from './docs/underline.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function LinkPage() {
  return (
    <>
      <NavTitle title="Link" sourceName="Link" />
      <Description>A component used to navigate between pages</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Link href="https://github.com">Link</Link>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex items-center gap-3">
          <Link size="tiny" href="https://github.com">
            tiny
          </Link>
          <Link size="small" href="https://github.com">
            small
          </Link>
          <Link size="medium" href="https://github.com">
            medium
          </Link>
          <Link size="large" href="https://github.com">
            large
          </Link>
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <Link href="https://github.com" disabled>
          disabled Link
        </Link>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          color
        </Heading>
        <div className="flex items-center gap-3">
          <Link color="default" href="https://github.com">
            default
          </Link>
          <Link color="primary" href="https://github.com">
            primary
          </Link>
          <Link color="success" href="https://github.com">
            success
          </Link>
          <Link color="warn" href="https://github.com">
            warn
          </Link>
          <Link color="danger" href="https://github.com">
            danger
          </Link>
        </div>
        <CodeView content={colorHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          underline
        </Heading>
        <div className="flex items-center gap-3">
          <Link color="default" underline href="https://github.com">
            default
          </Link>
          <Link color="primary" underline href="https://github.com">
            primary
          </Link>
          <Link color="success" underline href="https://github.com">
            success
          </Link>
          <Link color="warn" underline href="https://github.com">
            warn
          </Link>
          <Link color="danger" underline href="https://github.com">
            danger
          </Link>
        </div>
        <CodeView content={underlineHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          isBlock
        </Heading>
        <div className="flex items-center gay-3">
          <Link href="https://github.com" isBlock>
            default
          </Link>
          <Link href="https://github.com" color="primary" isBlock>
            primary
          </Link>
          <Link href="https://github.com" color="success" isBlock>
            success
          </Link>
          <Link href="https://github.com" color="warn" isBlock>
            warn
          </Link>
          <Link href="https://github.com" color="danger" isBlock>
            danger
          </Link>
        </div>
        <CodeView content={blockHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          isBlank
        </Heading>
        <Link href="/Link" isBlank>
          external link
        </Link>
        <CodeView content={blankHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          anchorIcon
        </Heading>
        <Link href="https://github.com" isBlock anchorIcon={<RiShareBoxLine className="ml-1" size={16} />}>
          show anchorIcon
        </Link>
        <CodeView content={anchorIconHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
