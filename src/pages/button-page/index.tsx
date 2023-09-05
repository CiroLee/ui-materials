import { User, Upload, Loader } from 'lucide-react';
import ShowBox from '@/components/ShowBox';
import Button from '@/packages/components/Button';
import CodeView from '@/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as outlineHtml } from './docs/outline.md';
import { html as sizeHtml } from './docs/size.md';
import { html as shapeHtml } from './docs/shape.md';
import { html as blockHtml } from './docs/block.md';
import { html as iconsHtml } from './docs/icons.md';
export default function ButtonPage() {
  return (
    <>
      <div className="mb-4">
        <h2>Button</h2>
      </div>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button>primary</Button>
          <Button type="success">success</Button>
          <Button type="warn">warn</Button>
          <Button type="danger">danger</Button>
          <Button type="text">text</Button>
          <Button disabled outline type="primary">
            disabled
          </Button>
        </div>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">outline</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button outline>primary</Button>
          <Button outline type="success">
            success
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
        <CodeView content={outlineHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">size</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button size="tiny">tiny</Button>
          <Button size="small">small</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">shape</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Button shape="default">default</Button>
          <Button shape="round">round</Button>
          <Button shape="circle">C</Button>
          <Button shape="square">S</Button>
        </div>
        <CodeView content={shapeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">block</h4>
        <div className="[&_button:not(:first-child)]:mt-2">
          <Button shape="round" block>
            button
          </Button>
          <Button block>button</Button>
          <Button outline block>
            button
          </Button>
        </div>
        <CodeView content={blockHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">width icon</h4>
        <div className="flex items-center [&_button:not(:first-child)]:ml-2">
          <Button type="primary">
            <User size={16} className="mr-1" />
            <span>User</span>
          </Button>
          <Button type="primary" shape="square">
            <User size={16} />
          </Button>
          <Button type="primary">
            <span>Upload</span>
            <Upload size={16} className="ml-1" />
          </Button>
          <Button type="primary" loading>
            <Loader size={16} className="mr-1 animate-spin" />
            <span>Loading</span>
          </Button>
        </div>
        <CodeView content={iconsHtml} />
      </ShowBox>
    </>
  );
}
