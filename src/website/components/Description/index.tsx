import cn from 'clsx';
interface DescriptionProps {
  children?: React.ReactNode;
  className?: string;
}
export default function Description({ className, children }: DescriptionProps) {
  return <p className={cn('mb-4 text-[20px] text-gray-500/50', className)}>{children}</p>;
}
