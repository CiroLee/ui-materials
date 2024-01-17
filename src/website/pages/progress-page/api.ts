import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'percent',
    desc: 'percentage of the progress',
    type: 'number',
    required: false,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'size of the progress',
    type: 'tag: small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'colors',
    desc: 'color of the progress',
    type: 'tag: primary | success | warn | danger',
    required: false,
    default: 'primary',
  },
  {
    prop: 'striped',
    type: 'boolean',
    desc: 'whether the progress indicator is striped style',
    required: false,
    default: 'false',
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
