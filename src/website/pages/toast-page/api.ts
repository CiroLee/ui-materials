import { type ApiTableRow } from '@site/components/ApiTable';

export const toastOptionsRows: ApiTableRow[] = [
  {
    prop: 'duration',
    desc: 'displayed duration of toast, unit is millisecond',
    type: 'number',
    required: false,
    default: '2000',
  },
  {
    prop: 'placement',
    desc: 'placement of toast',
    required: false,
    type: 'tag: topCenter | topLeft | topRight | bottomCenter | bottomLeft | bottomRight | center',
    default: 'topCenter',
  },
  {
    prop: 'icon',
    desc: 'prefix icon of toast',
    required: false,
    type: 'React.ReactNode',
    default: '-',
  },
  {
    prop: 'action',
    type: 'React.ReactNode',
    desc: 'suffix action of toast',
    required: false,
    default: '-',
  },
  {
    prop: 'autoClose',
    desc: 'whether auto close toast after duration',
    type: 'boolean',
    required: false,
    default: 'true',
  },
];

export const hookRows: ApiTableRow[] = [
  {
    prop: 'toast',
    desc: 'toast function to show toast',
    type: '(text: string, options?: ToastOptions) => void',
    required: false,
  },
  {
    prop: 'closeToast',
    desc: 'close toast',
    type: '() => void',
    required: false,
  },
];
