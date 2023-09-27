import { forwardRef } from 'react';
import cn from 'classnames';
export interface TableBaseType {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export interface TableProps extends TableBaseType {
  border?: boolean;
  headerFixed?: boolean;
}

const Table = forwardRef<HTMLTableElement, TableProps>(({ className, style, headerFixed, border, children }, ref) => {
  return (
    <div
      className={cn(
        'rounded-[6px] overflow-hidden box-border',
        {
          'border border-gray-200/80 [&_tr:last-child]:border-0': border,
          'overflow-y-auto [&_thead]:sticky [&_thead]:top-0': headerFixed,
        },
        className,
      )}
      style={style}>
      <table ref={ref} className={cn('table-auto w-full border-collapse border-spacing-0')}>
        {children}
      </table>
    </div>
  );
});

Table.displayName = 'Table';

const TableHeader = forwardRef<HTMLTableSectionElement, TableBaseType>(({ className, children }, ref) => {
  return (
    <thead ref={ref} className={cn('w-full bg-gray-100 border-b-[1px] border-gray-200/80 text-[14px]', className)}>
      <TableRow>{children}</TableRow>
    </thead>
  );
});

TableHeader.displayName = 'TableHeader';

const TableBody = forwardRef<HTMLTableSectionElement, TableBaseType>(({ className, children }, ref) => {
  return (
    <tbody ref={ref} className={cn(className)}>
      {children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';

const TableHeaderCell = forwardRef<HTMLTableCellElement, TableBaseType>(({ className, children }, ref) => {
  return (
    <th
      ref={ref}
      className={cn(
        `font-semibold p-cell text-start relative last:after:content-[unset] after:mr-1
         after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-[40%] after:bg-gray-200 after:top-[50%] after:translate-y-[-50%]`,
        className,
      )}>
      {children}
    </th>
  );
});

TableHeaderCell.displayName = 'TableHeaderCell';

const TableRow = forwardRef<HTMLTableRowElement, TableBaseType>(({ className, children }, ref) => {
  return (
    <tr ref={ref} className={cn('transition-colors hover:bg-gray-200/30 border-b-[1px] border-gray-200/80', className)}>
      {children}
    </tr>
  );
});

TableRow.displayName = 'TableRow';

const TableDataCell = forwardRef<HTMLTableCellElement, TableBaseType>(({ className, children }, ref) => {
  return (
    <td ref={ref} className={cn('p-cell text-[14px]', className)}>
      {children}
    </td>
  );
});

TableDataCell.displayName = 'TableDataCell';

export { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableDataCell };
