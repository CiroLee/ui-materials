```ts
import InputNumber from 'your path/InputNumber';
import { RiMoneyCnyBoxLine, RiBarChartLine } from '@remixicon/icon';

export default function Demo() {
  return (
    <>
      <div className="w-[400px] flex flex-col space-y-3">
        <InputNumber prefix={<RiMoneyCnyBoxLine size={18} />} />
        <InputNumber prefix={<RiBarChartLine size={18} />} />
      </div>
    </>
  )
}
```
