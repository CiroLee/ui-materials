import { forwardRef, useEffect, useRef, useState, useCallback, PropsWithChildren } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const circleProgressStyle = tv({
  slots: {
    base: 'relative inline-block overflow-hidden',
    svg: 'stroke-2',
    indicator: 'transition-all',
    tracker: 'stroke-black/10',
  },
  variants: {
    size: {
      small: {
        base: 'w-[32px] h-[32px]',
      },
      medium: {
        base: 'w-[56px] h-[56px]',
      },
      large: {
        base: 'w-[80px] h-[80px]',
      },
    },
    colors: {
      primary: {
        indicator: 'stroke-brand-500',
      },
      success: {
        indicator: 'stroke-success-500',
      },
      warn: {
        indicator: 'stroke-warn-500',
      },
      danger: {
        indicator: 'stroke-danger-500',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    colors: 'primary',
  },
});

type CircleProgressVariants = VariantProps<typeof circleProgressStyle>;
interface CircleProgress extends CircleProgressVariants, PropsWithChildren {
  percent?: number;
  svgClassName?: string;
  indicatorClassName?: string;
  trackerClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CircleProgress = forwardRef<HTMLDivElement, CircleProgress>((props, ref) => {
  const {
    percent = 0,
    size,
    colors,
    svgClassName,
    indicatorClassName,
    trackerClassName,
    className,
    style,
    children,
  } = props;
  const { svg, indicator, base, tracker } = circleProgressStyle();
  const svgRef = useRef<SVGSVGElement>(null);
  const [strokeDashLength, setStrokeDashLength] = useState<number>(0);
  const calcStrokeDashLength = () => {
    const periLength = 2 * Math.PI * 10;
    setStrokeDashLength(periLength);
  };

  const updateOffset = useCallback(() => {
    const percentage = percent < 0 ? 0 : percent > 100 ? 100 : percent;
    const offset = strokeDashLength - (strokeDashLength * percentage) / 100;
    return offset >= strokeDashLength ? strokeDashLength : offset;
  }, [percent, strokeDashLength]);

  useEffect(() => {
    if (svgRef.current) {
      calcStrokeDashLength();
    }
  }, []);
  return (
    <div className={base({ size, class: className })} style={style} ref={ref}>
      <svg ref={svgRef} viewBox="0 0 24 24" fill="none" className={svg({ size, class: svgClassName })}>
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeLinecap="round"
          transform="rotate(-90 12 12)"
          className={tracker({ class: trackerClassName })}
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          transform="rotate(-90 12 12)"
          strokeLinecap="round"
          className={indicator({ colors, class: indicatorClassName })}
          strokeDashoffset={updateOffset()}
          strokeDasharray={`${strokeDashLength} ${strokeDashLength}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-center">{children}</div>
    </div>
  );
});

CircleProgress.displayName = 'CircleProgress';

export default CircleProgress;
