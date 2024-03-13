import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'quantity',
    desc: 'quantity of inputs',
    type: 'number',
    required: true,
    default: '-',
  },
  {
    prop: 'type',
    desc: 'input type, password type will hide contents',
    type: 'tag: text | password',
    required: false,
    default: 'text',
  },
  {
    prop: 'disabled',
    desc: 'whether disabled input',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'size',
    desc: 'size of input',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
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
    desc: 'callabck on input change',
    type: '(value: string) => void',
    required: false,
    default: '-',
  },
  {
    prop: 'onComplete',
    type: '(value: string[]) => void',
    desc: 'callback when all inputs have valid values',
    required: false,
    default: '-',
  },
];
