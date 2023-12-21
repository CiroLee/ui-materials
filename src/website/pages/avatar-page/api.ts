import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'src',
    desc: 'avatar image url',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'shape',
    desc: 'avatar shape',
    type: 'tag: circle | round',
    required: false,
    default: 'circle',
  },
  {
    prop: 'size',
    desc: 'avatar size',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'bordered',
    desc: 'whether add border around the avatar',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'color',
    desc: 'avatar border color',
    type: 'string',
    required: false,
    default: '#eae8e8',
  },
  {
    prop: 'alt',
    desc: 'alt text for avatar',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'text',
    desc: 'text content for avatar',
    type: 'string',
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
    type: 'React.CSSProperties',
    required: false,
    default: '-',
  },
];

export const avatarGroupRows: ApiTableRow[] = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: true,
    default: '-',
  },
  {
    prop: 'direction',
    desc: 'avatar direction',
    type: 'tag: horizontal | vertical',
    required: false,
    default: 'horizontal',
  },
  {
    prop: 'gap',
    desc: 'gap between avatar',
    type: 'string',
    required: false,
    default: '-12px',
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
