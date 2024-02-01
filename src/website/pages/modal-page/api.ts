import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'show',
    desc: 'whether to show the modal',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'size',
    desc: 'modal size',
    type: 'tag: small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'title',
    desc: 'modal title',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'closeIcon',
    desc: 'close icon, if set null, will not render closeIcon',
    type: 'tag: React.ReactNode | null',
    required: false,
    default: '-',
  },
  {
    prop: 'footer',
    desc: 'modal footer, if set null, will not render footer',
    type: 'tag: React.ReactNode | null',
    required: false,
    default: '-',
  },
  {
    prop: 'enableEsc',
    desc: 'whether to enable ESC to close the modal',
    type: 'boolean',
    required: false,
    default: true,
  },
  {
    prop: 'maskClosable',
    desc: 'whether to enable click mask to close the modal',
    type: 'boolean',
    required: false,
    default: true,
  },
  {
    prop: 'backdrop',
    desc: 'mask backdrop style',
    type: 'tag: translucent | blur | transparent',
    required: false,
    default: 'translucent',
  },
  {
    prop: 'footerAlign',
    desc: 'modal footer alignment',
    type: 'tag: start | center | end',
    required: false,
    default: 'end',
  },
  {
    prop: 'cancelText',
    desc: 'cancel button text',
    type: 'string',
    required: false,
    default: '取消',
  },
  {
    prop: 'confirmText',
    desc: 'confirm button text',
    type: 'string',
    required: false,
    default: '确定',
  },
  {
    prop: 'onClose',
    desc: 'modal close handler',
    type: '() => void',
    required: true,
    default: '-',
  },
  {
    prop: 'onConfirm',
    desc: 'modal confirm handler',
    type: '() => void',
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
