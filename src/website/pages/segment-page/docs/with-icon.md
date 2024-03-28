```ts
import Segment from 'your path/Segment';
import { RiImageCircleLine, RiFileLine, RiVideoLine } from '@remixicon/react';
import type { CommonOption } from '@/packages/types/components';

const iconOptions: CommonOption[] = [
  {
    label: (
      <>
        <RiImageCircleLine size={18} />
        <span>Photo</span>
      </>
    ),
    value: 'photo',
  },
  {
    label: (
      <>
        <RiFileLine size={18} />
        <span>File</span>
      </>
    ),
    value: 'file',
  },
  {
    label: (
      <>
        <RiVideoLine size={18} />
        <span>Video</span>
      </>
    ),
    value: 'video',
  },
];
export default function Demo() {
  return (
    <Segment options={iconOptions} className="[&_.segment-item]:w-[80px]" />
  )
}
```
