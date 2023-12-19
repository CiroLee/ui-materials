import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'size',
    desc: 'size of tag',
    type: 'tag:tiny | small | medium | large',
    required: false,
    default: 'small',
  },
  {
    prop: 'color',
    desc: 'color theme of tag',
    type: 'tag: default | primary | success | warn | danger',
    required: false,
    default: 'default',
  },
  {
    prop: 'shape',
    desc: 'shape of tag',
    type: 'tag: default | pill',
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
    type: 'React.CssProperties',
    required: false,
    default: '-',
  },
];
