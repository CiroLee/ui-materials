import { type ApiTableRow } from '@site/components/ApiTable';

export const checkboxRows: ApiTableRow[] = [
  {
    prop: 'value',
    desc: 'current selected value',
    type: 'tag: string | number',
    required: false,
    default: '-',
  },
  {
    prop: 'checked',
    desc: 'whether the checkbox is checked',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'disabled',
    desc: 'whether the checkbox is disabled',
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
    type: 'React.CSSProperties',
    required: false,
    default: '-',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'onCheckedChange',
    desc: 'checkbox change callback',
    type: `(checked: boolean, value?: string | number) => void`,
    required: false,
    default: '-',
  },
];

export const checkboxGroupRows: ApiTableRow[] = [
  {
    prop: 'value',
    desc: 'current selected value',
    type: 'tag: string | number',
    required: false,
    default: '-',
  },
  {
    prop: 'options',
    desc: 'checkbox config options',
    type: `Omit<CheckboxProps, 'onCheckedChange'>[]`,
    required: true,
    default: '-',
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
    prop: 'onCheckedChange',
    desc: 'checkbox change callback',
    type: `(list: (string | number)[]) => void`,
    required: false,
    default: '-',
  },
];
