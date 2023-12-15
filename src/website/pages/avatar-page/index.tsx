import ShowBox from '@site/components/ShowBox';
import Avatar, { AvatarGroup } from '@ui/Avatar';
import ApiTable from '@site/components/ApiTable';
import { rows, avatarGroupRows } from './api';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as shapeHtml } from './docs/shape.md';
import { html as textHtml } from './docs/text.md';
import { html as groupHtml } from './docs/group.md';
const IMG_URL = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200';
export default function AvatarPage() {
  return (
    <>
      <h2 className="mb-4">Avatar</h2>
      <ShowBox className="mb-4">
        <h4 className="mb-2">size</h4>
        <div className="flex items-end [&>*]:mr-4 text-gray-600 text-sm">
          <div className="flex flex-col items-center justify-center">
            <Avatar size="tiny" src={IMG_URL} />
            <p>tiny</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="small" src={IMG_URL} />
            <p>small</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="medium" src={IMG_URL} />
            <p>medium</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="large" src={IMG_URL} />
            <p>large</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size="large" />
            <p>fallback</p>
          </div>
        </div>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">shape</h4>
        <div className="flex items-end [&>*]:mr-4">
          <Avatar size="large" src={IMG_URL} />
          <Avatar size="large" shape="round" src={IMG_URL} />
        </div>
        <CodeView content={shapeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">text avatar</h4>
        <div className="flex items-end [&>*]:mr-4">
          <Avatar text="T" size="tiny" className="bg-purple-500 text-white" />
          <Avatar text="S" size="small" className="bg-orange-500 text-white" />
          <Avatar text="M" size="medium" className="bg-blue-500 text-white" />
          <Avatar text="L" size="large" className="bg-red-500 text-white text-[22px]" />
          <Avatar text="A" shape="round" size="large" className="bg-green-500 text-white text-[22px]" />
        </div>
        <CodeView content={textHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">avatar group</h4>
        <AvatarGroup>
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
        </AvatarGroup>
        <AvatarGroup className="mt-3" direction="vertical">
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar src={IMG_URL} />
          <Avatar text="+2" size="medium" className="bg-gray-300 text-white" />
        </AvatarGroup>
        <CodeView content={groupHtml} />
      </ShowBox>
      <h2 className="mb-2">API</h2>
      <h4 className="mb-2">Avatar</h4>
      <ApiTable rows={rows} />
      <h4 className="my-2">AvatarGroup</h4>
      <ApiTable rows={avatarGroupRows} />
    </>
  );
}
