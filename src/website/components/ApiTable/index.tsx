import { FC } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';
import Tag from '@/packages/ui/Tag';

export interface ApiTableRow {
  prop: string;
  desc?: string;
  type: string;
  required: boolean | string;
  default?: boolean | string | number;
}
export interface ApiTableProps {
  rows: ApiTableRow[];
}
const header = ['props', 'desc', 'type', 'required', 'default'];
function renderType(type: string) {
  if (type.startsWith('tag')) {
    const tags = type.replace(/^tag:/, '').split('|');
    return (
      <>
        {tags.map((item, index) => (
          <div className="inline-flex items-center relative" key={index}>
            <Tag color="primary">{item}</Tag>
            {index !== tags.length - 1 && (
              <span className="relative inline-block w-px h-[16px] top-[10%] mx-2 bg-black/10"></span>
            )}
          </div>
        ))}
      </>
    );
  }
  return type;
}
const ApiTable: FC<ApiTableProps> = ({ rows }) => {
  return (
    <Table border>
      <TableHeader>
        {header.map((item) => (
          <TableHeaderCell key={item}>{item}</TableHeaderCell>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((item, index) => (
          <TableRow key={index}>
            <TableDataCell>{item.prop}</TableDataCell>
            <TableDataCell>{item.desc}</TableDataCell>
            <TableDataCell className="text-brand-500">{renderType(item.type)}</TableDataCell>
            <TableDataCell>{item.required.toString()}</TableDataCell>
            <TableDataCell>{item.default?.toString()}</TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApiTable;
