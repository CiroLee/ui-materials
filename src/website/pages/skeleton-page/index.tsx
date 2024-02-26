import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Skeleton from '@ui/Skeleton';
import { RiImageLine } from '@remixicon/react';
import CodeView from '@site/components/CodeView';
import { html as flickerHtml } from './docs/type-flicker.md';
import { html as shimmerHtml } from './docs/type-flicker.md';
import { html as childrenHtml } from './docs/children.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import NavTitle from '@site/components/NavTitle';
export default function SkeletonPage() {
  return (
    <>
      <NavTitle title="Skeleton" sourceName="Skeleton" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          type: flicker
        </Heading>
        <div className="mt-2 flex items-center">
          <Skeleton type="flicker" className="size-[48px] rounded-full" />
          <div className="flex flex-col justify-center">
            <Skeleton type="flicker" className="w-[200px] h-[20px] rounded-md ml-2" />
            <Skeleton type="flicker" className="w-[80px] h-[20px] rounded-md ml-2 mt-2" />
          </div>
        </div>
        <CodeView content={flickerHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          type: shimmer
        </Heading>
        <div className="mt-2 flex items-center">
          <Skeleton type="shimmer" className="size-[48px] rounded-full" />
          <div className="flex flex-col justify-center">
            <Skeleton type="shimmer" className="w-[200px] h-[20px] rounded-md ml-2" />
            <Skeleton type="shimmer" className="w-[80px] h-[20px] rounded-md ml-2 mt-2" />
          </div>
        </div>
        <CodeView content={shimmerHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          width children
        </Heading>
        <Skeleton type="flicker" className="size-[48px] flex flex-center rounded-md">
          <RiImageLine size="24px" className="text-black/20" />
        </Skeleton>
        <CodeView content={childrenHtml} />
      </ShowBox>
      <Heading as="h2" className="my-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
