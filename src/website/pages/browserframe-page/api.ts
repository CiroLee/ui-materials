import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'frameType',
    desc: 'type of frame, support macos and windows style',
    type: 'tag: macos | windows',
    required: false,
    default: 'macos',
  },
  {
    prop: 'title',
    desc: 'title of frame',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'url',
    desc: 'url of frame',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'showUrl',
    desc: 'whether to show url',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'asFrame',
    desc: 'whether to render as frame, must be used with url',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'children',
    desc: 'children of frame',
    type: 'ReactNode',
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
];
