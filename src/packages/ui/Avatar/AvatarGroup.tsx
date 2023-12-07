import { forwardRef } from 'react';
import clsx from 'clsx';
export interface AvatarGroupProps {
  children: React.ReactNode;
  gap?: string;
  direction?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ direction = 'horizontal', gap = '-12px', style, ...props }, ref) => (
    <div
      style={{ '--gap': gap, ...style } as React.CSSProperties}
      className={clsx('flex [&_span]:shadow-[0_0_0_2px_#fff]', props.className, {
        'flex-col [&_span:not(:first-child)]:mt-[var(--gap)]': direction === 'vertical',
        'flex-row [&_span:not(:first-child)]:ml-[var(--gap)]': direction === 'horizontal',
      })}
      ref={ref}>
      {props.children}
    </div>
  ),
);
AvatarGroup.displayName = 'AvatarGroup';
export default AvatarGroup;
