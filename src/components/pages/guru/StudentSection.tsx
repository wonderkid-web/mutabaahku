"use client";

import { FormMutabaah } from "./FormMutabaah";
import { setStudentData } from "@/helper/zustand";
import { trpc } from "@/server/client";
import TableMutabaah from "./TableMutabaah";
import { Mutabaah } from "@/types";

function StudentSection() {
  const { name, student_id } = setStudentData();
  const { data: mutabaah } = trpc.getMutabaah.useQuery(
    {
      student_id: student_id ?? 0,
    },
    {
      enabled: !!student_id,
    }
  ) as { data: Mutabaah[] };

  if (name)
    return (
      <>
        <div className="container mx-auto p-4">
          <TableMutabaah name={name} data={mutabaah} />
        </div>

        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-customPrimary">
            Tambah {"Mutaba'ah"} Murid
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
