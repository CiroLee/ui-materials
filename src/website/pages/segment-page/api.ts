import { type ApiTableRow } from '@site/components/ApiTable';

export const rows: ApiTableRow[] = [
  {
    prop: 'defaultValue',
    type: 'string',
    desc: 'default value of segment for initial',
    required: false,
    default: '-',
  },
  {
    prop: 'options',
    desc: 'options of segment',
    type: 'link: CommonOption(https://github.com/CiroLee/ui-materials/blob/main/src/packages/types/components.ts)',
    required: true,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'size of segment',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'colors',
    desc: 'color theme of segment',
    type: 'tag: default | primary | info | success | warn | danger',
    required: false,
    default: 'default',
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
    prop: 'onSegmentChange',
    desc: 'callback when segment item changed',
    required: false,
    type: '(value: string) => void',
    default: '-',
  },
];
