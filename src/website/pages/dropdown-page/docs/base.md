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
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <div>
      <DropDown className="w-[120px]" menus={commonMenus} onSelect={handleOnItemSelect}>
        <Button>menu</Button>
      </DropDown>
      ;
    </div>
  );
}
```
