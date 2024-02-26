import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Link from '@ui/Link';

export default function LinkPage() {
  return (
    <>
      <NavTitle title="Link" sourceName="Link" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Link href="https://github.com">Link</Link>
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
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <Link href="https://github.com" disabled>
          disabld Link
        </Link>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          color
        </Heading>
        <div className="flex items-center gap-3">
          <Link color="default" href="#">
            default
          </Link>
          <Link color="primary" href="#">
            primary
          </Link>
          <Link color="success" href="#">
            success
          </Link>
          <Link color="warn" href="#">
            warn
          </Link>
          <Link color="danger" href="#">
            danger
          </Link>
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          isBlock
        </Heading>
        <div className="flex items-center gay-3">
          <Link href="#" isBlock>
            default
          </Link>
          <Link href="#" color="primary" isBlock>
            primary
          </Link>
          <Link href="#" color="success" isBlock>
            success
          </Link>
          <Link href="#" color="warn" isBlock>
            warn
          </Link>
          <Link href="#" color="danger" isBlock>
            danger
          </Link>
        </div>
      </ShowBox>
    </>
  );
}
