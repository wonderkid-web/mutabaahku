import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setStudentData, setterGlobalClass } from "@/helper/zustand";
import { getMonthName } from "@/helper";
import { SetterGlobaClass } from "@/types";

function TableHeaderHafalan({
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
    <div className="flex flex-col justify-start md:justify-between flex-wrap md:flex-row gap-2 md:items-center py-4">
      <h1 className="text-left text-2xl font-bold  text-customSecondary">
        Table Mutabaah {name} | {getMonthName(month!)}
      </h1>

      <div className="flex gap-2 px-2 overflow-auto flex-wrap">
        {/* <Button
          onClick={() => exportToExcel(data, "Student_Data")}
          className="text-customPrimary px-4 py-2 border-customSecondary"
          variant={"outline"}
        >
          Export to Excel
        </Button> */}

        {/* Bulan */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-customSecondary">
            <Button variant="outline" className="w-[32%]">
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
            <Button variant="outline" className="ml-auto w-[31%]">
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

        {/* Kolom */}
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

export default TableHeaderHafalan;
