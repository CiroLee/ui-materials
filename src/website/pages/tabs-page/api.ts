import { type ApiTableRow } from '@site/components/ApiTable';

export const tabTows: ApiTableRow[] = [
  {
    prop: 'defaultKey',
    desc: 'default active key',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'disabled',
    desc: 'whether whole tabs disabled',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'colors',
    desc: 'tab colors',
    type: 'tag: info | primary | success | warn | danger',
    default: 'primary',
    required: false,
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
    prop: 'onTabChange',
    desc: 'tab change callback',
    type: `(value: string) => void`,
    required: false,
    default: '-',
  },
];

export const TabPanelRow: ApiTableRow[] = [
  {
    prop: 'label',
    desc: 'tab item label',
    type: 'string',
    required: true,
    default: '-',
  },
  {
    prop: 'value',
    desc: 'tab item value ',
    type: 'string',
    required: true,
    default: '-',
  },
  {
    prop: 'disabled',
    desc: 'whether tab item disabled',
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
];
