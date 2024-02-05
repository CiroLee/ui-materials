import { PropsWithChildren, forwardRef, isValidElement, useState, useEffect } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import * as RadixPopover from '@radix-ui/react-popover';
import { tv } from 'tailwind-variants';
import { placementOrigins } from '@/packages/plugins/placement.style';
import type { Align, Side } from '@/packages/types/common';

const popover = tv({
  slots: {
    base: 'p-3 rounded-large bg-white drop-shadow-around',
    title: 'font-bold',
    content: 'text-sm text-zinc-400',
  },
  variants: {
    placement: placementOrigins,
  },
  defaultVariants: {
    placement: 'bottom-center',
  },
});

interface PopoverProps extends PropsWithChildren {
  isOpen?: boolean;
  disabled?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  sideOffset?: number;
  showArrow?: boolean;
  align?: Align;
  side?: Side;
  className?: string;
  style?: React.CSSProperties;
  onOpenChange?: (open: boolean) => void;
}

const popoverVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
  },
  closed: {
    opacity: 0,
    scale: 0.8,
  },
};

const Popover = forwardRef<React.ElementRef<typeof RadixPopover.Root>, PopoverProps>((props, ref) => {
  const {
    isOpen,
    disabled,
    title,
    content,
    sideOffset = 5,
    showArrow = true,
    align = 'center',
    side = 'bottom',
    onOpenChange,
    children,
    className,
    style,
  } = props;
  const [open, setOpen] = useState<boolean>(false);
  const { base, title: titleStyle, content: contentStyle } = popover();
  const onOpenChangeHandler = (open: boolean) => {
    if (disabled) return;
    setOpen(open);
    onOpenChange?.(open);
  };

  useEffect(() => {
    if (disabled) {
      setOpen(false);
    }
    setOpen(!!isOpen);
  }, [isOpen, disabled]);
  return (
    <RadixPopover.Root onOpenChange={onOpenChangeHandler}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <AnimatePresence>
        {open ? (
          <RadixPopover.Portal forceMount>
            <RadixPopover.Content className="outline-0" ref={ref} sideOffset={sideOffset} align={align} side={side}>
              <motion.div
                className={base({ placement: `${side}-${align}`, class: className })}
                style={style}
                initial="closed"
                animate={open ? 'open' : 'closed'}
                exit="closed"
                variants={popoverVariants}>
                {isValidElement(title) ? title : title ? <div className={titleStyle()}>{title}</div> : null}
                {isValidElement(content) ? content : content ? <div className={contentStyle()}>{content}</div> : null}
                {showArrow ? <RadixPopover.Arrow className="fill-white" /> : null}
              </motion.div>
            </RadixPopover.Content>
          </RadixPopover.Portal>
        ) : null}
      </AnimatePresence>
    </RadixPopover.Root>
  );
});

Popover.displayName = 'Popover';

export default Popover;
