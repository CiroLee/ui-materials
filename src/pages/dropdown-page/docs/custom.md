```typescript
import Dropdown, { type MenuItem } from 'your path';
import { LayersIcon, OpacityIcon, GlobeIcon, TransparencyGridIcon } from '@radix-ui/react-icons';
import Button from 'your path';
const menuWidthPreAndSuffix: MenuItem[] = [
  {
    id: 'layer',
    label: 'Layer',
    prefix: <LayersIcon className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + L</div>,
  },
  {
    id: 'opacity',
    label: 'Opacity',
    prefix: <OpacityIcon className="mr-1" />,
    suffix: <div className="text-gray-400">⌘ + O</div>,
  },
  {
    id: 'more',
    label: 'More tools',
    prefix: <GlobeIcon className="mr-1" />,
    children: [
      {
        id: 'tool-trans',
        label: 'Trans',
        prefix: <TransparencyGridIcon className="mr-1" />,
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
