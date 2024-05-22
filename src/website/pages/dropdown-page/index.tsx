import DropDown, { MenuItem } from '@ui/Dropdown';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import CodeView from '@site/components/CodeView';
import ApiTable from '@site/components/ApiTable';
import { dropDownRows, menuItemRows } from './api';
import baseHtml from './docs/base.md?raw';
import sideHtml from './docs/side.md?raw';
import separatorHtml from './docs/separator.md?raw';
import childrenMenuHtml from './docs/children-menu.md?raw';
import preAndSuffixHtml from './docs/custom.md?raw';
import { commonMenus, menuWidthSeparator, menuWithChildren, menuWidthPreAndSuffix } from './mock';
import Button from '@ui/Button';
import NavTitle from '@site/components/NavTitle';
import Description from '@site/components/Description';

export default function DropdownMenuPage() {
  const handleOnItemSelect = (event: Event, item: MenuItem) => {
    console.log('you click:', event, item);
  };
  return (
    <>
      <NavTitle title="Dropdown" sourceName="Dropdown" />
      <Description>Menus collection, often triggered by a button</Description>
      <ShowBox className="mt-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <DropDown className="w-[120px]" menus={commonMenus} onSelect={handleOnItemSelect}>
          <Button type="primary">menu</Button>
        </DropDown>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mt-4">
        <Heading as="h4" className="mb-2">
          side
        </Heading>
        <div className="[&_Button:not(:first-child)]:ml-2">
          <DropDown className="w-[120px]" menus={commonMenus} side="left">
            <Button type="primary">left</Button>
          </DropDown>
          <DropDown className="w-[120px]" menus={commonMenus} side="top">
            <Button type="primary">top</Button>
          </DropDown>
          <DropDown className="w-[120px]" menus={commonMenus} side="right">
            <Button type="primary">right</Button>
          </DropDown>
          <DropDown className="w-[120px]" menus={commonMenus} side="bottom">
            <Button type="primary">bottom</Button>
          </DropDown>
        </div>
        <CodeView content={sideHtml} />
      </ShowBox>
      <ShowBox className="mt-4">
        <Heading as="h4" className="mb-2">
          align
        </Heading>
        <div className="[&_Button:not(:first-child)]:ml-2">
          <DropDown className="w-[120px]" menus={commonMenus} align="start">
            <Button type="primary">start</Button>
          </DropDown>
          <DropDown className="w-[120px]" menus={commonMenus} align="center">
            <Button type="primary">center</Button>
          </DropDown>
          <DropDown className="w-[120px]" menus={commonMenus} align="end">
            <Button type="primary">end</Button>
          </DropDown>
        </div>
      </ShowBox>
      <ShowBox className="mt-4">
        <Heading as="h4" className="mb-2">
          separator
        </Heading>
        <DropDown className="w-[120px]" menus={menuWidthSeparator}>
          <Button type="primary">menu</Button>
        </DropDown>
        <CodeView content={separatorHtml} />
      </ShowBox>
      <ShowBox className="mt-4">
        <Heading as="h4" className="mb-2">
          children menu
        </Heading>
        <DropDown className="w-[120px]" menus={menuWithChildren} onSelect={handleOnItemSelect}>
          <Button type="primary">menu</Button>
        </DropDown>
        <CodeView content={childrenMenuHtml} />
      </ShowBox>
      <ShowBox className="mt-4">
        <Heading as="h4" className="mb-2">
          custom prefix and suffix
        </Heading>
        <DropDown className="w-[200px]" menus={menuWidthPreAndSuffix} onSelect={handleOnItemSelect}>
          <Button type="primary">menu</Button>
        </DropDown>
        <CodeView content={preAndSuffixHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        Dropdown
      </Heading>
      <ApiTable rows={dropDownRows} />
      <Heading as="h4" className="my-2">
        MenuItem
      </Heading>
      <ApiTable rows={menuItemRows} />
    </>
  );
}
