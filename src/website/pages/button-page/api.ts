import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'type',
    desc: 'button type',
    type: 'tag: primary | success | info | warn | danger',
    required: false,
    default: 'primary',
  },
  {
    prop: 'size',
    desc: 'button size',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'outline',
    desc: 'button outline',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'disabled',
    desc: 'disable status',
    type: 'boolean',
    required: false,
    default: ' false',
  },
  {
    prop: 'block',
    desc: 'width adjust to parent',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'loading',
    desc: 'loading status',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'shape',
    desc: 'button shape',
    type: 'tag: default | pill | circle | square',
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
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'onClick',
    type: '(event: MouseEvent) => void',
    required: false,
    default: '-',
  },
];

export const buttonGroupRows: ApiTableRow[] = [
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
    required: true,
    default: '-',
  },
];
