import { forwardRef, useState, useEffect, useRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { CommonOption } from '@/packages/types/components';
import cn from 'clsx';

const segmentStyle = tv({
  slots: {
    base: 'bg-zinc-100 inline-flex box-border relative',
    item: `segment-item h-full flex flex-center select-none z-[2] transition-all text-zinc-500/70 [&:not(.disabled):not(.active)]:hover:text-zinc-600
    [&.disabled]:opacity-40 [&.disabled]:cursor-not-allowed`,
    indicator:
      'segment-indicator h-full transition-all ease-linear absolute top-0 z-[1] shadow [&.disabled]:shadow-none',
  },
  variants: {
    size: {
      tiny: {
        base: 'h-[26px] rounded-small p-[2px] text-[13px]',
        item: 'rounded-tiny px-[6px]',
        indicator: 'rounded-tiny',
      },
      small: {
        base: 'h-[34px] rounded-medium p-[3px] text-[14px]',
        item: 'rounded-small px-[6px]',
        indicator: 'rounded-small',
      },
      medium: {
        base: 'h-[42px] rounded-large p-[4px]',
        item: 'rounded-medium px-[8px]',
        indicator: 'rounded-medium',
      },
      large: {
        base: 'h-[50px] rounded-large p-[5px] text-[18px]',
        item: 'rounded-medium px-[8px]',
        indicator: 'rounded-medium',
      },
    },
    colors: {
      default: {
        item: '[&.active:not(.disabled)]:text-zinc-800',
        indicator: 'bg-white [&.disabled]:bg-[#f3f3f3]',
      },
      primary: {
        item: '[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white',
        indicator: 'bg-brand-500 shadow-brand-400 [&.disabled]:opacity-40',
      },
      info: {
        item: '[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white',
        indicator: 'bg-info-500 shadow-info-400 [&.disabled]:opacity-40',
      },
      success: {
        item: '[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white',
        indicator: 'bg-success-500 shadow-success-400 [&.disabled]:opacity-40',
      },
      warn: {
        item: '[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white',
        indicator: 'bg-warn-500 shadow-warn-400 [&.disabled]:opacity-40',
      },
      danger: {
        item: '[&.active:not(.disabled)]:text-white [&.active.disabled]:text-white',
        indicator: 'bg-danger-500 shadow-danger-400 [&.disabled]:opacity-40',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    colors: 'default',
  },
});

type SegmentVariants = VariantProps<typeof segmentStyle>;
interface SegmentProps extends SegmentVariants {
  defaultValue?: string;
  options: CommonOption[];
  className?: string;
  style?: React.CSSProperties;
  onSegmentChange?: (value: string) => void;
}

const Segment = forwardRef<HTMLDivElement, SegmentProps>((props, ref) => {
  const { options, defaultValue, size, colors, className, style, onSegmentChange } = props;
  const { base, item: itemStyle, indicator } = segmentStyle();
  const [activeValue, setActiveValue] = useState(defaultValue ?? options[0].value);
  const segmentRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const clickHandler = (item: CommonOption) => {
    if (item.disabled) return;
    setActiveValue(item.value);
    onSegmentChange?.(item.value);
  };

  const calcIndicatorStyle = () => {
    if (!indicatorRef.current) return;
    const children = segmentRef.current?.children || [];
    const activeIndex = options.findIndex((item) => item.value === activeValue);
    const activeEl = Array.from(children)[activeIndex] as HTMLDivElement;
    indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    if (activeEl.classList.contains('disabled')) {
      indicatorRef.current.classList.add('disabled');
    } else {
      indicatorRef.current.classList.remove('disabled');
    }
  };

  useEffect(() => {
    calcIndicatorStyle();
  }, [activeValue]);
  return (
    <div ref={ref} className={base({ size, class: className })} style={style}>
      <div ref={segmentRef} className="w-full flex relative">
        {options.map((item, index) => (
          <div
            className={itemStyle({
              size,
              colors,
              class: cn(`${activeValue === item.value ? 'active' : ''}`, { disabled: item.disabled }),
            })}
            key={index}
            onClick={() => clickHandler(item)}>
            {item.label}
          </div>
        ))}
        <div ref={indicatorRef} className={indicator({ size, colors })}></div>
      </div>
    </div>
  );
});
Segment.displayName = 'Segment';
export default Segment;
