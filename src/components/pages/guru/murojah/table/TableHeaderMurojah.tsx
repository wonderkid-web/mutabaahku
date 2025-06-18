import { setStudentData, setterGlobalClass } from "@/helper/zustand";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { id } from "date-fns/locale";
import { ChevronDownIcon, MoonIcon, SunIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import exportToExcel, { getMonthName } from "@/helper";
import { SetterGlobaClass } from "@/types";

export function TableHeaderMurojah({
  setPagination,
  data,
}: {
  setPagination: React.Dispatch<
    React.SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
  data: any;
}) {
  const { name } = setStudentData();
  const { month, setGlobalMonth, setGlobalYear } = setterGlobalClass();

  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold  text-customSecondary">
        Table Mutabaah {name} | {getMonthName(month!)}
      </h1>
      <div className="flex gap-2">
        <Button
          onClick={() => exportToExcel(data, "Student_Data")}
          className="text-customPrimary px-4 py-2 border-customSecondary"
          variant={"outline"}
        >
          Export to Excel
        </Button>
        {/* Bulan */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-customSecondary">
            <Button variant="outline" className="ml-auto">
              <MoonIcon className="h-3 mb-1" />
              Bulan <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-customSecondary" align="end">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
              return (
                <DropdownMenuCheckboxItem
                  key={month}
                  className="capitalize"
                  onClick={() =>
                    setGlobalMonth(month as SetterGlobaClass["month"])
                  }
                >
                  {getMonthName(month)}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Tahun */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-customSecondary">
            <Button variant="outline" className="ml-auto">
              <SunIcon className="ml-2 h-4" />
              Tahun <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-customSecondary" align="end">
            {[2023, 2024, 2025, 2026, 2027].map((year) => {
              return (
                <DropdownMenuCheckboxItem
                  key={year}
                  className="capitalize"
                  onClick={() =>
                    setGlobalYear(year as SetterGlobaClass["year"])
                  }
                >
                  {year}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

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
    </div>
  );
}
