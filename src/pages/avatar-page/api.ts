import { type ApiTableRow } from '@/components/ApiTable';

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
    type: 'enum: circle | round',
    required: false,
    default: 'circle',
  },
  {
    prop: 'fit',
    desc: 'avatar fit',
    type: 'enum: cover | contain | fill | none | scale-down',
    required: false,
    default: 'cover',
  },
  {
    prop: 'size',
    desc: 'avatar size',
    type: 'enum: tiny | small | medium | large',
    required: false,
    default: 'medium',
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
    prop: 'children',
    type: 'React.ReactNode',
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
    type: 'enum: horizontal | vertical',
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
