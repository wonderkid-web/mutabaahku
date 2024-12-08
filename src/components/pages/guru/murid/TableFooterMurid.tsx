import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

function TableFooterMurid<T>({ table }: { table: Table<T> }) {
  return (
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
  );
}

export default TableFooterMurid;
