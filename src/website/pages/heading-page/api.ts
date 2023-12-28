import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'as',
    desc: 'semantic html h1 ~ h6',
    type: 'h1 | h2 | h3 | h4 | h5 | h6',
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
