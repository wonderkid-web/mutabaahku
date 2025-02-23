"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ChevronDownIcon } from "lucide-react";
import exportToExcel from "@/helper";

export default function TableSearch<T>({
  table,
  data,
}: {
  table: Table<T>;
  data: any;
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
        <Button
          onClick={() => exportToExcel(data, "Student_Data")}
          className="text-customPrimary px-4 py-2 border-customSecondary"
          variant={"outline"}
        >
          Export to Excel
        </Button>
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
