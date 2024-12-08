"use client";

import { FormMutabaah } from "./FormMutabaah";
import { setStudentData } from "@/helper/zustand";
import { trpc } from "@/server/client";
import TableMutabaah from "./table/TableMurojahMutabaah";
import Loader from "@/components/Loader";

function StudentSection() {
  const { name, student_id } = setStudentData();
  const { data: murojah, isLoading } = trpc.getMurojah.useQuery(
    {
      student_id: student_id ?? 0,
    },
    {
      enabled: !!student_id,
    }
  );

  if (name)
    return (
      <>
        {isLoading ? (
          <Loader className="mx-auto scale-125" />
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
