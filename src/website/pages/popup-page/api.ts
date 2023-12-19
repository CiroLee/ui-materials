import { type ApiTableRow } from '@site/components/ApiTable';

export const popupRows: ApiTableRow[] = [
  {
    prop: 'show',
    desc: 'whether show popup',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'isBlur',
    desc: 'whether mask is blur',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'maskClosable',
    desc: 'whether click mask to close the popup',
    type: 'boolean',
    required: false,
    default: false,
  },
  {
    prop: 'placement',
    desc: 'content placement',
    type: 'tag: top | bottom | left | right | center',
    required: false,
    default: 'bottom',
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
  {
    prop: 'onClose',
    desc: 'popup close callback',
    type: '() => void',
    required: true,
    default: '-',
  },
];
