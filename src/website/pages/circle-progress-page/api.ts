import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'percent',
    desc: 'percentage of the progress, min is 0 and max is 100',
    type: 'number',
    required: false,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'size of progress',
    type: 'tag: small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'colors',
    desc: 'color of progress',
    type: 'tag: primary | success | warn | danger',
    required: false,
    default: 'primary',
  },
  {
    prop: 'indicatorClassName',
    desc: 'custom indicator className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'svgClassName',
    desc: 'custom svg wrapper className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'trackerClassName',
    desc: 'custom tracker bar className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'className',
    desc: 'root wrapper className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'style',
    desc: 'root wrapper style',
    type: 'React.CSSProperties',
    required: false,
    default: '-',
  },
];
