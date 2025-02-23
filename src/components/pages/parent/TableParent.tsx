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

import { User } from "@/types";
import TableBody from "@/components/table/parent/TableBody"

import { useState } from "react";
import { TableFooter } from "@/components/table/parent/TableFooter";
import TableSearch from "@/components/table/parent/TableSearch";
import { TableColumnsTeacher as columns } from "./TableColumnsTeacher";

export function TableParent({ data }: { data: User[] }) {
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
      <TableSearch<User> table={table} />

      <TableBody table={table} columns={columns} key={0} />

      <TableFooter<User> table={table} />
    </div>
  );
}
