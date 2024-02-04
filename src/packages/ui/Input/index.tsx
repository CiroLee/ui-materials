import { forwardRef, useState, useEffect, useMemo } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import { VariantProps, tv } from 'tailwind-variants';
const inputStyle = tv({
  slots: {
    base: `flex overflow-hidden rounded-medium border border-black/10 has-[:focus]:border-brand-500 hover:border-brand-500/60 transition-colors ease-linear`,
    input: 'full px-[8px] outline-0 placeholder:text-black/30 bg-transparent',
    prefix: 'flex flex-center pl-[8px]',
    suffix: 'flex flex-center pr-[8px]',
    count: 'text-[14px] text-black/50',
    eyeIcon: 'text-gray-400 cursor-pointer',
    rightBlock: 'relative pr-[8px] flex flex-center',
    clear: `rounded-[12px] flex flex-center duration-200 transition-all scale-0 bg-gray-300/30 after:absolute after:rotate-45 after:w-[1px] after:rounded-[1px]  
    after:bg-gray-400 before:absolute before:-rotate-45 before:w-[1px] before:rounded-[1px] before:bg-gray-400 hover:bg-gray-400/40 hover:after:bg-gray-800 hover:before:bg-gray-800`,
  },
  variants: {
    size: {
      tiny: {
        base: 'h-global-ty text-[14px]',
        clear: 'size-[12px] before:h-[6px] after:h-[6px]',
        input: 'placeholder:text-[14px] text-[14px]',
        eyeIcon: 'size-[12px]',
      },
      small: {
        base: 'h-global-sm text-[14px]',
        clear: 'size-[14px] before:h-[6px] after:h-[6px]',
        input: 'placeholder:text-[14px] text-[14px]',
        eyeIcon: 'size-[14px]',
      },
      medium: {
        base: 'h-global-md',
        clear: 'size-[16px] before:h-[8px] after:h-[8px]',
        input: 'placeholder:text-[16px] text-[16px]',
        eyeIcon: 'size-[16px]',
      },
      large: {
        base: 'h-global-lg',
        clear: 'size-[18px] before:h-[10px] after:h-[10px]',
        input: 'placeholder:text-[18px] text-[18px]',
        eyeIcon: 'size-[18px]',
      },
    },
    disabled: {
      true: {
        base: 'bg-black/[0.02] text-black/30',
        input: 'cursor-not-allowed',
      },
    },
    status: {
      error: {
        base: 'border-danger-500 hover:border-danger-500/60 has-[:focus]:border-danger-500',
        prefix: '[&>*]:text-danger-500',
        suffix: '[&>*]:text-danger-500',
      },
      warn: {
        base: 'border-warn-500 hover:border-warn-500/60 has-[:focus]:border-warn-500',
        prefix: '[&>*]:text-warn-500',
        suffix: '[&>*]:text-warn-500',
      },
      readonly: {},
    },
    allowClear: {
      true: {
        clear: 'scale-1',
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      class: {
        base: 'border-black/10 hover:border-black/10',
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
  },
});

type InputVariants = VariantProps<typeof inputStyle>;
export interface InputProps extends InputVariants {
  type?: 'text' | 'password';
  placeholder?: string;
  showCount?: boolean;
  maxLength?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLLabelElement, InputProps>((props, ref) => {
  const {
    type = 'text',
    value = '',
    allowClear,
    showCount,
    maxLength,
    status,
    disabled,
    placeholder,
    size,
    prefix,
    suffix,
    onChange,
    onInput,
    onBlur,
    onFocus,
    className,
    style,
  } = props;
  const { base, input, prefix: prefixStyle, clear, count, suffix: suffixStyle, eyeIcon, rightBlock } = inputStyle();
  const [val, setVal] = useState<string>(value);
  const [showClear, setShowClear] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleClear = () => {
    if (val.length) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  };

  const counts = useMemo(() => {
    if (!showCount) return;
    return maxLength ? `${val.length}/${maxLength}` : `${val.length}`;
  }, [maxLength, val.length, showCount]);

  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setVal(target.value);
    onInput?.(e);
  };

  const handleClear = () => {
    showClear && setVal('');
  };

  useEffect(() => {
    if (allowClear) {
      toggleClear();
    }
  }, [val.length]);

  return (
    <label className={base({ size, disabled, status, class: className })} ref={ref} style={style}>
      {prefix ? <div className={prefixStyle({ status })}>{prefix}</div> : null}
      <input
        className={input({ disabled, size })}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={status === 'readonly'}
        value={val}
        maxLength={maxLength}
        onInput={onInputHandler}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {allowClear ? (
        <div className={rightBlock()}>
          <div className={clear({ size, allowClear: showClear })} onClick={handleClear}></div>
        </div>
      ) : null}
      {showCount ? <div className={count({ class: rightBlock() })}>{counts}</div> : null}
      {type === 'password' ? (
        <div className={rightBlock()} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Eye className={eyeIcon()} /> : <EyeOff className={eyeIcon()} />}
        </div>
      ) : null}
      {suffix ? <div className={suffixStyle()}>{suffix}</div> : null}
    </label>
  );
});

Input.displayName = 'Input';

export default Input;
