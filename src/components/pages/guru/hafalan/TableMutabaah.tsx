"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

import { Mutabaah, Student } from "@/types";
import { format } from "date-fns";
import { id } from "date-fns/locale";

// Definisikan kolom-kolom tabel
export const columns: ColumnDef<Mutabaah>[] = [
  {
    accessorKey: "id",
    header: () => <p className="text-white">No.</p>,
    cell: ({ row }) => (
      <div className="min-h-8 flex items-center">{row.index+1}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: () => <p className="text-white">Tanggal</p>,
    cell: ({ row }) => {
      const date = format(row.getValue("created_at"), "dd");
      return <div className="min-h-8 flex items-center">{date}</div>;
    },
  },
  {
    accessorKey: "surah",
    header: () => <p className="text-white">Surah</p>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("surah")}</div>
    ),
  },
  {
    accessorKey: "page_number",
    header: () => <p className="text-white">Halaman</p>,
    cell: ({ row }) => (
      <div className="lg:ml-6">{row.getValue("page_number")}</div>
    ),
  },
  {
    accessorKey: "ayah",
    header: () => <p className="text-white">Ayat</p>,
    cell: ({ row }) => {
      const ayah = row.getValue("ayah") as Mutabaah["ayah"];
      return (
        <div>
          {" "}
          {ayah?.startFrom} - {ayah?.endFrom}
        </div>
      );
    },
  },
  {
    accessorKey: "notes",
    header: () => <p className="text-white">Keterangan</p>,
    cell: ({ row }) => <div>{row.getValue("notes")}</div>,
  },
];

function TableMutabaah({
  name,
  data,
}: {
  name: Student["name"];
  data: Mutabaah[] | [];
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
      <div className="flex items-center py-4">
        <h1 className="text-2xl font-bold  text-customSecondary">
          Table Mutabaah {name} | {format(new Date(), "MMMM", { locale: id })}
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-customSecondary">
            <Button variant="outline" className="ml-auto">
              Kolom <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-customSecondary" align="end">
            {[5, 15, 31].map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column}
                  className="capitalize"
                  onClick={() =>
                    setPagination((prev) => ({
                      pageSize: Number(column),
                      pageIndex: prev.pageIndex,
                    }))
                  }
                >
                  {column}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border border-customSecondary text-customPrimary">
        <Table className="overflow-hidden">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                className="border-customSecondary bg-customSecondary text-white!"
                style={{
                  backgroundColor:
                    "rgb(3 91 115 / var(--tw-border-opacity, 1))",
                }}
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Tidak ada hasil.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} dari{" "}
          {table.getFilteredRowModel().rows.length} baris dipilih.
        </div>
        <div className="space-x-2">
          <Button
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-white bg-customPrimary hover:cursor-pointer"
          >
            Sebelumnya
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-white bg-customPrimary hover:cursor-pointer"
          >
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TableMutabaah);
