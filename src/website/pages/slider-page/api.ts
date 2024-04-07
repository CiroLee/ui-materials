import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'defaultValue',
    desc: 'default value array of slider',
    type: 'number[]',
    required: false,
    default: '-',
  },
  {
    prop: 'value',
    desc: 'value of slider, used for controlled component',
    type: 'number[]',
    required: false,
    default: '-',
  },
  {
    prop: 'min',
    desc: 'minimum value of slider',
    type: 'number',
    required: false,
    default: '1',
  },
  {
    prop: 'max',
    desc: 'maximum value of slider',
    type: 'number',
    required: false,
    default: '100',
  },
  {
    prop: 'step',
    desc: 'stepping interval of slider',
    type: 'number',
    required: false,
    default: '1',
  },
  {
    prop: 'colors',
    desc: 'colors of slider',
    type: 'tag: primary | info | success | warn | danger',
    required: false,
    default: 'primary',
  },
  {
    prop: 'disabled',
    desc: 'disabled the interaction of slider',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'inverted',
    desc: 'set true, will invert the slider',
    type: 'boolean',
    required: false,
    default: 'false',
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
    prop: 'onValueChange',
    desc: 'callback when slider value changed',
    type: '(value: number[]) => void',
    required: false,
    default: '-',
  },
];
