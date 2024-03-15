import { PropsWithChildren, forwardRef, isValidElement, useState } from 'react';
import { tv } from 'tailwind-variants';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import type { Align, Side } from '@/packages/types/common';

const tooltip = tv({
  base: 'px-2 py-1 rounded-large bg-white shadow-around',
  variants: {
    placement: {
      'top-start': 'origin-bottom-left',
      'top-center': 'origin-bottom',
      'top-end': 'origin-bottom-right',
      'right-start': 'origin-top-left',
      'right-center': 'origin-left',
      'right-end': 'origin-bottom-left',
      'bottom-start': 'origin-top-left',
      'bottom-center': 'origin-top',
      'bottom-end': 'origin-top-right',
      'left-start': 'origin-top-right',
      'left-center': 'origin-right',
      'left-end': 'origin-top-right',
    },
  },
  defaultVariants: {
    placement: 'top-center',
  },
});

interface ToolTipProps extends PropsWithChildren {
  isOpen?: boolean;
  title?: React.ReactNode;
  side?: Side;
  align?: Align;
  delay?: number;
  sideOffset?: number;
  showArrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onOpenChange?: (open: boolean) => void;
}

const toolTipVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
  },
  closed: {
    opacity: 0,
    scale: 0.8,
  },
};

const Tooltip = forwardRef<React.ElementRef<typeof RadixTooltip.Root>, ToolTipProps>((props, ref) => {
  const {
    isOpen,
    title,
    side = 'top',
    align = 'center',
    sideOffset = 5,
    showArrow = true,
    delay = 200,
    children,
    className,
    onOpenChange,
  } = props;
  const [open, setOpen] = useState(isOpen);

  const onOpenChangeHandler = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };
  return (
    <RadixTooltip.Provider delayDuration={delay}>
      <RadixTooltip.Root onOpenChange={onOpenChangeHandler}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <AnimatePresence>
          {open ? (
            <RadixTooltip.Portal forceMount>
              <RadixTooltip.Content ref={ref} className="outline-0" side={side} align={align} sideOffset={sideOffset}>
                <motion.div
                  initial="closed"
                  animate={open ? 'open' : 'closed'}
                  exit="closed"
                  variants={toolTipVariants}
                  className={tooltip({ placement: `${side}-${align}`, class: className })}>
                  {isValidElement(title) ? title : title ? <div>{title}</div> : null}
                  {showArrow ? <RadixTooltip.Arrow className="fill-white" /> : null}
                </motion.div>
              </RadixTooltip.Content>
            </RadixTooltip.Portal>
          ) : null}
        </AnimatePresence>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
