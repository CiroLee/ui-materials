import { forwardRef } from 'react';
import cn from 'classnames';
import { omit } from '@/libs/utils';
import type { Size } from '@/types/common';
export type ButtonType = 'primary' | 'success' | 'danger' | 'warn' | 'text';
export type ButtonShape = 'default' | 'round' | 'circle' | 'square';

export interface ButtonProps {
  type?: ButtonType;
  size?: Size;
  outline?: boolean;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  shape?: ButtonShape;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const baseCls =
  'relative rounded-medium border-box text-[14px] outline-none cursor-default transition ease-linear [&:not(:disabled)]:active:scale-[98%]';
const disabledCls = 'disabled:cursor-not-allowed disabled:!text-black/30 disabled:border-0 disabled:!bg-black/10';
function getTypeTheme(type: ButtonType) {
  switch (type) {
    default:
    case 'primary':
      return 'bg-brand-500 text-white hover:bg-brand-500/90 active:bg-brand-600';
    case 'success':
      return 'bg-success-500 text-white hover:bg-success-500/90 active:bg-success-600';
    case 'warn':
      return 'bg-warn-500 text-white hover:bg-warn-500/90 active:bg-warn-600';
    case 'danger':
      return 'bg-danger-500 text-white hover:bg-danger-500/90 active:bg-danger-600';
    case 'text':
      return 'bg-transparent text-black hover:bg-black/5 active:bg-black/10';
  }
}

function getSizeTheme(size: Size) {
  switch (size) {
    case 'tiny':
      return 'h-button-ty px-button-ty';
    case 'small':
      return 'h-button-sm px-button-sm';
    default:
    case 'medium':
      return 'h-button-md px-button-md';
    case 'large':
      return 'h-button-lg px-button-lg !text-[16px]';
  }
}

function getBorderTheme(type?: ButtonType, outline?: boolean) {
  if (!outline) return;
  switch (type) {
    default:
    case 'primary':
      return `border border-brand-500 !text-brand-500 hover:!bg-brand-500/5 hover:border-brand-500/80
       active:!text-brand-600 active:border-brand-600 active:!bg-brand-500/10 bg-transparent`;
    case 'success':
      return `border border-success-500 !text-success-500 hover:!bg-success-500/5 hover:border-success-500/80 
       active:!text-success-600 active:!border-success-600 active:!bg-success-500/10 bg-transparent`;
    case 'warn':
      return `border border-warn-500 !text-warn-500 hover:!bg-warn-500/5 hover:border-warn-500/80 
       active:!text-warn-600 active:border-warn-600 active:!bg-warn-500/10 !bg-transparent`;
    case 'danger':
      return `border border-danger-500 !text-danger-500 hover:!bg-danger-500/5 hover:border-danger-500/80 
       active:!text-danger-600 active:!bg-danger-500/10 active:border-danger-600 bg-transparent`;
    case 'text':
      return 'border border-black/10';
  }
}

function getShapeTheme(size: Size, shape?: ButtonShape) {
  let height =
    getSizeTheme(size)
      .match(/h-button-[^]*/)?.[0]
      .split(' ')[0] || 'h-button-md';
  height = height.replace('h-', '');

  switch (shape) {
    case 'round':
      return `!rounded-button-ty`;
    case 'circle':
      return `!p-0 aspect-square !rounded-full w-${height} h-${height}`;
    case 'square':
      return `!p-0 aspect-square w-${height} h-${height}`;
  }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...omit(props, ['type', 'size', 'outline', 'block', 'loading', 'shape'])}
      onClick={props.onClick}
      className={cn(
        baseCls,
        getTypeTheme(props.type || 'primary'),
        getSizeTheme(props.size || 'medium'),
        getBorderTheme(props.type, props.outline),
        getShapeTheme(props.size || 'medium', props.shape),
        {
          'block w-full active:!scale-[99.65%]': props.block,
          'opacity-70 cursor-default active:!scale-100': props.loading,
        },
        disabledCls,
        props.className,
      )}>
      <div className="relative w-full h-full flex justify-center items-center">{props.children}</div>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
