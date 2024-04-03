import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'options',
    type: 'TreeOption[]',
    desc: 'tree options',
    required: true,
    default: '-',
  },
  {
    prop: 'defaultExpendedIds',
    desc: 'default expended tree node ids',
    type: 'string[]',
    required: false,
    default: '-',
  },
  {
    prop: 'isBranch',
    desc: 'whether to show branch line',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'style',
    type: 'React.CssProperties',
    required: false,
    default: '-',
  },
  {
    prop: 'onSelectedChange',
    desc: 'callback when click tree node',
    type: '(detail: TreeOption, isExpended: boolean) => void',
    required: false,
    default: '-',
  },
];

export const treeOptions: ApiTableRow[] = [
  {
    prop: 'id',
    desc: 'tree node unique id',
    type: 'string',
    required: true,
    default: '-',
  },
  {
    prop: 'label',
    desc: 'display content of tree node',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'value',
    desc: 'value of tree node',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'disabled',
    desc: 'if current node is disabled',
    type: 'boolean',
    required: false,
    default: '-',
  },
  {
    prop: 'children',
    desc: 'children node of tree',
    type: 'TreeOption[]',
    required: false,
    default: '-',
  },
];
