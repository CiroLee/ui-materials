import clsx from 'clsx';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Counter from '@ui/Counter';
import { RiTempColdLine } from '@remixicon/react';
import CodeView from '@site/components/CodeView';
import { html as baseContent } from './docs/base.md';
import { html as prefixSuffixContent } from './docs/prefix-suffix.md';
import { html as decimalContent } from './docs/decimal.md';
import { html as isInViewContent } from './docs/isInView.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';

const countStyle =
  'bg-white w-[140px] text-[42px] inline-flex rounded-3 justify-center items-end font-bold border p-6 [&_div]:leading-[1]';
export default function CounterPage() {
  return (
    <>
      <NavTitle title="Counter" sourceName="Counter" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Counter className={countStyle} to={100} />
        <CodeView content={baseContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          prefix and suffix
        </Heading>
        <div className="flex gap-4">
          <Counter
            className={clsx(countStyle, 'w-[170px]')}
            from={-12}
            to={42}
            prefix={<RiTempColdLine className="mr-1" size={24} />}
          />
          <Counter
            className={clsx(countStyle, 'w-[170px]')}
            from={0}
            to={100}
            suffix={<span className="text-sm ml-2">元</span>}
          />
        </div>
        <CodeView content={prefixSuffixContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          decimal
        </Heading>
        <Counter className={clsx(countStyle, 'w-[200px]')} from={0} to={100} decimal={2} />
        <CodeView content={decimalContent} />
      </ShowBox>
      <ShowBox className="mb-4 min-h-[380px]">
        <Heading as="h4" className="mb-2">
          isInView
        </Heading>
        <div className="h-[300px] overflow-auto mb-10">
          <div className="h-[1000px] bg-zinc-100 relative">
            <Counter
              className={clsx(countStyle, 'absolute left-2 bottom-2')}
              to={100}
              isInView
              delay={1000}
              duration={3000}
              onComplete={() => console.log('complete')}
            />
          </div>
        </div>
        <CodeView content={isInViewContent} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
