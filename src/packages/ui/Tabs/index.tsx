import { forwardRef, useRef, useState, useEffect } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import type { CommonOption } from '@/packages/types/components';

const tabsStyle = tv({
  slots: {
    label: 'flex border-b border-gray-200 relative',
    labelItem: 'flex flex-center h-[40px] px-3 cursor-default transition-colors',
    indicator: 'h-[2px] absolute bottom-0 transition-all [&.disabled]:bg-gray-300',
  },
  variants: {
    disabled: {
      true: {
        labelItem: 'disabled cursor-not-allowed text-gray-300',
      },
    },
    active: {
      true: {
        labelItem: 'active',
      },
    },
    colors: {
      info: {
        labelItem: '[&:not(.active):not(.disabled)]:hover:text-info-500 [&.active]:text-info-500',
        indicator: 'bg-info-500',
      },
      primary: {
        labelItem: '[&:not(.active):not(.disabled)]:hover:text-brand-400 [&.active]:text-brand-500',
        indicator: 'bg-brand-500',
      },
      success: {
        labelItem: '[&:not(.active):not(.disabled)]:hover:text-success-400 [&.active]:text-success-500',
        indicator: 'bg-success-500',
      },
      warn: {
        labelItem: '[&:not(.active):not(.disabled)]:hover:text-warn-400 [&.active]:text-warn-500',
        indicator: 'bg-warn-500',
      },
      danger: {
        labelItem: '[&:not(.active):not(.disabled)]:hover:text-danger-400 [&.active]:text-danger-500',
        indicator: 'bg-danger-500',
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      active: true,
      class: {
        labelItem: 'text-gray-300',
      },
    },
  ],
  defaultVariants: {
    colors: 'primary',
  },
});

const panelStyle = tv({
  base: 'tab-panel hidden mt-3',
});

type TabsVariants = VariantProps<typeof tabsStyle>;

export interface TabsProps extends TabsVariants {
  defaultKey?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onTabChange?: (value: CommonOption['value']) => void;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { defaultKey, colors, disabled, children, className, style, onTabChange } = props;
  const [activeKey, setActiveKey] = useState('');
  const [options, setOptions] = useState<CommonOption[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const { label, labelItem, indicator } = tabsStyle({ colors });

  const initPanel = () => {
    const children = contentRef.current?.children;
    if (children) {
      const panels = Array.from(children).map((child) => {
        const _child = child as HTMLElement;
        return {
          label: _child.dataset.label || '',
          value: _child.dataset.value || '',
          disabled: _child.dataset.disabled === 'true',
        };
      });
      return panels;
    }
    return [];
  };
  const initActiveKey = () => {
    if (defaultKey) {
      setActiveKey(defaultKey);
    } else {
      const children = contentRef.current?.children;
      if (children) {
        setActiveKey((children[0] as HTMLElement).dataset.value || '');
      }
    }
  };

  const togglePanel = (activeKey: string) => {
    const children = contentRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => {
        const _child = child as HTMLElement;
        if (_child.dataset.value === activeKey) {
          _child.classList.remove('hidden');
        } else {
          _child.classList.add('hidden');
        }
      });
    }
  };

  useEffect(() => {
    initActiveKey();
    setOptions(initPanel());
  }, []);
  useEffect(() => {
    calcIndicatorStyle(activeKey);
    togglePanel(activeKey);
  }, [activeKey]);

  const calcIndicatorStyle = (activeKey: string) => {
    if (!labelsRef.current || !indicatorRef.current || !options.length) return;
    const labels = labelsRef.current.children;
    const activeEl = Array.from(labels).find(
      (label) => (label as HTMLElement).dataset.value === activeKey,
    ) as HTMLDivElement;

    indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;

    if (activeEl.dataset.disabled === 'true' || disabled) {
      indicatorRef.current.classList.add('disabled');
    } else {
      indicatorRef.current.classList.remove('disabled');
    }
  };

  const handleTabChange = (option: CommonOption) => {
    if (option.disabled || disabled) return;
    setActiveKey(option.value);
    onTabChange?.(option.value);
  };

  return (
    <div ref={ref} className={className} style={style}>
      <div ref={labelsRef} className={label()}>
        {options.map((opt) => (
          <div
            data-value={opt.value}
            data-disabled={opt.disabled}
            className={labelItem({ disabled: opt.disabled || disabled, active: opt.value === activeKey })}
            key={opt.value}
            onClick={() => handleTabChange(opt)}>
            {opt.label}
          </div>
        ))}
        <div ref={indicatorRef} className={indicator()}></div>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
});

Tabs.displayName = 'Tabs';

export interface TabPanelProps extends CommonOption {
  className?: string;
  style?: React.CSSProperties;
  children?: string;
}

function TabPanel(props: TabPanelProps) {
  const { value, label, disabled, children, className, style } = props;
  return (
    <div
      className={panelStyle({ class: className })}
      style={style}
      data-disabled={disabled}
      data-value={value}
      data-label={label}>
      {children}
    </div>
  );
}

TabPanel.displayName = 'TabPanel';
export { TabPanel };

export default Tabs;
