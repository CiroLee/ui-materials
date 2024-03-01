import React, { forwardRef, isValidElement } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import {
  RiInformationFill,
  RiTerminalFill,
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiAlertFill,
} from '@remixicon/react';
const alert = tv({
  slots: {
    base: 'ui-alert border rounded-medium p-[12px] flex text-[#252521] relative',
    icon: '',
    left: 'ui-alert__left pr-[8px]',
    right: 'ui-alert__right flex-1 overflow-hidden',
    title: 'ui-alert__title font-bold ellipsis',
  },
  variants: {
    alertType: {
      default: {
        base: 'border-brand-500 bg-brand-100',
        icon: 'text-brand-600',
      },
      success: {
        base: 'border-success-500 bg-success-100',
        icon: 'text-success-600',
      },
      info: {
        base: 'border-info-500 bg-info-100',
        icon: 'text-info-600',
      },
      warn: {
        base: 'border-warn-500 bg-warn-100',
        icon: 'text-warn-600',
      },
      error: {
        base: 'border-danger-500 bg-danger-100',
        icon: 'text-danger-600',
      },
    },
    isPlain: {
      true: {
        base: 'border-[#D1D6D8] bg-transparent',
        icon: 'text-black',
      },
    },
  },
  defaultVariants: {
    alertType: 'default',
  },
});

type AlertVariants = VariantProps<typeof alert>;
interface AlertProps extends AlertVariants {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  showIcon?: boolean;
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
function AlertIcon(props: Pick<AlertProps, 'icon' | 'alertType' | 'isPlain'>) {
  const { icon, alertType, isPlain } = props;
  const { icon: iconStyle } = alert();
  if (icon) {
    return <>{icon}</>;
  }
  switch (alertType) {
    case 'default':
      return <RiTerminalFill className={iconStyle({ alertType, isPlain })} />;
    case 'info':
      return <RiInformationFill className={iconStyle({ alertType, isPlain })} />;
    case 'success':
      return <RiCheckboxCircleFill className={iconStyle({ alertType, isPlain })} />;
    case 'warn':
      return <RiAlertFill className={iconStyle({ alertType, isPlain })} />;
    case 'error':
      return <RiCloseCircleFill className={iconStyle({ alertType, isPlain })} />;
  }
}
const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { title, content, icon, alertType = 'default', isPlain, showIcon = true, className, style } = props;
  const { base, left, right, title: titleStyle } = alert();
  return (
    <div ref={ref} className={base({ alertType, isPlain, class: className })} style={style}>
      {showIcon && (
        <div className={left()}>
          <AlertIcon alertType={alertType} isPlain={isPlain} icon={icon} />
        </div>
      )}
      <div className={right()}>
        {isValidElement(title) ? <>{title}</> : title ? <p className={titleStyle()}>{title}</p> : null}
        {isValidElement(content) ? <>{content}</> : content ? <div>{content}</div> : null}
      </div>
    </div>
  );
});

Alert.displayName = 'Alert';
export default Alert;
