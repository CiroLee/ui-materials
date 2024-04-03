```ts
import Tree, { type TreeOption } from 'your path/Tree';

const disabledOptions: TreeOption[] = [
  {
    id: 'tree-3',
    label: 'item-3',
    value: 'item-3',
    children: [
      {
        id: 'tree-child-3',
        label: 'tree-child-3',
        disabled: true,
        children: [
          {
            id: 'tree-child-3.1',
            label: 'tree-child-3.1',
            value: 'tree-child-3.1',
          },
        ],
      },
    ],
  },
];
export default function Demo() {
  return (
    <Tree
      options={disabledOptions}
    />
  )
}
```
