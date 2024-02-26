import { forwardRef, useState, useRef, useEffect, useMemo } from 'react';
import { RiArrowUpSLine } from '@remixicon/react';
import { tv, type VariantProps } from 'tailwind-variants';
import { globalInputStyle as gInput } from '@/packages/plugins/input.style';
const inputNumberStyle = tv({
  slots: {
    base: `${gInput.base} group`,
    input: gInput.input,
    prefix: gInput.prefix,
    rightBlock: 'relative flex flex-col flex-center overflow-hidden',
    spinButton: `select-none relative bg-brand-500/10 flex flex-center opacity-0 transition-all duration-200 
    ease-linear group-hover:opacity-100 group/btn hover:bg-brand-500/20 rounded-[2px]`,
    spinArrow: 'text-gray-400/60 group-hover/btn:text-brand-500',
  },
  variants: {
    size: {
      tiny: {
        base: gInput.tinyBase,
        input: `${gInput.smallInput} px-[6px]`,
        spinButton: 'size-[10px]',
        spinArrow: 'size-[10px]',
        rightBlock: 'pr-[4px]',
      },
      small: {
        base: gInput.smallBase,
        input: `${gInput.smallInput} px-[6px]`,
        spinButton: 'size-[10px]',
        spinArrow: 'size-[10px]',
        rightBlock: 'pr-[6px]',
      },
      medium: {
        base: gInput.mediumBase,
        input: `${gInput.mediumInput} px-[8px]`,
        spinButton: 'size-[14px]',
        spinArrow: 'size-[14px]',
        rightBlock: 'pr-[8px]',
      },
      large: {
        base: gInput.largeBase,
        input: `${gInput.largeInput} px-[8px]`,
        spinButton: 'size-[16px]',
        spinArrow: 'size-[16px]',
        rightBlock: 'pr-[8px]',
      },
    },
    disabled: {
      true: {
        base: gInput.disabledBase,
        input: gInput.disabledInput,
        rightBlock: 'opacity-0',
      },
    },
    status: {
      error: {
        base: gInput.errorBase,
        prefix: '[&>*]:text-danger-500',
        suffix: '[&>*]:text-danger-500',
        spinButton: 'bg-danger-500/10 hover:bg-danger-500/20',
      },
      warn: {
        base: gInput.warnBase,
        prefix: '[&>*]:text-warn-500',
        suffix: '[&>*]:text-warn-500',
        spinButton: 'bg-warn-500/10 hover:bg-warn-500/20',
      },
      readonly: {},
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
type InputNumberVariants = VariantProps<typeof inputNumberStyle>;
interface InputNumberProps extends InputNumberVariants {
  value?: number | null;
  placeholder?: string;
  step?: number;
  min?: number;
  max?: number;
  keyboard?: boolean;
  prefix?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: number | null) => void;
  onInput?: (value: number | null) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onStep?: (value: number, option: { step: number; type: 'increase' | 'decrease' }) => void;
}

const InputNumber = forwardRef<HTMLLabelElement, InputNumberProps>((props, ref) => {
  const {
    size,
    value,
    status,
    step = 1,
    placeholder,
    min = -Infinity,
    max = Infinity,
    disabled,
    keyboard = true,
    prefix,
    onChange,
    onInput,
    onBlur,
    onFocus,
    onStep,
    className,
    style,
  } = props;
  const { base, input, spinButton, spinArrow, rightBlock, prefix: prefixStyle } = inputNumberStyle();
  const inputRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState<number | string | undefined>(value ?? '');

  const increaseDisabled = useMemo(() => {
    if (Number(val) >= max) return true;
    return false;
  }, [val]);
  const decreaseDisabled = useMemo(() => {
    if (Number(val) <= min) return true;
    return false;
  }, [val]);

  const wrapReturnedValue = (value: string): number | null => {
    if (value === '') return null;
    return Number(value);
  };

  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    setVal(target.value);
    onInput?.(wrapReturnedValue(target.value));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    onChange?.(wrapReturnedValue(target.value));
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value === '') return;
    const value = Number(target.value);
    if (value > max) {
      setVal(max.toString());
    } else if (value < min) {
      setVal(min.toString());
    }
    onBlur?.(e);
  };

  // number change handler, for right buttons, keyboard event(ArrowUp and ArrowDown)
  const handleStepChange = (step: number, type: 'increase' | 'decrease', isBtn = false) => {
    const newVal = !val ? step : type === 'increase' ? Number(val) + step : Number(val) - step;
    if (type === 'increase' && newVal < min) {
      setVal(String(min));
    } else if (newVal < min || newVal > max || status === 'readonly') {
      return;
    } else {
      setVal(String(newVal));
    }
    if (isBtn) {
      onStep?.(newVal, { step, type });
    }
  };

  const inputKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    e.preventDefault();
    [e.key === 'ArrowUp', keyboard].every(Boolean) && handleStepChange(step, 'increase');
    [e.key === 'ArrowDown', keyboard].every(Boolean) && handleStepChange(step, 'decrease');
  };

  useEffect(() => {
    inputRef.current?.addEventListener('keydown', inputKeyDownHandler as unknown as EventListener);
    return () => {
      inputRef.current?.removeEventListener('keydown', inputKeyDownHandler as unknown as EventListener);
    };
  }, [step, val, keyboard]);

  return (
    <label ref={ref} className={base({ size, status, disabled, class: className })} style={style}>
      {prefix ? <div className={prefixStyle({ status })}>{prefix}</div> : null}
      <input
        ref={inputRef}
        type="number"
        value={val ?? ''}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={status === 'readonly'}
        className={input({ size, disabled, class: 'input-number' })}
        onInput={onInputHandler}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocus}
      />
      <div className={rightBlock({ size, disabled })}>
        <div
          className={spinButton({ status, size, class: `${increaseDisabled ? 'cursor-not-allowed' : ''}` })}
          onClick={() => handleStepChange(step, 'increase', true)}>
          <RiArrowUpSLine className={spinArrow()} />
        </div>
        <div
          className={spinButton({ status, size, class: `${decreaseDisabled ? 'cursor-not-allowed' : ''}` })}
          onClick={() => handleStepChange(step, 'decrease', true)}>
          <RiArrowUpSLine className={spinArrow({ class: 'rotate-180' })} />
        </div>
      </div>
    </label>
  );
});

InputNumber.displayName = 'InputNumber';
export default InputNumber;
