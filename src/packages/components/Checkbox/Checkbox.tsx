import { forwardRef, useState } from 'react';
import cn from 'classnames';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { motion, AnimatePresence } from 'framer-motion';
export interface CheckboxType {
  value?: string | number;
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
}
export interface CheckboxProps extends CheckboxType {
  onCheckedChange?: (checked: boolean, value?: string | number) => void;
}

const Checkbox = forwardRef<React.ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>((props, ref) => {
  const [checked, setChecked] = useState(props.checked);

  return (
    <label className={cn('flex items-center', props.className, { 'cursor-not-allowed': props.disabled })}>
      <RadixCheckbox.Root
        ref={ref}
        checked={checked}
        disabled={props.disabled}
        onCheckedChange={(checked) => {
          setChecked(!!checked);
          props.onCheckedChange?.(!!checked, props.value);
        }}
        className={cn(
          `w-[18px] h-[18px] relative rounded-sm border border-gray-200 border-1 box-border overflow-hidden cursor-default 
        transition-colors duration-200 hover:border-brand-500 data-[state=checked]:border-brand-500 data-[disabled]:bg-gray-200 
        data-[disabled]:cursor-not-allowed data-[disabled]:border-gray-300`,
          { '!border-brand-500/70': checked && props.disabled },
        )}>
        <AnimatePresence>
          {checked ? (
            <RadixCheckbox.Indicator forceMount>
              <motion.span
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn('flex items-center h-full justify-center stroke-white-500', {
                  'bg-brand-500': checked,
                  'bg-brand-500/70': checked && props.disabled,
                })}>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    transition={{ duration: 0.2 }}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0 }}
                    d="M1.375 5.225L5.425 9.275L5.875 8.79687L12.625 1.625"
                    stroke="white"
                    strokeWidth="1.875"
                  />
                </svg>
              </motion.span>
            </RadixCheckbox.Indicator>
          ) : null}
        </AnimatePresence>
      </RadixCheckbox.Root>
      {props.children ? (
        <div className={cn('ml-[6px]', { 'text-gray-400/80': props.disabled })}>{props.children}</div>
      ) : null}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
