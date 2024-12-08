import { setStudentData } from "@/helper/zustand";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { id } from "date-fns/locale";
import { ChevronDownIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export function TableHeaderMurojah({
  setPagination,
}: {
  setPagination: React.Dispatch<
    React.SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
}) {
  const { name } = setStudentData();

  return (
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
  );
}
