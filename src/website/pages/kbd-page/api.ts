import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'keys',
    desc: 'keyboard keys',
    type: 'KbdKey',
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
];
