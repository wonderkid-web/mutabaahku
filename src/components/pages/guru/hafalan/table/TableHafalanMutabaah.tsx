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

import { Mutabaah, Student } from "@/types";


import { TableColumnsHafalan as columns } from "./TableColumnsHafalan";
import TableHeaderHafalan from "./TableHeaderHafalan";
import { memo, useState } from "react";
import TableBody from "../../../../table/TableBody";
import { TableFooter } from "../../../../table/TableFooter";

function TableMutabaah({
  data,
}: {
  name: Student["name"];
  data: Mutabaah[] | [];
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
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
      pagination,
    },
  });


  return (
    <div className="w-full">

      <TableHeaderHafalan setPagination={setPagination} data={data}/>

      <TableBody columns={columns} table={table} key={0} />

    

      <TableFooter<Mutabaah> table={table} />
    </div>
  );
}

export default memo(TableMutabaah);
