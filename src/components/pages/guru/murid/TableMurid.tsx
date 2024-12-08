"use client";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Student } from "@/types";
import TableBody from "../table/TableBody";
import TableHeaderMurid from "./TableHeaderMurid";
import { TableColumnsMurid as columns } from "./TableColumnsMurid";
import TableFooterMurid from "./TableFooterMurid";
import { useState } from "react";

export function TableMurid({ data }: { data: Student[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  console.log("render pas ngetik");

  return (
    <div className="w-full">
      <TableHeaderMurid<Student> table={table} />

      <TableBody table={table} columns={columns} key={0} />

      <TableFooterMurid<Student> table={table} />
    </div>
  );
}
