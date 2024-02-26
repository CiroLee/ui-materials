import Button from '@ui/Button';
import { RiGithubFill } from '@remixicon/react';
import clsx from 'clsx';
interface SourceButtonProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SourceButton(props: SourceButtonProps) {
  const { name, className, style } = props;
  return (
    <a
      className={clsx('inline-block', className)}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://github.com/CiroLee/ui-materials/tree/main/src/packages/ui/${name}`}>
      <Button type="text" outline size="small" className="cursor-pointer">
        <RiGithubFill className="mr-1" size="16px" />
        <span>Source</span>
      </Button>
    </a>
  );
}
