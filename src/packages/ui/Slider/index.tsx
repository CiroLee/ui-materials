import { forwardRef, useEffect, useState } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { tv, type VariantProps } from 'tailwind-variants';
import cn from 'clsx';

const sliderStyle = tv({
  slots: {
    base: 'w-full rounded-full flex items-center select-none relative data-[disabled]:opacity-60 data-[disabled]:cursor-not-allowed group',
    track: 'bg-zinc-200 grow relative',
    range: 'absolute h-full data-[orientation=vertical]:h-[unset] data-[orientation=vertical]:w-full',
    thumb:
      'slider-thumb block rounded-full bg-white border-[2px] outline-none transition-all hover:scale-[1.15] data-[disabled]:pointer-events-none',
  },
  variants: {
    size: {
      tiny: {
        base: 'min-h-[12px]',
        track: 'rounded-[2px] h-[4px]',
        range:
          'rounded-tl-[2px] rounded-bl-[2px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[2px] [&.inverted]:rounded-tl-[2px] [&.inverted]:rounded-br-[2px]',
        thumb: 'size-[12px]',
      },
      small: {
        base: 'min-h-[16px]',
        track: 'rounded-[3px] h-[5px]',
        range:
          'rounded-tl-[3px] rounded-bl-[3px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[3px] [&.inverted]:rounded-tl-[3px] [&.inverted]:rounded-br-[3px]',
        thumb: 'size-[16px]',
      },
      medium: {
        base: 'min-h-[20px]',
        track: 'rounded-[3px] h-[6px]',
        range:
          'rounded-tl-[3px] rounded-bl-[3px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[3px] [&.inverted]:rounded-tl-[3px] [&.inverted]:rounded-br-[3px]',
        thumb: 'size-[20px]',
      },
      large: {
        base: 'min-h-[24px]',
        track: 'rounded-[4px] h-[8px]',
        range:
          'rounded-tl-[4px] rounded-bl-[4px] [&.inverted]:rounded-0 [&.inverted]:rounded-tr-[4px] [&.inverted]:rounded-tl-[4px] [&.inverted]:rounded-br-[4px]',
        thumb: 'size-[24px] border-[3px]',
      },
    },
    colors: {
      primary: {
        range: 'bg-brand-500',
        thumb: 'border-brand-500',
      },
      info: {
        range: 'bg-info-500',
        thumb: 'border-info-500',
      },
      success: {
        range: 'bg-success-500',
        thumb: 'border-success-500',
      },
      warn: {
        range: 'bg-warn-500',
        thumb: 'border-warn-500',
      },
      danger: {
        range: 'bg-danger-500',
        thumb: 'border-danger-500',
      },
    },
    direction: {
      horizontal: '',
      vertical: {
        base: 'w-fit h-full justify-center items-start',
        track: 'h-full',
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
interface SliderProps extends SliderVariants {
  defaultValue?: number[];
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  inverted?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onValueChange?: (value: number[]) => void;
}

const Slider = forwardRef<React.ElementRef<typeof RadixSlider.Root>, SliderProps>((props, ref) => {
  const {
    defaultValue,
    value,
    direction,
    min = 0,
    max = 100,
    step = 1,
    size,
    colors,
    disabled,
    inverted,
    className,
    style,
    onValueChange,
  } = props;
  const { base, track, range, thumb } = sliderStyle({ size, colors, direction });
  const [sliderValue, setSliderValue] = useState<number[]>(defaultValue || []);

  const handleOnValueChange = (value: number[]) => {
    setSliderValue(value);
    onValueChange?.(value);
  };

  useEffect(() => {
    value && setSliderValue(value);
  }, [value]);

  return (
    <RadixSlider.Root
      ref={ref}
      inverted={inverted}
      disabled={disabled}
      defaultValue={defaultValue}
      orientation={direction}
      value={sliderValue}
      min={min}
      max={max}
      step={step}
      className={base({ class: className })}
      style={style}
      onValueChange={handleOnValueChange}>
      <RadixSlider.Track className={track()}>
        <RadixSlider.Range className={range({ class: cn({ inverted }) })}></RadixSlider.Range>
      </RadixSlider.Track>
      {sliderValue.map((_, index) => (
        <RadixSlider.Thumb key={index} className={thumb()} />
      ))}
    </RadixSlider.Root>
  );
});

Slider.displayName = 'Slider';
export default Slider;
