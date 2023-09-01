import DropDown, { MenuItem } from '@/packages/components/Dropdown';
import ShowBox from '@/components/ShowBox';
import CodeView from '@/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sideHtml } from './docs/side.md';
import { html as separatorHtml } from './docs/separator.md';
import { html as childrenMenuHtml } from './docs/children-menu.md';
import { html as preAndSuffixHtml } from './docs/custom.md';
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
        <ShowBox className="mt-4">
          <h4 className="mb-2">basic</h4>
          <DropDown className="w-[120px]" menus={commonMenus} onSelect={handleOnItemSelect}>
            <Button>menu</Button>
          </DropDown>
          <CodeView content={baseHtml} />
        </ShowBox>
        <ShowBox className="mt-4">
          <h4 className="mb-2">side</h4>
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
          <CodeView content={sideHtml} />
        </ShowBox>
        <ShowBox className="mt-4">
          <h4 className="mb-2">align</h4>
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
        </ShowBox>
        <ShowBox className="mt-4">
          <h4 className="mb-2">separator</h4>
          <DropDown className="w-[120px]" menus={menuWidthSeparator}>
            <Button>menu</Button>
          </DropDown>
          <CodeView content={separatorHtml} />
        </ShowBox>
        <ShowBox className="mt-4">
          <h4 className="mb-2">children menu</h4>
          <DropDown className="w-[120px]" menus={menuWithChildren} onSelect={handleOnItemSelect}>
            <Button>menu</Button>
          </DropDown>
          <CodeView content={childrenMenuHtml} />
        </ShowBox>
        <ShowBox className="mt-4">
          <h4 className="mb-2">custom prefix and suffix</h4>
          <DropDown className="w-[200px]" menus={menuWidthPreAndSuffix} onSelect={handleOnItemSelect}>
            <Button>menu</Button>
          </DropDown>
          <CodeView content={preAndSuffixHtml} />
        </ShowBox>
      </div>
    </>
  );
}
