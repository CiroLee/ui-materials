import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'show',
    desc: 'whether to display the Loading component',
    type: 'boolean',
    required: false,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'size of the Loading icon',
    type: 'tag: tiny | small | medium | large | number | string',
    required: false,
    default: 'medium',
  },
  {
    prop: 'text',
    desc: 'loading text',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'backdrop',
    desc: 'backdrop type of Loading component',
    type: 'link: Backdrop(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/common.ts)',
    required: false,
    default: 'translucent',
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
