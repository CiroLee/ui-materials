import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'alertType',
    desc: 'alert type',
    type: 'tag:default | info | success | warn | danger',
    required: false,
    default: 'default',
  },
  {
    prop: 'title',
    desc: 'alert title',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'content',
    desc: 'alert content',
    type: 'React.ReactNode',
    required: false,
  },
  {
    prop: 'icon',
    desc: 'alert icon',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'showIcon',
    desc: 'whether to show alert icon',
    type: 'boolean',
    required: false,
    default: 'true',
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
