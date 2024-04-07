import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui//Heading';
import Tree, { type TreeOption } from '@ui//Tree';
import CodeView from '@site/components/CodeView';
import Description from '@site/components/Description';
import { html as baseContent } from './docs/base.md';
import { html as branchContent } from './docs/branch.md';
import { html as disabledContent } from './docs/disabled.md';
import { html as defaultExpendedIdsContent } from './docs/default-expended-ids.md';
import ApiTable from '@/website/components/ApiTable';
import { rows, treeOptions } from './api';
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
export default function TreePage() {
  return (
    <>
      <NavTitle title="Tree" sourceName="Tree" />
      <Description>A component used to show a tree hierarchy</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Tree
          className="max-w-[200px]"
          options={commonTreeOptions}
          onSelectedChange={(detail, isExpended) => {
            console.log('you selection is: ', detail, 'current node isExpended: ', isExpended);
          }}
        />
        <CodeView content={baseContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          showBranchLine
        </Heading>
        <Tree className="max-w-[200px]" options={commonTreeOptions} showBranchLine />
        <CodeView content={branchContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <Tree className="max-w-[200px]" options={disabledOptions} />
        <CodeView content={disabledContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          defaultExpendedIds
        </Heading>
        <Tree className="max-w-[200px]" options={commonTreeOptions} defaultExpendedIds={['tree-1', 'tree-2']} />
        <CodeView content={defaultExpendedIdsContent} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        Props
      </Heading>
      <ApiTable rows={rows} />
      <Heading as="h4" className="my-2">
        TreeOption
      </Heading>
      <ApiTable rows={treeOptions} />
    </>
  );
}
