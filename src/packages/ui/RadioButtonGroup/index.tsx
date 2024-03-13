import { forwardRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import Button from '../Button';
import type { RadioOption } from '@/packages/types/components';
import type { Size } from '@/packages/types/common';
const radioBtnGroupStyle = tv({
  base: 'flex gap-x-2.5',
});

type RadioButtonGroupVariants = VariantProps<typeof radioBtnGroupStyle>;
interface RadioButtonGroupProps extends RadioButtonGroupVariants {
  value?: string;
  type?: 'solid' | 'outline';
  options: RadioOption[];
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
  onValueChange?: (value: string) => void;
}

const RadioButtonGroup = forwardRef<React.ElementRef<typeof RadixRadioGroup.Root>, RadioButtonGroupProps>(
  (props, ref) => {
    const { value, type = 'outline', options, size, className, style, onValueChange } = props;
    const [checkedValue, setCheckedValue] = useState<string>(value || '');
    const activeCls = useMemo(() => {
      if (type === 'outline') {
        return 'border-brand-500';
      }
      return 'border-0 bg-brand-500 text-white hover:bg-brand-500/90 active:bg-brand-600';
    }, [type]);
    return (
      <RadixRadioGroup.Root
        ref={ref}
        className={radioBtnGroupStyle({ class: className })}
        style={style}
        onValueChange={(value: string) => {
          setCheckedValue(value);
          onValueChange?.(value);
        }}>
        {options.map((option) => (
          <RadixRadioGroup.Item asChild key={option.value} disabled={option.disabled} value={option.value}>
            <Button
              outline
              type="text"
              shape="square"
              size={size}
              className={clsx({ [activeCls]: checkedValue === option.value })}>
              {option.label}
            </Button>
          </RadixRadioGroup.Item>
        ))}
      </RadixRadioGroup.Root>
    );
  },
);

RadioButtonGroup.displayName = 'RadioButtonGroup';
export default RadioButtonGroup;
