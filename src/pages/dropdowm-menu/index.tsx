import DropdownMenuDemo from './demo';
import DropDown, { type MenuItem } from '@/components/Dropdown';
const menuList1: MenuItem[] = [
  {
    key: 'create',
    label: 'Create',
  },
  {
    key: 'file',
    label: 'New File',
  },
  {
    key: 'more',
    label: 'More Tools',
    children: [
      {
        key: 'children-1',
        label: 'children-1',
      },
      {
        key: 'children-2',
        label: 'children-2',
      },
    ],
  },
];
export default function DropdownMenuPage() {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-2">Dropdown Demo</h1>
        <DropdownMenuDemo />
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">Dropdown Component</h1>
        <DropDown menus={menuList1}>
          <button className="outline-none h-[32px] px-2 rounded-md text-[#333] cursor-pointe bg-brand-500 text-white">
            menu
          </button>
        </DropDown>
      </div>
    </>
  );
}
