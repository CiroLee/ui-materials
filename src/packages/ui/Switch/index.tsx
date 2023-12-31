import { forwardRef, useState } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import clsx from 'clsx';
import { Size } from '../../types/common';
interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: Size;
  checkedThumb?: React.ReactNode;
  unCheckedThumb?: React.ReactNode;
  thumbNode?: [React.ReactNode, React.ReactNode];
  style?: React.CSSProperties;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
}

const sizeStylesMap = {
  tiny: {
    '--width': '32px',
    '--height': '18px',
  },
  small: {
    '--width': '40px',
    '--height': '22px',
  },
  medium: {
    '--width': '48px',
    '--height': '26px',
  },
  large: {
    '--width': '56px',
    '--height': '30px',
  },
};

function getStyleBySize(size: Size, style?: React.CSSProperties): React.CSSProperties {
  const _size = sizeStylesMap[size] || {};
  return {
    ...style,
    '--gap': '8px',
    '--padding': '4px',
    ..._size,
  } as unknown as React.CSSProperties;
}

const Switch = forwardRef<React.ElementRef<typeof RadixSwitch.Root>, SwitchProps>((props, ref) => {
  const [checked, setChecked] = useState(props.checked ?? props.defaultChecked);
  const checkedChangeHandler = (checked: boolean) => {
    setChecked(checked);
    props.onCheckedChange?.(checked);
  };
  return (
    <RadixSwitch.Root
      ref={ref}
      checked={checked}
      defaultChecked={props.defaultChecked}
      onCheckedChange={checkedChangeHandler}
      disabled={props.disabled}
      className={clsx(
        'h-[var(--height)] w-[var(--width)] cursor-default rounded-[var(--height)] box-border bg-gray-400/40 p-[var(--padding)] transition-colors ease-linear',
        {
          'data-[state=checked]:bg-brand-500': checked && !props.disabled,
          'data-[disabled]:bg-brand-500/70 cursor-not-allowed': props.disabled && checked,
          'data-[disabled]:bg-gray-200 cursor-not-allowed': props.disabled && !checked,
        },
        props.className,
      )}
      style={getStyleBySize(props.size || 'medium', props.style)}>
      <RadixSwitch.Thumb
        className="block relative w-[calc(var(--height)-var(--gap))] h-[calc(var(--height)-var(--gap))] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] ease-linear transition-transform
       will-change-transform bg-white data-[state=checked]:translate-x-[calc(var(--width)-var(--height)+var(--gap)-2*var(--padding))]">
        {checked ? props.checkedThumb : props.unCheckedThumb}
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
});

Switch.displayName = 'Switch';

export default Switch;
