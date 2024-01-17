import Heading from '@ui/Heading';
import SourceButton from '../SourceButton';

interface NavTitleProps {
  title: string;
  sourceName: string;
}
export default function NavTitle(props: NavTitleProps) {
  return (
    <div className="flex justify-between items-center">
      <Heading as="h2" className="mb-4">
        {props.title}
      </Heading>
      <SourceButton name={props.sourceName} />
    </div>
  );
}
