import { forwardRef } from 'react';
import clsx from 'clsx';
export interface ButtonGroupProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
const groupCls = `[&_button:first-child]:!rounded-r-0 [&_button:not(:last-child,:first-child)]:rounded-0 [&_button:last-child]:!rounded-l-0 
[&_button:not(:last-child,:first-child)]:border-l-0 [&_button:not(:last-child,:first-child)]:border-r-0 [&_button:not(:last-child,:first-child)]:!rounded-0
[&_button:nth-child(2)]:!border-l-0`;
const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  return (
    <div style={props.style} className={clsx('flex items-center', groupCls, props.className)} ref={ref}>
      {props.children}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
