import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const tag = tv({
  base: 'inline-flex items-center',
  variants: {
    color: {
      default: 'bg-[#ededed] text-black/80',
      primary: 'bg-brand-500/10 text-brand-500',
      success: 'bg-success-500/10 text-success-500',
      warn: 'bg-warn-500/10 text-warn-500',
      danger: 'bg-danger-500/10 text-danger-500',
    },
    size: {
      tiny: 'h-[18px] px-1 text-[12px]',
      small: 'h-[22px] px-2 text-[14px]',
      medium: 'h-[26px] px-2 text-[16px]',
      large: 'h-[30px] px-3 text-[18px]',
    },
    shape: {
      pill: '',
      default: '',
    },
  },
  compoundVariants: [
    {
      size: 'tiny',
      shape: 'pill',
      class: 'rounded-[9px]',
    },
    {
      size: 'small',
      shape: 'pill',
      class: 'rounded-[11px]',
    },
    {
      size: 'medium',
      shape: 'pill',
      class: 'rounded-[13px]',
    },
    {
      size: 'large',
      shape: 'pill',
      class: 'rounded-[15px]',
    },
    {
      size: 'tiny',
      shape: 'default',
      class: 'rounded-tiny',
    },
    {
      size: 'small',
      shape: 'default',
      class: 'rounded-small',
    },
    {
      size: 'medium',
      shape: 'default',
      class: 'rounded-medium',
    },
    {
      size: 'large',
      shape: 'default',
      class: 'rounded-large',
    },
  ],
  defaultVariants: {
    color: 'default',
    size: 'small',
    shape: 'default',
  },
});
type TagVariants = VariantProps<typeof tag>;
export interface TagProps extends TagVariants {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(props, ref) {
  const { color, size, shape, className, style } = props;
  return (
    <div ref={ref} className={tag({ size, color, shape, class: className })} style={style}>
      {props.children}
    </div>
  );
});

Tag.displayName = 'Tag';

export default Tag;
