import React, { forwardRef, LegacyRef } from "react";
import { flexRender, Table as TableType } from "@tanstack/react-table";

type TableExportProps<T> = {
  table: TableType<T>;
};

const TableExport = forwardRef<HTMLTableElement, TableExportProps<any>>(
  <T,>({ table }: TableExportProps<T>, ref: LegacyRef<HTMLTableElement>) => {
    return (
      <table ref={ref} className="hidden">
        <thead>
          <tr>
            {table.getHeaderGroups()[0].headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? ""
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row
                .getVisibleCells()
                .slice(0, -1)
                .map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
);

TableExport.displayName = "TableExport"

export default TableExport;
