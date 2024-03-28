import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const codeStyle = tv({
  base: 'inline-flex border box-border whitespace-nowrap',
  variants: {
    color: {
      default: 'bg-neutral-100 border-neutral-300',
      info: 'bg-info-100 border-info-300 text-info-600',
      primary: 'bg-brand-100 border-brand-300 text-brand-600',
      success: 'bg-success-100 border-success-300 text-success-600',
      warn: 'bg-warn-100 border-warn-300 text-warn-600',
      danger: 'bg-danger-100 border-danger-300 text-danger-600',
    },
    size: {
      tiny: 'text-[0.7em] py-[1px] px-[2px] rounded-small',
      small: 'text-[0.84em] py-[2px] px-[4px] rounded-small',
      medium: 'text-[0.9em] py-[3px] px-[6px] rounded-medium',
      large: 'text-[1.1em] py-[3px] px-[8px] rounded-medium',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'medium',
  },
});
type CodeVariants = VariantProps<typeof codeStyle>;
interface CodeProps extends CodeVariants {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Code = forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { color, size, children, className, style } = props;
  return (
    <code ref={ref} className={codeStyle({ color, size, class: className })} style={style}>
      {children}
    </code>
  );
});

Code.displayName = 'Code';

export default Code;
