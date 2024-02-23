```ts
import Calendar from 'your path/Calendar';
import Button from 'your path/Button';

export default function Demo() {
    const dateChangeHandler = (date: Date, type: 'prev' | 'next') => {
    const newDate = new Date(date);
    if (type === 'prev') {
      newDate.setMonth(date.getMonth() - 1);
    } else {
      newDate.setMonth(date.getMonth() + 1);
    }
    return newDate;
  };
    return (
        <Calendar
            headerContent={({ onChange, value }) => {
              return (
                <div className="flex justify-end items-center mb-2">
                    <Button
                        outline
                        size="small"
                        shape="square"
                        onClick={() => {
                        const newDate = dateChangeHandler(value, 'prev');
                        onChange(newDate);
                        }}>
                        <ChevronLeft strokeWidth={1.5} />
                    </Button>
                    <span className="mx-2 text-lg">{value.toLocaleDateString()}</span>
                    <Button
                        outline
                        size="small"
                        shape="square"
                        onClick={() => {
                        const newDate = dateChangeHandler(value, 'next');
                        onChange(newDate);
                        }}>
                        <ChevronRight strokeWidth={1.5} />
                    </Button>
                    <Button
                        outline
                        size="small"
                        className="ml-2"
                        onClick={() => {
                        onChange(new Date());
                        }}>
                        Today
                    </Button>
                </div>
              );
            }}
        />
    )
}
```
