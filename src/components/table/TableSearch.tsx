"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { utils, writeFileXLSX } from "xlsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ChevronDownIcon } from "lucide-react";
import { exportTableToExcel } from "@/helper";
import { Dispatch, SetStateAction, useRef } from "react";

import TableExport from "./parent/TableExport";

export default function TableSearch<T>({
  table,
  data,
  setPagination,
}: {
  table: Table<T>;
  data: any;
  setPagination: Dispatch<
    SetStateAction<{
      pageSize: number;
      pageIndex: number;
    }>
  >;
}) {
  return (
    <div className="flex justify-between items-center gap-2 py-4">
      <Input
        placeholder="Cari berdasarkan nama..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm shadow-none border-customPrimary"
      />
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-customSecondary">
            <Button variant="outline" className="ml-auto">
              Jumlah Baris <ChevronDownIcon className="" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="border-customSecondary flex gap-2 flex-col cursor-pointer"
            align="end"
          >
            {[5, 10, 15].map((pageSize) => (
              <p
                key={pageSize}
                className="hover:bg-slate-100 flex gap-2 justify-center"
                onClick={() => setPagination((prev) => ({ ...prev, pageSize }))}
              >
                {pageSize}
              </p>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-customSecondary">
            <Button variant="outline" className="ml-auto">
              Kolom <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-customSecondary" align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
