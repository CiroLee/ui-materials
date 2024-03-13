import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'value',
    desc: 'value of radio',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'options',
    desc: 'radio button config options(see RadioGroup)',
    type: 'link: RadioOption(https://cirolee.github.io/ui-materials/#/radio-button-group)',
    required: true,
    default: '-',
  },
  {
    prop: 'type',
    desc: 'appearance of radio button',
    type: 'tag: outline | solid',
    required: false,
    default: 'outline',
  },
  {
    prop: 'size',
    desc: 'size of radio button',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
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
    prop: 'onValueChange',
    desc: 'radio change callback',
    type: '(value: string) => void',
    required: false,
    default: '-',
  },
];
