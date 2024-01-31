import React, { PropsWithChildren, forwardRef, isValidElement, useEffect, useMemo } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import Button from '../Button';
import Popup from '../Popup';
const modal = tv({
  slots: {
    base: 'modal bg-white rounded-large py-4 shadow-[color:rgba(0,0,0,0.04)] shadow-[0_10px_15px_-4px,0_-10px_15px_-4px,10px_0_15px_-4px,-10px_0_15px_-4px] relative overflow-hidden',
    title: 'px-4 font-bold overflow-hidden pr-6 ellipsis',
    commonClose: 'absolute top-4 right-4',
    defaultCloseIcon: `size-[24px] rounded-small flex flex-center after:absolute after:rotate-45 after:w-[1px] after:h-[16px] after:rounded-[1px] after:bg-gray-400 before:absolute 
    before:-rotate-45 before:w-[1px] before:h-[16px] before:rounded-[1px] before:bg-gray-400 transition-colors hover:bg-gray-300/40 hover:after:bg-gray-600 hover:before:bg-gray-600`,
    content: 'modal__content px-4 my-4 max-h-[65vh] overflow-auto last:mb-0',
    footer: 'px-4 flex gap-3',
  },
  variants: {
    size: {
      small: {
        base: 'w-[32vw]',
      },
      medium: {
        base: 'w-[50vw]',
      },
      large: {
        base: 'w-[80vw]',
      },
    },
    footerAlign: {
      start: {
        footer: 'justify-start',
      },
      end: {
        footer: 'justify-end',
      },
      center: {
        footer: 'justify-center',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    footerAlign: 'end',
  },
});

type ModalVariants = VariantProps<typeof modal>;
export interface ModalProps extends ModalVariants, PropsWithChildren {
  show?: boolean;
  title?: React.ReactNode;
  closeIcon?: React.ReactNode | null;
  footer?: React.ReactNode | null;
  enableEsc?: boolean;
  maskClosable?: boolean;
  backdrop?: 'translucent' | 'blur' | 'transparent';
  className?: string;
  style?: React.CSSProperties;
  cancelText?: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

function ModalTitle({ title }: Pick<ModalProps, 'title'>) {
  const { title: titleStyle } = modal();
  return <div className={titleStyle()}>{title}</div>;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    show,
    size,
    title,
    closeIcon,
    enableEsc = true,
    maskClosable = true,
    backdrop = 'translucent',
    footerAlign,
    footer,
    cancelText = '取消',
    confirmText = '确认',
    children,
    onClose,
    onConfirm,
    className,
    style,
  } = props;
  const { base, commonClose, defaultCloseIcon, content, footer: footerStyle } = modal();

  const confirmOnClickHandler = () => {
    onClose();
    onConfirm?.();
  };

  const maskBackdrop = useMemo(() => {
    if (backdrop === 'transparent') {
      return '[&_.popup-mask]:bg-transparent';
    }
    return '';
  }, [backdrop]);
  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && enableEsc) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [enableEsc]);

  return (
    <Popup
      placement="center"
      className={maskBackdrop}
      isBlur={backdrop === 'blur'}
      show={show}
      ref={ref}
      maskClosable={maskClosable}
      onClose={onClose}>
      <div className={base({ size, class: className })} style={style}>
        {closeIcon === undefined ? (
          <div className={commonClose({ class: defaultCloseIcon() })} onClick={onClose} />
        ) : closeIcon === null ? null : (
          <div className={commonClose()} onClick={onClose}>
            {closeIcon}
          </div>
        )}
        {isValidElement(title) ? <>{title}</> : title ? <ModalTitle title={title} /> : null}
        <div className={content()}>{children}</div>
        {footer === undefined ? (
          <div className={footerStyle({ footerAlign })}>
            <Button type="text" outline onClick={onClose}>
              {cancelText}
            </Button>
            <Button onClick={confirmOnClickHandler}>{confirmText}</Button>
          </div>
        ) : footer === null ? null : (
          <>{footer}</>
        )}
      </div>
    </Popup>
  );
});

Modal.displayName = 'Modal';
export default Modal;
