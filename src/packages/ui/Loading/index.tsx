import { forwardRef, useMemo } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { motion, AnimatePresence } from 'framer-motion';
import { RiLoader4Line } from '@remixicon/react';
import { Size } from '@/packages/types/common';
const loading = tv({
  slots: {
    base: 'size-full flex flex-col flex-center absolute inset-0 z-loading',
    text: 'text-brand-500',
  },
  variants: {
    backdrop: {
      translucent: {
        base: 'bg-white-mask',
      },
      blur: {
        base: 'bg-white-mask backdrop-blur-sm',
      },
      transparent: {
        base: 'bg-transparent',
      },
    },
    fullscreen: {
      true: {
        base: 'fixed',
      },
    },
  },
  defaultVariants: {
    backdrop: 'translucent',
    fullscreen: true,
  },
});

type LoadingVariant = VariantProps<typeof loading>;
interface LoadingProps extends LoadingVariant {
  show?: boolean;
  size?: Size | number | string;
  text?: string;
  fullscreen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>((props, ref) => {
  const { show, size = 'medium', text, backdrop, fullscreen, className, style } = props;
  const { base, text: textStyle } = loading();
  const iconSize = useMemo(() => {
    switch (size) {
      case 'tiny':
        return 24;
      case 'small':
        return 36;
      case 'medium':
        return 48;
      case 'large':
        return 64;
      default:
        return size;
    }
  }, [size]);
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={base({ backdrop, fullscreen, class: className })}
          style={style}>
          <RiLoader4Line size={iconSize} className="animate-spin text-brand-500" />
          {text ? <p className={textStyle({ class: `${size === 'tiny' ? 'text-[14px]' : ''}` })}>{text}</p> : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
});

Loading.displayName = 'Loading';
export default Loading;
