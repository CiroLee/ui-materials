import { PropsWithChildren, forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
interface HeadingBase extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}
const heading = tv({
  base: 'font-medium',
  variants: {
    as: {
      h1: 'text-[2.25rem] leading-[1.22]',
      h2: 'text-[2rem] leading-[1.24]',
      h3: 'text-[1.75rem] leading-[1.28]',
      h4: 'text-[1.5rem] leading-[1.34]',
      h5: 'text-[1.25rem] leading-[1.4]',
      h6: 'text-[1rem] leading-[1.5]',
    },
  },
});

type HeadingVariants = Required<VariantProps<typeof heading>>;
export interface HeadingProps extends HeadingVariants, HeadingBase {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as: Tag, children, className, ...props }, ref) => {
  return (
    <Tag ref={ref} className={heading({ as: Tag, class: className })} {...props}>
      {children}
    </Tag>
  );
});

Heading.displayName = 'Heading';

export default Heading;
