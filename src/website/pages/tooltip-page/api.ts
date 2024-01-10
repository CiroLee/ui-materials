import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'isOpen',
    desc: 'whether Tooltip is open default',
    type: 'boolean',
    required: false,
    default: '-',
  },
  {
    prop: 'title',
    desc: 'Tooltip title',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'side',
    desc: 'Tooltip side',
    type: 'tag: top | right | bottom | left',
    required: false,
    default: 'top',
  },
  {
    prop: 'align',
    desc: 'Tooltip align',
    type: 'tag: start | center | end',
    required: false,
    default: 'center',
  },
  {
    prop: 'sideOffset',
    desc: 'Tooltip side offset',
    type: 'number',
    required: false,
    default: '5',
  },
  {
    prop: 'showArrow',
    desc: 'whether Tooltip show arrow',
    type: 'boolean',
    required: false,
    default: 'true',
  },
  {
    prop: 'delay',
    desc: 'The delay in milliseconds before the Tooltip open',
    type: 'number',
    required: false,
    default: '200',
  },
  {
    prop: 'onOpenChange',
    desc: 'Callback when Tooltip open state change',
    type: '(open: boolean) => void',
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
    type: 'React.CssProperties',
    required: false,
    default: '-',
  },
];
