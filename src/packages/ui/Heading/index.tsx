import { PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
interface HeadingBase extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}
const heading = tv({
  base: 'font-bold',
  variants: {
    as: {
      h1: 'text-[2rem]',
      h2: 'text-[1.5rem]',
      h3: 'text-[1.33rem]',
      h4: 'text-[1.17rem]',
      h5: 'text-[0.83rem]',
      h6: 'text-[0.67rem]',
    },
  },
});

type HeadingVariants = Required<VariantProps<typeof heading>>;
export interface HeadingProps extends HeadingVariants, HeadingBase {}
const Heading = ({ as: Tag, children, className, ...props }: HeadingProps) => {
  return (
    <Tag className={heading({ as: Tag, class: className })} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
