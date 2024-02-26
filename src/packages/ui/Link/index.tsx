import { forwardRef, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { tv, type VariantProps } from 'tailwind-variants';

const linkStyle = tv({
  base: 'cursor-pointer inline-flex transition-colors',
  variants: {
    color: {
      default: 'text-info-500 hover:text-info-500/80',
      primary: 'text-brand-500 hover:text-brand-500/80',
      success: 'text-success-500 hover:text-success-500/80',
      warn: 'text-warn-500 hover:text-warn-500/80',
      danger: 'text-danger-500 hover:text-danger-500/80',
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
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, color, size, disabled, isBlock, isBlank, children, onClick, className, style } = props;
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
      className={linkStyle({ color, size, disabled, isBlock, class: className })}
      style={style}
      target={isBlank ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onClick={onClickHandler}>
      {children}
    </a>
  ) : (
    <RouterLink
      ref={ref}
      className={linkStyle({ color, size, disabled, isBlock, class: className })}
      style={style}
      to={href}
      onClick={onClickHandler}>
      {children}
    </RouterLink>
  );
});

Link.displayName = 'Link';
export default Link;
