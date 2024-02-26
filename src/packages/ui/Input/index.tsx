import { forwardRef, useState, useEffect, useMemo } from 'react';
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';
import { VariantProps, tv } from 'tailwind-variants';
import { globalInputStyle as gInput } from '@/packages/plugins/input.style';
const inputStyle = tv({
  slots: {
    base: gInput.base,
    input: gInput.input,
    prefix: gInput.prefix,
    suffix: gInput.suffix,
    count: 'text-[14px] text-black/50',
    eyeIcon: 'text-gray-400 cursor-pointer',
    rightBlock: 'relative pr-[8px] flex flex-center',
    clear: gInput.clear,
  },
  variants: {
    size: {
      tiny: {
        base: gInput.tinyBase,
        clear: gInput.tinyClear,
        input: `${gInput.smallInput} px-[6px]`,
        eyeIcon: 'size-[12px]',
      },
      small: {
        base: gInput.smallBase,
        clear: gInput.smallClear,
        input: `${gInput.smallInput} px-[6px]`,
        eyeIcon: 'size-[14px]',
      },
      medium: {
        base: gInput.mediumBase,
        clear: gInput.mediumClear,
        input: `${gInput.mediumInput} px-[8px]`,
        eyeIcon: 'size-[16px]',
      },
      large: {
        base: gInput.largeBase,
        clear: gInput.largeClear,
        input: `${gInput.largeInput} px-[8px]`,
        eyeIcon: 'size-[18px]',
      },
    },
    disabled: {
      true: {
        base: gInput.disabledBase,
        input: gInput.disabledInput,
      },
    },
    status: {
      error: {
        base: gInput.errorBase,
        prefix: '[&>*]:text-danger-500',
        suffix: '[&>*]:text-danger-500',
      },
      warn: {
        base: gInput.warnBase,
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
    const target = e.currentTarget;
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
      {allowClear && !disabled ? (
        <div className={rightBlock()}>
          <div className={clear({ size, allowClear: showClear })} onClick={handleClear}></div>
        </div>
      ) : null}
      {showCount ? <div className={count({ class: rightBlock() })}>{counts}</div> : null}
      {type === 'password' ? (
        <div className={rightBlock()} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <RiEyeLine className={eyeIcon()} /> : <RiEyeOffLine className={eyeIcon()} />}
        </div>
      ) : null}
      {suffix ? <div className={suffixStyle()}>{suffix}</div> : null}
    </label>
  );
});

Input.displayName = 'Input';

export default Input;
