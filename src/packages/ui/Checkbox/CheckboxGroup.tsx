import { forwardRef, useEffect, useRef } from 'react';
import Checkbox, { type CheckboxProps } from './Checkbox';
export interface CheckboxGroupProps {
  value?: string | number;
  className?: string;
  style?: React.CSSProperties;
  options: Omit<CheckboxProps, 'onCheckedChange'>[];
  onCheckedChange?: (list: (string | number | undefined)[]) => void;
}

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const listRef = useRef<(string | number | undefined)[]>([]);
  const onCheckedChangeHandler = (checked?: boolean, value?: string | number) => {
    listRef.current = checked ? [...listRef.current, value] : listRef.current.filter((item) => item !== value);
    props.onCheckedChange?.(listRef.current);
  };
  useEffect(() => {
    if (props.value !== undefined) {
      listRef.current.push(props.value);
    }
  }, [props.value]);
  return (
    <div className={props.className} style={props.style} ref={ref}>
      {props.options.map((option) => (
        <Checkbox
          checked={props.value === option.value}
          key={option.value}
          {...option}
          onCheckedChange={onCheckedChangeHandler}
        />
      ))}
    </div>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
