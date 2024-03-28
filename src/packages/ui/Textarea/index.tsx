import { forwardRef, useState, useRef, useEffect, useMemo } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { globalInputStyle as gInput } from '@/packages/plugins/input.style';
const textarea = tv({
  slots: {
    base: `${gInput.base} w-fit`,
    input: 'outline-none placeholder:text-black/30 bg-transparent p-[8px] leading-[1.3] min-h-[38px]',
    clear: `${gInput.clear} size-[16px] absolute before:h-[8px] after:h-[8px] right-[8px] bottom-[8px] z-[2]`,
    count: 'text-[14px] text-black/50 absolute right-0 -bottom-[24px]',
  },
  variants: {
    resize: {
      both: {
        input: 'resize',
      },
      horizontal: {
        input: 'resize-x',
      },
      vertical: {
        input: 'resize-y',
      },
      none: {
        input: 'resize-none overflow-hidden',
      },
    },
    disabled: {
      true: {
        base: gInput.disabledBase,
        input: gInput.disabledInput,
      },
    },
    showCount: {
      true: {
        base: 'mb-[24px]',
      },
    },

    status: {
      error: {
        base: gInput.errorBase,
      },
      warn: {
        base: gInput.warnBase,
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
    resize: 'both',
  },
});

type TextareaVariants = VariantProps<typeof textarea>;
interface TextareaProps extends TextareaVariants {
  value?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  autoHeight?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onInput?: React.FormEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
}

const Textarea = forwardRef<HTMLLabelElement, TextareaProps>((props, ref) => {
  const {
    value,
    placeholder,
    resize,
    disabled,
    allowClear,
    showCount,
    status,
    rows = 3,
    maxLength,
    autoHeight,
    className,
    style,
    onInput,
    onBlur,
    onChange,
    onFocus,
  } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { base, input, clear, count } = textarea();
  const [val, setVal] = useState(value || '');
  const [showClear, setShowClear] = useState(false);

  const counts = useMemo(() => {
    if (!showCount) return;
    return maxLength ? `${val.length}/${maxLength}` : `${val.length}`;
  }, [maxLength, val.length, showCount]);

  const toggleClear = () => {
    if (val.length) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  };

  const handleClear = () => {
    showClear && setVal('');
  };

  const handleAutoHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  };
  const onInputHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setVal(e.currentTarget.value);
    autoHeight && handleAutoHeight();
    onInput?.(e);
  };

  useEffect(() => {
    if (allowClear) {
      toggleClear();
    }
  }, [val.length]);

  return (
    <label ref={ref} className={base({ disabled, status, showCount })} style={style}>
      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        readOnly={status === 'readonly'}
        className={input({ disabled, resize: autoHeight ? 'none' : resize, class: `${className}` })}
        rows={rows}
        value={val}
        onInput={onInputHandler}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {allowClear && !disabled ? <div className={clear({ allowClear: showClear })} onClick={handleClear} /> : null}
      {showCount ? <div className={count()}>{counts}</div> : null}
    </label>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
