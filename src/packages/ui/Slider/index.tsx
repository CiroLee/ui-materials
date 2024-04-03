import { forwardRef, useState } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { tv, type VariantProps } from 'tailwind-variants';
import type { Direction } from '@/packages/types/common';
import cn from 'clsx';
const sliderStyle = tv({
  slots: {
    base: 'w-full rounded-full flex items-center select-none relative',
    track: 'bg-zinc-200 grow relative',
    range: 'absolute h-full',
    thumb: 'block rounded-full bg-white border-[2px] outline-none',
    markBar: 'mark-bar relative w-full h-full flex items-center',
    mark: `after:w-fit after:content-[attr(data-label)] after:absolute after:left-1/2 after:-translate-x-1/2 after:text-[14px] after:text-gray-400 after:transition-colors 
    [&.in-range]:after:text-inherit absolute aspect-square rounded-full bg-white border transition-colors`,
  },
  variants: {
    size: {
      tiny: {
        base: 'min-h-[12px]',
        track: 'rounded-[2px] h-[4px]',
        range: 'rounded-tl-[2px] rounded-bl-[2px]',
        thumb: 'size-[12px]',
        markBar: 'h-[4px]',
        mark: 'h-[8px] after:-bottom-[24px]',
      },
      small: {
        base: 'min-h-[16px]',
        track: 'rounded-[3px] h-[5px]',
        range: 'rounded-tl-[3px] rounded-bl-[3px]',
        thumb: 'size-[16px]',
        markBar: 'h-[5px]',
        mark: 'h-[9px] after:-bottom-[24px]',
      },
      medium: {
        base: 'min-h-[20px]',
        track: 'rounded-[3px] h-[6px]',
        range: 'rounded-tl-[3px] rounded-bl-[3px]',
        thumb: 'size-[20px]',
        markBar: 'h-[6px]',
        mark: 'h-[10px] after:-bottom-[28px]',
      },
      large: {
        base: 'min-h-[24px]',
        track: 'rounded-[4px] h-[8px]',
        range: 'rounded-tl-[4px] rounded-bl-[4px]',
        thumb: 'size-[24px] border-[3px]',
        markBar: 'h-[8px]',
        mark: 'h-[12px] after:-bottom-[32px]',
      },
    },
    colors: {
      primary: {
        range: 'bg-brand-500',
        thumb: 'border-brand-500',
        mark: 'border-brand-500/40 [&.in-range]:border-brand-500',
      },
      info: {
        range: 'bg-info-500',
        thumb: 'border-info-500',
        mark: 'border-info-500/40 [&.in-range]:border-info-500',
      },
      success: {
        range: 'bg-success-500',
        thumb: 'border-success-500',
        mark: 'border-success-500/40 [&.in-range]:border-success-500',
      },
      warn: {
        range: 'bg-warn-500',
        thumb: 'border-warn-500',
        mark: 'border-warn-500/40 [&.in-range]:border-warn-500',
      },
      danger: {
        range: 'bg-danger-500',
        thumb: 'border-danger-500',
        mark: 'border-danger-500/40 [&.in-range]:border-danger-500',
      },
    },
    direction: {
      horizontal: '',
      vertical: {
        base: 'w-fit h-full justify-center items-start',
        track: 'h-full',
        range: 'h-[unset] w-full rounded-tl-0',
        markBar: 'items-start justify-center h-full',
        mark: 'after:bottom-[unset] after:left-[unset] after:translate-x-0 after:top-1/2 after:-translate-y-1/2 after:-right-[40px]',
      },
    },
  },
  compoundVariants: [
    {
      direction: 'vertical',
      size: 'tiny',
      class: {
        track: 'w-[4px]',
        range: 'rounded-br-[2px]',
      },
    },
    {
      direction: 'vertical',
      size: 'small',
      class: {
        track: 'w-[5px]',
        range: 'rounded-br-[3px]',
      },
    },
    {
      direction: 'vertical',
      size: 'medium',
      class: {
        track: 'w-[6px]',
        range: 'rounded-br-[3px]',
        markBar: 'w-[6px]',
      },
    },
    {
      direction: 'vertical',
      size: 'large',
      class: {
        track: 'w-[8px]',
        range: 'rounded-br-[4px]',
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    colors: 'primary',
    direction: 'horizontal',
  },
});

type SliderVariants = VariantProps<typeof sliderStyle>;
interface SliderMark {
  [key: string]: string;
}
interface SliderProps extends SliderVariants {
  defaultValue?: number[];
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  marks?: SliderMark;
  className?: string;
  style?: React.CSSProperties;
}

const Slider = forwardRef<React.ElementRef<typeof RadixSlider.Root>, SliderProps>((props, ref) => {
  const { defaultValue, value, direction, min = 0, max = 100, step = 1, marks, size, colors, className, style } = props;
  const { base, track, range, thumb, markBar, mark } = sliderStyle({ size, colors, direction });
  const [sliderValue, setSliderValue] = useState<number[]>([]);

  const isMarkInRange = (key: string) => {
    const max = Math.max(...sliderValue);
    const min = Math.min(...sliderValue);
    if (min === max) {
      return Number(key) <= min;
    }
    return min <= Number(key) && Number(key) <= max;
  };

  const handleOnValueChange = (value: number[]) => {
    setSliderValue(value);
  };

  const calcOffset = (direction: Direction = 'horizontal', key: string): React.CSSProperties => {
    if (direction === 'horizontal') {
      return { left: `${key}%` };
    }

    return { top: `${100 - Number(key)}%` };
  };

  return (
    <RadixSlider.Root
      ref={ref}
      defaultValue={defaultValue}
      orientation={direction}
      value={value}
      min={min}
      max={max}
      step={step}
      className={base({ class: className })}
      style={style}
      onValueChange={handleOnValueChange}>
      <RadixSlider.Track className={track()}>
        <RadixSlider.Range className={range()}></RadixSlider.Range>
        {marks ? (
          <div className={markBar()}>
            {Object.entries(marks).map(([key, value], index) => (
              <div
                key={index}
                style={calcOffset(direction, key)}
                className={mark({
                  class: cn({
                    'in-range': isMarkInRange(key),
                  }),
                })}
                data-label={value}></div>
            ))}
          </div>
        ) : null}
      </RadixSlider.Track>
      <RadixSlider.Thumb className={thumb()} />
    </RadixSlider.Root>
  );
});

Slider.displayName = 'Slider';
export default Slider;
