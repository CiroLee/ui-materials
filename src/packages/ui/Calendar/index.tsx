import { forwardRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import CalendarGenerator from './calendar';
const calendar = new CalendarGenerator();
const calendarStyle = tv({
  slots: {
    base: 'border rounded-medium relative p-[16px]',
    weekHead: 'flex h-[32px] items-center mb-2',
    weekItem: 'flex-1 text-end pr-[8px]',
    content: 'grid grid-rows-6 grid-cols-7 relative',
    contentItem:
      'w-full max-h-[140px] min-h-[120px] overflow-hidden p-[8px] cursor-pointer border-t hover:bg-gray-200/40',
    unActive: 'size-[30px] inline-flex rounded-full flex-center',
    active: 'bg-brand-500 text-white',
    notInCurrentMonth: 'text-zinc-300',
  },
});

interface HeaderContentProps {
  value: Date;
  onChange: (date: Date) => void;
}
interface CalendarProps {
  defaultValue?: Date;
  startWeekOnSunday?: boolean;
  headerContent?: (props: HeaderContentProps) => React.ReactNode;
  cellContent?: (value: Date) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: Date) => void;
}

const weekDefault = ['日', '一', '二', '三', '四', '五', '六'];

function isSameDate(first: Date, second: Date): boolean {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function isInCurrentMonth(first: Date, second: Date): boolean {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth();
}

const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const { defaultValue = new Date(), headerContent, cellContent, startWeekOnSunday = true, className, style } = props;
  const { base, weekHead, weekItem, content, contentItem, unActive, active, notInCurrentMonth } = calendarStyle();
  const [selectedValue, setSelectedValue] = useState<Date>(defaultValue);

  const dateList = useMemo(() => {
    const { list } = calendar.generate({
      year: selectedValue.getFullYear(),
      month: selectedValue.getMonth() + 1,
      startWeekOnSunday,
    });
    return list;
  }, [selectedValue, startWeekOnSunday]);

  const week = useMemo(() => {
    if (!startWeekOnSunday) {
      const weekCopied = [...weekDefault];
      const first = weekCopied.shift() as string;
      return [...weekCopied, first];
    }
    return weekDefault;
  }, [startWeekOnSunday]);

  const selectedHandler = (date: Date) => {
    setSelectedValue(date);
    props.onChange?.(date);
  };

  return (
    <div ref={ref} className={base({ class: className })} style={style}>
      {headerContent ? headerContent({ onChange: selectedHandler, value: selectedValue }) : null}
      <div className={weekHead()}>
        {week.map((item) => (
          <div key={item} className={weekItem()}>
            {item}
          </div>
        ))}
      </div>
      <ul className={content()}>
        {dateList.map((date) => (
          <li
            className={contentItem({
              class: clsx({ [notInCurrentMonth()]: !isInCurrentMonth(selectedValue, date) }),
            })}
            key={date.getTime()}
            onClick={() => selectedHandler(date)}>
            <p className="text-end">
              <span className={unActive({ class: clsx({ [active()]: isSameDate(selectedValue, date) }) })}>
                {date.getDate()}
              </span>
            </p>
            {cellContent ? <div className="overflow-y-auto h-full mt-1">{cellContent(date)}</div> : null}
          </li>
        ))}
        <div className="absolute absolute-center text-zinc-200/55 text-[14vw] font-bold -z-[1]">
          {selectedValue.getMonth() + 1}
        </div>
      </ul>
    </div>
  );
});

Calendar.displayName = 'Calendar';

export default Calendar;
