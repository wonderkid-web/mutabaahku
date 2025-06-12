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
import TableBody from "../../../table/TableBody";
import { TableColumnsMurid as columns } from "./TableColumnsMurid";

import { useState } from "react";
import { TableFooter } from "../../../table/TableFooter";
import TableSearch from "../../../table/TableSearch";

export function TableMurid({ data }: { data: Student[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageSize: 5,
    pageIndex: 0,
  });

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
    onPaginationChange: setPagination,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  console.log("render pas ngetik");

  return (
    <div className="w-full">
      <TableSearch<Student> table={table} data={data} setPagination={setPagination}/>

      <TableBody table={table} columns={columns} key={0} />

      <TableFooter<Student> table={table} />
    </div>
  );
}
