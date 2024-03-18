import { forwardRef, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { tv, type VariantProps } from 'tailwind-variants';

const linkStyle = tv({
  base: 'relative cursor-pointer inline-flex items-center transition-colors after:w-full after:h-[1px] after:absolute after:left-0 after:bottom-0 after:opacity-0 after:transition-opacity',
  variants: {
    color: {
      default: 'text-info-500 hover:text-info-500/80 after:bg-info-500/80',
      primary: 'text-brand-500 hover:text-brand-500/80 after:bg-brand-500/80',
      success: 'text-success-500 hover:text-success-500/80 after:bg-success-500/80',
      warn: 'text-warn-500 hover:text-warn-500/80 after:bg-warn-500/80',
      danger: 'text-danger-500 hover:text-danger-500/80 after:bg-danger-500/80',
    },
    size: {
      tiny: 'text-[12px]',
      small: 'text-[14px]',
      medium: 'text-[16px]',
      large: 'text-[18px]',
    },
    disabled: {
      true: 'text-neutral-400 hover:bg-transparent hover:text-neutral cursor-not-allowed',
    },
    underline: {
      true: 'hover:after:opacity-100',
    },
    isBlock: {
      true: '',
    },
  },
  compoundVariants: [
    {
      isBlock: true,
      color: 'default',
      class: 'hover:bg-info-500/10 hover:text-info-600',
    },
    {
      isBlock: true,
      color: 'primary',
      class: 'hover:bg-brand-500/10 hover:text-brand-600',
    },
    {
      isBlock: true,
      color: 'success',
      class: 'hover:bg-success-500/10 hover:text-success-600',
    },
    {
      isBlock: true,
      color: 'warn',
      class: 'hover:bg-warn-500/10 hover:text-warn-600',
    },
    {
      isBlock: true,
      color: 'danger',
      class: 'hover:bg-danger-500/10 hover:text-danger-600',
    },
    {
      size: 'tiny',
      isBlock: true,
      class: 'h-[20px] items-center px-[4px] rounded-small',
    },
    {
      size: 'small',
      isBlock: true,
      class: 'h-[24px] items-center px-[4px] rounded-small',
    },
    {
      size: 'medium',
      isBlock: true,
      class: 'h-[28px] items-center px-[8px] rounded-medium',
    },
    {
      size: 'large',
      isBlock: true,
      class: 'h-[32px] items-center px-[8px] rounded-medium',
    },
  ],
  defaultVariants: {
    size: 'medium',
    color: 'default',
    disabled: false,
  },
});
type LinkVariants = VariantProps<typeof linkStyle>;

export interface LinkProps extends LinkVariants {
  href: string;
  isBlank?: boolean;
  anchorIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, color, size, disabled, isBlock, isBlank, underline, anchorIcon, children, onClick, className, style } =
    props;
  const isOutSite = useMemo(() => {
    if (href.startsWith('/')) {
      return false;
    }
    return true;
  }, [href]);

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return isOutSite ? (
    <a
      href={href}
      ref={ref}
      className={linkStyle({ color, size, disabled, isBlock, underline, class: className })}
      style={style}
      target={isBlank ? '_blank' : '_self'}
      rel={isBlank ? 'noopener noreferrer' : ''}
      title={href}
      onClick={onClickHandler}>
      {children}
      {anchorIcon ? anchorIcon : null}
    </a>
  ) : (
    <RouterLink
      ref={ref}
      title={href}
      className={linkStyle({ color, size, disabled, isBlock, class: className })}
      style={style}
      to={href}
      target={isBlank ? '_blank' : '_self'}
      rel={isBlank ? 'noopener noreferrer' : ''}
      onClick={onClickHandler}>
      {children}
      {anchorIcon ? anchorIcon : null}
    </RouterLink>
  );
});

Link.displayName = 'Link';
export default Link;
