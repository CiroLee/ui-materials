import { forwardRef } from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import { VariantProps, tv } from 'tailwind-variants';
import type { Colors } from '@/packages/types/common';

const indicator = tv(
  {
    base: 'size-full transition-transform duration-300 ease rounded-[inherit]',
    variants: {
      color: {
        primary: 'bg-brand-500',
        info: 'bg-info-500',
        success: 'bg-success-500',
        warn: 'bg-warn-500',
        danger: 'bg-danger-500',
      },
      striped: {
        true: 'bg-striped-gradient bg-[length:1.25rem_1.25rem]',
      },
    },
    defaultVariants: {
      size: 'medium',
      color: 'primary',
    },
  },
  { twMerge: false },
);

const progress = tv({
  base: 'overflow-hidden relative bg-black/10',
  variants: {
    size: {
      small: 'h-[6px] rounded-[3px]',
      medium: 'h-[8px] rounded-[4px]',
      large: 'h-[12px] rounded-[6px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type ProgressVariants = VariantProps<typeof progress>;
interface ProgressProps extends ProgressVariants {
  percent?: number;
  color?: Colors;
  striped?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Progress = forwardRef<React.ElementRef<typeof RadixProgress.Root>, ProgressProps>((props, ref) => {
  const { percent = 0, size, color, striped, className, style } = props;
  return (
    <RadixProgress.Root
      ref={ref}
      value={percent}
      className={progress({ size, class: className })}
      style={{ transform: 'translateZ(0)', ...style }}>
      <RadixProgress.Indicator
        className={indicator({ color, striped })}
        style={{ transform: `translateX(-${100 - percent}%)` }}
      />
    </RadixProgress.Root>
  );
});

Progress.displayName = 'Progress';

export default Progress;
