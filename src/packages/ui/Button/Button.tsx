import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const compoundVariants = tv({
  compoundVariants: [
    {
      outline: true,
      type: 'primary',
      class: `border-brand-500 text-brand-500 hover:bg-brand-500/5 hover:border-brand-500/80
        active:text-brand-600 active:border-brand-600 active:bg-brand-500/10`,
    },
    {
      outline: true,
      type: 'success',
      class: `border-success-500 text-success-500 hover:bg-success-500/5 hover:border-success-500/80 
        active:text-success-600 active:border-success-600 active:bg-success-500/10`,
    },

    {
      outline: true,
      type: 'info',
      class: `border-info-500 text-info-500 hover:bg-info-500/5 hover:border-info-500/80 
        active:text-info-600 active:border-info-600 active:bg-info-500/10`,
    },
    {
      outline: true,
      type: 'danger',
      class: `border-danger-500 text-danger-500 hover:bg-danger-500/5 hover:border-danger-500/80 
        active:text-danger-600 active:!bg-danger-500/10 active:border-danger-600`,
    },
    {
      outline: true,
      type: 'warn',
      class: `border-warn-500 text-warn-500 hover:bg-warn-500/5 hover:border-warn-500/80 
        active:text-warn-600 active:border-warn-600 active:bg-warn-500/10`,
    },
    {
      outline: true,
      type: 'text',
      class: 'border-black/10',
    },
  ],
});

const button = tv({
  extend: compoundVariants,
  base: 'relative rounded-medium border-box text-[14px] outline-none cursor-default transition ease-linear [&:not(:disabled)]:active:scale-[98%]',
  variants: {
    type: {
      primary: 'bg-brand-500 text-white hover:bg-brand-500/90 active:bg-brand-600',
      success: 'bg-success-500 text-white hover:bg-success-500/90 active:bg-success-600',
      info: 'bg-info-500 text-white hover:bg-info-500/90 active:bg-info-600',
      warn: 'bg-warn-500 text-white hover:bg-warn-500/90 active:bg-warn-600',
      danger: 'bg-danger-500 text-white hover:bg-danger-500/90 active:bg-danger-600',
      text: 'bg-transparent text-black hover:bg-black/[0.03] active:bg-black/5',
    },
    size: {
      tiny: 'h-global-ty px-button-ty',
      small: 'h-global-sm px-button-sm',
      medium: 'h-global-md px-button-md',
      large: 'h-global-lg px-button-lg !text-[16px]',
    },
    shape: {
      default: '',
      pill: '!rounded-global-ty',
      circle: 'aspect-square !p-0 !rounded-1/2',
      square: 'aspect-square !p-0',
    },
    block: {
      true: 'w-full active:!scale-[99.65%]',
    },
    outline: {
      true: 'border bg-transparent',
    },
    disabled: {
      true: 'disabled:cursor-not-allowed disabled:!text-black/20 disabled:border-0 disabled:bg-black/5',
    },
    loading: {
      true: 'opacity-70 cursor-default active:scale-100',
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'medium',
    shaped: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;
export interface ButtonProps extends ButtonVariants {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, type, shape, outline, block, disabled, loading, className, style, ...rest } = props;
  return (
    <button
      ref={ref}
      {...{ disabled, ...rest }}
      className={button({ type, size, outline, block, shape, disabled, loading, class: className })}
      style={style}>
      <div className="relative w-full h-full flex justify-center items-center">{props.children}</div>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
