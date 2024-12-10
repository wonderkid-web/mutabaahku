import React from "react";
import { TableMurid } from "../../guru/murid/TableMurid";
import Loader from "@/components/Loader";
import { Classes, Student } from "@/types";

function ClassTableStudent({
  isLoading,
  students,
  classId,
}: {
  isLoading: boolean;
  students: Student[] | undefined;
  classId: Classes["id"];
}) {
  return (
    <div className="container mx-auto p-4 flex-1">
      <h1 className="text-2xl font-bold text-customSecondary">
        Table Murid Kelas
      </h1>
      {isLoading ? <Loader /> : students && <TableMurid data={students} />}
    </div>
  );
}

export default ClassTableStudent;
