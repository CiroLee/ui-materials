import { PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const skeleton = tv(
  {
    base: 'relative',
    variants: {
      type: {
        flicker: 'bg-skeleton-flicker bg-[size:400%_100%] animate-flicker',
        shimmer: 'bg-black/[0.08] animate-shimmer ',
      },
    },
    defaultVariants: {
      type: 'flicker',
    },
  },
  {
    twMerge: true,
  },
);
type SkeletonVariants = VariantProps<typeof skeleton>;
export interface SkeletonProps extends PropsWithChildren, SkeletonVariants {
  className?: string;
  style?: React.CSSProperties;
}
export default function Skeleton(props: SkeletonProps) {
  const { type, children, className, style } = props;
  return (
    <div className={skeleton({ type, class: className })} style={style}>
      {children}
    </div>
  );
}
