import { forwardRef } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
export type Placement = 'top' | 'bottom' | 'left' | 'right' | 'center';
export interface PopupProps {
  show?: boolean;
  isBlur?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maskClosable?: boolean;
  placement: Placement;
  onClose: () => void;
}

function CenterPlacement({ children }: { children: React.ReactNode }) {
  const variants: Variants = {
    visible: {
      opacity: 1,
      x: '-50%',
      y: '-50%',
      scale: 1,
    },
    hidden: {
      opacity: 0,
      x: '-50%',
      y: '-50%',
      scale: 0.8,
    },
  };

  return (
    <motion.div variants={variants} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {children}
    </motion.div>
  );
}

function LeftPlacement({ children }: { children: React.ReactNode }) {
  const variants: Variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
      },
    },
    hidden: {
      x: '-100%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={variants} className="absolute left-0">
      {children}
    </motion.div>
  );
}

function RightPlacement({ children }: { children: React.ReactNode }) {
  const variants: Variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
      },
    },
    hidden: {
      x: '100%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={variants} className="absolute right-0">
      {children}
    </motion.div>
  );
}

function TopPlacement({ children }: { children: React.ReactNode }) {
  const variants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
      },
    },
    hidden: {
      y: '-100%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={variants} className="absolute top-0">
      {children}
    </motion.div>
  );
}

function BottomPlacement({ children }: { children: React.ReactNode }) {
  const variants: Variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
      },
    },
    hidden: {
      y: '100%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={variants} className="absolute bottom-0">
      {children}
    </motion.div>
  );
}

function placementContainer(placement: Placement, children: React.ReactNode) {
  const placementsMap = {
    center: <CenterPlacement>{children}</CenterPlacement>,
    left: <LeftPlacement>{children}</LeftPlacement>,
    top: <TopPlacement>{children}</TopPlacement>,
    right: <RightPlacement>{children}</RightPlacement>,
    bottom: <BottomPlacement>{children}</BottomPlacement>,
  };

  return placementsMap[placement];
}

const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const maskVariants: Variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.15,
      },
    },
  };

  const maskOnCLickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (Array.from(target.classList).includes('popup-mask')) {
      props.maskClosable && props.onClose();
    }
  };

  return (
    <AnimatePresence>
      {props.show ? (
        <div ref={ref} className={clsx('fixed overflow-hidden inset-0 z-popup', props.className)} style={props.style}>
          <motion.div
            initial="hidden"
            animate={props.show ? 'visible' : 'hidden'}
            variants={
              props.placement === 'center'
                ? {
                    ...maskVariants,
                    hidden: {
                      ...maskVariants.hidden,
                      transition: {},
                    },
                  }
                : maskVariants
            }
            exit="hidden"
            className={clsx('popup-mask w-full h-full bg-black/[0.45]', { 'backdrop-blur-sm': props.isBlur })}
            onClick={maskOnCLickHandler}>
            <>{placementContainer(props.placement, props.children)}</>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
});

Popup.displayName = 'Popup';

export default Popup;
