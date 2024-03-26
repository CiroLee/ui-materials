import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Counter from '@ui/Counter';
import { RiTempColdLine } from '@remixicon/react';
import clsx from 'clsx';
const countStyle = 'bg-white w-[140px] text-[42px] inline-flex rounded-3 justify-center items-end font-bold border p-6';
export default function CounterPage() {
  return (
    <>
      <NavTitle title="Counter" sourceName="Counter" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Counter className={countStyle} from={10} to={100} />
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
      </ShowBox>
      <ShowBox className="mb-4 h-[380px] overflow-hidden">
        <Heading as="h4" className="mb-2">
          isInView
        </Heading>
        <div className="h-[300px] overflow-auto mb-10">
          <div className="h-[1000px] bg-zinc-100 relative">
            <Counter to={100} isInView delay={1000} className={clsx(countStyle, 'absolute left-2 bottom-2')} />
          </div>
        </div>
      </ShowBox>
    </>
  );
}
