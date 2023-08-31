import DropDown, { MenuItem } from '@/packages/components/Dropdown';
import ShowBox from '@/components/ShowBox';
import { commonMenus, menuWidthSeparator, menuWithChildren, menuWidthPreAndSuffix } from './mock';
import Button from '@/components/Button';

export default function DropdownMenuPage() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <>
      <div className="mt-4">
        <h2>Dropdown</h2>
        <ShowBox className="mt-4 max-w-[80%]">
          <h4 className="mb-2">basic</h4>
          <DropDown className="w-[120px]" menus={commonMenus} onSelect={handleOnItemSelect}>
            <Button>menu</Button>
          </DropDown>
        </ShowBox>
        <ShowBox className="mt-4 max-w-[80%]">
          <h4 className="mb-2">side</h4>
          <div className="[&_button:not(:first-child)]:ml-2">
            <DropDown className="w-[120px]" menus={commonMenus} side="left">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                left
              </button>
            </DropDown>
            <DropDown className="w-[120px]" menus={commonMenus} side="top">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                top
              </button>
            </DropDown>
            <DropDown className="w-[120px]" menus={commonMenus} side="right">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                right
              </button>
            </DropDown>
            <DropDown className="w-[120px]" menus={commonMenus} side="bottom">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                bottom
              </button>
            </DropDown>
          </div>
        </ShowBox>
        <ShowBox className="mt-4 max-w-[80%]">
          <h4 className="mb-2">align</h4>
          <div className="[&_button:not(:first-child)]:ml-2">
            <DropDown className="w-[120px]" menus={commonMenus} align="start">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                start
              </button>
            </DropDown>
            <DropDown className="w-[120px]" menus={commonMenus} align="center">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                center
              </button>
            </DropDown>
            <DropDown className="w-[120px]" menus={commonMenus} align="end">
              <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
                end
              </button>
            </DropDown>
          </div>
        </ShowBox>
        <ShowBox className="mt-4 max-w-[80%]">
          <h4 className="mb-2">separator</h4>
          <DropDown className="w-[120px]" menus={menuWidthSeparator}>
            <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
              menu
            </button>
          </DropDown>
        </ShowBox>

        <ShowBox className="mt-4 max-w-[80%]">
          <h4 className="mb-2">children menu</h4>
          <DropDown className="w-[120px]" menus={menuWithChildren} onSelect={handleOnItemSelect}>
            <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
              menu
            </button>
          </DropDown>
        </ShowBox>
        <ShowBox className="mt-4 max-w-[80%]">
          <h4 className="mb-2">custom prefix and suffix</h4>
          <DropDown className="w-[200px]" menus={menuWidthPreAndSuffix} onSelect={handleOnItemSelect}>
            <button className="outline-none h-[36px] px-3 rounded-md cursor-default bg-brand-500 text-white">
              menu
            </button>
          </DropDown>
        </ShowBox>
      </div>
    </>
  );
}
