import clsx from 'clsx';
interface ShowBoxProps {
  className?: string;
  children?: React.ReactNode;
}
export default function ShowBox(props: ShowBoxProps) {
  return (
    <div className={clsx('border border-dashed border-gray-300 rounded-sm p-4', props.className)}>{props.children}</div>
  );
}
