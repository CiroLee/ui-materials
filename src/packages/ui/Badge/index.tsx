import { forwardRef } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';
const badge = tv({
  base: 'flex justify-center items-center absolute bg-[var(--bg-color)] text-[--text-color] border-[2px] border-white box-border origin-center -translate-y-1/2',
  variants: {
    size: {
      small: 'min-w-[16px] h-[16px] text-[10px] rounded-[8px]',
      medium: 'min-w-[20px] h-[20px] text-[14px] rounded-[10px]',
      large: 'min-w-[24px] h-[24px] text-[16px] rounded-[12px]',
    },
    placement: {
      'top-right': '',
      'top-left': '',
      'bottom-right': '',
      'bottom-left': '',
    },
    outline: {
      false: 'border-0',
    },
  },
  compoundVariants: [
    {
      size: 'small',
      placement: 'top-right',
      class: 'top-[10%] right-[10%] translate-x-1/2',
    },
    {
      size: 'medium',
      placement: 'top-right',
      class: 'top-[8%] right-[8%] translate-x-1/2',
    },

    {
      size: 'large',
      placement: 'top-right',
      class: 'top-[6%] right-[6%] translate-x-1/2',
    },
    {
      size: 'small',
      placement: 'top-left',
      class: 'top-[10%] left-[10%] -translate-x-1/2',
    },
    {
      size: 'medium',
      placement: 'top-left',
      class: 'top-[8%] left-[8%] -translate-x-1/2',
    },
    {
      size: 'large',
      placement: 'top-left',
      class: 'top-[6%] left-[6%] -translate-x-1/2',
    },
    {
      size: 'small',
      placement: 'bottom-right',
      class: 'bottom-[10%] right-[10%] translate-y-1/2 translate-x-1/2',
    },
    {
      size: 'medium',
      placement: 'bottom-right',
      class: 'bottom-[8%] right-[8%] translate-y-1/2 translate-x-1/2',
    },
    {
      size: 'large',
      placement: 'bottom-right',
      class: 'bottom-[6%] right-[6%] translate-y-1/2 translate-x-1/2',
    },
    {
      size: 'small',
      placement: 'bottom-left',
      class: 'bottom-[10%] left-[10%] translate-y-1/2 -translate-x-1/2',
    },
    {
      size: 'medium',
      placement: 'bottom-left',
      class: 'bottom-[8%] left-[8%] translate-y-1/2 -translate-x-1/2',
    },
    {
      size: 'large',
      placement: 'bottom-left',
      class: 'bottom-[6%] left-[6%] translate-y-1/2 -translate-x-1/2',
    },
  ],
  defaultVariants: {
    size: 'medium',
    placement: 'top-right',
  },
});
type BadgeVariants = VariantProps<typeof badge>;
export interface BadgeProps extends BadgeVariants {
  content?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(props: BadgeProps, ref) {
  const {
    size,
    placement,
    content,
    bgColor = '#FF4C3F',
    textColor = '#fff',
    outline = true,
    children,
    className,
    style,
  } = props;
  return (
    <div className="inline-flex relative box-border" ref={ref}>
      {children}
      <div
        className={badge({ size, placement, outline, class: className })}
        style={{ '--bg-color': bgColor, '--text-color': textColor, ...style } as React.CSSProperties}>
        {content}
      </div>
    </div>
  );
});

Badge.displayName = 'Badge';

export default Badge;
