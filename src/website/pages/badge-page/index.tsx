import Badge from '@ui/Badge';
import Heading from '@ui/Heading';
import Avatar from '@ui/Avatar';
import ShowBox from '@/website/components/ShowBox';
import CodeView from '@/website/components/CodeView';
import { RiNotification2Line, RiCheckLine } from '@remixicon/react';
import sizeMd from './docs/size.md?raw';
import colorMd from './docs/color.md?raw';
import placementMd from './docs/placement.md?raw';
import outlineMd from './docs/outline.md?raw';
import contentMd from './docs/content.md?raw';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';
import NavTitle from '@site/components/NavTitle';
const IMG_URL = 'https://ciro.club/statics/images/avatar/1702883782_LN0q9gDWoK6DUlk-NYVlj.png';
import Description from '@site/components/Description';

export default function BadgePage() {
  return (
    <>
      <NavTitle title="Badge" sourceName="Badge" />
      <Description>A component to display count and status</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          size
        </Heading>
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
        <CodeView content={sizeMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          bgColor & textColor
        </Heading>
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
        <CodeView content={colorMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          placements
        </Heading>
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
        <CodeView content={placementMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          disabled outline
        </Heading>
        <div className="flex gap-4">
          <Badge content="2" outline={false}>
            <Avatar shape="round" src={IMG_URL} />
          </Badge>
          <Badge content="2" outline={false}>
            <Avatar src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={outlineMd} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-4">
          custom content
        </Heading>
        <div className="flex gap-4">
          <Badge content={<RiNotification2Line size={12} />}>
            <Avatar shape="round" src={IMG_URL} />
          </Badge>
          <Badge content={<RiCheckLine size={12} />} bgColor="#5bce5b">
            <Avatar src={IMG_URL} />
          </Badge>
          <Badge size="small" placement="bottom-right" bgColor="#5bce5b">
            <Avatar bordered color="#5bce5b" src={IMG_URL} />
          </Badge>
        </div>
        <CodeView content={contentMd} />
      </ShowBox>
      <Heading as="h4" className="my-2">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
