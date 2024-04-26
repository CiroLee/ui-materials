import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'autoSavedId',
    type: 'string',
    desc: 'unique id used to auto-save group arrangement via localStorage',
    required: false,
    default: '-',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: true,
    default: '-',
  },
];
