```typescript
import Dropdown, { type MenuItem } from 'your path';
import Button from 'your path';
const menuWithChildren: MenuItem[] = [
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Set',
    label: 'Setting',
  },
  {
    id: 'Share',
    label: 'Share',
    children: [
      {
        id: 'email',
        label: 'Email',
      },
      {
        id: 'wehChat',
        label: 'weChat',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    id: 'Exit',
    label: 'Exit',
  },
];
export default function Demo() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <DropDown className="w-[120px]" menus={menuWithChildren} onSelect={handleOnItemSelect}>
      <Button>menu</Button>
    </DropDown>
  );
}
```
