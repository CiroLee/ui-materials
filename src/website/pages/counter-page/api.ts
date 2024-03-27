import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'from',
    desc: 'start value of counter, default is 0',
    type: 'number',
    required: false,
    default: '0',
  },
  {
    prop: 'to',
    desc: 'end value of counter',
    type: 'number',
    required: true,
    default: '-',
  },
  {
    prop: 'decimal',
    desc: 'number of decimals to display, default is 0',
    type: 'number',
    required: false,
    default: '0',
  },
  {
    prop: 'duration',
    desc: 'duration of the animation in milliseconds',
    type: 'number',
    required: false,
    default: '2000',
  },
  {
    prop: 'delay',
    desc: 'delay before the animation starts in milliseconds',
    type: 'number',
    required: false,
    default: '0',
  },
  {
    prop: 'prefix',
    desc: 'prefix of the counter value',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'suffix',
    desc: 'suffix of the counter value',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'isInView',
    desc: 'whether animation starts when it scroll into viewport',
    type: 'boolean',
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
  {
    prop: 'onComplete',
    desc: 'callback function when the animation completes',
    type: '() => void',
    required: false,
    default: '-',
  },
];
