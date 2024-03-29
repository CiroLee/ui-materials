import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import * as RadixAvatar from '@radix-ui/react-avatar';

const avatar = tv({
  base: 'inline-block relative box-border overflow-hidden',
  variants: {
    size: {
      tiny: 'h-[24px] w-[24px]',
      small: 'h-[32px] w-[32px]',
      medium: 'h-[40px] w-[40px]',
      large: 'h-[48px] w-[48px]',
    },
    shape: {
      circle: 'rounded-full',
      round: 'rounded-large',
    },
    bordered: {
      true: 'outline outline-2 outline-[var(--border-color)] border-2 border-solid border-white',
    },
  },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
  },
});

type AvatarVariants = VariantProps<typeof avatar>;
export interface AvatarProps extends AvatarVariants {
  text?: string;
  src?: string;
  alt?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar = forwardRef<React.ElementRef<typeof RadixAvatar.Root>, AvatarProps>((props, ref) => {
  const { src, shape, size, text, alt, bordered, color = '#eae8e8', className, style } = props;
  return (
    <RadixAvatar.Root
      className={avatar({ shape, size, bordered, class: className })}
      style={{ '--border-color': color, ...style } as React.CSSProperties}
      ref={ref}>
      <RadixAvatar.Image className="w-full h-full object-cover" src={src} alt={alt} />
      {!text ? (
        <RadixAvatar.Fallback
          delayMs={300}
          className={avatar({
            size,
            shape,
            class: 'flex justify-center items-center text-gray-400/60 bg-gray-200 [&_svg]:w-[52%] [&_svg]:h-[52%]',
          })}>
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
      {!src && text ? <div className="w-full h-full flex items-center justify-center">{text}</div> : null}
    </RadixAvatar.Root>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
