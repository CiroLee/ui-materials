import { forwardRef } from 'react';
import cn from 'classnames';
export interface AvatarGroupProps {
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(({ direction = 'horizontal', ...props }, ref) => (
  <div
    className={cn('flex [&_span]:shadow-[0_0_0_2px_#fff]', props.className, {
      'flex-col [&_span:not(:first-child)]:mt-[-2%]': direction === 'vertical',
      'flex-row [&_span:not(:first-child)]:ml-[-2%]': direction === 'horizontal',
    })}
    ref={ref}>
    {props.children}
  </div>
));
AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
