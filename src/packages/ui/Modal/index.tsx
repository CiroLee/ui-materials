import { forwardRef, isValidElement, useEffect } from 'react';
import { tv } from 'tailwind-variants';
import Popup from '../Popup';
const modal = tv({
  slots: {
    base: 'bg-white rounded-large p-4 shadow-md relative overflow-hidden',
    title: 'font-bold overflow-hidden pr-6 ellipsis',
    closeIcon: `absolute top-4 right-4 size-[24px] rounded-small flex flex-center after:absolute after:rotate-45 after:w-[2px] after:h-[16px] after:rounded-[1px] after:bg-gray-400
    before:absolute before:-rotate-45 before:w-[2px] before:h-[16px] before:rounded-[1px] before:bg-gray-400 transition-colors hover:bg-gray-300/40 hover:after:bg-gray-500 hover:before:bg-gray-500`,
  },
  variants: {
    size: {
      small: {
        base: 'w-[32vw]',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export interface ModalProps {
  show?: boolean;
  title?: React.ReactNode;
  closeIcon?: React.ReactNode;
  className?: string;
  enableEsc?: boolean;
  onClose: () => void;
}

function ModalTitle({ title }: Pick<ModalProps, 'title'>) {
  const { title: titleStyle } = modal();
  return <div className={titleStyle()}>{title}</div>;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { show, title, closeIcon, enableEsc = true, onClose, className } = props;
  const { base, closeIcon: closeIconStyle } = modal();

  useEffect(() => {
    if (!show) return;
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && enableEsc) {
        onClose();
      }
    });
  }, [show]);

  return (
    <Popup placement="center" show={show} ref={ref} maskClosable onClose={onClose}>
      <div className={base({ class: className })}>
        {isValidElement(closeIcon) ? <>{closeIcon}</> : <div className={closeIconStyle()} onClick={onClose} />}
        {isValidElement(title) ? <>{title}</> : <ModalTitle title={title} />}
      </div>
    </Popup>
  );
});

Modal.displayName = 'Modal';
export default Modal;
