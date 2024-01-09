import { PropsWithChildren, forwardRef, isValidElement, useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import * as RadixPopover from '@radix-ui/react-popover';
import { tv } from 'tailwind-variants';
import { Align, Side } from '@/packages/types/common';

const popover = tv({
  slots: {
    base: 'p-3 rounded-medium bg-white shadow-[0_20px_50px_-10px,0_-10px_32px_-5px] shadow-black/[0.15]',
    title: 'font-bold',
    content: 'text-sm text-zinc-400',
  },
  variants: {
    placement: {
      'top-start': {
        base: 'origin-bottom-left',
      },
      'top-center': {
        base: 'origin-bottom',
      },
      'top-end': {
        base: 'origin-bottom-right',
      },
      'right-start': {
        base: 'origin-top-left',
      },
      'right-center': {
        base: 'origin-left',
      },
      'right-end': {
        base: 'origin-bottom-left',
      },
      'bottom-start': {
        base: 'origin-top-left',
      },
      'bottom-center': {
        base: 'origin-top',
      },
      'bottom-end': {
        base: 'origin-top-right',
      },
      'left-start': {
        base: 'origin-top-right',
      },
      'left-center': {
        base: 'origin-right',
      },
      'left-end': {
        base: 'origin-top-right',
      },
    },
  },
  defaultVariants: {
    placement: 'bottom-center',
  },
});

interface PopoverProps extends PropsWithChildren {
  isOpen?: boolean;
  title?: React.ReactNode;
  content?: React.ReactNode;
  sideOffset?: number;
  showArrow?: boolean;
  align?: Align;
  side?: Side;
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
    title,
    content,
    sideOffset = 5,
    showArrow = true,
    align = 'center',
    side = 'bottom',
    onOpenChange,
    children,
  } = props;
  const [open, setOpen] = useState(isOpen);
  const { base, title: titleStyle, content: contentStyle } = popover();
  const onOpenChangeHandler = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };
  return (
    <RadixPopover.Root onOpenChange={onOpenChangeHandler}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <AnimatePresence>
        {open ? (
          <RadixPopover.Portal forceMount>
            <RadixPopover.Content className="outline-0" ref={ref} sideOffset={sideOffset} align={align} side={side}>
              <motion.div
                className={base({ placement: `${side}-${align}` })}
                initial="closed"
                animate={open ? 'open' : 'closed'}
                exit="closed"
                variants={popoverVariants}>
                {isValidElement(title) ? title : title ? <div className={titleStyle()}>{title}</div> : null}
                {isValidElement(content) ? content : content ? <div className={contentStyle()}>{content}</div> : null}
              </motion.div>
              {showArrow ? <RadixPopover.Arrow className="fill-white" /> : null}
            </RadixPopover.Content>
          </RadixPopover.Portal>
        ) : null}
      </AnimatePresence>
    </RadixPopover.Root>
  );
});

Popover.displayName = 'Popover';

export default Popover;