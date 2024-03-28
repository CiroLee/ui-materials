import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'children',
    desc: 'content of code',
    type: 'React.ReactNode',
    required: true,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'size of code',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'color',
    desc: 'color of code',
    type: 'tag: default | primary | success | info | warn | danger',
    required: false,
    default: 'default',
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
];
