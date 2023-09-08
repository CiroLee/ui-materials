import DropDown, { MenuItem } from '@/packages/ui/Dropdown';
import ShowBox from '@/components/ShowBox';
import CodeView from '@/components/CodeView';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';
import { html as baseHtml } from './docs/base.md';
import { html as sideHtml } from './docs/side.md';
import { html as separatorHtml } from './docs/separator.md';
import { html as childrenMenuHtml } from './docs/children-menu.md';
import { html as preAndSuffixHtml } from './docs/custom.md';
import { commonMenus, menuWidthSeparator, menuWithChildren, menuWidthPreAndSuffix } from './mock';
import Button from '@/packages/ui/Button';

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
        <h2 className="mb-2">API</h2>
        <h4 className="mb-2">Dropdown</h4>
        <Table border>
          <TableHeader>
            <TableHeaderCell>prop</TableHeaderCell>
            <TableHeaderCell>desc</TableHeaderCell>
            <TableHeaderCell>type</TableHeaderCell>
            <TableHeaderCell>required</TableHeaderCell>
            <TableHeaderCell>default</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableDataCell>menus</TableDataCell>
              <TableDataCell>menu list</TableDataCell>
              <TableDataCell>MenuItem[]</TableDataCell>
              <TableDataCell>true</TableDataCell>
              <TableDataCell></TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>align</TableDataCell>
              <TableDataCell>alignment of the menu</TableDataCell>
              <TableDataCell>enum: start | center | end</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>center</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>side</TableDataCell>
              <TableDataCell>side of the menu</TableDataCell>
              <TableDataCell>enum: top | right | bottom | left</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>bottom</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>style</TableDataCell>
              <TableDataCell></TableDataCell>
              <TableDataCell>React.CSSProperties</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>className</TableDataCell>
              <TableDataCell></TableDataCell>
              <TableDataCell>string</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>onOpenChange</TableDataCell>
              <TableDataCell>open change event of dropdown</TableDataCell>
              <TableDataCell>{'(open: boolean) => void'}</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>onSelect</TableDataCell>
              <TableDataCell>select event of dropdown</TableDataCell>
              <TableDataCell>{'(event: Event, menu: MenuItem) => void'}</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
        <h4 className="mb-2">MenuItem</h4>
        <Table border>
          <TableHeader>
            <TableHeaderCell>prop</TableHeaderCell>
            <TableHeaderCell>desc</TableHeaderCell>
            <TableHeaderCell>type</TableHeaderCell>
            <TableHeaderCell>required</TableHeaderCell>
            <TableHeaderCell>default</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableDataCell>id</TableDataCell>
              <TableDataCell>id for dropdown menu item</TableDataCell>
              <TableDataCell>string</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>label</TableDataCell>
              <TableDataCell>left label to display</TableDataCell>
              <TableDataCell>string</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>prefix</TableDataCell>
              <TableDataCell>prefix node for menu item</TableDataCell>
              <TableDataCell>React.ReactNode</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>suffix</TableDataCell>
              <TableDataCell>suffix node for menu item</TableDataCell>
              <TableDataCell>React.ReactNode</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>disabled</TableDataCell>
              <TableDataCell>disable status</TableDataCell>
              <TableDataCell>boolean</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>type</TableDataCell>
              <TableDataCell>only for separator</TableDataCell>
              <TableDataCell>string</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>separator</TableDataCell>
            </TableRow>
            <TableRow>
              <TableDataCell>children</TableDataCell>
              <TableDataCell>submenu list</TableDataCell>
              <TableDataCell>MenuItem[]</TableDataCell>
              <TableDataCell>false</TableDataCell>
              <TableDataCell>-</TableDataCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
