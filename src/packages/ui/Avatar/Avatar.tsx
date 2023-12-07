import React, { forwardRef } from 'react';
import clsx from 'clsx';
import * as RadixAvatar from '@radix-ui/react-avatar';
import type { Size, ObjectFit } from '@/types/common';

export interface AvatarProps {
  src?: string;
  shape?: 'circle' | 'round';
  size?: Size;
  fit?: ObjectFit;
  text?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

function getShapeTheme(shape?: 'circle' | 'round') {
  return shape === 'round' ? 'rounded-medium' : 'rounded-full';
}

function getSizeTheme(size?: Size) {
  switch (size) {
    case 'tiny':
      return 'h-[24px] w-[24px]';
    case 'small':
      return 'h-[32px] w-[32px]';
    default:
    case 'medium':
      return 'h-[40px] w-[40px]';
    case 'large':
      return 'h-[48px] w-[48px]';
  }
}

const Avatar = forwardRef<React.ElementRef<typeof RadixAvatar.Root>, AvatarProps>((props, ref) => {
  return (
    <RadixAvatar.Root
      className={clsx(
        `inline-block relative box-border`,
        getSizeTheme(props.size),
        getShapeTheme(props.shape),
        props.className,
      )}
      style={props.style}
      ref={ref}>
      <RadixAvatar.Image
        style={{ objectFit: props.fit || 'cover' } as React.CSSProperties}
        className={clsx('w-full h-full', getShapeTheme(props.shape))}
        src={props.src}
      />
      {!props.text ? (
        <RadixAvatar.Fallback
          className={clsx(
            getSizeTheme(props.size),
            getShapeTheme(props.shape),
            'flex justify-center items-center text-gray-400/60 bg-gray-200 [&_svg]:w-[52%] [&_svg]:h-[52%]',
          )}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </RadixAvatar.Fallback>
      ) : null}
      {!props.src && props.text ? (
        <div className="w-full h-full flex items-center justify-center">{props.text}</div>
      ) : null}
      {props.children}
    </RadixAvatar.Root>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
