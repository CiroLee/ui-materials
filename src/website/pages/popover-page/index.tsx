import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Popover from '@ui/Popover';
import Button from '@ui/Button';

export default function PopoverPage() {
  return (
    <>
      <Heading as="h2" className="mv-4">
        Popover
      </Heading>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Popover title="title" content="this is popover texts and it is long">
          <Button>popover</Button>
        </Popover>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          placement
        </Heading>
        <div className="w-[440px] grid grid-cols-3 grid-rows-4 gap-3">
          <Popover title="title" content="this is popover texts and it is long" side="top" align="start">
            <Button>top-start</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="top" align="center">
            <Button>top-center</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="top" align="end">
            <Button>top-end</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="right" align="start">
            <Button>right-start</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="right" align="center">
            <Button>right-center</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="right" align="end">
            <Button>right-end</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="bottom" align="start">
            <Button>bottom-start</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="bottom" align="center">
            <Button>bottom-center</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="bottom" align="end">
            <Button>bottom-end</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="left" align="start">
            <Button>left-start</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="left" align="center">
            <Button>left-center</Button>
          </Popover>
          <Popover title="title" content="this is popover texts and it is long" side="left" align="end">
            <Button>left-end</Button>
          </Popover>
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          Arrow
        </Heading>
        <div className="flex gap-3">
          <Popover title="title" content="this is popover texts and it is long">
            <Button>width arrow</Button>
          </Popover>
          <Popover title="title" showArrow={false} sideOffset={10} content="this is popover texts and it is long">
            <Button>width arrow</Button>
          </Popover>
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          sideOffset
        </Heading>
        <Popover title="title" sideOffset={20} content="this is popover texts and it is long">
          <Button>popover</Button>
        </Popover>
      </ShowBox>
    </>
  );
}
