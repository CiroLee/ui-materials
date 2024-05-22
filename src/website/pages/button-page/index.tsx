import { RiUserLine, RiUpload2Line, RiLoader2Line } from '@remixicon/react';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Button, { ButtonGroup } from '@ui/Button';
import CodeView from '@site/components/CodeView';
import ApiTable from '@site/components/ApiTable';
import baseMd from './docs/base.md?raw';
import outlineMd from './docs/outline.md?raw';
import sizeMd from './docs/size.md?raw';
import shapeMd from './docs/shape.md?raw';
import blockMd from './docs/block.md?raw';
import iconsMd from './docs/icons.md?raw';
import buttonGroupMd from './docs/button-group.md?raw';
import { rows, buttonGroupRows } from './api';
import NavTitle from '@site/components/NavTitle';
import Description from '@site/components/Description';

export default function ButtonPage() {
  return (
    <>
      <NavTitle title="Button" sourceName="Button" />
      <Description>A common form component used to trigger actions</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <div className="flex gap-2 flex-wrap">
          <Button>primary</Button>
          <Button type="success">success</Button>
          <Button type="info">information</Button>
          <Button type="warn">warn</Button>
          <Button type="danger">danger</Button>
          <Button type="text">text</Button>
          <Button disabled outline type="primary">
            disabled
          </Button>
        </div>
        <CodeView content={baseMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          outline
        </Heading>
        <div className="flex gap-2 flex-wrap">
          <Button outline>primary</Button>
          <Button outline type="success">
            success
          </Button>
          <Button outline type="info">
            information
          </Button>
          <Button outline type="warn">
            warn
          </Button>
          <Button outline type="danger">
            danger
          </Button>
          <Button outline type="text">
            text
          </Button>
        </div>
        <CodeView content={outlineMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button size="tiny">tiny</Button>
          <Button size="small">small</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
        </div>
        <CodeView content={sizeMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          shape
        </Heading>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button size="tiny" shape="default">
            default
          </Button>
          <Button size="small" shape="pill">
            pill
          </Button>
          <Button shape="circle">C</Button>
          <Button size="large" shape="square">
            S
          </Button>
        </div>
        <CodeView content={shapeMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          block
        </Heading>
        <div className="[&_button:not(:first-child)]:mt-2">
          <Button shape="pill" block>
            button
          </Button>
          <Button block>button</Button>
          <Button outline block>
            button
          </Button>
        </div>
        <CodeView content={blockMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          width icon
        </Heading>
        <div className="flex gap-2 flex-wrap">
          <Button type="primary">
            <RiUserLine size={16} className="mr-1" />
            <span>User</span>
          </Button>
          <Button type="primary" shape="square">
            <RiUserLine size={16} />
          </Button>
          <Button type="primary">
            <span>Upload</span>
            <RiUpload2Line size={16} className="ml-1" />
          </Button>
          <Button type="primary" loading>
            <RiLoader2Line size={16} className="mr-1 animate-spin" />
            <span>Loading</span>
          </Button>
        </div>
        <CodeView content={iconsMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          buttonGroup
        </Heading>
        <div className="flex gap-2 flex-wrap">
          <ButtonGroup className="mb-2">
            <Button>apple</Button>
            <Button>banana</Button>
            <Button>orange</Button>
          </ButtonGroup>
          <ButtonGroup className="mb-2">
            <Button outline>apple</Button>
            <Button outline>banana</Button>
            <Button outline>orange</Button>
          </ButtonGroup>
          <ButtonGroup className="mb-2">
            <Button shape="pill" outline>
              apple
            </Button>
            <Button shape="pill" outline>
              banana
            </Button>
            <Button shape="pill" outline>
              orange
            </Button>
          </ButtonGroup>
          <ButtonGroup className="mb-2">
            <Button outline shape="pill">
              apple
            </Button>
            <Button outline shape="pill">
              banana
            </Button>
          </ButtonGroup>
        </div>
        <CodeView content={buttonGroupMd} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        Button
      </Heading>
      <ApiTable rows={rows} />
      <Heading as="h4" className="my-2">
        ButtonGroup
      </Heading>
      <ApiTable rows={buttonGroupRows} />
    </>
  );
}
