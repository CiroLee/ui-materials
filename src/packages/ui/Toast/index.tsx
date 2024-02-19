import { useState, createContext, PropsWithChildren, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tv, type VariantProps } from 'tailwind-variants';
const toastStyle = tv({
  slots: {
    base: 'fixed z-toast p-3 min-h-[48px] rounded-medium bg-white shadow-around flex items-center',
    icon: '',
    content: 'whitespace-nowrap',
  },
  variants: {
    placement: {
      topCenter: {
        base: 'left-1/2 top-[20px]',
      },
      topLeft: {
        base: 'left-[16px] top-[20px]',
      },
      topRight: {
        base: 'right-[16px] top-[20px]',
      },
      bottomCenter: {
        base: 'left-1/2 bottom-[20px]',
      },
      bottomLeft: {
        base: 'left-[16px] bottom-[20px]',
      },
      bottomRight: {
        base: 'right-[16px] bottom-[20px]',
      },
      center: {
        base: 'left-1/2 top-1/2',
      },
    },
  },
  defaultVariants: {
    placement: 'topCenter',
  },
});

type ToastVariants = VariantProps<typeof toastStyle>;

interface ToastOptions extends ToastVariants {
  icon?: React.ReactNode;
  duration?: number;
  autoClose?: boolean;
  action?: React.ReactNode;
}
interface ToastContextProps {
  toast: (text: string, options?: ToastOptions) => void;
  closeToast: () => void;
}
export type ToastPlacement = keyof typeof toastStyle.variants.placement;
const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

function motionVariants(placement: keyof typeof toastStyle.variants.placement) {
  switch (placement) {
    case 'bottomCenter':
    case 'topCenter':
      return {
        visible: {
          opacity: 1,
          x: '-50%',
          y: 0,
          scale: 1,
        },
        hidden: {
          opacity: 0,
          x: '-50%',
          scale: 0.9,
          y: placement === 'topCenter' ? '-40px' : '40px',
        },
      };
    case 'bottomLeft':
    case 'topLeft':
      return {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        },
        hidden: {
          opacity: 0,
          x: 0,
          y: placement === 'topLeft' ? '-40px' : '40px',
          scale: 0.9,
        },
      };
    case 'bottomRight':
    case 'topRight':
      return {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        },
        hidden: {
          opacity: 0,
          x: 0,
          scale: 0.9,
          y: placement === 'topRight' ? '-40px' : '40px',
        },
      };
    case 'center':
      return {
        visible: {
          opacity: 1,
          x: '-50%',
          y: '-50%',
          scale: 1,
        },
        hidden: {
          x: '-50%',
          y: '-50%',
          opacity: 0,
          scale: 0.9,
        },
      };
  }
}

export function useToast() {
  return useContext(ToastContext);
}

const defaultOption = {
  autoClose: true,
  duration: 2000,
};
export function ToastProvider({ children }: PropsWithChildren) {
  const { base, content } = toastStyle();
  const [text, setText] = useState('');
  const [options, setOptions] = useState<ToastOptions>(defaultOption);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>();
  const toast = (text: string, opt?: ToastOptions) => {
    setText(text);
    const opts = { ...defaultOption, ...opt };
    setOptions(opts);

    if (opts?.autoClose) {
      timerRef.current = window.setTimeout(() => {
        setText('');
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
          setOptions(defaultOption);
        }
      }, opts.duration);
    }
  };

  const closeToast = () => {
    setText('');
    setOptions(defaultOption);
  };

  const providerValue = { toast, closeToast };

  return (
    <ToastContext.Provider value={providerValue}>
      {children}
      <AnimatePresence>
        {text ? (
          <motion.div
            initial="hidden"
            animate={text ? 'visible' : 'hidden'}
            exit="hidden"
            variants={motionVariants(options.placement || 'topCenter')}
            className={base({ placement: options.placement })}>
            {options.icon ? <i className="mr-2">{options.icon}</i> : null}
            <span className={content()}>{text}</span>
            {options.action ? <div className="ml-2">{options.action}</div> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}
