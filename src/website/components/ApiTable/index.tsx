import { FC } from 'react';
import { Table, TableBody, TableDataCell, TableHeader, TableHeaderCell, TableRow } from '@/packages/ui/Table';

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
            <TableDataCell>{item.type}</TableDataCell>
            <TableDataCell>{item.required.toString()}</TableDataCell>
            <TableDataCell>{item.default?.toString()}</TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApiTable;
