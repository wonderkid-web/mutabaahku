"use client";
import React, { MutableRefObject, useRef } from "react";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import ButtonMutabaahExport from "@/components/button/ButtonMutabaahExport";

type TableExportProps<T> = {
  table: TableType<T>;
};

const TableExport = <T,>({ table }: TableExportProps<T>) => {
  const tableRef = useRef<HTMLTableElement | null>(null);

  return (
    <>
      <table ref={tableRef} className="hidden">
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
      <ButtonMutabaahExport
        tableRef={tableRef as MutableRefObject<HTMLTableElement>}
      />
    </>
  );
};

export default TableExport;
