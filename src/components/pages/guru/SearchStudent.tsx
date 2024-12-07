"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Student } from "@/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@radix-ui/react-dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ChevronDownIcon } from "lucide-react";

const SearchStudent = ({ table }: { table: Table<Student> }) => {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Cari berdasarkan nama..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm shadow-none border-customPrimary"
      />

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
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchStudent;
