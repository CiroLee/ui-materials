import { forwardRef, useEffect, createRef, useState } from 'react';
import { tv } from 'tailwind-variants';
import Input from '../Input';
import { Size } from '@/packages/types/common';
const pinInput = tv({
  slots: {
    base: 'inline-flex gap-3',
    input: 'aspect-square text-center [&_input]:p-0 [&_input]:text-center',
  },
});
interface PinInputProps {
  quantity: number;
  type?: 'text' | 'password';
  disabled?: boolean;
  className?: string;
  size?: Size;
  style?: React.CSSProperties;
  onValueChange?: (value: string) => void;
  onCompleteChange?: (value: string) => void;
}
const PinInput = forwardRef<HTMLDivElement, PinInputProps>((props, ref) => {
  const { quantity, type, size, disabled, onValueChange, onCompleteChange, className, style } = props;
  const { base, input } = pinInput();

  const [inputRefs, setInputRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);
  const [pinValue, setPinValue] = useState<string[]>([]);
  useEffect(() => {
    setInputRefs(
      Array(quantity)
        .fill(null)
        .map(() => createRef<HTMLInputElement>()),
    );
  }, [quantity]);

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const nextInput = inputRefs[index + 1];
    const target = e.target as HTMLInputElement;
    setPinValue((pre) => {
      pre[index] = target.value;
      return [...pre];
    });
    onValueChange?.(target.value);
    if (nextInput?.current && target.value) {
      nextInput.current.focus();
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key !== 'Backspace') return;
    setPinValue((pre) => {
      pre[index] = '';
      return [...pre];
    });
    if (pinValue[index] === '') {
      const preInput = inputRefs[index - 1];
      if (preInput?.current) {
        preInput.current.focus();
      }
    }
  };

  // invoke onCompleteChange
  useEffect(() => {
    if (pinValue.length === quantity && pinValue.every(Boolean)) {
      onCompleteChange?.(pinValue.join(''));
    }
  }, [pinValue]);

  return (
    <div ref={ref} className={base({ class: className })} style={style}>
      {inputRefs.map((inputRef, index) => (
        <Input
          inputRef={inputRef}
          key={index}
          type={type}
          disabled={disabled}
          className={input()}
          maxLength={1}
          size={size}
          pwdIconVisible={false}
          onInput={(e) => handleOnInput(e, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
        />
      ))}
    </div>
  );
});

PinInput.displayName = 'PinInput';
export default PinInput;
