import { forwardRef, useEffect } from 'react';
import Checkbox, { type CheckboxProps } from './Checkbox';
export interface CheckboxGroupProps {
  value?: string | number;
  className?: string;
  options: Omit<CheckboxProps, 'onCheckedChange'>[];
  onCheckedChange?: (list: (string | number | undefined)[]) => void;
}

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  let list: (string | number | undefined)[] = [];
  const onCheckedChangeHandler = (checked?: boolean, value?: string | number) => {
    list = checked ? [...list, value] : list.filter((item) => item !== value);
    props.onCheckedChange?.(list);
  };
  useEffect(() => {
    list.push(props.value);
  }, [props.value]);
  return (
    <div className={props.className} ref={ref}>
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
