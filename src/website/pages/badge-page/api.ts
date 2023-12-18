import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'content',
    desc: 'badge content',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'badge size',
    type: 'enum: small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'bgColor',
    desc: 'badge background color',
    type: 'string',
    required: false,
    default: '#FF4C3F',
  },
  {
    prop: 'textColor',
    desc: 'badge text color',
    type: 'string',
    required: false,
    default: '#fff',
  },
  {
    prop: 'placement',
    desc: 'badge placement',
    type: 'enum: top-right | top-left | bottom-right | bottom-left',
    required: false,
    default: 'top-right',
  },
  {
    prop: 'children',
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
    type: 'React.CSSProperties',
    required: false,
    default: '-',
  },
];
