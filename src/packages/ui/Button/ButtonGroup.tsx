import { forwardRef } from 'react';
import cn from 'classnames';
export interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}
const groupCls = `[&_button:first-child]:!rounded-r-0 [&_button:not(:last-child,:first-child)]:rounded-0 [&_button:last-child]:!rounded-l-0 
[&_button:not(:last-child,:first-child)]:border-l-0 [&_button:not(:last-child,:first-child)]:border-r-0 [&_button:not(:last-child,:first-child)]:!rounded-0`;
const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  return (
    <div className={cn('flex items-center', groupCls, props.className)} ref={ref}>
      {props.children}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
