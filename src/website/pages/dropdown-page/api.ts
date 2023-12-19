import { type ApiTableRow } from '@site/components/ApiTable';

export const dropDownRows: ApiTableRow[] = [
  {
    prop: 'menus',
    desc: 'menu list',
    type: 'MenuItem[]',
    required: true,
    default: '-',
  },
  {
    prop: 'align',
    desc: 'alignment of menu',
    type: 'tag: start | center | end',
    required: false,
    default: 'center',
  },
  {
    prop: 'side',
    desc: 'side of menu',
    type: 'tag: top | right | bottom | left',
    required: false,
    default: 'bottom',
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'style',
    type: 'React.CSSProperties',
    required: false,
    default: '-',
  },
  {
    prop: 'onOpenChange',
    desc: 'open change event of dropdown',
    required: false,
    type: '(open: boolean) => void',
    default: '-',
  },
  {
    prop: 'onSelect',
    desc: 'item select event of dropdown',
    type: '(event: Event, item: MenuItem) => void',
    required: false,
    default: '-',
  },
];

export const menuItemRows: ApiTableRow[] = [
  {
    prop: 'id',
    desc: 'menu item id',
    type: 'string',
    required: 'true(except for separator)',
    default: '-',
  },
  {
    prop: 'label',
    desc: 'menu item left label',
    type: 'string',
    required: 'true',
    default: '-',
  },
  {
    prop: 'prefix',
    desc: 'menu item prefix',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'suffix',
    desc: 'menu item suffix',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'disabled',
    desc: 'disable status of menu item',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'type',
    desc: 'only separator type, as separator',
    type: 'separator',
    required: false,
    default: '-',
  },
  {
    prop: 'children',
    desc: 'menu item children',
    type: 'MenuItem[]',
    required: false,
    default: '-',
  },
];
