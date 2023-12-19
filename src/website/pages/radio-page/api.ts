import { type ApiTableRow } from '@site/components/ApiTable';
export const radioGroupRows: ApiTableRow[] = [
  {
    prop: 'orientation',
    desc: 'item orientation',
    type: 'tag: horizontal | vertical',
    required: false,
    default: 'horizontal',
  },
  {
    prop: 'value',
    desc: 'current selected value',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'options',
    desc: 'radio config options',
    type: `RadioOption[]`,
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
    prop: 'onValueChange',
    desc: 'radio change callback',
    type: '(value: string) => void',
    required: false,
    default: '-',
  },
];

export const radioOptionRows: ApiTableRow[] = [
  {
    prop: 'value',
    desc: 'value to trigger when value change',
    type: 'string',
    required: true,
    default: '-',
  },
  {
    prop: 'label',
    desc: 'label of radio',
    type: 'React.ReactNode',
    required: true,
    default: '-',
  },
  {
    prop: 'disabled',
    desc: 'disable status',
    type: 'boolean',
    required: false,
    default: 'false',
  },
];
