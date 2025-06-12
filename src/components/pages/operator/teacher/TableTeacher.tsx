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
import TableBody from "../../../table/TableBody";

import { useState } from "react";
import { TableFooter } from "../../../table/TableFooter";
import TableSearch from "../../../table/TableSearch";
import { TableColumnsTeacher as columns } from "./TableColumnsTeacher";

export function TableTeacher({ data }: { data: User[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [pagination, setPagination] = useState({
    pageSize: 5,
    pageIndex: 0,
  });
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
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  console.log("render pas ngetik");

  return (
    <div className="w-full">
      <TableSearch<User> table={table} data={data} setPagination={setPagination} />

      <TableBody table={table} columns={columns} key={0} />

      <TableFooter<User> table={table} />
    </div>
  );
}
