```ts
import Calendar from 'your path/Calendar';
import Tooltip from 'your path/Tooltip';
export default function Demo() {
  return (
    <Calendar
      cellContent={(date) => {
        if (date.getDate() === 10) {
          return (
            <>
              <Tooltip title="deadline TODAY">
                <div className="whitespace-nowrap text-sm ellipsis">
                  <span className="size-[8px] rounded-[4px] bg-warn-500 inline-block" />
                  <span className="ml-2">deadline TODAY</span>
                </div>
              </Tooltip>
              <Tooltip title="salary day">
                <div className="whitespace-nowrap text-sm ellipsis">
                  <span className="size-[8px] rounded-[4px] bg-success-500 inline-block" />
                  <span className="ml-2">salary day</span>
                </div>
              </Tooltip>
              <Tooltip title="shopping after work">
                <div className="whitespace-nowrap text-sm ellipsis">
                  <span className="size-[8px] rounded-[4px] bg-success-500 inline-block" />
                  <span className="ml-2">shopping after work</span>
                </div>
              </Tooltip>
            </>
          );
        }
      }}
    />
  )
}
```
