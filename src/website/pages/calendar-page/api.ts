import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'defaultValue',
    desc: 'default date to show, if unset will show current date',
    type: 'Date',
    required: false,
    default: 'new Date()',
  },
  {
    prop: 'startWeekOnSunday',
    desc: 'whether to start the week on Sunday, default is true',
    type: 'boolean',
    required: false,
    default: 'true',
  },
  {
    prop: 'headerContent',
    desc: 'custom header content',
    type: '({ value, onChange }: {value: Date, onChange: (date: Date) => void}) => React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'cellContent',
    desc: 'custom cell content, using for add custom content to cell',
    type: '(value: Date) => React.ReactNode',
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
  {
    prop: 'onChange',
    desc: 'triggered when date changes',
    type: '(date: Date) => void',
    required: false,
    default: '-',
  },
];
