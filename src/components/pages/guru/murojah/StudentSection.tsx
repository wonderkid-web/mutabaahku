"use client";

import { FormMutabaah } from "./FormMutabaah";
import { setStudentData, setterGlobalClass } from "@/helper/zustand";
import { trpc } from "@/server/client";
import TableMutabaah from "./table/TableMurojahMutabaah";
import LoadingBarSkeleton from "@/components/skeleton/LoadingBarSkeleton";
import { useMurojah } from "@/hooks";

function StudentSection() {
  const { name, student_id } = setStudentData();
  const { month, year } = setterGlobalClass();
  const date = new Date();
  const { data: murojah, isLoading } = useMurojah({
    student_id: student_id ?? 0,
    month: month || date.getMonth(),
    year: year || date.getFullYear(),
  });
  if (name)
    return (
      <>
        {isLoading ? (
          <LoadingBarSkeleton className="mx-auto scale-125" />
        ) : (
          <div className="container mx-auto p-4">
            {/* @ts-ignore */}
            <TableMutabaah data={murojah} />
          </div>
        )}

        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-customPrimary">
            Tambah {"Mutaba'ah"} Murid | {"Muroj'ah"}
          </h1>
          <FormMutabaah student_id={student_id!} />
        </div>
      </>
    );

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-xl lg:text-2xl">Belum Ada Murid yang di pilih.</h1>
    </div>
  );
}

export default StudentSection;
