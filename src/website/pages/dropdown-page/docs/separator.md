```typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import Button from 'your path/Button';
const menuWidthSeparator: MenuItem[] = [
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Set',
    label: 'Setting',
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
  return (
    <DropDown className="w-[120px]" menus={menuWidthSeparator}>
      <Button>menu</Button>
    </DropDown>
  );
}
```
