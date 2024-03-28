import Tag from '@ui/Tag';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import { RiUserSmileLine } from '@remixicon/react';
import Avatar from '@ui/Avatar';
import CodeView from '@site/components/CodeView';
import ApiTable from '@site/components/ApiTable';
import { html as sizeHtml } from './docs/size.md';
import { html as colorHtml } from './docs/color.md';
import { html as shapeHtml } from './docs/shape.md';
import { html as customHtml } from './docs/custom.md';
import { rows } from './api';
import NavTitle from '@site/components/NavTitle';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';
import Description from '@site/components/Description';

export default function TagPage() {
  return (
    <>
      <NavTitle title="Tag" sourceName="Tag" />
      <Description>Display short texts</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          size
        </Heading>
        <div className="flex items-center [&>div]:mr-2">
          <Tag size="tiny">tiny</Tag>
          <Tag size="small">small</Tag>
          <Tag size="medium">medium</Tag>
          <Tag size="large">large</Tag>
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          color
        </Heading>
        <div className="flex flex-wrap gap-3">
          <Tag color="default">default</Tag>
          <Tag color="primary">primary</Tag>
          <Tag color="success">success</Tag>
          <Tag color="info">infomation</Tag>
          <Tag color="warn">warn</Tag>
          <Tag color="danger">danger</Tag>
          <Tag className="text-white bg-[#e64980]">#e64980</Tag>
          <Tag className="text-white bg-[#212529]">#212529</Tag>
        </div>
        <CodeView content={colorHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          shape
        </Heading>
        <div className="flex items-center [&>div]:mr-2">
          <Tag size="medium" shape="default" color="primary">
            primary
          </Tag>
          <Tag size="medium" shape="pill" color="primary">
            primary
          </Tag>
        </div>
        <CodeView content={shapeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          custom children
        </Heading>
        <div className="flex items-center [&>div]:mr-2">
          <Tag color="primary">
            <RiUserSmileLine size={13} className="mr-1" />
            <span className="h-full">icon smile</span>
          </Tag>
          <Tag shape="pill">
            <Avatar src={IMG_URL} className="w-[12px] h-[12px] mr-1" />
            <span className="h-full">avatar</span>
          </Tag>
        </div>
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="my-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
