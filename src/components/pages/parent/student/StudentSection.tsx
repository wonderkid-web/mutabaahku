"use client";

import { setParentData, setStudentData } from "@/helper/zustand";
import { trpc } from "@/server/client";

import LoadingBarSkeleton from "@/components/skeleton/LoadingBarSkeleton";
import { TableMurid } from "../../guru/murid/TableMurid";

function StudentSection() {
  const { name, id } = setParentData();
  const { data: students, isLoading } = trpc.getStudents.useQuery();

  if (name)
    return (
      <div className="container mx-auto p-4 flex-1">
        <TableMurid data={students || []} />
      </div>
    );
    
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-xl lg:text-2xl">Belum Ada Murid yang di pilih.</h1>
    </div>
  );
}

export default StudentSection;
