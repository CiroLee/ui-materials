import { forwardRef } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => (
  <button
    ref={ref}
    {...props}
    className="outline-none transition-transform h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white hover:bg-brand-400 active:bg-brand-300 active:scale-[98%]"
  />
));

Button.displayName = 'Button';

export default Button;
