import { type FC, useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import 'highlight.js/styles/atom-one-dark.css';
import Button from '../Button';

interface CodeViewProps {
  content: string;
}
const MAX_HEIGHT = 400;

const CodeView: FC<CodeViewProps> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpand] = useState(false);
  const [expandedToggle, setExpandToggle] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      if (height > MAX_HEIGHT) {
        setExpand(true);
      }
    }
  }, []);

  return (
    <div
      className={cn('relative my-[12px] rounded-[6px] overflow-hidden', {
        'max-h-[200px]': expanded && !expandedToggle,
      })}>
      <div
        ref={ref}
        className="text-[14px] [&_pre]:m-0 [&_pre]:p-3 [&_pre]:overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: props.content }}></div>
      {expanded ? (
        <div className="absolute bottom-0 flex justify-center items-center w-full h-[60px] bg-gradient-to-b from-transparent to-gray-800">
          <Button onClick={() => setExpandToggle(!expandedToggle)}>{expandedToggle ? 'collapse' : 'expand'}</Button>
        </div>
      ) : null}
    </div>
  );
};

export default CodeView;
