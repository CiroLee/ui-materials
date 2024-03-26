import { forwardRef, useEffect, useRef } from 'react';
import { useTransform, motion, useMotionValue, animate, useInView } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  decimal?: number;
  duration?: number;
  delay?: number;
  isInView?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onUpDate?: (latest: number) => void;
  onComplete?: () => void;
}

const Counter = forwardRef<HTMLDivElement, CounterProps>((props, ref) => {
  const {
    from = 0,
    decimal = 0,
    to,
    isInView,
    duration = 2,
    delay = 0,
    prefix,
    suffix,
    className,
    style,
    onUpDate,
    onComplete,
  } = props;
  const initValue = useMotionValue(from);
  const count = useTransform(initValue, (val) => val.toFixed(decimal));
  const counterRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(counterRef);

  useEffect(() => {
    const animation = animate(initValue, to, {
      duration,
      delay: delay / 1000,
      ease: 'circOut',
      onUpdate: (latest) => {
        onUpDate?.(latest);
        if (latest === to) {
          onComplete?.();
        }
      },
    });
    if (isInView) {
      animation.pause();
      inView && animation.play();
    }
    return animation.stop;
  }, [from, to, duration, delay, initValue, isInView, inView]);
  return (
    <div ref={counterRef} className={className} style={style}>
      {prefix}
      <motion.div className="counter__value leading-[1]" ref={ref}>
        {count}
      </motion.div>
      {suffix}
    </div>
  );
});

Counter.displayName = 'Counter';
export default Counter;
