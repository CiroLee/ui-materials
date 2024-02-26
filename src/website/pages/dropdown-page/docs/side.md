```typescript
import Dropdown, { type MenuItem } from 'your path/Dropdown';
import Button from 'your path/Button';
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
      <DropDown className="w-[120px]" menus={commonMenus} side="left">
        <Button>left</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} side="top">
        <Button>top</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} side="right">
        <Button>right</Button>
      </DropDown>
      <DropDown className="w-[120px]" menus={commonMenus} side="bottom">
        <Button>bottom</Button>
      </DropDown>
    </div>
  );
}
```
