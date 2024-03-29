import { FC } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@ui/Table';
import Tag from '@ui/Tag';
import Link from '@ui/Link';
import Divider from '@ui/Divider';
import { RiShareBoxLine } from '@remixicon/react';

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
      <div className="flex flex-wrap gap-y-2">
        {tags.map((item, index) => (
          <div className="inline-flex items-center relative" key={index}>
            <Tag color="primary">{item}</Tag>
            {index !== tags.length - 1 && <Divider direction="vertical" className="mx-3" />}
          </div>
        ))}
      </div>
    );
  } else if (type.startsWith('link')) {
    const pattern = /link: (\w+)\((https?:\/\/\S+)\)/;
    const match = type.match(pattern);
    if (match) {
      return (
        <Link
          color="primary"
          className="text-[14px]"
          isBlank
          href={match[2]}
          anchorIcon={<RiShareBoxLine className="ml-1" size={16} />}>
          {match[1]}
        </Link>
      );
    }
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
