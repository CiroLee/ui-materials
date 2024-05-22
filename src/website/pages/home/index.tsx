import { FC } from 'react';
import Heading from '@ui/Heading';
import { RiGithubFill } from '@remixicon/react';
import Link from '@ui/Link';
import Button from '@ui/Button';
import CodeView from '@site/components/CodeView';
import Code from '@ui/Code';
import firstContent from './docs/first.md?raw';
import secondContent from './docs/second.md?raw';
const style = 'size-8 border border-gray-300 rounded-full flex-shrink-0 flex flex-center text-gray-700 mr-2';
const Home: FC = () => {
  return (
    <div className="">
      <div className="flex justify-end">
        <Link href="https://github.com/CiroLee/ui-materials" isBlank>
          <Button size="small" outline type="text" className="cursor-pointer">
            <RiGithubFill size={16} className="mr-1" />
            <span>Github</span>
          </Button>
        </Link>
      </div>
      <Heading as="h4" className="my-12">
        modern ui materials about react aiming to use easily
      </Heading>
      <div className="flex items-center">
        <Heading as="h5" className={style}>
          1
        </Heading>
        <span>install basic dependencies</span>
      </div>
      <CodeView className="md:w-[80%] mb-8" content={firstContent} />
      <div className="flex items-center">
        <Heading as="h5" className={style}>
          2
        </Heading>
        <span>
          copy plugins to your project, and import them in your <Code size="tiny">tailwind.config.js</Code>
        </span>
      </div>
      <CodeView content={secondContent} className="md:w-[80%] mb-8" />
      <div className="flex items-center">
        <Heading as="h5" className={style}>
          3
        </Heading>
        <span>copy component codes to your project, just it!</span>
      </div>
      <p className="text-gray-400 indent-10">
        note: you may install some extra dependencies for some component, view code for detail
      </p>
    </div>
  );
};

export default Home;
