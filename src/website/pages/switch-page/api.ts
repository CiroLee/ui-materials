import { type ApiTableRow } from '@site/components/ApiTable';

export const switchRows: ApiTableRow[] = [
  {
    prop: 'defaultChecked',
    desc: 'whether default is checked',
    type: 'boolean',
    required: false,
    default: '-',
  },
  {
    prop: 'checked',
    desc: 'whether checked',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'size',
    desc: 'switch size',
    type: 'enum: tiny | small| medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'checkedThumb',
    desc: 'checked thumb',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'unCheckedThumb',
    desc: 'unchecked thumb',
    type: 'React.ReactNode',
    required: false,
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
    type: 'React.CssProperties',
    required: false,
    default: '',
  },
  {
    prop: 'onCheckedChange',
    desc: 'switch change callback',
    type: '(checked: boolean) => void',
    required: false,
    default: '-',
  },
];
