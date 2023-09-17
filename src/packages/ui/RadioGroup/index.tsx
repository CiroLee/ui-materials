import { forwardRef, useState } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}
interface RadioGroupProps {
  orientation?: 'vertical' | 'horizontal';
  value?: string;
  options: RadioOption[];
  className?: string;
  style?: React.CSSProperties;
  onValueChange?: (value: string) => void;
}

const RadioGroup = forwardRef<React.ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>((props, ref) => {
  const { orientation = 'horizontal' } = props;
  const [indicatorIndex, setIndicatorIndex] = useState<string>(props.value || '');
  return (
    <RadixRadioGroup.Root
      className={cn(
        'flex gap-x-2.5',
        {
          'flex-col': orientation === 'vertical',
        },
        props.className,
      )}
      style={props.style}
      ref={ref}
      onValueChange={(value: string) => {
        setIndicatorIndex(value);
        props.onValueChange?.(value);
      }}>
      {props.options.map((option) => (
        <label key={option.value} className="flex items-center">
          <RadixRadioGroup.Item
            className={cn(
              `w-[18px] h-[18px] rounded-full border overflow-hidden box-border transition-colors relative cursor-default
               data-[state=checked]:border-brand-500 data-[disabled]:border-gray-300 data-[disabled]:cursor-not-allowed`,
              { 'data-[disabled]:bg-gray-200': option.disabled && indicatorIndex !== option.value },
              { 'data-[disabled]:bg-brand-500/20': option.disabled && indicatorIndex === option.value },
            )}
            disabled={option.disabled}
            value={option.value}>
            <AnimatePresence>
              {indicatorIndex === option.value ? (
                <RadixRadioGroup.Indicator
                  className="flex items-center justify-center w-full h-full relative"
                  forceMount>
                  <motion.div
                    transition={{ duration: 0.15, ease: 'easeInOut' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(`w-[60%] h-[60%] rounded-full bg-brand-500`, {
                      'bg-brand-500/70': option.disabled,
                    })}></motion.div>
                </RadixRadioGroup.Indicator>
              ) : null}
            </AnimatePresence>
          </RadixRadioGroup.Item>
          <div className={cn('ml-2', { 'text-gray-400/80 cursor-not-allowed': option.disabled })}>{option.label}</div>
        </label>
      ))}
    </RadixRadioGroup.Root>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
