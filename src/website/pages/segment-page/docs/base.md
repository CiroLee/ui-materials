```ts
import Segment from 'your path/Segment';
import type { CommonOption } from '@/packages/types/components';

const options: CommonOption[] = [
  {
    label: 'apple',
    value: 'apple',
  },
  {
    label: 'banana',
    value: 'banana',
  },
  {
    label: 'orange',
    value: 'orange',
  },
  {
    label: 'beef',
    value: 'beef',
    disabled: true,
  },
];
export default function Demo() {
  return (
    <Segment
      options={options}
      defaultValue="orange"
      onSegmentChange={(val) => {
        console.log('segment, you choose: ', val);
      }}
    />
  )
}
```
