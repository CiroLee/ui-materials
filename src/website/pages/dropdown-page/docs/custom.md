```typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import { RiStackLine, RiDropLine, RiGlobalLine, RiSipLine } from '@remixicon/react';
import Button from 'your path/Button';
const menuWidthPreAndSuffix: MenuItem[] = [
  {
    id: 'layer',
    label: 'Layer',
    prefix: <RiStackLine size={16} className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + L</div>,
  },
  {
    id: 'opacity',
    label: 'Opacity',
    prefix: <RiDropLine size={16} className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + O</div>,
  },
  {
    id: 'more',
    label: 'More tools',
    prefix: <RiDropLine size={16} className="mr-1" />,
    children: [
      {
        id: 'tool-trans',
        label: 'Pipette',
        prefix: <RiSipLine size={15} className="mr-1" />,
        suffix: <div className="text-gray-400 ml-10">⌘ + ⌥ + T</div>,
      },
    ],
  },
];
export default function Demo() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <DropDown className="w-[200px]" menus={menuWidthPreAndSuffix} onSelect={handleOnItemSelect}>
      <Button>menu</Button>
    </DropDown>
  );
}
```
