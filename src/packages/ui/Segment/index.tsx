import { forwardRef, useState, useEffect, useRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { RadioOption } from '@/packages/types/components';
import cn from 'clsx';

const segmentStyle = tv({
  slots: {
    base: 'bg-zinc-100 inline-flex box-border relative',
    item: `h-full flex items-center select-none z-[2] transition-all text-zinc-500/70 [&.active:not(.disabled)]:text-zinc-800 hover:text-zinc-600
    [&.disabled]:text-zinc-300 [&.disabled]:cursor-not-allowed`,
    indicator: 'segment__indicator h-full transition-all ease-linear bg-white shadow absolute top-0 z-[1]',
  },
  variants: {
    size: {
      tiny: {
        base: 'h-[26px] rounded-small p-[2px] text-[13px]',
        item: 'rounded-tiny px-[4px]',
        indicator: 'rounded-tiny',
      },
      small: {
        base: 'h-[34px] rounded-medium p-[4px] text-[14px]',
        item: 'rounded-small px-[6px]',
        indicator: 'rounded-small',
      },
      medium: {
        base: 'h-[42px] rounded-large p-[4px]',
        item: 'rounded-medium px-[6px]',
        indicator: 'rounded-medium',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type SegmentVariants = VariantProps<typeof segmentStyle>;
interface SegmentProps extends SegmentVariants {
  value?: string;
  options: RadioOption[];
  className?: string;
  style?: React.CSSProperties;
}

const Segment = forwardRef<HTMLDivElement, SegmentProps>((props, ref) => {
  const { options, value, size, className, style } = props;
  const { base, item: itemStyle, indicator } = segmentStyle();
  const [activeValue, setActiveValue] = useState(value ?? options[0].value);
  const segmentRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = (item: RadioOption) => {
    if (item.disabled) return;
    setActiveValue(item.value);
  };

  const calcIndicatorStyle = () => {
    if (!indicatorRef.current) return;
    const children = segmentRef.current?.children || [];
    const activeIndex = options.findIndex((item) => item.value === activeValue);
    const activeEl = Array.from(children)[activeIndex] as HTMLDivElement;
    indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    if (activeEl.classList.contains('disabled')) indicatorRef.current.style.background = '#f3f3f3';
  };

  useEffect(() => {
    calcIndicatorStyle();
  }, [activeValue]);
  return (
    <div ref={ref} className={base({ size, class: className })} style={style}>
      <div ref={segmentRef} className="flex relative">
        {options.map((item, index) => (
          <div
            className={itemStyle({
              size,
              class: cn(`${activeValue === item.value ? 'active' : ''}`, { disabled: item.disabled }),
            })}
            key={index}
            onClick={() => clickHandler(item)}>
            {item.label}
          </div>
        ))}
        <div ref={indicatorRef} className={indicator({ size })}></div>
      </div>
    </div>
  );
});
Segment.displayName = 'Segment';
export default Segment;
