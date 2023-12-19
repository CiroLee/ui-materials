import Badge from '@/packages/ui/Badge';
import Avatar from '@/packages/ui/Avatar';
import ShowBox from '@/website/components/ShowBox';
import CodeView from '@/website/components/CodeView';
import { Bell, Check } from 'lucide-react';
import { html as sizeHtml } from './docs/size.md';
import { html as colorHtml } from './docs/color.md';
import { html as placementHtml } from './docs/placement.md';
import { html as outlineHtml } from './docs/outline.md';
import { html as contentHtml } from './docs/content.md';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';
export default function BadgePage() {
  return (
    <>
      <h2 className="mb-4">Badge</h2>
      <ShowBox className="mb-4">
        <h4 className="mb-4">size</h4>
        <div className="flex gap-4">
          <Badge size="small" content="9">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge size="medium" content="9">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge size="large" content="9">
            <Avatar src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-4">bgColor & textColor</h4>
        <div className="flex gap-4">
          <Badge content="2" bgColor="#8749F5">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge content="2" bgColor="#ffc000">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge content="2" bgColor="green" textColor="purple">
            <Avatar src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={colorHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-4">placements</h4>
        <div className="flex gap-4">
          <Badge className="px-1" content="99+" placement="top-right">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge content="9" placement="bottom-right">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge content="9" placement="top-left">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge content="9" placement="bottom-left">
            <Avatar src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={placementHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-4">outline</h4>
        <div className="flex gap-4">
          <Badge content="2" outline={false}>
            <Avatar shape="round" src={IMG_URL} />
          </Badge>
          <Badge content="2" outline={false}>
            <Avatar src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={outlineHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-4">custom content</h4>
        <div className="flex gap-4">
          <Badge content={<Bell size={12} />}>
            <Avatar shape="round" src={IMG_URL} />
          </Badge>
          <Badge content={<Check size={12} />} bgColor="#5bce5b">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge size="small" placement="bottom-right" bgColor="#5bce5b">
            <Avatar src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={contentHtml} />
      </ShowBox>
      <h4 className="my-2">API</h4>
      <ApiTable rows={rows} />
    </>
  );
}
