import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'type',
    desc: 'type of skeleton',
    type: 'tag: flicker | shimmer',
    required: false,
    default: 'small',
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
