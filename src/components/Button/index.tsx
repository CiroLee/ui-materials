import { type FC } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
const Button: FC<ButtonProps> = (props) => {
  const handleOnClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (props.onClick) {
      (props.onClick as React.MouseEventHandler<HTMLElement>)?.(event);
    }
  };
  return (
    <button
      className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white"
      onClick={handleOnClick}>
      {props.children}
    </button>
  );
};

export default Button;
