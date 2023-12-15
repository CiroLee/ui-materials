```typescript
import Dropdown, { type MenuItem } from 'your path';
import Button from 'your path';
const commonMenus: MenuItem[] = [
  {
    id: '001',
    label: 'item-001',
  },
  {
    id: '002',
    label: 'item-002',
  },
  {
    id: '003',
    label: 'item-003',
  },
  {
    id: '004',
    label: 'item-004',
  },
];
export default function Demo() {
  return (
    <div className="[&_Button:not(:first-child)]:ml-2">
      <DropDown className="w-[120px]" menus={commonMenus} align="start">
        <Button>start</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} align="center">
        <Button>center</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} align="end">
        <Button>end</Button>
      </DropDown>
    </div>
  );
}
```
