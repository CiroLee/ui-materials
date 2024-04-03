```ts
import Tree, { type TreeOption } from 'your path/Tree';

const commonTreeOptions: TreeOption[] = [
  {
    id: 'tree-1',
    value: 'item-1',
    label: 'item-1',
    children: [
      {
        id: 'item-1.1',
        label: 'item-1.1',
        value: 'item-1.1',
      },
    ],
  },
  {
    id: 'tree-2',
    value: 'item-2',
    label: 'item-2',
    children: [
      {
        id: 'tree-2-1',
        value: 'item-2-1.1',
        label: 'item-2-1.2',
      },
      {
        id: 'tree-2-2',
        value: 'item-2-2.1',
        label: 'item-2-2.2',
      },
    ],
  },
];
export default function Demo() {
  return (
    <Tree
      options={commonTreeOptions}
      onSelectedChange={(detail, isExpended) => {
        console.log('you selection is: ', detail, 'current node isExpended: ', isExpended);
      }}
    />
  )
}
```
