import {
  Table,
  TableBody as TableBodyElement,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  Table as TableType,
} from "@tanstack/react-table";
import TableExport from "./parent/TableExport";

function TableBody<T>({
  table,
  columns,
}: {
  table: TableType<T>;
  columns: ColumnDef<T>[];
}) {
  return (
    <>
      <div className="rounded-md border border-customSecondary text-customPrimary max-w-[91vw] lg:max-w-screen-2xl overflow-auto">
        <Table className="min-w-96">
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
          <TableBodyElement>
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
          </TableBodyElement>
        </Table>
      </div>

      <TableExport table={table} />
    </>
  );
}

export default TableBody;
